package com.project.web_clone.config;

import java.io.IOException;
import java.nio.charset.Charset;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.util.ContentCachingResponseWrapper;

/**
 * Injects TB UI script into all HTML responses so templates don't need to be
 * edited individually.
 * This helps eliminate native alert() dialogs ("localhost says") across the
 * project.
 */
@Component
@Order(Ordered.LOWEST_PRECEDENCE)
public class HtmlScriptInjectionFilter extends OncePerRequestFilter {

    private static final String SCRIPT_SNIPPET = "<script src=\"/tb/tb-ui.js\"></script>";

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {

        ContentCachingResponseWrapper wrapper = new ContentCachingResponseWrapper(response);
        try {
            filterChain.doFilter(request, wrapper);
        } finally {
            // Ensure we always attempt to write back the response
        }

        String contentType = wrapper.getContentType();
        if (contentType == null || !contentType.toLowerCase().contains("text/html")) {
            wrapper.copyBodyToResponse();
            return;
        }

        // Don't inject on redirects or errors
        int status = wrapper.getStatus();
        if (status < 200 || status >= 300) {
            wrapper.copyBodyToResponse();
            return;
        }

        byte[] bodyBytes = wrapper.getContentAsByteArray();
        if (bodyBytes == null || bodyBytes.length == 0) {
            wrapper.copyBodyToResponse();
            return;
        }

        String encoding = wrapper.getCharacterEncoding();
        Charset charset;
        try {
            charset = (encoding != null && !encoding.isBlank()) ? Charset.forName(encoding) : Charset.forName("UTF-8");
        } catch (Exception ex) {
            charset = Charset.forName("UTF-8");
        }

        String body = new String(bodyBytes, charset);

        // Idempotent: do not inject twice
        if (body.contains("/tb/tb-ui.js")) {
            wrapper.copyBodyToResponse();
            return;
        }

        String injected = injectIntoHead(body);

        byte[] out = injected.getBytes(charset);
        wrapper.resetBuffer();
        wrapper.getOutputStream().write(out);
        wrapper.setContentLength(out.length);
        wrapper.copyBodyToResponse();
    }

    private static String injectIntoHead(String html) {
        if (html == null || html.isEmpty())
            return html;

        // Insert right after <head...> (case-insensitive)
        String lower = html.toLowerCase();
        int headIdx = lower.indexOf("<head");
        if (headIdx >= 0) {
            int headEnd = lower.indexOf('>', headIdx);
            if (headEnd >= 0) {
                return html.substring(0, headEnd + 1)
                        + "\n    " + SCRIPT_SNIPPET + "\n"
                        + html.substring(headEnd + 1);
            }
        }

        // Fallback: before </body>
        int bodyCloseIdx = lower.lastIndexOf("</body>");
        if (bodyCloseIdx >= 0) {
            return html.substring(0, bodyCloseIdx)
                    + "\n    " + SCRIPT_SNIPPET + "\n"
                    + html.substring(bodyCloseIdx);
        }

        // Last resort: append
        return html + "\n" + SCRIPT_SNIPPET;
    }
}

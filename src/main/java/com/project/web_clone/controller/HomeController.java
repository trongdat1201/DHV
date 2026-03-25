package com.project.web_clone.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.server.ResponseStatusException;

import com.project.web_clone.entity.AlumniBanner;
import com.project.web_clone.entity.AlumniQuote;
import com.project.web_clone.entity.EducationalProgram;
import com.project.web_clone.entity.EducationalProgramMajor;
import com.project.web_clone.entity.Event;
import com.project.web_clone.entity.News;
import com.project.web_clone.entity.ProgramType;
import com.project.web_clone.repository.AlumniBannerRepository;
import com.project.web_clone.repository.AlumniQuoteRepository;
import com.project.web_clone.service.EducationalProgramDetailService;
import com.project.web_clone.service.EducationalProgramService;
import com.project.web_clone.service.EventService;
import com.project.web_clone.service.NewsService;
import com.project.web_clone.service.SettingsService;

import jakarta.servlet.http.HttpServletRequest;

@Controller

public class HomeController {

    private final SettingsService settingsService;

    private final NewsService newsService;

    private final EventService eventService;

    private final AlumniQuoteRepository alumniQuoteRepository;

    private final AlumniBannerRepository alumniBannerRepository;

    private final EducationalProgramService educationalProgramService;

    private final EducationalProgramDetailService educationalProgramDetailService;

    private static final Set<String> EXCLUDED_PREFIXES = Set.of(
            "api", "actuator", "error", "favicon.ico",
            "_nuxt", "_ipx", "assets", "css", "js", "images", "uploads", "webjars", "static",
            "www.googletagmanager.com");

    public HomeController(SettingsService settingsService, NewsService newsService, EventService eventService,
            AlumniQuoteRepository alumniQuoteRepository, AlumniBannerRepository alumniBannerRepository,
            EducationalProgramService educationalProgramService,
            EducationalProgramDetailService educationalProgramDetailService) {

        this.settingsService = settingsService;

        this.newsService = newsService;

        this.eventService = eventService;

        this.alumniQuoteRepository = alumniQuoteRepository;

        this.alumniBannerRepository = alumniBannerRepository;

        this.educationalProgramService = educationalProgramService;

        this.educationalProgramDetailService = educationalProgramDetailService;

    }

    @GetMapping({ "/", "/index" })

    public String home(Model model, Authentication auth) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        // Tin tức – 21 bài mới nhất
        List<News> newsList = newsService
                .getPublishedNews(PageRequest.of(0, 21, Sort.by(Sort.Direction.DESC, "publishDate")))
                .getContent();

        newsList.forEach(n -> n.setImageUrl(normalizeImageUrl(n.getImageUrl())));

        model.addAttribute("newsList", newsList);

        // Sự kiện (Trải nghiệm sinh viên) – 12 sự kiện mới nhất
        List<Event> eventList = eventService
                .getPublishedEvents(PageRequest.of(0, 12, Sort.by(Sort.Direction.DESC, "startDate")))
                .getContent();

        eventList.forEach(e -> e.setImageUrl(normalizeImageUrl(e.getImageUrl())));

        model.addAttribute("eventList", eventList);

        // Cựu sinh viên
        List<AlumniQuote> alumniQuotes = alumniQuoteRepository.findAll();

        alumniQuotes.forEach(a -> a.setImageUrl(normalizeImageUrl(a.getImageUrl())));

        model.addAttribute("alumniQuotes", alumniQuotes);

        // Ngành đại học cho thẻ "Đại học" ở index
        List<EducationalProgramMajor> daiHocMajors = educationalProgramService.getMajors("dai-hoc");

        List<EducationalProgramMajor> lienKetMajors = educationalProgramService.getMajors("chuong-trinh-lien-ket");

        List<EducationalProgramMajor> nganHanMajors = educationalProgramService.getMajors("dao-tao-ngan-han");

        List<EducationalProgramMajor> sauDaiHocMajors = educationalProgramService.getMajors("sau-dai-hoc");

        model.addAttribute("daiHocMajors", daiHocMajors);

        model.addAttribute("lienKetMajors", lienKetMajors);

        model.addAttribute("nganHanMajors", nganHanMajors);

        model.addAttribute("sauDaiHocMajors", sauDaiHocMajors);

        // 3 thẻ chương trình còn lại (Liên kết / Ngắn hạn / Sau đại học)
        EducationalProgram lienKetProgram = educationalProgramDetailService
                .getActiveByType(ProgramType.LIEN_KET)
                .stream()
                .findFirst()
                .orElse(null);

        EducationalProgram nganHanProgram = educationalProgramDetailService
                .getActiveByType(ProgramType.NGAN_HAN)
                .stream()
                .findFirst()
                .orElse(null);

        EducationalProgram sauDaiHocProgram = educationalProgramDetailService
                .getActiveByType(ProgramType.SAU_DAI_HOC)
                .stream()
                .findFirst()
                .orElse(null);

        model.addAttribute("lienKetProgram", lienKetProgram);

        model.addAttribute("nganHanProgram", nganHanProgram);

        model.addAttribute("sauDaiHocProgram", sauDaiHocProgram);

        model.addAttribute("lienKetPrograms", educationalProgramDetailService.getActiveByType(ProgramType.LIEN_KET));

        model.addAttribute("nganHanPrograms", educationalProgramDetailService.getActiveByType(ProgramType.NGAN_HAN));

        model.addAttribute("sauDaiHocPrograms",
                educationalProgramDetailService.getActiveByType(ProgramType.SAU_DAI_HOC));

        return "index";

    }

    @GetMapping("/index.html")

    public String homeHtmlRedirect() {

        return "redirect:/";

    }

    @GetMapping("/login")

    public String login() {

        return "login";

    }

    @GetMapping("/alumni")

    public String alumni(Model model, Authentication auth) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        // Load alumni quotes from database
        List<AlumniQuote> alumniQuotes = alumniQuoteRepository.findAllByOrderByCreatedAtDesc();

        model.addAttribute("alumniQuotes", alumniQuotes);

        // Load alumni banner
        AlumniBanner alumniBanner = alumniBannerRepository.findAll().stream().findFirst().orElse(null);

        model.addAttribute("alumniBanner", alumniBanner);

        return "alumni";

    }

    @GetMapping("/student-experience/partner")

    public String studentExperiencePartner(Model model, Authentication auth) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        String partnerNewsCategory = settings.getOrDefault("partner_news_category", "Thông báo");

        model.addAttribute("partnerNewsCategory", partnerNewsCategory);

        Pageable notificationPageable = PageRequest.of(0, 12, Sort.by("publishDate").descending());

        Page<News> notificationNewsPage = newsService.getNewsByCategory(partnerNewsCategory, notificationPageable);

        model.addAttribute("notificationNews", notificationNewsPage.getContent());

        return "student-experience/partner";

    }

    @GetMapping("/news-event/news")

    public String news(Model model, Authentication auth,
            @org.springframework.web.bind.annotation.RequestParam(defaultValue = "0") int page,
            @org.springframework.web.bind.annotation.RequestParam(defaultValue = "6") int size) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        // Load news list from database with pagination (6 items per page, sorted by
        // date DESC)
        org.springframework.data.domain.Pageable pageable = org.springframework.data.domain.PageRequest.of(page, size,
                org.springframework.data.domain.Sort.by("publishDate").descending());

        org.springframework.data.domain.Page<News> newsPage = newsService.getPublishedNews(pageable);

        model.addAttribute("newsList", newsPage.getContent());

        model.addAttribute("currentPage", page);

        model.addAttribute("totalPages", newsPage.getTotalPages());

        model.addAttribute("totalItems", newsPage.getTotalElements());

        return "news-event/news";

    }

    @GetMapping("/news-event/event")

    public String event(Model model, Authentication auth,
            @org.springframework.web.bind.annotation.RequestParam(defaultValue = "0") int page,
            @org.springframework.web.bind.annotation.RequestParam(defaultValue = "6") int size) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        // Load events list from database with pagination (6 items per page, sorted by
        // start date DESC)
        org.springframework.data.domain.Pageable pageable = org.springframework.data.domain.PageRequest.of(page, size,
                org.springframework.data.domain.Sort.by("startDate").descending());

        org.springframework.data.domain.Page<Event> eventPage = eventService.getPublishedEvents(pageable);

        model.addAttribute("eventList", eventPage.getContent());

        model.addAttribute("currentPage", page);

        model.addAttribute("totalPages", eventPage.getTotalPages());

        model.addAttribute("totalItems", eventPage.getTotalElements());

        return "news-event/event";

    }

    @GetMapping("/news-event/news/{slug}")

    public String newsDetail(@org.springframework.web.bind.annotation.PathVariable String slug, Model model,
            Authentication auth) {

        System.out.println("========================================");

        System.out.println("NEWS DETAIL CONTROLLER CALLED");

        System.out.println("SLUG PARAMETER: " + slug);

        System.out.println("========================================");

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        // Load news from database by slug
        News news = newsService.getNewsBySlug(slug);

        System.out.println("NEWS FROM DATABASE: " + (news != null ? news.getTitle() : "NULL - NOT FOUND"));

        if (news == null) {

            System.out.println("REDIRECTING TO: /news-event/news");

            return "redirect:/news-event/news";

        }

        model.addAttribute("news", news);

        model.addAttribute("isEvent", false); // This is a news article, not an event

        // Load hot news (3 most recent published news)
        Pageable hotNewsPageable = PageRequest.of(0, 3, Sort.by("publishDate").descending());

        Page<News> hotNewsPage = newsService.getPublishedNews(hotNewsPageable);

        model.addAttribute("hotNews", hotNewsPage.getContent());

        // Load hot events (3 most recent valid events - not expired)
        Pageable hotEventsPageable = PageRequest.of(0, 3);

        Page<Event> hotEventsPage = eventService.getValidEvents(hotEventsPageable);

        model.addAttribute("hotEvents", hotEventsPage.getContent());

        // Load related news (same category, exclude current news, limit 6)
        Pageable relatedNewsPageable = PageRequest.of(0, 6, Sort.by("publishDate").descending());

        Page<News> relatedNewsPage = newsService.getPublishedNews(relatedNewsPageable);

        List<News> relatedNews = relatedNewsPage.getContent().stream()
                .filter(n -> !n.getId().equals(news.getId()))
                .limit(6)
                .collect(java.util.stream.Collectors.toList());

        model.addAttribute("relatedNews", relatedNews);

        System.out.println("RENDERING TEMPLATE: news-event/news-detail");

        return "news-event/news-detail";

    }

    @GetMapping("/news-event/event/{slug}")

    public String eventDetail(@org.springframework.web.bind.annotation.PathVariable String slug, Model model,
            Authentication auth) {

        System.out.println("========================================");

        System.out.println("EVENT DETAIL CONTROLLER CALLED");

        System.out.println("SLUG PARAMETER: " + slug);

        System.out.println("========================================");

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        // Load event from database by slug
        Event event = eventService.getEventBySlug(slug);

        System.out.println("EVENT FROM DATABASE: " + (event != null ? event.getTitle() : "NULL - NOT FOUND"));

        if (event == null) {

            System.out.println("REDIRECTING TO: /news-event/event");

            return "redirect:/news-event/event";

        }

        // Pass event as "news" for template compatibility
        model.addAttribute("news", event);

        model.addAttribute("isEvent", true); // Flag to differentiate Event from News

        // Load hot news (3 most recent published news)
        Pageable hotNewsPageable = PageRequest.of(0, 3, Sort.by("publishDate").descending());

        Page<News> hotNewsPage = newsService.getPublishedNews(hotNewsPageable);

        model.addAttribute("hotNews", hotNewsPage.getContent());

        // Load hot events (3 most recent valid events - not expired)
        Pageable hotEventsPageable = PageRequest.of(0, 3);

        Page<Event> hotEventsPage = eventService.getValidEvents(hotEventsPageable);

        model.addAttribute("hotEvents", hotEventsPage.getContent());

        // Load related events (same category, exclude current event, limit 6)
        Pageable relatedEventsPageable = PageRequest.of(0, 6, Sort.by("startDate").descending());

        Page<Event> relatedEventsPage = eventService.getPublishedEvents(relatedEventsPageable);

        List<Event> relatedEvents = relatedEventsPage.getContent().stream()
                .filter(e -> !e.getId().equals(event.getId()))
                .limit(6)
                .collect(java.util.stream.Collectors.toList());

        model.addAttribute("relatedNews", relatedEvents);

        System.out.println("RENDERING TEMPLATE: news-event/news-detail");

        return "news-event/news-detail";

    }

    @GetMapping("/scientific-research/student")

    public String scientificResearchStudent(Model model, Authentication auth) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        return "scientific-research/student";

    }

    @GetMapping("/scientific-research/teacher/research-topic")

    public String scientificResearchTeacherResearchTopic(Model model, Authentication auth) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        return "scientific-research/teacher/research-topic";

    }

    @GetMapping("/scientific-research/teacher/research-project")

    public String scientificResearchTeacherResearchProject(Model model, Authentication auth) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        model.addAttribute("projectSlug", null);

        return "scientific-research/teacher/research-project";

    }

    @GetMapping("/scientific-research/teacher/research-project/{slug}")

    public String scientificResearchTeacherResearchProjectDetail(
            @org.springframework.web.bind.annotation.PathVariable String slug,
            Model model,
            Authentication auth) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        model.addAttribute("projectSlug", slug);

        return "scientific-research/teacher/research-project";

    }

    @GetMapping("/student-experience/news")

    public String studentExperienceNews(Model model, Authentication auth,
            @org.springframework.web.bind.annotation.RequestParam(defaultValue = "activity") String type) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        String normalizedType = type == null ? "activity" : type.trim().toLowerCase();

        if ("recruitment".equals(normalizedType)) {
            List<News> recruitmentNews = newsService.getRecruitmentNews(20);

            recruitmentNews.forEach(n -> n.setImageUrl(normalizeImageUrl(n.getImageUrl())));

            List<Map<String, String>> recruitmentNewsView = recruitmentNews.stream()
                    .map(n -> Map.of(
                            "title", Optional.ofNullable(n.getTitle()).orElse(""),
                            "slug", Optional.ofNullable(n.getSlug()).orElse(""),
                            "summary", Optional.ofNullable(n.getSummary())
                                    .filter(s -> !s.isBlank())
                                    .orElse(Optional.ofNullable(n.getContent()).orElse("")),
                            "imageUrl", Optional.ofNullable(n.getImageUrl()).orElse(""),
                            "publishDate", n.getPublishDate() != null ? n.getPublishDate().toString() : ""))
                    .toList();

            // Fallback: if recruitment filter returns empty, keep UI alive by showing latest news
            if (recruitmentNewsView.isEmpty()) {
                recruitmentNews = newsService
                        .getPublishedNews(PageRequest.of(0, 20, Sort.by(Sort.Direction.DESC, "publishDate")))
                        .getContent();
                recruitmentNews.forEach(n -> n.setImageUrl(normalizeImageUrl(n.getImageUrl())));
                recruitmentNewsView = recruitmentNews.stream()
                        .map(n -> Map.of(
                                "title", Optional.ofNullable(n.getTitle()).orElse(""),
                                "slug", Optional.ofNullable(n.getSlug()).orElse(""),
                                "summary", Optional.ofNullable(n.getSummary())
                                        .filter(s -> !s.isBlank())
                                        .orElse(Optional.ofNullable(n.getContent()).orElse("")),
                                "imageUrl", Optional.ofNullable(n.getImageUrl()).orElse(""),
                                "publishDate", n.getPublishDate() != null ? n.getPublishDate().toString() : ""))
                        .toList();
            }

            model.addAttribute("recruitmentNews", recruitmentNews);
            model.addAttribute("recruitmentNewsView", recruitmentNewsView);

            return "student-experience/news57b4";
        }

        List<News> activityNews = newsService.getActivityNews(20);

        activityNews.forEach(n -> n.setImageUrl(normalizeImageUrl(n.getImageUrl())));

        List<Map<String, String>> activityNewsView = activityNews.stream()
                .map(n -> Map.of(
                        "title", Optional.ofNullable(n.getTitle()).orElse(""),
                        "slug", Optional.ofNullable(n.getSlug()).orElse(""),
                        "summary", Optional.ofNullable(n.getSummary())
                                .filter(s -> !s.isBlank())
                                .orElse(Optional.ofNullable(n.getContent()).orElse("")),
                        "imageUrl", Optional.ofNullable(n.getImageUrl()).orElse(""),
                        "publishDate", n.getPublishDate() != null ? n.getPublishDate().toString() : ""))
                .toList();

        model.addAttribute("activityNews", activityNews);
        model.addAttribute("activityNewsView", activityNewsView);

        return "student-experience/news12da";

    }

    @GetMapping("/student-experience/news12da")

    public String studentExperienceNews12da() {

        return "redirect:/student-experience/news?type=activity";

    }

    @GetMapping("/student-experience/news57b4")

    public String studentExperienceNews57b4() {

        return "redirect:/student-experience/news?type=recruitment";

    }

    @GetMapping("/educational-program")

    public String educationalProgramRoot() {

        return "redirect:/educational-program/dai-hoc";

    }

    private static final Map<String, String> PROGRAM_NAME_MAP = Map.of(
            "dai-hoc", "Đại học",
            "sau-dai-hoc", "Sau đại học",
            "dao-tao-ngan-han", "Đào tạo ngắn hạn",
            "chuong-trinh-lien-ket", "Chương trình liên kết");

    @GetMapping({
            "/educational-program/dai-hoc",
            "/educational-program/sau-dai-hoc",
            "/educational-program/dao-tao-ngan-han",
            "/educational-program/chuong-trinh-lien-ket" })

    public String educationalProgramProgramType(HttpServletRequest request, Model model, Authentication auth) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        String uri = request.getRequestURI();

        String programTypeSlug = uri.substring(uri.lastIndexOf('/') + 1);

        model.addAttribute("activeTab", programTypeSlug);

        model.addAttribute("programTypeSlug", programTypeSlug);

        model.addAttribute("pageTitle", PROGRAM_NAME_MAP.getOrDefault(programTypeSlug, "Đào tạo"));

        return "educational-program";

    }

    /**
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * Fragment endpoint — trả về chỉ phần #program-body, dùng cho AJAX SPA
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     * navigation
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     *
     */
    @GetMapping({
            "/educational-program/dai-hoc/fragment",
            "/educational-program/sau-dai-hoc/fragment",
            "/educational-program/dao-tao-ngan-han/fragment",
            "/educational-program/chuong-trinh-lien-ket/fragment" })

    public String educationalProgramFragment(HttpServletRequest request, Model model, Authentication auth) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        String uri = request.getRequestURI(); // /educational-program/{slug}/fragment

        String[] parts = uri.split("/");

        // parts: ["", "educational-program", "{slug}", "fragment"]
        String programTypeSlug = parts.length >= 3 ? parts[parts.length - 2] : "dai-hoc";

        model.addAttribute("programTypeSlug", programTypeSlug);

        model.addAttribute("activeTab", programTypeSlug);

        model.addAttribute("pageTitle", PROGRAM_NAME_MAP.getOrDefault(programTypeSlug, "Đào tạo"));

        return "educational-program :: programBody";

    }

    // handled by majorDetail() below
    @GetMapping("/educational-programe0d6")

    public String educationalPrograme0d6(Model model, Authentication auth) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        return "educational-programe0d6";

    }

    @GetMapping({ "/faculty-introduction", "/faculty-introduction/" })

    public String facultyIntroductionRoot() {

        return "redirect:/faculty-introduction/faculty-overview";

    }

    // Catch-all: map any template-like path (no file extension) to matching view
    // under templates
    @RequestMapping(value = { "/**/{path:[^.]*}", "/**/{path:.+\\.html}" }, method = RequestMethod.GET)

    public String renderTemplate(HttpServletRequest request, Model model, Authentication auth) {

        String uri = request.getRequestURI();

        if (shouldSkip(uri)) {

            throw new ResponseStatusException(HttpStatus.NOT_FOUND);

        }

        // Redirect *.html to extensionless path to match Nuxt router expectations and
        // avoid blank pages.
        // Preserve query string (e.g. ?section=growth-direction).
        if (uri != null && uri.endsWith(".html")) {

            String redirectPath = uri.substring(0, uri.length() - 5);

            String qs = request.getQueryString();

            return "redirect:" + redirectPath + (qs == null || qs.isBlank() ? "" : "?" + qs);

        }

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        // Load settings for admin editing
        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        String viewName = normalize(uri);

        // If user hits a folder-like route without a concrete view, redirect to a safe
        // default.
        if ("faculty-introduction".equals(viewName)) {

            return "redirect:/faculty-introduction/faculty-overview";

        }

        return viewName.isEmpty() ? "index" : viewName;

    }

    private boolean shouldSkip(String uri) {

        String withoutLeadingSlash = uri.startsWith("/") ? uri.substring(1) : uri;

        String firstSegment = withoutLeadingSlash.split("/", 2)[0];

        return EXCLUDED_PREFIXES.contains(firstSegment);

    }

    private String normalize(String uri) {

        String normalized = uri.startsWith("/") ? uri.substring(1) : uri;

        if (normalized.endsWith("/")) {

            normalized = normalized.substring(0, normalized.length() - 1);

        }

        if (normalized.endsWith(".html")) {

            normalized = normalized.substring(0, normalized.length() - 5);

        }

        return normalized;

    }

    private String normalizeImageUrl(String imageUrl) {

        if (imageUrl == null) {

            return null;

        }

        String url = imageUrl.trim();

        if (url.isEmpty()) {

            return url;

        }

        if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("data:")
                || url.startsWith("//")) {

            return url;

        }

        return url.startsWith("/") ? url : "/" + url;

    }

    @GetMapping("/educational-program/marketing")

    public String marketingRedirect(
            @org.springframework.web.bind.annotation.RequestParam(required = false) String program) {

        String type = (program != null && !program.isEmpty()) ? program : "dai-hoc";

        return "redirect:/educational-program/" + type + "/marketing";

    }

    @GetMapping("/educational-program/{programTypeSlug}/{slug}")

    public String detailPage(@PathVariable String programTypeSlug,
            @PathVariable String slug,
            Model model, Authentication auth) {

        boolean isAdmin = (auth != null) && auth.isAuthenticated()
                && auth.getAuthorities().stream().anyMatch(a -> a.getAuthority().equals("ROLE_ADMIN"));

        model.addAttribute("isAdmin", isAdmin);

        Map<String, String> settings = settingsService.load("vi");

        model.addAttribute("settings", settings);

        Map<String, String> nameMap = Map.of(
                "dai-hoc", "Đại học",
                "sau-dai-hoc", "Sau đại học",
                "dao-tao-ngan-han", "Đào tạo ngắn hạn",
                "chuong-trinh-lien-ket", "Chương trình liên kết");

        model.addAttribute("programTypeSlug", programTypeSlug);

        model.addAttribute("programTypeName", nameMap.getOrDefault(programTypeSlug, "Đào tạo"));

        // --- Try EducationalProgramMajor first (Đại học + legacy) ---
        Optional<EducationalProgramMajor> majorOpt = educationalProgramService.getMajorBySlug(programTypeSlug, slug);

        if (majorOpt.isPresent()) {

            model.addAttribute("major", majorOpt.get());

            model.addAttribute("program", null);

            return "educational-program/detailprogram";

        }

        // --- Fallback: EducationalProgram (Ngắn hạn / Liên kết / Sau đại học) ---
        EducationalProgram program = educationalProgramDetailService
                .getDetailBySlug(slug)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND));

        model.addAttribute("program", program);

        model.addAttribute("major", null);

        return "educational-program/detailprogram";

    }

}

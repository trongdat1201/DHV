"""
Replace hardcoded swiper sections in index.html with Thymeleaf th:each loops.
Run from workspace root.
"""
import re, sys

filepath = r'src/main/resources/templates/index.html'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

orig_len = len(content)
print(f"Original file size: {orig_len} chars")


news_marker = '<!--[NEWS-START-MARKER]'
news_start = content.find(news_marker)
if news_start == -1:
    print("ERROR: NEWS-START-MARKER not found!")
    sys.exit(1)


news_end_search = '<div class="swiper-pagination"></div>'
news_end_pos = content.find(news_end_search, news_start)
if news_end_pos == -1:
    print("ERROR: news swiper-pagination not found!")
    sys.exit(1)
                    <div class=\"swiper-pagination\">"
close_tag = '\n                    </div>\n                    \n                    ' + news_end_search
close_pos = content.rfind('\n                    </div>', news_start, news_end_pos + 50)
if close_pos == -1:
    print("ERROR: cannot find swiper-wrapper closing </div>")
    sys.exit(1)

print(f"News: start={news_start}, wrapper_close={close_pos}")

NEWS_SLIDES = '''
                      <th:block th:each="news : ${newsList}">
                      <div class="swiper-slide !h-auto" data-v-61496e24="">
                        <div class="news-event__item" data-v-61496e24="">
                          <div class="news-event__item__overlay" data-v-61496e24="">
                            <div class="title" data-v-61496e24="" th:text="${news.title}"></div>
                            <div class="description" data-v-61496e24="">
                              <div class="editor-content editorjs-font-small" data-v-61496e24="">
                                <p class="text-left" th:text="${news.summary}"></p>
                              </div>
                            </div>
                            <a data-v-61496e24="" th:href="@{/news-event/news/{s}(s=${news.slug})}">
                              <button class="css-ce4l2v ant-btn ant-btn-default common-btn uppercase read-more-btn" data-v-61496e24="" data-v-d34926a3="" type="button">
                                <span>Xem thêm</span>
                                <svg data-v-d34926a3="" fill="currentColor" height="15" viewbox="0 0 16 15" width="16" xmlns="http://www.w3.org/2000/svg">
                                  <g clip-path="url(#clip0_131_2674)">
                                    <path d="M-3.27901e-07 -3.09874e-05L4.24833 7.50146L16 7.50146L10.902 -3.1464e-05L-3.27901e-07 -3.09874e-05Z"></path>
                                    <path d="M0 15L4.24833 7.49851L16 7.4985L10.902 15L0 15Z"></path>
                                  </g>
                                  <defs>
                                    <clippath id="clip0_131_2674">
                                      <rect fill="white" height="16" transform="translate(0 15) rotate(-90)" width="15"></rect>
                                    </clippath>
                                  </defs>
                                </svg>
                              </button>
                            </a>
                          </div>
                          <div class="news-event__item__image" data-v-61496e24="">
                            <img class="w-full h-full" data-v-61496e24="" loading="lazy"
                                 onerror="this.setAttribute(\'data-error\', 1)"
                                 th:src="${news.imageUrl}" th:alt="${news.title}" />
                          </div>
                          <div class="news-event__item__content" data-v-61496e24="">
                            <h3 data-v-61496e24="" th:text="${news.title}"></h3>
                          </div>
                        </div>
                      </div>
                      </th:block>
                      '''

content = content[:news_start] + NEWS_SLIDES + content[close_pos:]
print(f"After news replacement: {len(content)} chars")

# ─── EVENTS (Trải nghiệm sinh viên) SWIPER ───────────────────────────────────
# Unique anchor: <div class="student-experience__list-news" data-v-2994ac21="">
events_anchor = '<div class="student-experience__list-news" data-v-2994ac21="">'
events_anchor_pos = content.find(events_anchor)
if events_anchor_pos == -1:
    print("ERROR: events anchor not found!")
    sys.exit(1)

# Find swiper-wrapper opening after anchor
events_wrapper_open = content.find('<div class="swiper-wrapper">', events_anchor_pos)
# Find the closing of the swiper-wrapper (</div> just before swiper-pagination)
events_pagination = content.find('<div class="swiper-pagination"></div>', events_wrapper_open)
# backtrack to find the </div> that closes swiper-wrapper
events_wrapper_close = content.rfind('\n                  </div>', events_wrapper_open, events_pagination + 50)
print(f"Events: wrapper_open={events_wrapper_open}, wrapper_close={events_wrapper_close}")

EVENTS_SLIDES = '''<div class="swiper-wrapper">
                      <th:block th:each="event : ${eventList}">
                      <div class="swiper-slide !h-auto" data-v-2994ac21="">
                        <div class="student-experience__list-news__item relative" data-v-2994ac21="">
                          <div class="student-experience__list-news__item__image w-full h-full" data-v-2994ac21="">
                            <img class="w-full h-full object-cover" data-v-2994ac21="" loading="lazy"
                                 onerror="this.setAttribute(\'data-error\', 1)"
                                 th:src="${event.imageUrl}" th:alt="${event.title}" />
                          </div>
                          <div class="student-experience__list-news__item__content bottom-0 left-0 z-10 absolute" data-v-2994ac21="">
                            <h3 class="title mb-0 cursor-default" data-v-2994ac21="" th:text="${event.title}"></h3>
                            <div class="description-wrapper" data-v-2994ac21="">
                              <div class="description mt-1 cursor-default" data-v-2994ac21="">
                                <div class="editor-content" data-v-2994ac21="">
                                  <p class="text-left" th:text="${event.summary}"></p>
                                </div>
                              </div>
                            </div>
                            <div class="read-more-btn mt-1 flex !gap-2 cursor-pointer w-fit" data-v-2994ac21="">
                              <a data-v-2994ac21="" th:href="@{/news-event/event/{s}(s=${event.slug})}">Xem thêm
                                <span aria-label="arrow-right" class="anticon anticon-arrow-right" data-v-2994ac21="" role="img">
                                  <svg aria-hidden="true" data-icon="arrow-right" fill="currentColor" focusable="false" height="1em" viewbox="64 64 896 896" width="1em">
                                    <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"></path>
                                  </svg>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      </th:block>
                    '''

# Replace from the opening <div class="swiper-wrapper"> to the closing </div>
content = content[:events_wrapper_open] + EVENTS_SLIDES + content[events_wrapper_close:]
print(f"After events replacement: {len(content)} chars")

# ─── ALUMNI IMAGE SWIPER ──────────────────────────────────────────────────────
# Anchor: <div class="quote-avatar-wrapper"
alumni_img_anchor = '<div class="quote-avatar-wrapper" data-v-5178a6bf="">'
alumni_img_pos = content.find(alumni_img_anchor)
if alumni_img_pos == -1:
    print("ERROR: alumni image anchor not found!")
    sys.exit(1)

# Find the swiper h-full wrapper
alumni_img_swiper = content.find('<div class="swiper h-full" data-v-5178a6bf="">', alumni_img_pos)
alumni_img_wrapper_open = content.find('<div class="swiper-wrapper">', alumni_img_swiper)

# Find closing - the next </div></div> pattern after the last swiper-slide in this section
# After the last alumni image slide, look for </div>\n                    </div> (closes swiper + swiper h-full)
alumni_img_wrapper_close = content.find('\n                    </div>\n                    \n                  </div>', alumni_img_wrapper_open)
print(f"Alumni img: wrapper_open={alumni_img_wrapper_open}, wrapper_close={alumni_img_wrapper_close}")

ALUMNI_IMG_SLIDES = '''<div class="swiper-wrapper">
                        <th:block th:each="alumni : ${alumniQuotes}">
                        <div class="swiper-slide" data-v-5178a6bf="">
                          <img class="inline-block w-full h-full" data-v-5178a6bf="" loading="lazy"
                               onerror="this.setAttribute(\'data-error\', 1)"
                               th:src="${alumni.imageUrl}" th:alt="${alumni.author}" />
                        </div>
                        </th:block>
                      '''

content = content[:alumni_img_wrapper_open] + ALUMNI_IMG_SLIDES + content[alumni_img_wrapper_close:]
print(f"After alumni img replacement: {len(content)} chars")

# ─── ALUMNI CONTENT SWIPER ───────────────────────────────────────────────────
# Anchor: <div class="quotes-content-wrapper" data-v-5178a6bf="">
alumni_content_anchor = '<div class="quotes-content-wrapper" data-v-5178a6bf="">'
alumni_content_pos = content.find(alumni_content_anchor)
if alumni_content_pos == -1:
    print("ERROR: alumni content anchor not found!")
    sys.exit(1)

# Find the swiper wrapper inside quotes-content-wrapper > flex-1 > swiper
alumni_flex = content.find('<div class="flex-1" data-v-5178a6bf=""', alumni_content_pos)
alumni_inner_swiper = content.find('<div class="swiper" data-v-5178a6bf="">', alumni_flex)
alumni_content_wrapper_open = content.find('<div class="swiper-wrapper">', alumni_inner_swiper)

# Find end: navigation-btn-wrapper comes after the last slide
nav_btn_anchor = '<div class="navigation-btn-wrapper'
nav_btn_pos = content.find(nav_btn_anchor, alumni_content_wrapper_open)
# Backtrack to find </div> that closes swiper-wrapper before nav-btn
alumni_content_wrapper_close = content.rfind('\n                      </div>\n                      \n                    </div>', alumni_content_wrapper_open, nav_btn_pos + 50)
if alumni_content_wrapper_close == -1:
    # Try alternative ending pattern
    alumni_content_wrapper_close = content.rfind('\n                        </div>\n                        \n                      </div>', alumni_content_wrapper_open, nav_btn_pos + 50)
print(f"Alumni content: wrapper_open={alumni_content_wrapper_open}, wrapper_close={alumni_content_wrapper_close}")

ALUMNI_CONTENT_SLIDES = '''<div class="swiper-wrapper">
                          <th:block th:each="alumni : ${alumniQuotes}">
                          <div class="swiper-slide" data-v-5178a6bf="">
                            <div class="quote-item-content lg:!text-center" data-v-5178a6bf="">
                              <p class="quote-author" data-v-5178a6bf="" th:text="${alumni.author}"></p>
                              <div class="flex" data-v-5178a6bf="">
                                <div class="author-position" data-v-5178a6bf="" th:text="${alumni.position}"></div>
                              </div>
                              <div class="quote-content" data-v-5178a6bf="">
                                <div class="editor-content" data-v-5178a6bf="">
                                  <p class="text-left" th:utext="${alumni.description}"></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          </th:block>
                        '''

content = content[:alumni_content_wrapper_open] + ALUMNI_CONTENT_SLIDES + content[alumni_content_wrapper_close:]
print(f"After alumni content replacement: {len(content)} chars")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Done! File updated successfully.")

$filepath = "src\main\resources\templates\index.html"
$content = [System.IO.File]::ReadAllText($filepath, [System.Text.Encoding]::UTF8)
Write-Host "File size: $($content.Length)"

$newsStart = $content.IndexOf('<!--[NEWS-START-MARKER]')
Write-Host "News start marker at: $newsStart"
$newsSearchFrom = $newsStart
$newsPaginationSearch = '<div class="swiper-pagination"></div>'
$newsPagPos = $content.IndexOf($newsPaginationSearch, $newsSearchFrom)
Write-Host "News pagination at: $newsPagPos"
$newsClose = $content.LastIndexOf('</div>', $newsPagPos) 
Write-Host "News wrapper close at: $newsClose"

$newsSlidesTemplate = @'

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
                                 onerror="this.setAttribute('data-error', 1)"
                                 th:src="${news.imageUrl}" th:alt="${news.title}" />
                          </div>
                          <div class="news-event__item__content" data-v-61496e24="">
                            <h3 data-v-61496e24="" th:text="${news.title}"></h3>
                          </div>
                        </div>
                      </div>
                      </th:block>
                      
'@

$content = $content.Substring(0, $newsStart) + $newsSlidesTemplate + $content.Substring($newsClose)
Write-Host "After news: $($content.Length)"

# ── EVENTS SWIPER ─────────────────────────────────────────────────────────────
$eventsAnchor = '<div class="student-experience__list-news" data-v-2994ac21="">'
$eventsPos = $content.IndexOf($eventsAnchor)
Write-Host "Events anchor at: $eventsPos"

$eventsWrapperOpen = $content.IndexOf('<div class="swiper-wrapper">', $eventsPos)
$eventsPagPos = $content.IndexOf('<div class="swiper-pagination"></div>', $eventsWrapperOpen)
$eventsClose = $content.LastIndexOf('</div>', $eventsPagPos)
Write-Host "Events: open=$eventsWrapperOpen close=$eventsClose"

$eventsSlidesTemplate = @'
<div class="swiper-wrapper">
                      <th:block th:each="event : ${eventList}">
                      <div class="swiper-slide !h-auto" data-v-2994ac21="">
                        <div class="student-experience__list-news__item relative" data-v-2994ac21="">
                          <div class="student-experience__list-news__item__image w-full h-full" data-v-2994ac21="">
                            <img class="w-full h-full object-cover" data-v-2994ac21="" loading="lazy"
                                 onerror="this.setAttribute('data-error', 1)"
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
                    
'@

$content = $content.Substring(0, $eventsWrapperOpen) + $eventsSlidesTemplate + $content.Substring($eventsClose)
Write-Host "After events: $($content.Length)"

$alumniImgAnchor = '<div class="quote-avatar-wrapper" data-v-5178a6bf="">'
$alumniImgPos = $content.IndexOf($alumniImgAnchor)
Write-Host "Alumni img anchor at: $alumniImgPos"

$alumniImgSwiperPos = $content.IndexOf('<div class="swiper h-full" data-v-5178a6bf="">', $alumniImgPos)
$alumniImgWrapperOpen = $content.IndexOf('<div class="swiper-wrapper">', $alumniImgSwiperPos)

$alumniContentPos = $content.IndexOf($alumniContentAnchor, $alumniImgPos)
$alumniImgClose = $content.LastIndexOf('</div>', $alumniContentPos - 10)
Write-Host "Alumni img: open=$alumniImgWrapperOpen close=$alumniImgClose"

$alumniImgTemplate = @'
<div class="swiper-wrapper">
                        <th:block th:each="alumni : ${alumniQuotes}">
                        <div class="swiper-slide" data-v-5178a6bf="">
                          <img class="inline-block w-full h-full" data-v-5178a6bf="" loading="lazy"
                               onerror="this.setAttribute('data-error', 1)"
                               th:src="${alumni.imageUrl}" th:alt="${alumni.author}" />
                        </div>
                        </th:block>
                      
'@

$content = $content.Substring(0, $alumniImgWrapperOpen) + $alumniImgTemplate + $content.Substring($alumniImgClose)
Write-Host "After alumni img: $($content.Length)"

$alumniContentPos2 = $content.IndexOf('<div class="quotes-content-wrapper" data-v-5178a6bf="">')
$alumniFlexPos = $content.IndexOf('<div class="flex-1" data-v-5178a6bf=""', $alumniContentPos2)
$alumniInnerSwiper = $content.IndexOf('<div class="swiper" data-v-5178a6bf="">', $alumniFlexPos)
$alumniContentWrapperOpen = $content.IndexOf('<div class="swiper-wrapper">', $alumniInnerSwiper)
$navBtnAnchor = '<div class="navigation-btn-wrapper'
$navBtnPos = $content.IndexOf($navBtnAnchor, $alumniContentWrapperOpen)
$alumniContentClose = $content.LastIndexOf('</div>', $navBtnPos - 5)
Write-Host "Alumni content: open=$alumniContentWrapperOpen close=$alumniContentClose"

$alumniContentTemplate = @'
<div class="swiper-wrapper">
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
                        
'@

$content = $content.Substring(0, $alumniContentWrapperOpen) + $alumniContentTemplate + $content.Substring($alumniContentClose)
Write-Host "After alumni content: $($content.Length)"

[System.IO.File]::WriteAllText($filepath, $content, [System.Text.Encoding]::UTF8)
Write-Host "Done! File written."

<script>
    import { writable } from 'svelte/store'
    import { browser } from "$app/env";

    let user;

    if (typeof window !== 'undefined') {
        user = JSON.parse(localStorage.getItem('user')).user;
    }

</script>

<svelte:head>
    <title>Profile</title>
</svelte:head>


<!-- CONTENT GRID -->
<div class="content-grid">
    <!-- PROFILE HEADER -->
    <div class="profile-header">
        <!-- PROFILE HEADER COVER -->
        <figure class="profile-header-cover liquid" style="background: url(&quot;img/cover/01.jpg&quot;) center center / cover no-repeat;">
            <img src="img/cover/01.jpg" alt="cover-01" style="display: none;">
        </figure>
        <!-- /PROFILE HEADER COVER -->

        <!-- PROFILE HEADER INFO -->
        <div class="profile-header-info">
            <!-- USER SHORT DESCRIPTION -->
            <div class="user-short-description big">
                <!-- USER SHORT DESCRIPTION AVATAR -->
                <a class="user-short-description-avatar user-avatar big" href="profile-timeline.html" style="top: -140px; margin-left: -100px;">
                    <!-- USER AVATAR CONTENT -->
                    <div class="user-avatar-content">
                        <!-- HEXAGON -->
                        <div>
                            <img style="width: 150px; height: 150px; position: relative; border-radius: 100px" src="/img/avatar/01.jpg" alt="">
                        </div>
                        <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR CONTENT -->
                </a>
                <!-- /USER SHORT DESCRIPTION AVATAR -->

                <!-- USER SHORT DESCRIPTION AVATAR -->
                <a class="user-short-description-avatar user-short-description-avatar-mobile user-avatar medium" href="profile-timeline.html">
                    <!-- USER AVATAR BORDER -->
                    <div class="user-avatar-border">
                        <!-- HEXAGON -->
                        <div class="hexagon-120-132" style="width: 120px; height: 132px; position: relative;"><canvas width="120" height="132" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR BORDER -->

                    <!-- USER AVATAR CONTENT -->
                    <div class="user-avatar-content">
                        <!-- HEXAGON -->
                        <div class="hexagon-image-82-90" data-src="img/avatar/01.jpg" style="width: 82px; height: 90px; position: relative;"><canvas width="82" height="90" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR CONTENT -->

                    <!-- USER AVATAR PROGRESS -->
                    <div class="user-avatar-progress">
                        <!-- HEXAGON -->
                        <div class="hexagon-progress-100-110" style="width: 100px; height: 110px; position: relative;"><canvas width="100" height="110" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR PROGRESS -->

                    <!-- USER AVATAR PROGRESS BORDER -->
                    <div class="user-avatar-progress-border">
                        <!-- HEXAGON -->
                        <div class="hexagon-border-100-110" style="width: 100px; height: 110px; position: relative;"><canvas width="100" height="110" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                        <!-- /HEXAGON -->
                    </div>
                    <!-- /USER AVATAR PROGRESS BORDER -->

                    <!-- USER AVATAR BADGE -->
                    <div class="user-avatar-badge">
                        <!-- USER AVATAR BADGE BORDER -->
                        <div class="user-avatar-badge-border">
                            <!-- HEXAGON -->
                            <div class="hexagon-32-36" style="width: 32px; height: 36px; position: relative;"><canvas width="32" height="36" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                            <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BADGE BORDER -->

                        <!-- USER AVATAR BADGE CONTENT -->
                        <div class="user-avatar-badge-content">
                            <!-- HEXAGON -->
                            <div class="hexagon-dark-26-28" style="width: 26px; height: 28px; position: relative;"><canvas width="26" height="28" style="position: absolute; top: 0px; left: 0px;"></canvas></div>
                            <!-- /HEXAGON -->
                        </div>
                        <!-- /USER AVATAR BADGE CONTENT -->

                        <!-- USER AVATAR BADGE TEXT -->
                        <p class="user-avatar-badge-text">24</p>
                        <!-- /USER AVATAR BADGE TEXT -->
                    </div>
                    <!-- /USER AVATAR BADGE -->
                </a>
                <!-- /USER SHORT DESCRIPTION AVATAR -->

                <!-- USER SHORT DESCRIPTION TITLE -->
                <p class="user-short-description-title"><a href="profile-timeline.html">Marina Valentine</a></p>
                <!-- /USER SHORT DESCRIPTION TITLE -->

            </div>
            <!-- /USER SHORT DESCRIPTION -->

            <!-- USER STATS -->
            <div class="user-stats">
                <!-- USER STAT -->
                <div class="user-stat big">
                    <!-- USER STAT TITLE -->
                    <p class="user-stat-title">930</p>
                    <!-- /USER STAT TITLE -->

                    <!-- USER STAT TEXT -->
                    <p class="user-stat-text">posts</p>
                    <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->

                <!-- USER STAT -->
                <div class="user-stat big">
                    <!-- USER STAT TITLE -->
                    <p class="user-stat-title">82</p>
                    <!-- /USER STAT TITLE -->

                    <!-- USER STAT TEXT -->
                    <p class="user-stat-text">friends</p>
                    <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->

                <!-- USER STAT -->
                <div class="user-stat big">
                    <!-- USER STAT TITLE -->
                    <p class="user-stat-title">5.7k</p>
                    <!-- /USER STAT TITLE -->

                    <!-- USER STAT TEXT -->
                    <p class="user-stat-text">visits</p>
                    <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->

                <!-- USER STAT -->
                <div class="user-stat big">
                    <!-- USER STAT IMAGE -->
                    <img class="user-stat-image" src="img/flag/usa.png" alt="flag-usa">
                    <!-- /USER STAT IMAGE -->

                    <!-- USER STAT TEXT -->
                    <p class="user-stat-text">usa</p>
                    <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->
            </div>
            <!-- /USER STATS -->

            <a href="/profile-settings" class="profile-header-info-actions">
                <!-- PROFILE HEADER INFO ACTION -->
                <p class="profile-header-info-action button secondary">Настройки</p>
                <!-- /PROFILE HEADER INFO ACTION -->
            </a>

        </div>
        <!-- /PROFILE HEADER INFO -->
    </div>
    <!-- /PROFILE HEADER -->

    <!-- SECTION NAVIGATION -->
    <nav class="section-navigation" style="display: flex; justify-content: center">
        <!-- SECTION MENU -->
        <div class="section-menu">
            <!-- SECTION MENU ITEM -->
            <a class="section-menu-item active" href="profile-about.html">
                <!-- SECTION MENU ITEM ICON -->
                <svg class="section-menu-item-icon icon-profile">
                    <use xlink:href="#svg-profile"></use>
                </svg>
                <!-- /SECTION MENU ITEM ICON -->

                <!-- SECTION MENU ITEM TEXT -->
                <p class="section-menu-item-text">Профиль</p>
                <!-- /SECTION MENU ITEM TEXT -->
            </a>
            <!-- /SECTION MENU ITEM -->

            <!-- SECTION MENU ITEM -->
            <a class="section-menu-item" href="profile-timeline.html">
                <!-- SECTION MENU ITEM ICON -->
                <svg class="section-menu-item-icon icon-timeline">
                    <use xlink:href="#svg-timeline"></use>
                </svg>
                <!-- /SECTION MENU ITEM ICON -->

                <!-- SECTION MENU ITEM TEXT -->
                <p class="section-menu-item-text">Календарь</p>
                <!-- /SECTION MENU ITEM TEXT -->
            </a>
            <!-- /SECTION MENU ITEM -->

            <!-- SECTION MENU ITEM -->
            <a class="section-menu-item" href="profile-friends.html">
                <!-- SECTION MENU ITEM ICON -->
                <svg class="section-menu-item-icon icon-friend">
                    <use xlink:href="#svg-friend"></use>
                </svg>
                <!-- /SECTION MENU ITEM ICON -->

                <!-- SECTION MENU ITEM TEXT -->
                <p class="section-menu-item-text">Друзья</p>
                <!-- /SECTION MENU ITEM TEXT -->
            </a>
            <!-- /SECTION MENU ITEM -->

            <!-- SECTION MENU ITEM -->
            <a class="section-menu-item" href="profile-groups.html">
                <!-- SECTION MENU ITEM ICON -->
                <svg class="section-menu-item-icon icon-group">
                    <use xlink:href="#svg-group"></use>
                </svg>
                <!-- /SECTION MENU ITEM ICON -->

                <!-- SECTION MENU ITEM TEXT -->
                <p class="section-menu-item-text">Наставничество</p>
                <!-- /SECTION MENU ITEM TEXT -->
            </a>
            <!-- /SECTION MENU ITEM -->

            <!-- SECTION MENU ITEM -->
            <a class="section-menu-item" href="profile-blog.html">
                <!-- SECTION MENU ITEM ICON -->
                <svg class="section-menu-item-icon icon-blog-posts">
                    <use xlink:href="#svg-blog-posts"></use>
                </svg>
                <!-- /SECTION MENU ITEM ICON -->

                <!-- SECTION MENU ITEM TEXT -->
                <p class="section-menu-item-text">Статьи</p>
                <!-- /SECTION MENU ITEM TEXT -->
            </a>
            <!-- /SECTION MENU ITEM -->

            <!-- SECTION MENU ITEM -->
            <a class="section-menu-item" href="profile-videos.html">
                <!-- SECTION MENU ITEM ICON -->
                <svg class="section-menu-item-icon icon-videos">
                    <use xlink:href="#svg-videos"></use>
                </svg>
                <!-- /SECTION MENU ITEM ICON -->

                <!-- SECTION MENU ITEM TEXT -->
                <p class="section-menu-item-text">Курсы</p>
                <!-- /SECTION MENU ITEM TEXT -->
            </a>
            <!-- /SECTION MENU ITEM -->

            <!-- SECTION MENU ITEM -->
            <a class="section-menu-item" href="/achievements">
                <!-- SECTION MENU ITEM ICON -->
                <svg class="section-menu-item-icon icon-badges">
                    <use xlink:href="#svg-badges"></use>
                </svg>
                <!-- /SECTION MENU ITEM ICON -->

                <!-- SECTION MENU ITEM TEXT -->
                <p class="section-menu-item-text">Достижения</p>
                <!-- /SECTION MENU ITEM TEXT -->
            </a>
            <!-- /SECTION MENU ITEM -->
            <!-- SECTION MENU ITEM -->
            <a class="section-menu-item" href="profile-stream.html">
                <!-- SECTION MENU ITEM ICON -->
                <svg class="section-menu-item-icon icon-streams">
                    <use xlink:href="#svg-streams"></use>
                </svg>
                <!-- /SECTION MENU ITEM ICON -->

                <!-- SECTION MENU ITEM TEXT -->
                <p class="section-menu-item-text">Медиатека</p>
                <!-- /SECTION MENU ITEM TEXT -->
            </a>
            <!-- /SECTION MENU ITEM -->
        </div>
        <!-- /SECTION MENU -->

    </nav>
    <!-- /SECTION NAVIGATION -->

    <!-- GRID -->
    <div class="grid grid-3-6-3">
        <!-- GRID COLUMN -->
        <div class="grid-column">
            <!-- WIDGET BOX -->
            <div class="widget-box">
                <!-- WIDGET BOX SETTINGS -->
                <div class="widget-box-settings">
                    <!-- POST SETTINGS WRAP -->
                    <div class="post-settings-wrap">
                        <!-- POST SETTINGS -->
                        <div class="post-settings widget-box-post-settings-dropdown-trigger">
                            <!-- POST SETTINGS ICON -->
                            <svg class="post-settings-icon icon-more-dots">
                                <use xlink:href="#svg-more-dots"></use>
                            </svg>
                            <!-- /POST SETTINGS ICON -->
                        </div>
                        <!-- /POST SETTINGS -->
                    </div>
                    <!-- /POST SETTINGS WRAP -->
                </div>
                <!-- /WIDGET BOX SETTINGS -->

                <!-- WIDGET BOX TITLE -->
                <p class="widget-box-title">Обо мне</p>
                <!-- /WIDGET BOX TITLE -->

                <!-- WIDGET BOX CONTENT -->
                <div class="widget-box-content">
                    <!-- PARAGRAPH -->
                    <p class="paragraph">Привет! Меня зовут Марина, но некоторые люди могут знать меня как GameHuntress! У меня есть канал Twitch, где я транслирую, играю и обозреваю все новейшие игры.</p>
                    <!-- /PARAGRAPH -->

                    <!-- INFORMATION LINE LIST -->
                    <div class="information-line-list">
                        <!-- INFORMATION LINE -->
                        <div class="information-line">
                            <!-- INFORMATION LINE TITLE -->
                            <p class="information-line-title"></p>
                            <!-- /INFORMATION LINE TITLE -->

                            <!-- INFORMATION LINE TEXT -->
                            <p class="information-line-text">March 26th, 2017</p>
                            <!-- /INFORMATION LINE TEXT -->
                        </div>
                        <!-- /INFORMATION LINE -->

                        <!-- INFORMATION LINE -->
                        <div class="information-line">
                            <!-- INFORMATION LINE TITLE -->
                            <p class="information-line-title">Город</p>
                            <!-- /INFORMATION LINE TITLE -->

                            <!-- INFORMATION LINE TEXT -->
                            <p class="information-line-text">Казань, Татарстан</p>
                            <!-- /INFORMATION LINE TEXT -->
                        </div>
                        <!-- /INFORMATION LINE -->

                        <!-- INFORMATION LINE -->
                        <div class="information-line">
                            <!-- INFORMATION LINE TITLE -->
                            <p class="information-line-title">Страна</p>
                            <!-- /INFORMATION LINE TITLE -->

                            <!-- INFORMATION LINE TEXT -->
                            <p class="information-line-text">Россия</p>
                            <!-- /INFORMATION LINE TEXT -->
                        </div>
                        <!-- /INFORMATION LINE -->

                        <!-- INFORMATION LINE -->
                        <div class="information-line">
                            <!-- INFORMATION LINE TITLE -->
                            <p class="information-line-title">Возраст</p>
                            <!-- /INFORMATION LINE TITLE -->

                            <!-- INFORMATION LINE TEXT -->
                            <p class="information-line-text">22</p>
                            <!-- /INFORMATION LINE TEXT -->
                        </div>
                        <!-- /INFORMATION LINE -->

<!--                        &lt;!&ndash; INFORMATION LINE &ndash;&gt;-->
<!--                        <div class="information-line">-->
<!--                            &lt;!&ndash; INFORMATION LINE TITLE &ndash;&gt;-->
<!--                            <p class="information-line-title">Web</p>-->
<!--                            &lt;!&ndash; /INFORMATION LINE TITLE &ndash;&gt;-->

<!--                            &lt;!&ndash; INFORMATION LINE TEXT &ndash;&gt;-->
<!--                            <p class="information-line-text"><a href="#">www.gamehuntress.com</a></p>-->
<!--                            &lt;!&ndash; /INFORMATION LINE TEXT &ndash;&gt;-->
<!--                        </div>-->
<!--                        &lt;!&ndash; /INFORMATION LINE &ndash;&gt;-->
                    </div>
                    <!-- /INFORMATION LINE LIST -->
                </div>
                <!-- /WIDGET BOX CONTENT -->
            </div>
            <!-- /WIDGET BOX -->

            <!-- WIDGET BOX -->
            <div class="widget-box">
                <!-- WIDGET BOX SETTINGS -->
                <div class="widget-box-settings">
                    <!-- POST SETTINGS WRAP -->
                    <div class="post-settings-wrap">
                        <!-- POST SETTINGS -->
                        <div class="post-settings widget-box-post-settings-dropdown-trigger">
                            <!-- POST SETTINGS ICON -->
                            <svg class="post-settings-icon icon-more-dots">
                                <use xlink:href="#svg-more-dots"></use>
                            </svg>
                            <!-- /POST SETTINGS ICON -->
                        </div>
                        <!-- /POST SETTINGS -->

                    </div>
                    <!-- /POST SETTINGS WRAP -->
                </div>
                <!-- /WIDGET BOX SETTINGS -->

                <!-- WIDGET BOX TITLE -->
                <p class="widget-box-title">Личная Информация</p>
                <!-- /WIDGET BOX TITLE -->

                <!-- WIDGET BOX CONTENT -->
                <div class="widget-box-content">
                    <!-- INFORMATION LINE LIST -->
                    <div class="information-line-list">
                        <!-- INFORMATION LINE -->
                        <div class="information-line">
                            <!-- INFORMATION LINE TITLE -->
                            <p class="information-line-title">Почта</p>
                            <!-- /INFORMATION LINE TITLE -->

                            <!-- INFORMATION LINE TEXT -->
                            <p class="information-line-text">ghuntress@yourmail.com</p>
                            <!-- /INFORMATION LINE TEXT -->
                        </div>
                        <!-- /INFORMATION LINE -->

                        <!-- INFORMATION LINE -->
                        <div class="information-line">
                            <!-- INFORMATION LINE TITLE -->
                            <p class="information-line-title">День рождения</p>
                            <!-- /INFORMATION LINE TITLE -->

                            <!-- INFORMATION LINE TEXT -->
                            <p class="information-line-text">24 августа, 2000</p>
                            <!-- /INFORMATION LINE TEXT -->
                        </div>
                        <!-- /INFORMATION LINE -->

<!--                        &lt;!&ndash; INFORMATION LINE &ndash;&gt;-->
<!--                        <div class="information-line">-->
<!--                            &lt;!&ndash; INFORMATION LINE TITLE &ndash;&gt;-->
<!--                            <p class="information-line-title">Occupation</p>-->
<!--                            &lt;!&ndash; /INFORMATION LINE TITLE &ndash;&gt;-->

<!--                            &lt;!&ndash; INFORMATION LINE TEXT &ndash;&gt;-->
<!--                            <p class="information-line-text">Costume Designer</p>-->
<!--                            &lt;!&ndash; /INFORMATION LINE TEXT &ndash;&gt;-->
<!--                        </div>-->
<!--                        &lt;!&ndash; /INFORMATION LINE &ndash;&gt;-->

                        <!-- INFORMATION LINE -->
                        <div class="information-line">
                            <!-- INFORMATION LINE TITLE -->
                            <p class="information-line-title">Status</p>
                            <!-- /INFORMATION LINE TITLE -->

                            <!-- INFORMATION LINE TEXT -->
                            <p class="information-line-text">In a Relationship</p>
                            <!-- /INFORMATION LINE TEXT -->
                        </div>
                        <!-- /INFORMATION LINE -->

<!--                        &lt;!&ndash; INFORMATION LINE &ndash;&gt;-->
<!--                        <div class="information-line">-->
<!--                            &lt;!&ndash; INFORMATION LINE TITLE &ndash;&gt;-->
<!--                            <p class="information-line-title">Birthplace</p>-->
<!--                            &lt;!&ndash; /INFORMATION LINE TITLE &ndash;&gt;-->

<!--                            &lt;!&ndash; INFORMATION LINE TEXT &ndash;&gt;-->
<!--                            <p class="information-line-text">Long Island, New York United States</p>-->
<!--                            &lt;!&ndash; /INFORMATION LINE TEXT &ndash;&gt;-->
<!--                        </div>-->
<!--                        &lt;!&ndash; /INFORMATION LINE &ndash;&gt;-->

<!--                        &lt;!&ndash; INFORMATION LINE &ndash;&gt;-->
<!--                        <div class="information-line">-->
<!--                            &lt;!&ndash; INFORMATION LINE TITLE &ndash;&gt;-->
<!--                            <p class="information-line-title">Ps ID</p>-->
<!--                            &lt;!&ndash; /INFORMATION LINE TITLE &ndash;&gt;-->

<!--                            &lt;!&ndash; INFORMATION LINE TEXT &ndash;&gt;-->
<!--                            <p class="information-line-text">da_GHuntress</p>-->
<!--                            &lt;!&ndash; /INFORMATION LINE TEXT &ndash;&gt;-->
<!--                        </div>-->
<!--                        &lt;!&ndash; /INFORMATION LINE &ndash;&gt;-->

<!--                        &lt;!&ndash; INFORMATION LINE &ndash;&gt;-->
<!--                        <div class="information-line">-->
<!--                            &lt;!&ndash; INFORMATION LINE TITLE &ndash;&gt;-->
<!--                            <p class="information-line-title">Xb ID</p>-->
<!--                            &lt;!&ndash; /INFORMATION LINE TITLE &ndash;&gt;-->

<!--                            &lt;!&ndash; INFORMATION LINE TEXT &ndash;&gt;-->
<!--                            <p class="information-line-text">GameHuntress89</p>-->
<!--                            &lt;!&ndash; /INFORMATION LINE TEXT &ndash;&gt;-->
<!--                        </div>-->
<!--                        &lt;!&ndash; /INFORMATION LINE &ndash;&gt;-->
                    </div>
                    <!-- /INFORMATION LINE LIST -->
                </div>
                <!-- /WIDGET BOX CONTENT -->
            </div>
            <!-- /WIDGET BOX -->
        </div>
        <!-- /GRID COLUMN -->

        <!-- GRID COLUMN -->
        <div class="grid-column">
            <!-- WIDGET BOX -->
            <div class="widget-box">
                <!-- WIDGET BOX SETTINGS -->
                <div class="widget-box-settings">
                    <!-- POST SETTINGS WRAP -->
                    <div class="post-settings-wrap">
                        <!-- POST SETTINGS -->
                        <div class="post-settings widget-box-post-settings-dropdown-trigger">
                            <!-- POST SETTINGS ICON -->
                            <svg class="post-settings-icon icon-more-dots">
                                <use xlink:href="#svg-more-dots"></use>
                            </svg>
                            <!-- /POST SETTINGS ICON -->
                        </div>
                        <!-- /POST SETTINGS -->

                    </div>
                    <!-- /POST SETTINGS WRAP -->
                </div>
                <!-- /WIDGET BOX SETTINGS -->

                <!-- WIDGET BOX TITLE -->
                <p class="widget-box-title">Интересы</p>
                <!-- /WIDGET BOX TITLE -->

                <!-- WIDGET BOX CONTENT -->
                <div class="widget-box-content">
                    <!-- INFORMATION BLOCK LIST -->
                    <div class="information-block-list">
                        <!-- INFORMATION BLOCK -->
                        <div class="information-block">
                            <!-- INFORMATION BLOCK TITLE -->
                            <p class="information-block-title">Любимые телешоу</p>
                            <!-- /INFORMATION BLOCK TITLE -->

                            <!-- INFORMATION BLOCK TEXT -->
                            <p class="information-block-text">
                                Во все тяжкие, RedDevil, Интересные люди, Бегущие мертвецы, Найдено, Американский парень, Последний маг ветра, Игра войн.
                            </p>
                            <!-- /INFORMATION BLOCK TEXT -->
                        </div>
                        <!-- /INFORMATION BLOCK -->

                        <!-- INFORMATION BLOCK -->
                        <div class="information-block">
                            <!-- INFORMATION BLOCK TITLE -->
                            <p class="information-block-title">Любимые музыкальные группы / исполнители</p>
                            <!-- /INFORMATION BLOCK TITLE -->

                            <!-- INFORMATION BLOCK TEXT -->
                            <p class="information-block-text">Iron Maid, DC/AC, Megablow, Kung Fighters, System of a Revenge, Rammstown.</p>
                            <!-- /INFORMATION BLOCK TEXT -->
                        </div>
                        <!-- /INFORMATION BLOCK -->

                        <!-- INFORMATION BLOCK -->
                        <div class="information-block">
                            <!-- INFORMATION BLOCK TITLE -->
                            <p class="information-block-title">Любимые фильмы</p>
                            <!-- /INFORMATION BLOCK TITLE -->

                            <!-- INFORMATION BLOCK TEXT -->
                            <p class="information-block-text">The Revengers Saga, The Scarred Wizard and the Fire Crown, Crime Squad, Metal Man, The Dark Rider, Watchers, The Impossible Heist.</p>
                            <!-- /INFORMATION BLOCK TEXT -->
                        </div>
                        <!-- /INFORMATION BLOCK -->

                        <!-- INFORMATION BLOCK -->
                        <div class="information-block">
                            <!-- INFORMATION BLOCK TITLE -->
                            <p class="information-block-title">Любимые книги</p>
                            <!-- /INFORMATION BLOCK TITLE -->

                            <!-- INFORMATION BLOCK TEXT -->
                            <p class="information-block-text">
                                Преступление века, Египетская мифология 101, Израненный волшебник, Властелин крыльев, Среди богов, Оракул, Сказка о воздухе и воде.
                            </p>
                            <!-- /INFORMATION BLOCK TEXT -->
                        </div>
                        <!-- /INFORMATION BLOCK -->

                        <!-- INFORMATION BLOCK -->
                        <div class="information-block">
                            <!-- INFORMATION BLOCK TITLE -->
                            <p class="information-block-title">Любимые игры</p>
                            <!-- /INFORMATION BLOCK TITLE -->

                            <!-- INFORMATION BLOCK TEXT -->
                            <p class="information-block-text">The First of Us, Отряд убийц, Dark Assylum, NMAK16, Last Cause 4, Grand Snatch Auto.</p>
                            <!-- /INFORMATION BLOCK TEXT -->
                        </div>
                        <!-- /INFORMATION BLOCK -->
                    </div>
                    <!-- /INFORMATION BLOCK LIST -->
                </div>
                <!-- /WIDGET BOX CONTENT -->
            </div>
            <!-- /WIDGET BOX -->

            <!-- WIDGET BOX -->
            <div class="widget-box">
                <!-- WIDGET BOX SETTINGS -->
                <div class="widget-box-settings">
                    <!-- POST SETTINGS WRAP -->
                    <div class="post-settings-wrap">
                        <!-- POST SETTINGS -->
                        <div class="post-settings widget-box-post-settings-dropdown-trigger">
                            <!-- POST SETTINGS ICON -->
                            <svg class="post-settings-icon icon-more-dots">
                                <use xlink:href="#svg-more-dots"></use>
                            </svg>
                            <!-- /POST SETTINGS ICON -->
                        </div>
                        <!-- /POST SETTINGS -->

                    </div>
                    <!-- /POST SETTINGS WRAP -->
                </div>
                <!-- /WIDGET BOX SETTINGS -->

                <!-- WIDGET BOX TITLE -->
                <p class="widget-box-title">Jobs &amp; Education</p>
                <!-- /WIDGET BOX TITLE -->

                <!-- WIDGET BOX CONTENT -->
                <div class="widget-box-content">
                    <!-- TIMELINE INFORMATION LIST -->
                    <div class="timeline-information-list">
                        <!-- TIMELINE INFORMATION -->
                        <div class="timeline-information">
                            <!-- TIMELINE INFORMATION TITLE -->
                            <p class="timeline-information-title">Lead Costume Designer</p>
                            <!-- /TIMELINE INFORMATION TITLE -->

                            <!-- TIMELINE INFORMATION DATE -->
                            <p class="timeline-information-date">2015 - NOW</p>
                            <!-- /TIMELINE INFORMATION DATE -->

                            <!-- TIMELINE INFORMATION TEXT -->
                            <p class="timeline-information-text">Lead Costume Designer for the "Amazzo Costumes" agency. I'm in charge of a ten person group, overseeing all the proyects and talking to potential clients. I also handle some face to face interviews for new candidates.</p>
                            <!-- /TIMELINE INFORMATION TEXT -->
                        </div>
                        <!-- /TIMELINE INFORMATION -->

                        <!-- TIMELINE INFORMATION -->
                        <div class="timeline-information">
                            <!-- TIMELINE INFORMATION TITLE -->
                            <p class="timeline-information-title">Costume Designer</p>
                            <!-- /TIMELINE INFORMATION TITLE -->

                            <!-- TIMELINE INFORMATION DATE -->
                            <p class="timeline-information-date">2013 - 2015</p>
                            <!-- /TIMELINE INFORMATION DATE -->

                            <!-- TIMELINE INFORMATION TEXT -->
                            <p class="timeline-information-text">Costume Designer for the "Jenny Taylors" agency. Was in charge of working side by side with the best designers in order to complete and perfect orders.</p>
                            <!-- /TIMELINE INFORMATION TEXT -->
                        </div>
                        <!-- /TIMELINE INFORMATION -->

                        <!-- TIMELINE INFORMATION -->
                        <div class="timeline-information">
                            <!-- TIMELINE INFORMATION TITLE -->
                            <p class="timeline-information-title">Designer Intern</p>
                            <!-- /TIMELINE INFORMATION TITLE -->

                            <!-- TIMELINE INFORMATION DATE -->
                            <p class="timeline-information-date">2012 - 2013</p>
                            <!-- /TIMELINE INFORMATION DATE -->

                            <!-- TIMELINE INFORMATION TEXT -->
                            <p class="timeline-information-text">Intern for the "Jenny Taylors" agency. Was in charge of the communication with the clients and day-to-day chores.</p>
                            <!-- /TIMELINE INFORMATION TEXT -->
                        </div>
                        <!-- /TIMELINE INFORMATION -->

                        <!-- TIMELINE INFORMATION -->
                        <div class="timeline-information">
                            <!-- TIMELINE INFORMATION TITLE -->
                            <p class="timeline-information-title">The Antique College of Design</p>
                            <!-- /TIMELINE INFORMATION TITLE -->

                            <!-- TIMELINE INFORMATION DATE -->
                            <p class="timeline-information-date">2007 - 2012</p>
                            <!-- /TIMELINE INFORMATION DATE -->

                            <!-- TIMELINE INFORMATION TEXT -->
                            <p class="timeline-information-text">Bachelor of Costume Design in the Antique College. It was a five years intensive career, plus a course about Cosplays. Average: A+</p>
                            <!-- /TIMELINE INFORMATION TEXT -->
                        </div>
                        <!-- /TIMELINE INFORMATION -->
                    </div>
                    <!-- /TIMELINE INFORMATION LIST -->
                </div>
                <!-- /WIDGET BOX CONTENT -->
            </div>
            <!-- /WIDGET BOX -->
        </div>
        <!-- /GRID COLUMN -->

        <!-- GRID COLUMN -->
        <div class="grid-column">
            <!-- WIDGET BOX -->
            <div class="widget-box">
                <!-- PROGRESS ARC SUMMARY -->
                <div class="progress-arc-summary">
                    <!-- PROGRESS ARC WRAP -->
                    <div class="progress-arc-wrap">
                        <!-- PROGRESS ARC -->
                        <div class="progress-arc">
                            <canvas id="profile-completion-chart"></canvas>
                        </div>
                        <!-- PROGRESS ARC -->

                        <!-- PROGRESS ARC INFO -->
                        <div class="progress-arc-info">
                            <!-- PROGRESS ARC TITLE -->
                            <p class="progress-arc-title">59%</p>
                            <!-- /PROGRESS ARC TITLE -->
                        </div>
                        <!-- /PROGRESS ARC INFO -->
                    </div>
                    <!-- /PROGRESS ARC WRAP -->

                    <!-- PROGRESS ARC SUMMARY INFO -->
                    <div class="progress-arc-summary-info">
                        <!-- PROGRESS ARC SUMMARY TITLE -->
                        <p class="progress-arc-summary-title">Profile Completion</p>
                        <!-- /PROGRESS ARC SUMMARY TITLE -->

                        <!-- PROGRESS ARC SUMMARY TITLE -->
                        <p class="progress-arc-summary-subtitle">Marina Valentine</p>
                        <!-- /PROGRESS ARC SUMMARY TITLE -->

                        <!-- PROGRESS ARC SUMMARY TITLE -->
                        <p class="progress-arc-summary-text">Complete your profile by filling profile info fields, completing quests &amp; unlocking badges</p>
                        <!-- /PROGRESS ARC SUMMARY TITLE -->
                    </div>
                    <!-- /PROGRESS ARC SUMMARY INFO -->
                </div>
                <!-- /PROGRESS ARC SUMMARY -->

                <!-- ACHIEVEMENT STATUS LIST -->
                <div class="achievement-status-list">
                    <!-- ACHIEVEMENT STATUS -->
                    <div class="achievement-status">
                        <!-- ACHIEVEMENT STATUS PROGRESS -->
                        <p class="achievement-status-progress">11/30</p>
                        <!-- /ACHIEVEMENT STATUS PROGRESS -->

                        <!-- ACHIEVEMENT STATUS INFO -->
                        <div class="achievement-status-info">
                            <!-- ACHIEVEMENT STATUS TITLE -->
                            <p class="achievement-status-title">Quests</p>
                            <!-- /ACHIEVEMENT STATUS TITLE -->

                            <!-- ACHIEVEMENT STATUS TEXT -->
                            <p class="achievement-status-text">Completed</p>
                            <!-- /ACHIEVEMENT STATUS TEXT -->
                        </div>
                        <!-- /ACHIEVEMENT STATUS INFO -->

                        <!-- ACHIEVEMENT STATUS IMAGE -->
                        <img class="achievement-status-image" src="img/badge/completedq-s.png" alt="bdage-completedq-s">
                        <!-- /ACHIEVEMENT STATUS IMAGE -->
                    </div>
                    <!-- /ACHIEVEMENT STATUS -->

                    <!-- ACHIEVEMENT STATUS -->
                    <div class="achievement-status">
                        <!-- ACHIEVEMENT STATUS PROGRESS -->
                        <p class="achievement-status-progress">22/46</p>
                        <!-- /ACHIEVEMENT STATUS PROGRESS -->

                        <!-- ACHIEVEMENT STATUS INFO -->
                        <div class="achievement-status-info">
                            <!-- ACHIEVEMENT STATUS TITLE -->
                            <p class="achievement-status-title">Badges</p>
                            <!-- /ACHIEVEMENT STATUS TITLE -->

                            <!-- ACHIEVEMENT STATUS TEXT -->
                            <p class="achievement-status-text">Unlocked</p>
                            <!-- /ACHIEVEMENT STATUS TEXT -->
                        </div>
                        <!-- /ACHIEVEMENT STATUS INFO -->

                        <!-- ACHIEVEMENT STATUS IMAGE -->
                        <img class="achievement-status-image" src="img/badge/unlocked-badge.png" alt="bdage-unlocked-badge">
                        <!-- /ACHIEVEMENT STATUS IMAGE -->
                    </div>
                    <!-- /ACHIEVEMENT STATUS -->
                </div>
                <!-- /ACHIEVEMENT STATUS LIST -->
            </div>
            <!-- /WIDGET BOX -->

            <!-- WIDGET BOX -->
            <div class="widget-box">
                <!-- WIDGET BOX SETTINGS -->
                <div class="widget-box-settings">
                    <!-- POST SETTINGS WRAP -->
                    <div class="post-settings-wrap">
                        <!-- POST SETTINGS -->
                        <div class="post-settings widget-box-post-settings-dropdown-trigger">
                            <!-- POST SETTINGS ICON -->
                            <svg class="post-settings-icon icon-more-dots">
                                <use xlink:href="#svg-more-dots"></use>
                            </svg>
                            <!-- /POST SETTINGS ICON -->
                        </div>
                        <!-- /POST SETTINGS -->

                    </div>
                    <!-- /POST SETTINGS WRAP -->
                </div>
                <!-- /WIDGET BOX SETTINGS -->

                <!-- WIDGET BOX TITLE -->
                <p class="widget-box-title">More Stats</p>
                <!-- /WIDGET BOX TITLE -->

                <!-- WIDGET BOX CONTENT -->
                <div class="widget-box-content">
                    <!-- STAT BLOCK LIST -->
                    <div class="stat-block-list">
                        <!-- STAT BLOCK -->
                        <div class="stat-block">
                            <!-- STAT BLOCK DECORATION -->
                            <div class="stat-block-decoration">
                                <!-- STAT BLOCK DECORATION ICON -->
                                <svg class="stat-block-decoration-icon icon-friend">
                                    <use xlink:href="#svg-friend"></use>
                                </svg>
                                <!-- /STAT BLOCK DECORATION ICON -->
                            </div>
                            <!-- /STAT BLOCK DECORATION -->

                            <!-- STAT BLOCK INFO -->
                            <div class="stat-block-info">
                                <!-- STAT BLOCK TITLE -->
                                <p class="stat-block-title">Last friend added</p>
                                <!-- /STAT BLOCK TITLE -->

                                <!-- STAT BLOCK TEXT -->
                                <p class="stat-block-text">5 Days Ago</p>
                                <!-- /STAT BLOCK TEXT -->
                            </div>
                            <!-- /STAT BLOCK INFO -->
                        </div>
                        <!-- /STAT BLOCK -->

                        <!-- STAT BLOCK -->
                        <div class="stat-block">
                            <!-- STAT BLOCK DECORATION -->
                            <div class="stat-block-decoration">
                                <!-- STAT BLOCK DECORATION ICON -->
                                <svg class="stat-block-decoration-icon icon-status">
                                    <use xlink:href="#svg-status"></use>
                                </svg>
                                <!-- /STAT BLOCK DECORATION ICON -->
                            </div>
                            <!-- /STAT BLOCK DECORATION -->

                            <!-- STAT BLOCK INFO -->
                            <div class="stat-block-info">
                                <!-- STAT BLOCK TITLE -->
                                <p class="stat-block-title">Last post update</p>
                                <!-- /STAT BLOCK TITLE -->

                                <!-- STAT BLOCK TEXT -->
                                <p class="stat-block-text">1 Day Ago</p>
                                <!-- /STAT BLOCK TEXT -->
                            </div>
                            <!-- /STAT BLOCK INFO -->
                        </div>
                        <!-- /STAT BLOCK -->

                        <!-- STAT BLOCK -->
                        <div class="stat-block">
                            <!-- STAT BLOCK DECORATION -->
                            <div class="stat-block-decoration">
                                <!-- STAT BLOCK DECORATION ICON -->
                                <svg class="stat-block-decoration-icon icon-comment">
                                    <use xlink:href="#svg-comment"></use>
                                </svg>
                                <!-- /STAT BLOCK DECORATION ICON -->
                            </div>
                            <!-- /STAT BLOCK DECORATION -->

                            <!-- STAT BLOCK INFO -->
                            <div class="stat-block-info">
                                <!-- STAT BLOCK TITLE -->
                                <p class="stat-block-title">Most commented post</p>
                                <!-- /STAT BLOCK TITLE -->

                                <!-- STAT BLOCK TEXT -->
                                <p class="stat-block-text">56 Comments</p>
                                <!-- /STAT BLOCK TEXT -->
                            </div>
                            <!-- /STAT BLOCK INFO -->
                        </div>
                        <!-- /STAT BLOCK -->

                        <!-- STAT BLOCK -->
                        <div class="stat-block">
                            <!-- STAT BLOCK DECORATION -->
                            <div class="stat-block-decoration">
                                <!-- STAT BLOCK DECORATION ICON -->
                                <svg class="stat-block-decoration-icon icon-thumbs-up">
                                    <use xlink:href="#svg-thumbs-up"></use>
                                </svg>
                                <!-- /STAT BLOCK DECORATION ICON -->
                            </div>
                            <!-- /STAT BLOCK DECORATION -->

                            <!-- STAT BLOCK INFO -->
                            <div class="stat-block-info">
                                <!-- STAT BLOCK TITLE -->
                                <p class="stat-block-title">Most liked post</p>
                                <!-- /STAT BLOCK TITLE -->

                                <!-- STAT BLOCK TEXT -->
                                <p class="stat-block-text">904 Likes</p>
                                <!-- /STAT BLOCK TEXT -->
                            </div>
                            <!-- /STAT BLOCK INFO -->
                        </div>
                        <!-- /STAT BLOCK -->
                    </div>
                    <!-- /STAT BLOCK LIST -->
                </div>
                <!-- /WIDGET BOX CONTENT -->
            </div>
            <!-- /WIDGET BOX -->
        </div>
        <!-- /GRID COLUMN -->
    </div>
    <!-- /GRID -->
</div>
<!-- /CONTENT GRID -->


<!--{#if user}-->
<!--    <div style="display: flex; justify-content: center;">-->
<!--        <div style="padding: 20px; max-width: 1000px; border-radius: 10px; background-color: white">-->
<!--            <div >-->
<!--                <div>-->
<!--                    <img style="width: 100%; border-radius: 10px;" src="img/cover/04.jpg" alt="cover-04">-->
<!--                </div>-->

<!--                <div class="user-short-description big mt-3" style="padding: 0">-->
<!--                    &lt;!&ndash; USER SHORT DESCRIPTION TITLE &ndash;&gt;-->
<!--                    <p class="user-short-description-title"><a href="profile-timeline.html">-->
<!--&lt;!&ndash;                        {user.username} {user.lastName}&ndash;&gt;-->
<!--                        username-->
<!--                    </a></p>-->
<!--                    &lt;!&ndash; /USER SHORT DESCRIPTION TITLE &ndash;&gt;-->

<!--                </div>-->
<!--                &lt;!&ndash;                <div class="mt-3" style="display: flex; align-content: center; flex-wrap: wrap;">&ndash;&gt;-->
<!--                &lt;!&ndash;                    <div class="user-stats">&ndash;&gt;-->
<!--                &lt;!&ndash;                        <div class="user-stat big">&ndash;&gt;-->
<!--                &lt;!&ndash;                            <p class="user-stat-title">930</p>&ndash;&gt;-->
<!--                &lt;!&ndash;                            <p class="user-stat-text">posts</p>&ndash;&gt;-->
<!--                &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                        <div class="user-stat big">&ndash;&gt;-->
<!--                &lt;!&ndash;                            <p class="user-stat-title">930</p>&ndash;&gt;-->
<!--                &lt;!&ndash;                            <p class="user-stat-text">posts</p>&ndash;&gt;-->
<!--                &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                        <div class="user-stat big">&ndash;&gt;-->
<!--                &lt;!&ndash;                            <p class="user-stat-title">930</p>&ndash;&gt;-->
<!--                &lt;!&ndash;                            <p class="user-stat-text">posts</p>&ndash;&gt;-->
<!--                &lt;!&ndash;                        </div>&ndash;&gt;-->

<!--                &lt;!&ndash;                        <div class="user-stat big">&ndash;&gt;-->
<!--                &lt;!&ndash;                            <img class="user-stat-image" src="img/flag/usa.png" alt="flag-usa">&ndash;&gt;-->
<!--                &lt;!&ndash;                            <p class="user-stat-text">usa</p>&ndash;&gt;-->
<!--                &lt;!&ndash;                        </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                    </div>&ndash;&gt;-->
<!--                &lt;!&ndash;                </div>&ndash;&gt;-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--{:else}-->
<!--    <div class="">-->
<!--        &lt;!&ndash; login form &ndash;&gt;-->
<!--        <div class="login-form">-->
<!--            &lt;!&ndash; login &ndash;&gt;-->
<!--            <div class="form-box login-register-form-element">-->
<!--                &lt;!&ndash; FORM BOX TITLE &ndash;&gt;-->
<!--                <h2 class="form-box-title">You need to log in</h2>-->
<!--                &lt;!&ndash; /FORM BOX TITLE &ndash;&gt;-->
<!--            </div>-->
<!--            &lt;!&ndash; /login &ndash;&gt;-->
<!--        </div>-->
<!--        &lt;!&ndash; /login form &ndash;&gt;-->
<!--    </div>-->
<!--{/if}-->

<style>
    .login-form {
        display: flex;
        justify-content: center;
    }
</style>

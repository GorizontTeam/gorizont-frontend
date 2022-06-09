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
                <p class="user-short-description-title"><a href="profile-timeline.html">Марина</a></p>
                <!-- /USER SHORT DESCRIPTION TITLE -->

            </div>
            <!-- /USER SHORT DESCRIPTION -->

            <!-- USER STATS -->
            <div class="user-stats">
                <!-- USER STAT -->
                <div class="user-stat big">
                    <!-- USER STAT TITLE -->
                    <p class="user-stat-title">15</p>
                    <!-- /USER STAT TITLE -->

                    <!-- USER STAT TEXT -->
                    <p class="user-stat-text">статьи</p>
                    <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->

                <!-- USER STAT -->
                <div class="user-stat big">
                    <!-- USER STAT TITLE -->
                    <p class="user-stat-title">82</p>
                    <!-- /USER STAT TITLE -->

                    <!-- USER STAT TEXT -->
                    <p class="user-stat-text">друзей</p>
                    <!-- /USER STAT TEXT -->
                </div>
                <!-- /USER STAT -->

                <!-- USER STAT -->
                <div class="user-stat big">
                    <!-- USER STAT TITLE -->
                    <p class="user-stat-title">3</p>
                    <!-- /USER STAT TITLE -->

                    <!-- USER STAT TEXT -->
                    <p class="user-stat-text">Изученные курсы</p>
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
                <!-- PROGRESS ARC SUMMARY -->
                <div class="progress-arc-summary">
                    <!-- PROGRESS ARC SUMMARY INFO -->
                    <div class="progress-arc-summary-info">
                        <!-- PROGRESS ARC SUMMARY TITLE -->
                        <a href="" class="progress-arc-summary-title">Текущее задание</a>
                        <!-- /PROGRESS ARC SUMMARY TITLE -->

                        <!-- PROGRESS ARC SUMMARY TITLE -->
                        <p class="progress-arc-summary-subtitle">Создать калькулятор</p>
                        <!-- /PROGRESS ARC SUMMARY TITLE -->

                        <!-- PROGRESS ARC SUMMARY TITLE -->
                        <p class="progress-arc-summary-text">Завершите задание и получите награду!</p>
                        <!-- /PROGRESS ARC SUMMARY TITLE -->
                    </div>
                    <!-- /PROGRESS ARC SUMMARY INFO -->
                </div>
                <!-- /PROGRESS ARC SUMMARY -->
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
                <p class="widget-box-title">Обо мне</p>
                <!-- /WIDGET BOX TITLE -->

                <!-- WIDGET BOX CONTENT -->
                <div class="widget-box-content">
                    <!-- PARAGRAPH -->
                    <p class="paragraph">
                        Привет! Меня зовут Марина. Живу и учусь в Казани. Хочу стать крутой программисткой.
                    </p>
                    <!-- /PARAGRAPH -->
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
                            <p class="information-line-title"></p>
                            <!-- /INFORMATION LINE TITLE -->
                        </div>
                        <!-- /INFORMATION LINE -->

                        <!-- INFORMATION LINE -->
                        <div class="information-line">
                            <!-- INFORMATION LINE TITLE -->
                            <p class="information-line-title">Город</p>
                            <!-- /INFORMATION LINE TITLE -->

                            <!-- INFORMATION LINE TEXT -->
                            <p class="information-line-text">Казань</p>
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

                        <!-- INFORMATION LINE -->
                        <div class="information-line">
                            <!-- INFORMATION LINE TITLE -->
                            <p class="information-line-title">Номер телефона</p>
                            <!-- /INFORMATION LINE TITLE -->

                            <!-- INFORMATION LINE TEXT -->
                            <p class="information-line-text">89297543857</p>
                            <!-- /INFORMATION LINE TEXT -->
                        </div>
                        <!-- /INFORMATION LINE -->

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
                <!-- PROGRESS ARC SUMMARY -->
                <div class="progress-arc-summary">
                    <!-- PROGRESS ARC SUMMARY INFO -->
                    <div class="progress-arc-summary-info">
                        <!-- PROGRESS ARC SUMMARY TITLE -->
                        <a href="" class="progress-arc-summary-title">Текущий курс</a>
                        <!-- /PROGRESS ARC SUMMARY TITLE -->

                        <!-- PROGRESS ARC SUMMARY TITLE -->
                        <p class="progress-arc-summary-subtitle">Программирование на Python</p>
                        <!-- /PROGRESS ARC SUMMARY TITLE -->

                        <!-- PROGRESS ARC SUMMARY TITLE -->
                        <p class="progress-arc-summary-text">Завершите курс и получите награду!</p>
                        <!-- /PROGRESS ARC SUMMARY TITLE -->
                    </div>
                    <!-- /PROGRESS ARC SUMMARY INFO -->
                </div>
                <!-- /PROGRESS ARC SUMMARY -->
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

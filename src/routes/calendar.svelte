<script>
    import { onMount } from 'svelte';

    let openCreateEventPopup;
    let closeCreateEventPopup;
    let isCreateEventPopupOpened = false;

    let openEventPopup;
    let closeEventPopup;
    let isEventPopupOpened = false;

    onMount(() => {
        openCreateEventPopup = () => {
            let popup = document.getElementById('createEventPopup');
            if (isCreateEventPopupOpened) {
                popup.style.visibility = 'hidden';
                isCreateEventPopupOpened = false;
            }
            else {
                popup.style.visibility = 'visible';
                isCreateEventPopupOpened = true;
            }

        };
        closeCreateEventPopup = () => {
            let popup = document.getElementById('createEventPopup');
            popup.style.visibility = 'hidden';
            isCreateEventPopupOpened = false;

        };

        openEventPopup = () => {
            let popup = document.getElementById('eventPopup');
            if (isCreateEventPopupOpened) {
                popup.style.visibility = 'hidden';
                isCreateEventPopupOpened = false;
            }
            else {
                popup.style.visibility = 'visible';
                isCreateEventPopupOpened = true;
            }
        };
        closeEventPopup = () => {
            let popup = document.getElementById('eventPopup');
            popup.style.visibility = 'hidden';
            isCreateEventPopupOpened = false;

        };
    });
</script>

<!-- CONTENT GRID -->
<div class="container">
    <!-- SECTION BANNER -->
    <div class="section-banner mb-5">
        <!-- SECTION BANNER ICON -->
        <img class="section-banner-icon" src="img/banner/events-icon.png" alt="events-icon">
        <!-- /SECTION BANNER ICON -->

        <!-- SECTION BANNER TITLE -->
        <p class="section-banner-title">События</p>
        <!-- /SECTION BANNER TITLE -->
    </div>
    <!-- /SECTION BANNER -->

    <!-- SECTION HEADER -->
    <div class="section-header">
        <!-- SECTION HEADER INFO -->
        <div class="section-header-info">
            <!-- SECTION TITLE -->
            <h2 class="section-title">Календарь событий</h2>
            <!-- /SECTION TITLE -->
        </div>
        <!-- /SECTION HEADER INFO -->
    </div>
    <!-- /SECTION HEADER -->

    <!-- CALENDAR WIDGET -->
    <div class="calendar-widget mt-5">
        <!-- CALENDAR WIDGET HEADER -->
        <div class="calendar-widget-header">
            <!-- CALENDAR WIDGET HEADER ACTIONS -->
            <div class="calendar-widget-header-actions">
                <!-- SLIDER CONTROLS -->
                <div class="slider-controls">
                    <!-- SLIDER CONTROL -->
                    <div class="slider-control left">
                        <!-- SLIDER CONTROL ICON -->
                        <svg class="slider-control-icon icon-big-arrow">
                            <use xlink:href="#svg-big-arrow"></use>
                        </svg>
                        <!-- /SLIDER CONTROL ICON -->
                    </div>
                    <!-- /SLIDER CONTROL -->

                    <!-- SLIDER CONTROL -->
                    <div class="slider-control right">
                        <!-- SLIDER CONTROL ICON -->
                        <svg class="slider-control-icon icon-big-arrow">
                            <use xlink:href="#svg-big-arrow"></use>
                        </svg>
                        <!-- /SLIDER CONTROL ICON -->
                    </div>
                    <!-- /SLIDER CONTROL -->
                </div>
                <!-- /SLIDER CONTROLS -->

                <!-- CALENDAR WIDGET TITLE -->
                <p class="calendar-widget-title">Сентябрь 2022</p>
                <!-- /CALENDAR WIDGET TITLE -->
            </div>
            <!-- /CALENDAR WIDGET HEADER ACTIONS -->

            <!-- CALENDAR WIDGET HEADER ACTIONS -->
            <div class="calendar-widget-header-actions">
                <!-- VIEW ACTIONS -->
                <div class="view-actions" style="display: flex; align-items: center">
<!--                    &lt;!&ndash; VIEW ACTION &ndash;&gt;-->
<!--                    <a class="view-action text-tooltip-tft-medium active" href="events.html" data-title="Monthly">-->
<!--                        &lt;!&ndash; VIEW ACTION ICON &ndash;&gt;-->
<!--                        <svg class="view-action-icon icon-events-monthly">-->
<!--                            <use xlink:href="#svg-events-monthly"></use>-->
<!--                        </svg>-->
<!--                        &lt;!&ndash; /VIEW ACTION ICON &ndash;&gt;-->
<!--                    </a>-->
<!--                    &lt;!&ndash; /VIEW ACTION &ndash;&gt;-->

                    <div class="section-filters-bar-actions">
                        <!-- BUTTON -->
                        <button on:click={openCreateEventPopup} class="button secondary popup-event-creation-trigger" style="padding-left: 40px; padding-right: 40px; font-size: 17px">+ Добавить событие</button>
                        <!-- /BUTTON -->
                    </div>
                </div>
                <!-- /VIEW ACTIONS -->
            </div>
            <!-- /CALENDAR WIDGET HEADER ACTIONS -->
        </div>
        <!-- /CALENDAR WIDGET HEADER -->

        <!-- CALENDAR -->
        <div class="calendar full">
            <!-- CALENDAR WEEK -->
            <div class="calendar-week">
                <!-- CALENDAR WEEK DAY -->
                <p class="calendar-week-day"><span class="week-day-short">Пн</span><span class="week-day-long">Понедельник</span></p>
                <!-- /CALENDAR WEEK DAY -->

                <!-- CALENDAR WEEK DAY -->
                <p class="calendar-week-day"><span class="week-day-short">Вт</span><span class="week-day-long">Вторник</span></p>
                <!-- /CALENDAR WEEK DAY -->

                <!-- CALENDAR WEEK DAY -->
                <p class="calendar-week-day"><span class="week-day-short">Ср</span><span class="week-day-long">Среда</span></p>
                <!-- /CALENDAR WEEK DAY -->

                <!-- CALENDAR WEEK DAY -->
                <p class="calendar-week-day"><span class="week-day-short">Чет</span><span class="week-day-long">Четверг</span></p>
                <!-- /CALENDAR WEEK DAY -->

                <!-- CALENDAR WEEK DAY -->
                <p class="calendar-week-day"><span class="week-day-short">Пт</span><span class="week-day-long">Пятница</span></p>
                <!-- /CALENDAR WEEK DAY -->

                <!-- CALENDAR WEEK DAY -->
                <p class="calendar-week-day"><span class="week-day-short">Сб</span><span class="week-day-long">Суббота</span></p>
                <!-- /CALENDAR WEEK DAY -->

                <!-- CALENDAR WEEK DAY -->
                <p class="calendar-week-day"><span class="week-day-short">Вск</span><span class="week-day-long">Воскресенье</span></p>
                <!-- /CALENDAR WEEK DAY -->
            </div>
            <!-- /CALENDAR WEEK -->

            <!-- CALENDAR DAYS -->
            <div class="calendar-days">
                <!-- CALENDAR DAY ROW -->
                <div class="calendar-day-row">
                    <!-- CALENDAR DAY -->
                    <div class="calendar-day inactive">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">29</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day inactive">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">30</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day inactive">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">31</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">1</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">2</p>
                        <!-- /CALENDAR DAY NUMBER -->

                        <!-- CALENDARY DAY EVENTS -->
                        <div class="calendar-day-events">
                            <!-- CALENDAR DAY EVENT -->
                            <p class="calendar-day-event primary popup-event-information-trigger"><span class="calendar-day-event-text">Лекция по геометрии</span></p>
                            <!-- /CALENDAR DAY EVENT -->

                            <!-- CALENDAR DAY EVENT -->
                            <p class="calendar-day-event primary popup-event-information-trigger"><span class="calendar-day-event-text">Практика по информатике</span></p>
                            <!-- /CALENDAR DAY EVENT -->
                        </div>
                        <!-- /CALENDARY DAY EVENTS -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">3</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">4</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->
                </div>
                <!-- /CALENDAR DAY ROW -->

                <!-- CALENDAR DAY ROW -->
                <div class="calendar-day-row">
                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">5</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">6</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day current">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">7</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">8</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">9</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">10</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">11</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->
                </div>
                <!-- /CALENDAR DAY ROW -->

                <!-- CALENDAR DAY ROW -->
                <div class="calendar-day-row">
                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">12</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day active">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">13</p>
                        <!-- /CALENDAR DAY NUMBER -->

                        <!-- CALENDARY DAY EVENTS -->
                        <div class="calendar-day-events">
                            <!-- CALENDAR DAY EVENT -->
                            <p class="calendar-day-event primary popup-event-information-trigger"><span class="calendar-day-event-text">Собрание старост</span></p>
                            <!-- /CALENDAR DAY EVENT -->

                            <!-- CALENDAR DAY EVENT -->
                            <p class="calendar-day-event primary popup-event-information-trigger"><span class="calendar-day-event-text">Танцы</span></p>
                            <!-- /CALENDAR DAY EVENT -->
                        </div>
                        <!-- /CALENDAR DAY EVENTS -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">14</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">15</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">16</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">17</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">18</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->
                </div>
                <!-- /CALENDAR DAY ROW -->

                <!-- CALENDAR DAY ROW -->
                <div class="calendar-day-row">
                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">19</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">20</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">21</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">22</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">23</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">24</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">25</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->
                </div>
                <!-- /CALENDAR DAY ROW -->

                <!-- CALENDAR DAY ROW -->
                <div class="calendar-day-row">
                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">26</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">27</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">28</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">29</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">30</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day inactive">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">1</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->

                    <!-- CALENDAR DAY -->
                    <div class="calendar-day inactive">
                        <!-- CALENDAR DAY NUMBER -->
                        <p class="calendar-day-number">2</p>
                        <!-- /CALENDAR DAY NUMBER -->
                    </div>
                    <!-- /CALENDAR DAY -->
                </div>
                <!-- /CALENDAR DAY ROW -->
            </div>
            <!-- /CALENDAR DAYS -->
        </div>
        <!-- /CALENDAR -->
    </div>
    <!-- /CALENDAR WIDGET -->
</div>
<!-- /CONTENT GRID -->

<!-- POPUP BOX -->
<div id="createEventPopup" class="popup-box small popup-event-creation" style="position: absolute; left: 50%; z-index: 100001; opacity: 0; visibility: hidden; transform: translate(0px, -40px); transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s; top: 0px; margin-left: -192px;">
    <!-- POPUP CLOSE BUTTON -->
    <div on:click={closeCreateEventPopup} class="popup-close-button popup-event-creation-trigger">
        <!-- POPUP CLOSE BUTTON ICON -->
        <svg class="popup-close-button-icon icon-cross">
            <use xlink:href="#svg-cross"></use>
        </svg>
        <!-- /POPUP CLOSE BUTTON ICON -->
    </div>
    <!-- /POPUP CLOSE BUTTON -->

    <!-- POPUP BOX TITLE -->
    <p class="popup-box-title">+ Новое событие</p>
    <!-- /POPUP BOX TITLE -->

    <!-- FORM -->
    <form class="form">
        <!-- FORM ROW -->
        <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
                <!-- FORM INPUT -->
                <div class="form-input small">
                    <label for="event-name">Название события</label>
                    <input type="text" id="event-name" name="event_name">
                </div>
                <!-- /FORM INPUT -->
            </div>
            <!-- /FORM ITEM -->
        </div>
        <!-- /FORM ROW -->


        <!-- FORM ROW -->
        <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
                <!-- FORM INPUT DECORATED -->
                <div class="form-input-decorated">
                    <!-- FORM INPUT -->
                    <div class="form-input small">
                        <label for="event-date" style="position: initial">Начало события</label>
                        <input type="datetime-local" id="event-date" name="event_date" style="background-color: #fff; border: 1px solid #dedeea; color: #3e3f5e; transition: border-color .2s ease-in-out; width: 100%;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700; padding: 20px; margin-top: 10px">
                    </div>
                    <!-- /FORM INPUT -->
                </div>
                <!-- /FORM INPUT DECORATED -->
            </div>
            <!-- /FORM ITEM -->
        </div>
        <!-- /FORM ROW -->

        <!-- FORM ROW -->
        <div class="form-row">
            <!-- FORM ITEM -->
            <div class="form-item">
                <!-- FORM INPUT DECORATED -->
                <div class="form-input-decorated">
                    <!-- FORM INPUT -->
                    <div class="form-input small">
                        <label for="event-date" style="position: initial">Оконячание события</label>
                        <input type="datetime-local" id="event-date" name="event_date" style="background-color: #fff; border: 1px solid #dedeea; color: #3e3f5e; transition: border-color .2s ease-in-out; width: 100%;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 700; padding: 20px; margin-top: 10px">
                    </div>
                    <!-- /FORM INPUT -->
                </div>
                <!-- /FORM INPUT DECORATED -->
            </div>
            <!-- /FORM ITEM -->
        </div>
        <!-- /FORM ROW -->

        <!-- POPUP BOX ACTIONS -->
        <div class="popup-box-actions medium void">
            <!-- POPUP BOX ACTION -->
            <button class="popup-box-action full button secondary">Создать</button>
            <!-- /POPUP BOX ACTION -->
        </div>
        <!-- /POPUP BOX ACTIONS -->
    </form>
    <!-- /FORM -->
</div>
<!-- /POPUP BOX -->

<!-- POPUP EVENT -->
<div id="eventPopup" class="popup-event popup-event-information" style="position: absolute; left: 50%; z-index: 100001; opacity: 0; visibility: visible; transform: translate(0px, -40px); transition: transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s; top: 0px; margin-left: -192px;">
    <!-- POPUP CLOSE BUTTON -->
    <div class="popup-close-button popup-event-information-trigger">
        <!-- POPUP CLOSE BUTTON ICON -->
        <svg class="popup-close-button-icon icon-cross">
            <use xlink:href="#svg-cross"></use>
        </svg>
        <!-- /POPUP CLOSE BUTTON ICON -->
    </div>
    <!-- /POPUP CLOSE BUTTON -->

    <!-- POPUP EVENT COVER -->
    <figure class="popup-event-cover liquid">
        <img src="img/cover/54.jpg" alt="cover-33">
    </figure>
    <!-- /POPUP EVENT COVER -->

    <!-- POPUP EVENT INFO -->
    <div class="popup-event-info">
        <!-- POPUP EVENT TITLE -->
        <p class="popup-event-title">Лекция по геометрии</p>
        <!-- /POPUP EVENT TITLE -->

        <!-- DECORATED FEATURE LIST -->
        <div class="decorated-feature-list">
            <!-- DECORATED FEATURE -->
            <div class="decorated-feature">
                <!-- DECORATED FEATURE ICON -->
                <svg class="decorated-feature-icon icon-events">
                    <use xlink:href="#svg-events"></use>
                </svg>
                <!-- /DECORATED FEATURE ICON -->

                <!-- DECORATED FEATURE INFO -->
                <div class="decorated-feature-info">
                    <!-- DECORATED FEATURE TITLE -->
                    <p class="decorated-feature-title">Четверг, 1 сентября - 2022</p>
                    <!-- /DECORATED FEATURE TITLE -->

                    <!-- DECORATED FEATURE TEXT -->
                    <p class="decorated-feature-text">13:00 - 14:30</p>
                    <!-- /DECORATED FEATURE TEXT -->
                </div>
                <!-- /DECORATED FEATURE INFO -->
            </div>
            <!-- /DECORATED FEATURE -->

        </div>
        <!-- /DECORATED FEATURE LIST -->

        <!-- POPUP EVENT SUBTITLE -->
        <p class="popup-event-subtitle">Описание</p>
        <!-- /POPUP EVENT SUBTITLE -->

        <!-- POPUP EVENT TEXT -->
        <p class="popup-event-text">Лекция по геометрии</p>
        <!-- /POPUP EVENT TEXT -->

        <!-- POPUP EVENT BUTTON -->
        <p class="popup-event-button button tertiary popup-event-information-trigger">Удалить</p>
        <!-- /POPUP EVENT BUTTON -->
    </div>
    <!-- /POPUP EVENT INFO -->

</div>
<!-- /POPUP EVENT -->

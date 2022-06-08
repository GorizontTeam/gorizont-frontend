<script>

    let passStatus = 0;
    let setPassStatus = (s) => {
        console.log(s);
        if (passStatus === s) {
            passStatus = 0;
        }
        else {
            passStatus = s;
        }
    }

</script>

<!-- CONTENT GRID -->
<div style="display: flex; flex-direction: column; flex-wrap: wrap">
    <!-- SECTION BANNER -->
    <div class="section-banner">
        <!-- SECTION BANNER ICON -->
        <img class="section-banner-icon" src="img/banner/badges-icon.png" alt="badges-icon">
        <!-- /SECTION BANNER ICON -->

        <!-- SECTION BANNER TITLE -->
        <p class="section-banner-title">
            {#if passStatus === 0}
                Достижения
            {:else if passStatus === 1}
                Достигнутые достижения
            {:else if passStatus === 2}
                Недостигнутые достижения
            {/if}
        </p>
        <!-- /SECTION BANNER TITLE -->

<!--        &lt;!&ndash; SECTION BANNER TEXT &ndash;&gt;-->
<!--        <p class="section-banner-text">Check out all your unlocked and locked badges!</p>-->
<!--        &lt;!&ndash; /SECTION BANNER TEXT &ndash;&gt;-->
    </div>
    <!-- /SECTION BANNER -->

    <div class="buttons mt-3">
        <button on:click={() => setPassStatus(1)} class:btn-primary="{passStatus !== 1}" class:btn-secondary="{passStatus === 1}" class="btn">Достигнутые</button>
        <button on:click={() => setPassStatus(2)} class:btn-primary="{passStatus !== 2}" class:btn-secondary="{passStatus === 2}" class="btn">Недостигнутые</button>
    </div>

    {#if passStatus === 0}
        <div class="top-space centered mt-5" style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-gap: 20px;">
            <!-- BADGE ITEM STAT -->
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/bronze-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/bronze-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Поехали!</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Обучение началось</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 100%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">1<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/silver-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/silver-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Умничка</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Первый курс завершён</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 100%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">1<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/gold-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/gold-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Герой</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Обучение продолжается 5 дней подряд</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 60%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">3<span class="bar-progress-text no-space">/</span>5</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/platinum-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/platinum-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Сданный диплом</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Обучение пройдено</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 0%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">0<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/splanner-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/splanner-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Тайм менеджмент</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Первое событие создано</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 100%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">1<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/mightiers-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/mightiers-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Крутой автор</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Первая статья опубликована</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 100%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">1<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/upowered-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/upowered-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Наставник</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Получена роль Наставник</p>
                <!-- /BADGE ITEM STAT TEXT -->
                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 100%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">1<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/verifieds-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/verifieds-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Фиксик</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Спасибо, за информацию об ошибке!</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 100%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">1<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <!-- /BADGE ITEM STAT -->
        </div>
    {:else if passStatus === 1}
        <div class="top-space centered mt-5" style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-gap: 20px;">
            <!-- BADGE ITEM STAT -->
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/bronze-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/bronze-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Поехали!</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Обучение началось</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 100%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">1<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/silver-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/silver-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Умничка</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Первый курс завершён</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 100%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">1<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/splanner-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/splanner-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Тайм менеджмент</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Первое событие создано</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 100%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">1<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/mightiers-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/mightiers-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Крутой автор</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Первая статья опубликована</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 100%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">1<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/upowered-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/upowered-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Наставник</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Получена роль Наставник</p>
                <!-- /BADGE ITEM STAT TEXT -->
                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 100%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">1<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/verifieds-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/verifieds-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Фиксик</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Спасибо, за информацию об ошибке!</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 100%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">1<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <!-- /BADGE ITEM STAT -->
        </div>
    {:else if passStatus === 2}
        <div class="top-space centered mt-5" style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; grid-gap: 20px;">
            <!-- BADGE ITEM STAT -->
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/gold-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/gold-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Герой</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Обучение продолжается 5 дней подряд</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 60%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">3<span class="bar-progress-text no-space">/</span>5</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <div class="badge-item-stat">
                <!-- BADGE ITEM STAT IMAGE PREVIEW -->
                <img class="badge-item-stat-image-preview" src="img/badge/platinum-s.png" alt="badge-bronze-s">
                <!-- /BADGE ITEM STAT IMAGE PREVIEW -->

                <!-- BADGE ITEM STAT IMAGE -->
                <img class="badge-item-stat-image" src="img/badge/platinum-b.png" alt="badge-bronze-b">
                <!-- /BADGE ITEM STAT IMAGE -->

                <!-- BADGE ITEM STAT TITLE -->
                <p class="badge-item-stat-title">Сданный диплом</p>
                <!-- /BADGE ITEM STAT TITLE -->

                <!-- BADGE ITEM STAT TEXT -->
                <p class="badge-item-stat-text">Обучение пройдено</p>
                <!-- /BADGE ITEM STAT TEXT -->

                <!-- PROGRESS STAT -->
                <div class="progress-stat">
                    <!-- PROGRESS STAT BAR -->
                    <div id="badge-bronze" class="progress-stat-bar" style="width: 204px">
                        <div style="background-color: #edecec; height: 4px; width: 204px;">
                            <div style="background-color: #a2c6ed; width: 0%; height: 4px;"></div>
                        </div>
                    </div>
                    <!-- /PROGRESS STAT BAR -->

                    <!-- BAR PROGRESS WRAP -->
                    <div class="bar-progress-wrap">
                        <!-- BAR PROGRESS INFO -->
                        <p class="bar-progress-info negative center">0<span class="bar-progress-text no-space">/</span>1</p>
                        <!-- /BAR PROGRESS INFO -->
                    </div>
                    <!-- /BAR PROGRESS WRAP -->
                </div>
                <!-- /PROGRESS STAT -->
            </div>
            <!-- /BADGE ITEM STAT -->
        </div>
    {/if}
</div>
<!-- /CONTENT GRID -->

<style>
    .badge-item-stat-text {
        height: 30px;
    }
    .buttons {
        width: 150px;
        display: flex;
        gap: 10px;
        align-content: center;
    }
</style>

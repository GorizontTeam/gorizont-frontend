<script>
    import { onMount } from 'svelte';


    let editProdile = () => {
        localStorage.setItem('userAbout', 'Всем привет! Меня зовут Марина. Живу и учусь в Казани. Хочу стать крутой программисткой.');
        window.location.reload()
    };

    let userAbout;
    if (typeof window !== 'undefined') {
        userAbout = localStorage.getItem('userAbout');
    }
</script>

<!-- CONTENT GRID -->
<div style="transition: transform 0.4s ease-in-out 0s;">
    <!-- SECTION BANNER -->
    <div class="section-banner mb-5">
        <!-- SECTION BANNER ICON -->
        <img class="section-banner-icon" src="img/banner/accounthub-icon.png" alt="accounthub-icon">
        <!-- /SECTION BANNER ICON -->

        <!-- SECTION BANNER TITLE -->
        <p class="section-banner-title">Настройки аккаунта</p>
        <!-- /SECTION BANNER TITLE -->
    </div>
    <!-- /SECTION BANNER -->

    <!-- GRID -->
    <div style="display: flex; flex-direction: column; justify-content: center;">
        <!-- GRID COLUMN -->
        <div class="account-hub-content mb-5">
            <!-- GRID COLUMN -->
            <div>
                <!-- GRID -->
                <div style="display: flex; justify-content: center; gap: 30px" class="mb-5">
                    <!-- UPLOAD BOX -->
                    <div class="upload-box">
                        <!-- UPLOAD BOX ICON -->
                        <svg class="upload-box-icon icon-members">
                            <use xlink:href="#svg-members"></use>
                        </svg>
                        <!-- /UPLOAD BOX ICON -->

                        <!-- UPLOAD BOX TITLE -->
                        <p class="upload-box-title">Поменять аватар</p>
                        <!-- /UPLOAD BOX TITLE -->

                        <!-- UPLOAD BOX TEXT -->
                        <p class="upload-box-text">минимальный размер 110x110px</p>
                        <!-- /UPLOAD BOX TEXT -->
                    </div>
                    <!-- /UPLOAD BOX -->

                </div>
                <!-- /GRID -->

                <!-- WIDGET BOX -->
                <div class="widget-box">
                    <!-- WIDGET BOX TITLE -->
                    <p class="widget-box-title">Обо мне</p>
                    <!-- /WIDGET BOX TITLE -->

                    <!-- WIDGET BOX CONTENT -->
                    <div class="widget-box-content">
                        <!-- FORM -->
                        <form class="form">
                            <!-- FORM ROW -->
                            <div class="form-row split">
                                <!-- FORM ITEM -->
                                <div class="form-item">
                                    <!-- FORM INPUT -->
                                    <div class="form-input small active">
                                        <label for="profile-name">Имя</label>
                                        <input type="text" id="profile-name" name="profile_name" value="Марина">
                                    </div>
                                    <!-- /FORM INPUT -->
                                </div>
                                <!-- /FORM ITEM -->

                                <!-- FORM ITEM -->
                                <div class="form-item">
                                    <!-- FORM INPUT -->
                                    <div class="form-input small active">
                                        <label for="profile-name">Номер телефона</label>
                                        <input type="text" id="profile-name" name="profile_name" value="89297543857">
                                    </div>
                                    <!-- /FORM INPUT -->
                                </div>
                                <!-- /FORM ITEM -->

                            </div>
                            <!-- /FORM ROW -->

                            <!-- FORM ROW -->
                            <div class="form-row split">
                                <!-- FORM ITEM -->
                                <div class="form-item">
                                    <!-- FORM INPUT -->
                                    <div class="form-input small full">
                                        {#if userAbout}
                                            <textarea id="profile-description" name="profile_description">{userAbout}</textarea>
                                        {:else}
                                            <textarea id="profile-description" name="profile_description" placeholder="Расскажите немного о себе..."></textarea>
                                        {/if}
                                    </div>
                                    <!-- /FORM INPUT -->
                                </div>
                                <!-- /FORM ITEM -->

                                <!-- FORM ITEM -->
                                <div class="form-item">
                                    <!-- FORM INPUT -->
                                    <div class="form-input small active">
                                        <label for="profile-public-email">Почта</label>
                                        <input type="text" id="profile-public-email" name="profile_public_email" value="ghuntress@yourmail.com">
                                    </div>
                                    <!-- /FORM INPUT -->

                                </div>
                                <!-- /FORM ITEM -->
                            </div>
                            <!-- /FORM ROW -->

                            <!-- FORM ROW -->
                            <div class="form-row split">
                                <!-- FORM ITEM -->
                                <div class="form-item">
                                    <!-- FORM SELECT -->
                                    <div class="form-select">
                                        <label for="profile-country">Страна</label>
                                        <select id="profile-country" name="profile_country">
                                            <option value="0">Выберите страну</option>
                                            <option value="1" selected>Россия</option>
                                        </select>
                                        <!-- FORM SELECT ICON -->
                                        <svg class="form-select-icon icon-small-arrow">
                                            <use xlink:href="#svg-small-arrow"></use>
                                        </svg>
                                        <!-- /FORM SELECT ICON -->
                                    </div>
                                    <!-- /FORM SELECT -->
                                </div>
                                <!-- /FORM ITEM -->

                                <!-- FORM ITEM -->
                                <div class="form-item">
                                    <!-- FORM SELECT -->
                                    <div class="form-select">
                                        <label for="profile-city">Город</label>
                                        <select id="profile-city" name="profile_city">
                                            <option value="0">Выберите город</option>
                                            <option value="1" selected>Казань</option>
                                        </select>
                                        <!-- FORM SELECT ICON -->
                                        <svg class="form-select-icon icon-small-arrow">
                                            <use xlink:href="#svg-small-arrow"></use>
                                        </svg>
                                        <!-- /FORM SELECT ICON -->
                                    </div>
                                    <!-- /FORM SELECT -->
                                </div>
                                <!-- /FORM ITEM -->
                            </div>
                            <!-- /FORM ROW -->
                        </form>
                        <!-- /FORM -->
                    </div>
                    <!-- WIDGET BOX CONTENT -->
                </div>
                <!-- /WIDGET BOX -->

                <!-- WIDGET BOX -->
                <div class="widget-box mt-5">
                    <!-- WIDGET BOX TITLE -->
                    <p class="widget-box-title">Изменить пароль</p>
                    <!-- /WIDGET BOX TITLE -->

                    <!-- WIDGET BOX CONTENT -->
                    <div class="widget-box-content">
                        <!-- FORM -->
                        <form class="form">
                            <!-- FORM ROW -->
                            <div class="form-row split">
                                <!-- FORM ITEM -->
                                <div class="form-item">
                                    <!-- FORM INPUT -->
                                    <div class="form-input small active">
                                        <label for="profile-name">Новый пароль</label>
                                        <input type="password" id="password" name="password" value="">
                                    </div>
                                    <!-- /FORM INPUT -->
                                </div>
                                <!-- /FORM ITEM -->

                                <!-- FORM ITEM -->
                                <div class="form-item">
                                    <!-- FORM INPUT -->
                                    <div class="form-input small active">
                                        <label for="profile-name">Повторите пароль</label>
                                        <input type="password" id="password-repeat" name="password_repeat" value="">
                                    </div>
                                    <!-- /FORM INPUT -->
                                </div>
                                <!-- /FORM ITEM -->
                            </div>
                            <!-- /FORM ROW -->

                            <input class="button primary mt-3 px-3" type="submit" value="Изменить пароль">
                        </form>
                        <!-- /FORM -->
                    </div>
                    <!-- WIDGET BOX CONTENT -->
                </div>
                <!-- /WIDGET BOX -->
            </div>
            <!-- /GRID COLUMN -->
        </div>
        <!-- /GRID COLUMN -->
        <!-- GRID COLUMN -->
        <div class="account-hub-sidebar mb-5">
            <!-- SIDEBAR BOX -->
            <div class="sidebar-box no-padding">
                <!-- SIDEBAR BOX FOOTER -->
                <div class="sidebar-box-footer">
                    <!-- BUTTON -->
                    <p on:click={editProdile} class="button primary">Сохранить</p>
                    <!-- /BUTTON -->
                </div>
                <!-- /SIDEBAR BOX FOOTER -->
            </div>
            <!-- /SIDEBAR BOX -->
        </div>
        <!-- /GRID COLUMN -->
    </div>
    <!-- /GRID -->
</div>
<!-- /CONTENT GRID -->

<style>
    .upload-box {
        min-width: 100%;
    }
</style>

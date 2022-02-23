<svelte:head>
    <title>Login</title>
</svelte:head>


<!-- login -->
<div class="">
    <!-- login form -->
    <div class="login-form">
        <!-- login -->
        <div class="form-box login-register-form-element">
            <!-- FORM BOX TITLE -->
            <h2 class="form-box-title">Account Login</h2>
            <!-- /FORM BOX TITLE -->

            <!-- FORM -->
            <form class="form">
                <!-- FORM ROW -->
                <div class="form-row">
                    <!-- FORM ITEM -->
                    <div class="form-item">
                        <!-- FORM INPUT -->
                        <div class="form-input">
                            <label for="login-username">Username or Email</label>
                            <input type="text" id="login-username" name="login_username">
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
                        <!-- FORM INPUT -->
                        <div class="form-input">
                            <label for="login-password">Password</label>
                            <input type="password" id="login-password" name="login_password">
                        </div>
                        <!-- /FORM INPUT -->
                    </div>
                    <!-- /FORM ITEM -->
                </div>
                <!-- /FORM ROW -->

                <!-- FORM ROW -->
                <div class="form-row space-between">
                    <!-- FORM ITEM -->
                    <div class="form-item">
                        <!-- CHECKBOX WRAP -->
                        <div class="checkbox-wrap">
                            <input type="checkbox" id="login-remember" name="login_remember" checked>
                            <!-- CHECKBOX BOX -->
                            <div class="checkbox-box">
                                <!-- ICON CROSS -->
                                <svg class="icon-cross">
                                    <use xlink:href="#svg-cross"></use>
                                </svg>
                                <!-- /ICON CROSS -->
                            </div>
                            <!-- /CHECKBOX BOX -->
                            <label for="login-remember">Remember Me</label>
                        </div>
                        <!-- /CHECKBOX WRAP -->
                    </div>
                    <!-- /FORM ITEM -->

                    <!-- FORM ITEM -->
                    <div class="form-item">
                        <!-- FORM LINK -->
                        <a class="form-link" href="#">Forgot Password?</a>
                        <!-- /FORM LINK -->
                    </div>
                    <!-- /FORM ITEM -->
                </div>
                <!-- /FORM ROW -->

                <!-- FORM ROW -->
                <div class="form-row">
                    <!-- FORM ITEM -->
                    <div class="form-item">
                        <!-- BUTTON -->
                        <button class="button medium secondary">Login to your Account!</button>
                        <!-- /BUTTON -->
                    </div>
                    <!-- /FORM ITEM -->
                </div>
                <!-- /FORM ROW -->
            </form>
            <!-- /FORM -->

            <!-- LINED TEXT -->
            <p class="lined-text">Login with your Social Account</p>
            <!-- /LINED TEXT -->

            <!-- SOCIAL LINKS -->
            <div class="social-links">
                <!-- SOCIAL LINK -->
                <a class="social-link facebook" href="#">
                    <!-- ICON FACEBOOK -->
                    <svg class="icon-facebook">
                        <use xlink:href="#svg-facebook"></use>
                    </svg>
                    <!-- /ICON FACEBOOK -->
                </a>
                <!-- /SOCIAL LINK -->

                <!-- SOCIAL LINK -->
                <a class="social-link twitter" href="#">
                    <!-- ICON TWITTER -->
                    <svg class="icon-twitter">
                        <use xlink:href="#svg-twitter"></use>
                    </svg>
                    <!-- /ICON TWITTER -->
                </a>
                <!-- /SOCIAL LINK -->

                <!-- SOCIAL LINK -->
                <a class="social-link twitch" href="#">
                    <!-- ICON TWITCH -->
                    <svg class="icon-twitch">
                        <use xlink:href="#svg-twitch"></use>
                    </svg>
                    <!-- /ICON TWITCH -->
                </a>
                <!-- /SOCIAL LINK -->

                <!-- SOCIAL LINK -->
                <a class="social-link youtube" href="#">
                    <!-- ICON YOUTUBE -->
                    <svg class="icon-youtube">
                        <use xlink:href="#svg-youtube"></use>
                    </svg>
                    <!-- /ICON YOUTUBE -->
                </a>
                <!-- /SOCIAL LINK -->
            </div>
            <!-- /SOCIAL LINKS -->
        </div>
        <!-- /login -->

        <!-- register -->
        <div class="form-box login-register-form-element">
            <!-- FORM BOX TITLE -->
            <h2 class="form-box-title"> Create an account!</h2>
            <!-- /FORM BOX TITLE -->

            <!-- FORM -->
            <form class="form">
                <!-- FORM ROW -->
                <div class="form-row">
                    <!-- FORM ITEM -->
                    <div class="form-item">
                        <!-- FORM INPUT -->
                        <div class="form-input">
                            <label for="register-email">Your Email</label>
                            <input type="text" id="register-email" name="register_email">
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
                        <!-- FORM INPUT -->
                        <div class="form-input">
                            <label for="register-username">Username</label>
                            <input type="text" id="register-username" name="register_username">
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
                        <!-- FORM INPUT -->
                        <div class="form-input">
                            <label for="register-password">Password</label>
                            <input type="password" id="register-password" name="register_password">
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
                        <!-- FORM INPUT -->
                        <div class="form-input">
                            <label for="register-password-repeat">Repeat Password</label>
                            <input type="password" id="register-password-repeat" name="register_password_repeat">
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
                        <!-- CHECKBOX WRAP -->
                        <div class="checkbox-wrap">
                            <input type="checkbox" id="register-newsletter" name="register_newsletter" checked>
                            <!-- CHECKBOX BOX -->
                            <div class="checkbox-box">
                                <!-- ICON CROSS -->
                                <svg class="icon-cross">
                                    <use xlink:href="#svg-cross"></use>
                                </svg>
                                <!-- /ICON CROSS -->
                            </div>
                            <!-- /CHECKBOX BOX -->
                            <label for="register-newsletter">Send me news and updates via email</label>
                        </div>
                        <!-- /CHECKBOX WRAP -->
                    </div>
                    <!-- /FORM ITEM -->
                </div>
                <!-- /FORM ROW -->

                <!-- FORM ROW -->
                <div class="form-row">
                    <!-- FORM ITEM -->
                    <div class="form-item">
                        <!-- BUTTON -->
                        <button class="button medium primary">Register Now!</button>
                        <!-- /BUTTON -->
                    </div>
                    <!-- /FORM ITEM -->
                </div>
                <!-- /FORM ROW -->
            </form>
            <!-- /FORM -->

            <!-- FORM TEXT -->
            <p class="form-text">You'll receive a confirmation email in your inbox with a link to activate your account. If you have any problems, <a href="#">contact us</a>!</p>
            <!-- /FORM TEXT -->
        </div>
        <!-- /register -->
    </div>
    <!-- /login form -->
</div>
<!-- /login -->

<style>
    .login-form {
        display: flex;
        justify-content: center;
    }
</style>

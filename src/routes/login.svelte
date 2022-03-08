<script>
    import { operationStore, query, mutation } from '@urql/svelte';

    import { onMount } from 'svelte';
    import { createClient, setClient } from '@urql/svelte';
    import { writable } from 'svelte/store';

    let email = '';
    let password = '';
    let isAuthenticated = false;

    const login = operationStore(`
        mutation ($login: String!, $password: String!){
          login (login: $login, password: $password){
            ok
            token
            errors
            user {
              id
              lastLogin
              isSuperuser
              username
              firstName
              lastName
              email
              isStaff
              isActive
              dateJoined
              isTeacher
              phoneNumber
            }
          }
        }`,
    );
    const loginMutation = mutation(login);

    export let store = writable(null);
    onMount(() => {
        let _user;
        _user = localStorage.getItem('user');
        if (_user) {
            store.set(JSON.parse(_user));
        }
        store.subscribe((value) => {
            if (value) {
                localStorage.setItem('user', JSON.stringify(value));
                isAuthenticated = true;
            }
            else {
                localStorage.removeItem('user');
                isAuthenticated = false;
            }
        });
    });

    let loginError;
    function auth(data) {
        loginMutation(data).then(result => {
            if (result.data.login.errors) {
                loginError = result.data.login.errors[0];
                console.log(result);
                return
            }
            $store = result.data.login;
            window.location.href="/profile";
        });
    }

</script>

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
                            {#if !email}
                                <label for="login-username">Username or Email</label>
                            {/if}
                            <input bind:value={email} type="text" id="login-username" name="login_username">
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
                            {#if !password}
                                <label for="login-password">Password</label>
                            {/if}
                            <input bind:value={password} type="password" id="login-password" name="login_password">
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
                        <button type="button" on:click={auth({ login: email, password: password })} class="button medium secondary">Login to your Account!</button>
                        <!-- /BUTTON -->
                    </div>
                    <!-- /FORM ITEM -->
                </div>
                <!-- /FORM ROW -->
            </form>
            <!-- /FORM -->

            {#if loginError}
                <div style="color: var(--orange);" class="mt-3">
                    {loginError}
                </div>
            {/if}

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

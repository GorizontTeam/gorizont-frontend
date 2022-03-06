<script>
    import { operationStore, query, mutation } from '@urql/svelte';

    import { onMount } from 'svelte';
    import { createClient, setClient } from '@urql/svelte';
    import { writable } from 'svelte/store';

    let email = '';
    let password = '';
    let passwordRepeat = '';
    let isAuthenticated = false;

    const reg = operationStore(`
        mutation (
          $email: String!,
          $password: String!,
          $passwordRepeat: String!,
        ){
          reg (
            email: $email,
            password: $password,
            passwordRepeat: $passwordRepeat
          ){
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
    const regMutation = mutation(reg);

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

    let regError;
    function register(data) {
        regMutation(data).then(result => {
            console.log(result);
            if (result?.data?.reg?.errors) {
                regError = result.data.reg.errors[0];
                console.log(result);
                return
            }
            $store = result.data.reg;
        });
    }

</script>

<svelte:head>
    <title>Register</title>
</svelte:head>


{#if isAuthenticated}
    <div class="">
        <!-- login form -->
        <div class="login-form">
            <!-- login -->
            <div class="form-box login-register-form-element">
                <!-- FORM BOX TITLE -->
                <h2 class="form-box-title">You are registered in! Congrats!</h2>
                <!-- /FORM BOX TITLE -->
            </div>
            <!-- /login -->
        </div>
        <!-- /login form -->
    </div>
{:else}
<!-- reg -->
<div class="">
    <!-- reg form -->
    <div class="login-form">
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
<!--                            <label for="register-email">Your Email</label>-->
                            <input bind:value={email} type="text" id="register-email" name="register_email">
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
<!--                            <label for="register-password">Password</label>-->
                            <input bind:value={password} type="password" id="register-password" name="register_password">
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
<!--                            <label for="register-password-repeat">Repeat Password</label>-->
                            <input bind:value={passwordRepeat} type="password" id="register-password-repeat" name="register_password_repeat">
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
                        <button on:click={register({ email: email, password: password, passwordRepeat: passwordRepeat })} type="button" class="button medium primary">Register Now!</button>
                        <!-- /BUTTON -->
                    </div>
                    <!-- /FORM ITEM -->
                </div>
                <!-- /FORM ROW -->
            </form>
            <!-- /FORM -->

            {#if regError}
                <div style="color: var(--orange);" class="mt-3">
                    {regError}
                </div>
            {/if}

            <!-- FORM TEXT -->
            <p class="form-text">You'll receive a confirmation email in your inbox with a link to activate your account. If you have any problems, <a href="#">contact us</a>!</p>
            <!-- /FORM TEXT -->
        </div>
        <!-- /register -->
    </div>
    <!-- /reg form -->
</div>
<!-- /reg -->
{/if}

<style>
    .login-form {
        display: flex;
        justify-content: center;
    }
</style>

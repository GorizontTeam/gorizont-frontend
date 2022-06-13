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
            <h2 class="form-box-title">Войдите в аккаунт</h2>
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
                                <label for="login-username">логин</label>
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
                                <label for="login-password">пароль</label>
                            {/if}
                            <input bind:value={password} type="password" id="login-password" name="login_password">
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
                        <!-- BUTTON -->
                        <button type="button" on:click={auth({ login: email, password: password })} class="button medium secondary">Войти</button>
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

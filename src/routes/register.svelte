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

<!-- reg -->
<div class="">
    <!-- reg form -->
    <div class="login-form">
        <!-- register -->
        <div class="form-box login-register-form-element">
            <!-- FORM BOX TITLE -->
            <h2 class="form-box-title">Регистрация</h2>
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
                                <label for="register-email">почта</label>
                            {/if}
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
                            {#if !password}
                                <label for="register-password">пароль</label>
                            {/if}
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
                            {#if !passwordRepeat}
                                <label for="register-password-repeat">повторите пароль</label>
                            {/if}
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
                        <!-- BUTTON -->
                        <button type="button" on:click={register({ email: email, password: password, passwordRepeat: passwordRepeat })} class="button medium primary">Зарегистрироваться</button>
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

        </div>
        <!-- /register -->
    </div>
    <!-- /reg form -->
</div>
<!-- /reg -->

<style>
    .login-form {
        display: flex;
        justify-content: center;
    }
</style>

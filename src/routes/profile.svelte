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
        });
    }

</script>

<svelte:head>
    <title>Profile</title>
</svelte:head>


{#if isAuthenticated}
    <div style="display: flex; justify-content: center;">
        <div style="padding: 20px; max-width: 1000px; border-radius: 10px; background-color: white">
            <div >
                <div>
                    <img style="width: 100%; border-radius: 10px;" src="img/cover/04.jpg" alt="cover-04">
                </div>

                <div class="user-short-description big mt-3" style="padding: 0">
                    <!-- USER SHORT DESCRIPTION TITLE -->
                    <p class="user-short-description-title"><a href="profile-timeline.html">Marina Valentine</a></p>
                    <!-- /USER SHORT DESCRIPTION TITLE -->

                    <!-- USER SHORT DESCRIPTION TEXT -->
                    <p class="user-short-description-text"><a href="#">www.gamehuntress.com</a></p>
                    <!-- /USER SHORT DESCRIPTION TEXT -->
                </div>
                <!--                <div class="mt-3" style="display: flex; align-content: center; flex-wrap: wrap;">-->
                <!--                    <div class="user-stats">-->
                <!--                        <div class="user-stat big">-->
                <!--                            <p class="user-stat-title">930</p>-->
                <!--                            <p class="user-stat-text">posts</p>-->
                <!--                        </div>-->
                <!--                        <div class="user-stat big">-->
                <!--                            <p class="user-stat-title">930</p>-->
                <!--                            <p class="user-stat-text">posts</p>-->
                <!--                        </div>-->
                <!--                        <div class="user-stat big">-->
                <!--                            <p class="user-stat-title">930</p>-->
                <!--                            <p class="user-stat-text">posts</p>-->
                <!--                        </div>-->

                <!--                        <div class="user-stat big">-->
                <!--                            <img class="user-stat-image" src="img/flag/usa.png" alt="flag-usa">-->
                <!--                            <p class="user-stat-text">usa</p>-->
                <!--                        </div>-->
                <!--                    </div>-->
                <!--                </div>-->
            </div>
        </div>
    </div>
{:else}
    <div class="">
        <!-- login form -->
        <div class="login-form">
            <!-- login -->
            <div class="form-box login-register-form-element">
                <!-- FORM BOX TITLE -->
                <h2 class="form-box-title">You need to log in</h2>
                <!-- /FORM BOX TITLE -->
            </div>
            <!-- /login -->
        </div>
        <!-- /login form -->
    </div>
{/if}

<style>
    .login-form {
        display: flex;
        justify-content: center;
    }
</style>

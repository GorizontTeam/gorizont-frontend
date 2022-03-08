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


{#if user}
    <div style="display: flex; justify-content: center;">
        <div style="padding: 20px; max-width: 1000px; border-radius: 10px; background-color: white">
            <div >
                <div>
                    <img style="width: 100%; border-radius: 10px;" src="img/cover/04.jpg" alt="cover-04">
                </div>

                <div class="user-short-description big mt-3" style="padding: 0">
                    <!-- USER SHORT DESCRIPTION TITLE -->
                    <p class="user-short-description-title"><a href="profile-timeline.html">{user.username} {user.lastName}</a></p>
                    <!-- /USER SHORT DESCRIPTION TITLE -->

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

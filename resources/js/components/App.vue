<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel" v-if="user != null">
            <div class="container">
                <ul class="navbar-nav">
                    <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                    <router-link :to="{ name: 'info' }" class="nav-link">Info</router-link>
                    <a href="/logout" class="nav-link">Logout</a>
                </ul>
            </div>
        </nav>
        <h1 v-else>Logando...</h1>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Auth from "./Auth"

export default {
    extends: Auth,
    data() {
        return {

        }
    },
}
</script>

<style>

</style>

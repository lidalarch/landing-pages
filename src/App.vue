<template>
    <div id="app" class="container-fluid">

        <router-link to="/page1">Страница 1</router-link>

        <router-view class="view"></router-view>

    </div>
</template>

<script>
    import './scss/app.scss';

    export default {
        name: 'App',
        components: {
        },
        data() {
            return {};
        },
    }
</script>

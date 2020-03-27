<template>
    <div id="app" class="container-fluid">

        <router-link to="/page1" class="rlink">Страница 1</router-link>
        <router-link to="/page2" class="rlink">Страница 2</router-link>
        <router-link to="/page3" class="rlink">Страница 3</router-link>

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

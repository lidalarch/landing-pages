<template>
    <div id="PictureTitle" class="picture-title">

        <h1>{{ promo.title }}</h1>

        <button class="btn btn-danger">
            <a :href="promo.button.url" target="_blank">
                {{ promo.button.text }}
            </a>
        </button>

    </div>
</template>

<script>
    import '../scss/pictureTitle.scss';

    export default {
        name: 'PictureTitle',
        components: {},
        props: {
            promo: Object,
        },
        computed: {},
    }

</script>

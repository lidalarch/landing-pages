<template>
    <div :class="'block-details ' + block.class">

        <h6 v-if="block.subtitle"><i><img src="/img/icons/Ellipse.svg"/></i>{{ block.subtitle }}</h6>
        <h1>{{ block.title }}</h1>

        <div class="cards">
            <Card :card="card" v-for="card of block.cards" :key="card.id" class="card"/>
        </div>

        <div v-if="block.picture" class="background-image"></div>

    </div>
</template>

<script>

    import Card from './Card.vue'

    export default {
        name: 'BlockDetails',
        components: {
            Card,
        },
        props: {
            block: Object,
        },
        computed: {},
    }

</script>

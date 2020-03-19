<template>
    <div class="block">
        <div class="row">
            <div class="col-lg-12">
                <h6><i><img src="/img/icons/Ellipse.svg" /></i>{{ block.subtitle }}</h6>
                <h1>{{ block.title }}</h1>

                <div class="cards">

                        <Card :card="card" v-for="card of block.cards" :key="card.id" class="card" />

                </div>

                <div v-if="block.picture" class="background-image d-none d-lg-block"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import '../scss/block.scss';
    import Card from './Card.vue'

    export default {
        name: 'Block',
        components: {
            Card,
        },
        props: {
            block: Object,
        },
        computed: {
            columnClass() {
                if ((this.block.cards.length >= 5)) {
                    return 'col-lg-4';
                } else {
                    return 'col-lg-' + 12 / this.block.cards.length;
                }
            },
        },
    }

</script>

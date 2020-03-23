<template>
    <div id="block-main" class="block-main cards">

            <Card :card="card" v-for="card of block.cards" :key="card.id" :class="'card ' + moreCardsClass" />

    </div>
</template>

<script>
    import '../scss/blockMain.scss';
    import Card from './Card.vue'

    export default {
        name: 'BlockMain',
        components: {
            Card,
        },
        props: {
            block: Object,
        },

        computed: {
            moreCardsClass() {
                if ((this.block.cards.length >= 4)) {
                    return 'more-cards';
                } else {
                    return '';
                }
            },
        },
    }

</script>

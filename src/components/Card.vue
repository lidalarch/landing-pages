<template>
    <div :id="'card-' + card.id">

        <div v-if="card.icon" class="icon">
            <img :src="card.icon" alt="icon"/>
        </div>

        <p v-if="card.text" class="text">{{ card.text }}</p>
        <p v-if="card.subtext" class="subtext">{{ card.subtext }}</p>

        <div v-if="card.picture" class="picture">
            <img :src="card.picture"/>
        </div>

        <div v-if="card.num" class="number">{{ card.num }}</div>

    </div>
</template>

<script>
    import '../scss/card.scss';

    export default {
        name: 'Card',
        props: {
            card: Object,
        },
    }
</script>

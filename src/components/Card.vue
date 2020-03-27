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

        <button v-if="card.button" class="btn btn-light">
            <a v-if="card.button.url" :href="card.button.url" target="_blank">
                {{ card.button.text }}
            </a>
        </button>

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

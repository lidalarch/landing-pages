<template>
    <div class="block-contacts cards">

        <div class="cards">
            <ContactCard :card="card" v-for="card of block.contactCards" :key="card.id" class="contact-card card"/>
        </div>

        <div v-if="block.picture" class="picture"></div>

    </div>
</template>

<script>

    import ContactCard from './ContactCard.vue'

    export default {
        name: 'BlockContacts',
        components: {
            ContactCard,
        },
        props: {
            block: Object,
        },
        computed: {},
    }

</script>

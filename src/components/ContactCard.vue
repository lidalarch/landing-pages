<template>
    <div :id="'contact-card-' + card.id">

        <h1>{{ card.title }}</h1>

        <p v-if="card.text">{{ card.text }}</p>

        <div v-if="card.contacts" class="contacts">
            <Contact :contact="contact" v-for="contact of card.contacts" :key="contact.id" class="contact row"/>
        </div>

        <button class="btn btn-light">
            <a :href="card.button.url" target="_blank">
                {{ card.button.text }}
            </a>
        </button>

        <div v-if="card.num" class="number">{{ card.num }}</div>

    </div>
</template>

<script>
    import '../scss/contactCard.scss';
    import Contact from './Contact.vue'

    export default {
        name: 'ContactCard',
        components: {
            Contact,
        },
        props: {
            card: Object,
        },
    }
</script>

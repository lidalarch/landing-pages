<template>
    <div :id="'contact-' + contact.id">
        <div class="col-sm-3">

            <div v-if="contact.icon" class="icon">
                <img :src="contact.icon" alt="icon"/>
            </div>

        </div>
        <div class="col-sm-9">

            <h5 class="name">{{ contact.name }}</h5>

            <p v-if="contact.position">{{ contact.position }}</p>

            <p v-if="contact.mail">
                <a :href="'mailto:' + contact.mail" >
                {{ contact.mail }}
                </a>
            </p>

        </div>
    </div>

</template>

<script>
    import '../scss/contact.scss';

    export default {
        name: 'Contact',
        props: {
            contact: Object,
        },
    }
</script>

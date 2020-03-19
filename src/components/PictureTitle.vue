<template>
    <div id="PictureTitle" class="picture-title">

        <h1>{{ promo.title }}</h1>

        <button class="btn btn-danger">
            <a :href="promo.button.url" target="_blank">
                {{ promo.button.text }}
            </a>
        </button>

        <div class="cards">
            <Card :card="card" v-for="card of promo.cards" :key="card.id" :class="'card ' + moreCardsClass" />
        </div>

    </div>
</template>

<script>
    import '../scss/pictureTitle.scss';
    import Card from './Card.vue'

    export default {
        name: 'PictureTitle',
        components: {
            Card,
        },
        data() {
            return {
                promo: {
                    title: 'Тестируйте макеты упаковок на сервисе Анкетолог',
                    button: {
                        text: 'Создать опрос',
                        url: 'http://vuex.vuejs.org/',
                    },
                    cards: [
                        {
                            text: 'Богатые возможности визуализации макетов',
                            icon: '/img/icons/7-education.svg',
                            picture: '',
                            id: 1,
                            num: '01',
                        },
                        {
                            text: 'Подбор аудитории для тестирования по 70 параметрам',
                            icon: '/img/icons/28-option.svg',
                            picture: '',
                            id: 2,
                            num: '02',
                        },
                        {
                            text: 'Личный кабинет с фильтрами для анализа данных',
                            icon: '/img/icons/69-web-layout.svg',
                            picture: '',
                            id: 3,
                            num: '03',
                        },
                        {
                            text: 'Личный кабинет с фильтрами для анализа данных',
                            icon: '/img/icons/69-web-layout.svg',
                            picture: '',
                            id: 4,
                            num: '03',
                        },
                    ],
                },
            };
        },
        computed: {
            moreCardsClass() {
                if ((this.promo.cards.length >= 4)) {
                    return 'more-cards';
                } else {
                    return '';
                }
            },
        },
    }

</script>

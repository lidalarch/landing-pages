<template>
    <div id="PictureTitle">
        <div class="row">
            <div class="picture-title col-lg-12">
                <h1>{{ promo.title }}</h1>
                <button class="btn btn-danger">
                    <a
                            :href="promo.button.url"
                            target="_blank"
                    >
                        {{ promo.button.text }}
                    </a>
                </button>
                <div class="cards row">

                    <Card :card="card" v-for="card of promo.cards" :key="card.id" :class="'card ' + columnClass"/>


                </div>
            </div>
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
            columnClass() {
                if ((this.promo.cards.length >= 5)) {
                    return 'col-lg-4';
                } else {
                    return 'col-lg-' + 12 / this.promo.cards.length;
                }
            },

            cardsView() {
                let result = '';
                if ((this.promo.cards.length >= 4)) {
                    for (let card of this.promo.cards) {
                        if (card.id % 2 === 1) {
                            result += '<Card :card="' + card + '"/>';
                        } else {
                            result += '<Card :card="' + card + '"/><div class="w-100 d-none d-md-block d-lg-none"></div>';
                        }
                    }
                } else {
                    for (let card of this.promo.cards) {
                        result += '<Card :card="' + card + '"/>';
                    }
                }
                return result;
            }
        },
    }

</script>

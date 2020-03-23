<template>
    <div id="app" class="container-fluid">
        <PictureTitle :promo="promo"/>
        <BlockMain :block="blockMain"/>
        <BlockDetails :block="blockDetalis"/>
        <BlockDetails :block="blockFeedback"/>
    </div>
</template>

<script>
    import './scss/app.scss';

    import PictureTitle from './components/PictureTitle.vue'
    import BlockMain from './components/BlockMain.vue'
    import BlockDetails from './components/BlockDetails.vue'

    export default {
        name: 'App',
        components: {
            PictureTitle,
            BlockMain,
            BlockDetails,
        },
        data() {
            return {
                promo: {
                    title: 'Тестируйте макеты упаковок на сервисе Анкетолог',
                    button: {
                        text: 'Создать опрос',
                        url: 'http://vuex.vuejs.org/',
                    },
                },

                blockMain: {
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
                    ],
                },

                blockDetalis: {
                    class: 'testing',
                    title: 'Что тестируют на нашем сервисе?',
                    subtitle: 'тестирование макетов онлайн',
                    cards: [
                        {
                            text: 'Логотипы',
                            icon: '',
                            picture: '/img/pictures/undraw_logo_design_bjnx.svg',
                            id: 1,
                            num: '',
                        },
                        {
                            text: 'Рекламные материалы',
                            icon: '',
                            picture: '/img/pictures/undraw_all_the_data_h4ki.svg',
                            id: 2,
                            num: '',
                        },
                        {
                            text: 'Упаковку',
                            icon: '',
                            picture: '/img/pictures/undraw_deliveries_131a.svg',
                            id: 3,
                            num: '',
                        },
                        {
                            text: 'Иллюстрации, баннеры, плакаты, обложки',
                            icon: '',
                            picture: '/img/pictures/undraw_art_museum_8or4.svg',
                            id: 4,
                            num: '',
                        },
                        {
                            text: 'Элементы навигации',
                            icon: '',
                            picture: '/img/pictures/undraw_dashboard_nklg.svg',
                            id: 5,
                            num: '',
                        },
                    ],
                    picture: '', // ../assets/adult-business-deal-colleague-1265902.jpeg',
                },

                blockFeedback: {
                    class: 'feedback',
                    title: 'Кто тестирует на нашем сервисе?',
                    subtitle: '',
                    cards: [
                        {
                            text: '',
                            icon: '/img/clients/feedback-ngs-logo.png',
                            picture: '',
                            id: 1,
                            num: '',
                        },
                        {
                            text: '',
                            icon: '/img/clients/feedback-rtk-logo.png',
                            picture: '',
                            id: 2,
                            num: '',
                        },
                        {
                            text: '',
                            icon: '/img/clients/feedback-ucweb-logo.png',
                            picture: '',
                            id: 3,
                            num: '',
                        },
                        {
                            text: '',
                            icon: '/img/clients/feedback-delovie_linii-logo.png',
                            picture: '',
                            id: 4,
                            num: '',
                        },
                        {
                            text: '',
                            icon: '/img/clients/feedback-marriott-logo.png',
                            picture: '',
                            id: 5,
                            num: '',
                        },
                        {
                            text: '',
                            icon: '/img/clients/feedback-uvelka-logo.png',
                            picture: '',
                            id: 6,
                            num: '',
                        },
                        {
                            text: '',
                            icon: '/img/clients/feedback-dodo_pizza-logo.png',
                            picture: '',
                            id: 7,
                            num: '',
                        },
                        {
                            text: '',
                            icon: '/img/clients/feedback-la_redoute-logo.png',
                            picture: '',
                            id: 8,
                            num: '',
                        },
                        {
                            text: '',
                            icon: '/img/clients/feedback-zarpl_ru-logo.png',
                            picture: '',
                            id: 9,
                            num: '',
                        },
                        {
                            text: '',
                            icon: '/img/clients/feedback-atb-logo.png',
                            picture: '',
                            id: 10,
                            num: '',
                        },
                        {
                            text: '',
                            icon: '/img/clients/feedback-plast_rep-logo.png',
                            picture: '',
                            id: 11,
                            num: '',
                        },
                        {
                            text: '',
                            icon: '/img/clients/feedback-vse_mayki-logo.png',
                            picture: '',
                            id: 12,
                            num: '',
                        },
                    ],
                    picture: '',
                },
            };
        },
    }
</script>

<style lang="scss">

</style>

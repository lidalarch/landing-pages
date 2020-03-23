<template>
    <div id="app" class="container-fluid">
        <PictureTitle :promo="promo"/>
        <BlockMain :block="blockMain"/>
        <BlockDetails :block="blockDetalis"/>
        <BlockDetails :block="blockFeedback"/>
        <BlockDetails :block="blockPluses"/>
        <BlockContacts :block="blockContacts"/>
    </div>
</template>

<script>
    import './scss/app.scss';

    import PictureTitle from './components/PictureTitle.vue'
    import BlockMain from './components/BlockMain.vue'
    import BlockDetails from './components/BlockDetails.vue'
    import BlockContacts from './components/BlockContacts.vue'

    export default {
        name: 'App',
        components: {
            PictureTitle,
            BlockMain,
            BlockDetails,
            BlockContacts,
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
                    picture: '',
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

                blockPluses: {
                    class: 'pluses',
                    title: 'Наши преимущества',
                    subtitle: 'тестирование макетов онлайн',
                    cards: [
                        {
                            text: 'Возможность тестирования любых макетов и медиафайлов',
                            icon: '/img/icons/product.svg',
                            picture: '',
                            id: 1,
                            num: '',
                        },
                        {
                            text: 'Все данные и история тестирований  в любой момент доступны в личном кабинете',
                            icon: '/img/icons/computer.svg',
                            picture: '',
                            id: 2,
                            num: '',
                        },
                        {
                            text: 'Результаты за 1 день',
                            icon: '/img/icons/stopwatch.svg',
                            picture: '',
                            id: 3,
                            num: '',
                        },
                        {
                            text: 'Тестирование «под ключ» на одном сервисе',
                            icon: '/img/icons/management.svg',
                            picture: '',
                            id: 4,
                            num: '',
                        },
                        {
                            text: 'Социологическая экспертиза анкет',
                            icon: '/img/icons/dialog.svg',
                            picture: '',
                            id: 5,
                            num: '',
                        },
                    ],
                    picture: 'Yes', // ../assets/adult-business-deal-colleague-1265902.jpeg,
                },

                blockContacts: {
                    contactCards: [
                        {
                            id: 1,
                            title: 'Создайте анкету и проведите исследование самостоятельно',
                            text: 'Более 100 готовых шаблонов анкет для разных целей',
                            contacts: [],
                            button: {
                                text: 'создать опрос самостоятельно',
                                url: 'http://vuex.vuejs.org/',
                            },
                            num: '01',
                        },
                        {
                            id: 2,
                            title: 'Доверьте всю организацию исследования специалистам',
                            contacts: [
                                {
                                    id: 1,
                                    icon: '/img/contacts/photo_small.jpg',
                                    name:'Василий Жаворонков',
                                    position:'руководитель социологической cлужбы',
                                    mail: 'zhavoronkov@anketolog.ru',
                                },
                                {
                                    id: 2,
                                    icon: '/img/contacts/photo_small-1.jpg',
                                    name:'Наталья Пономаренко',
                                    position:'менеджер по работе с клиентами',
                                    mail: 'n.ponomarenko@anketolog.ru',
                                },
                            ],
                            button: {
                                text: 'оставить заявку на исследование',
                                url: 'http://vuex.vuejs.org/',
                            },
                            num: '02',
                        },
                    ],
                    picture: 'Yes',
                },
            };
        },
    }
</script>

<style lang="scss">

</style>

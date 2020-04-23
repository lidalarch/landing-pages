<template>
    <div id="page1" class="container-fluid page">
        <PictureTitle :promo="promo"/>
        <BlockMain :block="blockMain"/>
        <BlockDetails :block="blockDetalis"/>
        <BlockDetails :block="blockFeedback"/>
        <BlockCarousel :block="blockCarousel"/>
        <BlockDetails :block="blockPluses"/>
        <BlockContacts :block="blockContacts"/>
        <div class="bg-picture"></div>
    </div>
</template>

<script>

    import PictureTitle from './components/PictureTitle.vue'
    import BlockMain from './components/BlockMain.vue'
    import BlockDetails from './components/BlockDetails.vue'
    import BlockCarousel from './components/BlockCarousel.vue'
    import BlockContacts from './components/BlockContacts.vue'

    export default {
        name: 'Page1',
        components: {
            PictureTitle,
            BlockMain,
            BlockDetails,
            BlockCarousel,
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
                            id: 1,
                            num: '01',
                        },
                        {
                            text: 'Подбор аудитории для тестирования по 70 параметрам',
                            icon: '/img/icons/28-option.svg',
                            id: 2,
                            num: '02',
                        },
                        {
                            text: 'Личный кабинет с фильтрами для анализа данных',
                            icon: '/img/icons/69-web-layout.svg',
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
                            picture: '/img/pictures/undraw_logo_design_bjnx.svg',
                            id: 1,
                        },
                        {
                            text: 'Рекламные материалы',
                            picture: '/img/pictures/undraw_all_the_data_h4ki.svg',
                            id: 2,
                        },
                        {
                            text: 'Упаковку',
                            picture: '/img/pictures/undraw_deliveries_131a.svg',
                            id: 3,
                        },
                        {
                            text: 'Иллюстрации, баннеры, плакаты, обложки',
                            picture: '/img/pictures/undraw_art_museum_8or4.svg',
                            id: 4,
                        },
                        {
                            text: 'Элементы навигации',
                            picture: '/img/pictures/undraw_dashboard_nklg.svg',
                            id: 5,
                        },
                    ],
                    picture: false,
                },

                blockFeedback: {
                    class: 'feedback',
                    title: 'Кто тестирует на нашем сервисе?',
                    subtitle: false,
                    cards: [
                        {
                            icon: '/img/clients/feedback-ngs-logo.png',
                            id: 1,
                        },
                        {
                            icon: '/img/clients/feedback-rtk-logo.png',
                            id: 2,
                        },
                        {
                            icon: '/img/clients/feedback-ucweb-logo.png',
                            id: 3,
                        },
                        {
                            icon: '/img/clients/feedback-delovie_linii-logo.png',
                            id: 4,
                        },
                        {
                            icon: '/img/clients/feedback-marriott-logo.png',
                            id: 5,
                        },
                        {
                            icon: '/img/clients/feedback-uvelka-logo.png',
                            id: 6,
                        },
                        {
                            icon: '/img/clients/feedback-dodo_pizza-logo.png',
                            id: 7,
                        },
                        {
                            icon: '/img/clients/feedback-la_redoute-logo.png',
                            id: 8,
                        },
                        {
                            icon: '/img/clients/feedback-zarpl_ru-logo.png',
                            id: 9,
                        },
                        {
                            icon: '/img/clients/feedback-atb-logo.png',
                            id: 10,
                        },
                        {
                            icon: '/img/clients/feedback-plast_rep-logo.png',
                            id: 11,
                        },
                        {
                            icon: '/img/clients/feedback-vse_mayki-logo.png',
                            id: 12,
                        },
                    ],
                    picture: false,
                },

                blockCarousel: {
                    class: 'page1-carousel',
                    title: 'Как это работает',
                    subtitle: 'тестирование макетов онлайн',
                    //text: 'Загружайте макеты в SaaS\u2011конструктор опросов Анкетолог',
                    slides: [
                        {
                            id: 1,
                            text: 'Загружайте макеты в SaaS\u2011конструктор опросов Анкетолог',
                            picture: '/img/slides/Browser.png',
                            isActive: true,
                        },
                        {
                            id: 2,
                            text: 'Выбираете аудиторию для тестирования',
                            picture: '/img/slides/Browser_1-1.png',
                            isActive: false,
                        },
                        {
                            id: 3,
                            text: 'Собираете результаты',
                            picture: '/img/slides/Browser_2-1.png',
                            isActive: false,
                        },
                    ],
                    picture: false,
                    button: {
                        text: 'протестировать свой макет',
                        url: 'http://vuex.vuejs.org/',
                    },
                },

                blockPluses: {
                    class: 'pluses',
                    title: 'Наши преимущества',
                    subtitle: 'тестирование макетов онлайн',
                    cards: [
                        {
                            text: 'Возможность тестирования любых макетов и медиафайлов',
                            icon: '/img/icons/product.svg',
                            id: 1,
                        },
                        {
                            text: 'Все данные и история тестирований в любой момент доступны в личном кабинете',
                            icon: '/img/icons/computer.svg',
                            id: 2,
                        },
                        {
                            text: 'Результаты за 1 день',
                            icon: '/img/icons/stopwatch.svg',
                            id: 3,
                        },
                        {
                            text: 'Тестирование «под ключ» на\u00A0одном сервисе',
                            icon: '/img/icons/management.svg',
                            id: 4,
                        },
                        {
                            text: 'Социологическая экспертиза анкет',
                            icon: '/img/icons/dialog.svg',
                            id: 5,
                        },
                    ],
                    picture: false,
                },

                blockContacts: {
                    contactCards: [
                        {
                            id: 1,
                            title: 'Создайте анкету и\u00A0проведите исследование самостоятельно',
                            text: 'Более 100 готовых шаблонов анкет для\u00A0разных целей',
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
                                    name: 'Василий Жаворонков',
                                    position: 'руководитель социологической cлужбы',
                                    mail: 'zhavoronkov@anketolog.ru',
                                },
                                {
                                    id: 2,
                                    icon: '/img/contacts/photo_small-1.jpg',
                                    name: 'Наталья Пономаренко',
                                    position: 'менеджер по работе с клиентами',
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
                    picture: true,
                },

                footer: {
                    lists: [
                        {
                            name: 'constr',
                            title: 'Конструктор анкет',
                            items: [
                                {
                                    id: 1,
                                    text: 'Тарифы',
                                    link: '#',
                                },
                                {
                                    id: 2,
                                    text: 'Возможности',
                                    link: '#',
                                },
                                {
                                    id: 3,
                                    text: 'Образцы анкет',
                                    link: '#',
                                },
                                {
                                    id: 4,
                                    text: 'Онлайн-панель',
                                    link: '#',
                                },
                                {
                                    id: 5,
                                    text: 'Демо-версия онлайн-панели',
                                    link: '#',
                                },
                            ],
                        },
                        {
                            name: 'resp',
                            title: 'Панель респондентов',
                            items: [
                                {
                                    id: 1,
                                    text: 'Призы и промокоды',
                                    link: '#',
                                },
                                {
                                    id: 2,
                                    text: 'Вопрос-ответ',
                                    link: '#',
                                },
                                {
                                    id: 3,
                                    text: 'Для спонсоров',
                                    link: '#',
                                },
                            ],
                        },
                        {
                            name: 'shop',
                            title: 'Магазин Исследований',
                            items: [
                                {
                                    id: 1,
                                    text: 'Каталог исследований',
                                    link: '#',
                                },
                                {
                                    id: 2,
                                    text: 'О магазине исследований',
                                    link: '#',
                                },
                                {
                                    id: 3,
                                    text: 'Экспертам',
                                    link: '#',
                                },
                            ],
                        },
                        {
                            name: 'anketolog',
                            title: 'Информационный ресурс Анкетолог',
                            items: [
                                {
                                    id: 1,
                                    text: 'Общедоступные исследования',
                                    link: '#',
                                },
                                {
                                    id: 2,
                                    text: 'Публикации',
                                    link: '#',
                                },
                                {
                                    id: 3,
                                    text: 'Для СМИ',
                                    link: '#',
                                },
                            ],
                        },
                        {
                            name: 'info',
                            title: 'Информация',
                            items: [
                                {
                                    id: 1,
                                    text: 'База знаний',
                                    link: '#',
                                },
                                {
                                    id: 2,
                                    text: 'О проекте',
                                    link: '#',
                                },
                                {
                                    id: 3,
                                    text: 'Документы',
                                    link: '#',
                                },
                                {
                                    id: 4,
                                    text: 'Конаткты',
                                    link: '#',
                                },
                                {
                                    id: 5,
                                    text: 'Блог',
                                    link: '#',
                                },
                            ],
                        },
                        {
                            name: 'serv',
                            title: 'Услуги',
                            items: [
                                {
                                    id: 1,
                                    text: 'Опросы «под ключ»',
                                    link: '#',
                                },
                                {
                                    id: 2,
                                    text: 'Маркетинговые исследования',
                                    link: '#',
                                },
                            ],
                        },
                        {
                            name: 'partn',
                            title: 'Партнерская программа',
                            items: [
                                {
                                    id: 1,
                                    text: 'Программа привлечения респондентов для онлайн-панели',
                                    link: '#',
                                },
                                {
                                    id: 2,
                                    text: 'Программа привлечения заказчиков маркетинговых исследований',
                                    link: '#',
                                },

                            ],
                        },
                    ],
                },
            };
        },
    }
</script>

<template>
    <div id="page3" class="container-fluid page">
        <PictureTitle :promo="promo"/>
        <BlockMain :block="blockMain"/>
        <BlockDetails :block="blockCanDo"/>
        <BlockDetails :block="blockDetalis"/>
        <BlockDetails :block="blockPluses"/>
        <BlockContacts :block="blockContacts"/>
    </div>
</template>

<script>

    import PictureTitle from './components/PictureTitle.vue'
    import BlockMain from './components/BlockMain.vue'
    import BlockDetails from './components/BlockDetails.vue'
    import BlockContacts from './components/BlockContacts.vue'

    export default {
        name: 'Page2',
        components: {
            PictureTitle,
            BlockMain,
            BlockDetails,
            BlockContacts,
        },
        data() {
            return {
                promo: {
                    title: 'Опрашивайте сотрудников и клиентов с сервисом Анкетолог',
                    button: {
                        text: 'Создать опрос',
                        url: 'http://vuex.vuejs.org/',
                    },
                },

                blockMain: {
                    cards: [
                        {
                            text: 'Многофункциональный онлайн-сервис для проведения опросов',
                            icon: '/img/icons/1-computer-business.svg',
                            picture: '',
                            id: 1,
                            num: '01',
                        },
                        {
                            text: '18 типов вопросов',
                            icon: '/img/icons/36-web-browser.svg',
                            picture: '',
                            id: 2,
                            num: '02',
                        },
                        {
                            text: 'Удобные фильтры для анализа результатов',
                            icon: '/img/icons/29-web-browser.svg',
                            picture: '',
                            id: 3,
                            num: '03',
                        },
                        {
                            text: '10 типов сбора данных',
                            icon: '/img/icons/50-document-financial.svg',
                            picture: '',
                            id: 4,
                            num: '04',
                        },
                    ],
                },

                blockCanDo: {
                    class: 'can-do',
                    title: 'Сервис Анкетолог позволяет:',
                    subtitle: 'Опрос сотрудников',
                    cards: [
                        {
                            text: 'Вести мониторинг атмосферы в коллективе',
                            icon: '/img/icons/team.svg',
                            picture: '',
                            id: 1,
                            num: '',
                        },
                        {
                            text: 'Проводить опросы 360',
                            icon: '/img/icons/collaboration.svg',
                            picture: '',
                            id: 2,
                            num: '',
                        },
                        {
                            text: 'Измерять удовлетворенность и вовлеченнсть сотрудников',
                            icon: '/img/icons/brainstorming.svg',
                            picture: '',
                            id: 3,
                            num: '',
                        },
                        {
                            text: 'Рассчитывать индекс NPS',
                            icon: '/img/icons/teamwork.svg',
                            picture: '',
                            id: 4,
                            num: '',
                        },
                        {
                            text: 'Контролировать работу всех отделов компании',
                            icon: '/img/icons/sharing.svg',
                            picture: '',
                            id: 5,
                            num: '',
                        },
                        {
                            text: 'Привлекать клиентов для оценки работы сотрудников',
                            icon: '/img/icons/work-team.svg',
                            picture: '',
                            id: 6,
                            num: '',
                        },
                        {
                            text: 'Собирать мнения и предложения клиентов о продукте',
                            icon: '/img/icons/support.svg',
                            picture: '',
                            id: 7,
                            num: '',
                        },
                        {
                            text: 'Проводить рекламные опросы, презентовать новые товары в анкетах',
                            icon: '/img/icons/promotion-1.svg',
                            picture: '',
                            id: 8,
                            num: '',
                        },
                    ],
                    picture: true,
                },

                blockDetalis: {
                    class: 'work page3-work',
                    title: 'Как это работает',
                    subtitle: 'Опрос сотрудников',
                    cards: [
                        {
                            text: '',
                            subtext: `Создается опрос в редакторе «Анкетолог» самостоятельно или с помощью
                            маркетологов-экспертов`,
                            icon: '',
                            picture: '/img/pictures/undraw_task_31wc.svg',
                            id: 1,
                            num: '01',
                        },
                        {
                            text: '',
                            subtext: `Рассылается готовая анкета по контактным адресам сотрудников
                            или клиентов`,
                            icon: '',
                            picture: '/img/pictures/undraw_hire_te5y.svg',
                            id: 2,
                            num: '02',
                        },
                        {
                            text: '',
                            subtext: `Результаты автоматически появляются в личном кабинете пользователя,
                            они доступны для анализа в режиме онлайн и выгрузки в нескольких удобных
                            форматах`,
                            icon: '',
                            picture: '/img/pictures/undraw_marketing_v0iu.svg',
                            id: 3,
                            num: '03',
                        },
                    ],
                    picture: true,
                },

                blockPluses: {
                    class: 'page3-pluses',
                    title: 'Преимущества сервиса «Анкетолог»',
                    subtitle: 'Опрос сотрудников',
                    cards: [
                        {
                            text: 'Удобный и интуитивно понятный интерфейс',
                            subtext: ``,
                            icon: '/img/icons/computer.svg',
                            picture: '',
                            id: 1,
                            num: '',
                        },
                        {
                            text: 'Автоматический расчет индекса NPS',
                            subtext: ``,
                            icon: '/img/icons/management.svg',
                            picture: '',
                            id: 2,
                            num: '',
                        },
                        {
                            text: 'Email- и смс-рассылки анкет',
                            subtext: ``,
                            icon: '/img/icons/email.svg',
                            picture: '',
                            id: 3,
                            num: '',
                        },
                        {
                            text: 'Возможность вставлять в анкету любые медиафайлы',
                            subtext: '',
                            icon: '/img/icons/video.svg',
                            picture: '',
                            id: 4,
                            num: '',
                        },
                        {
                            text: 'Настройка внешнего вида и корпоративного стиля',
                            subtext: '',
                            icon: '/img/icons/paint.svg',
                            picture: '',
                            id: 5,
                            num: '',
                        },
                        {
                            text: 'Именная ссылка на анкету',
                            subtext: '',
                            icon: '/img/icons/link.svg',
                            picture: '',
                            id: 6,
                            num: '',
                        },
                        {
                            text: 'Логические правила в анкетах',
                            subtext: '',
                            icon: '/img/icons/diagram.svg',
                            picture: '',
                            id: 7,
                            num: '',
                        },
                    ],
                    picture: true,
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
                    picture: true,
                },
            };
        },
    }
</script>

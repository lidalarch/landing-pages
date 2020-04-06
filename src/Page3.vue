<template>
    <div id="page3" class="container-fluid page">
        <PictureTitle :promo="promo"/>
        <BlockMain :block="blockMain"/>
        <BlockDetails :block="blockCanDo"/>
        <BlockDetails :block="blockWork"/>
        <BlockDetails :block="blockPluses"/>
        <BlockContacts :block="blockContacts"/>
        <div class="bg-picture"></div>
    </div>
</template>

<script>

    import PictureTitle from './components/PictureTitle.vue'
    import BlockMain from './components/BlockMain.vue'
    import BlockDetails from './components/BlockDetails.vue'
    import BlockContacts from './components/BlockContacts.vue'

    export default {
        name: 'Page3',
        components: {
            PictureTitle,
            BlockMain,
            BlockDetails,
            BlockContacts,
        },
        data() {
            return {
                promo: {
                    title: 'Опрашивайте сотрудников и\u00A0клиентов с\u00A0сервисом Анкетолог',
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
                            id: 1,
                            num: '01',
                        },
                        {
                            text: '18 типов вопросов',
                            icon: '/img/icons/36-web-browser.svg',
                            id: 2,
                            num: '02',
                        },
                        {
                            text: 'Удобные фильтры для анализа результатов',
                            icon: '/img/icons/29-web-browser.svg',
                            id: 3,
                            num: '03',
                        },
                        {
                            text: '10 типов сбора данных',
                            icon: '/img/icons/50-document-financial.svg',
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
                            id: 1,
                        },
                        {
                            text: 'Проводить опросы 360',
                            icon: '/img/icons/collaboration.svg',
                            id: 2,
                        },
                        {
                            text: 'Измерять удовлетворенность и\u00A0вовлеченнсть сотрудников',
                            icon: '/img/icons/brainstorming.svg',
                            id: 3,
                        },
                        {
                            text: 'Рассчитывать индекс NPS',
                            icon: '/img/icons/teamwork.svg',
                            id: 4,
                        },
                        {
                            text: 'Контролировать работу всех отделов компании',
                            icon: '/img/icons/sharing.svg',
                            id: 5,
                        },
                        {
                            text: 'Привлекать клиентов для оценки работы сотрудников',
                            icon: '/img/icons/work-team.svg',
                            id: 6,
                        },
                        {
                            text: 'Собирать мнения и\u00A0предложения клиентов о\u00A0продукте',
                            icon: '/img/icons/support.svg',
                            id: 7,
                        },
                        {
                            text: 'Проводить рекламные опросы, презентовать новые товары в анкетах',
                            icon: '/img/icons/promotion-1.svg',
                            id: 8,
                        },
                    ],
                    picture: true,
                },

                blockWork: {
                    class: 'work page3-work',
                    title: 'Как это работает',
                    subtitle: 'Опрос сотрудников',
                    cards: [
                        {
                            subtext: `Создается опрос в редакторе «Анкетолог» самостоятельно или с\u00A0помощью
                            маркетологов-экспертов`,
                            picture: '/img/pictures/undraw_task_31wc.svg',
                            id: 1,
                            num: '01',
                        },
                        {
                            subtext: `Рассылается готовая анкета по\u00A0контактным адресам сотрудников
                            или клиентов`,
                            picture: '/img/pictures/undraw_hire_te5y.svg',
                            id: 2,
                            num: '02',
                        },
                        {
                            subtext: `Результаты автоматически появляются в личном кабинете пользователя,
                            они доступны для анализа в режиме онлайн и выгрузки в нескольких удобных
                            форматах`,
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
                            icon: '/img/icons/computer.svg',
                            id: 1,
                        },
                        {
                            text: 'Автоматический расчет индекса NPS',
                            icon: '/img/icons/management.svg',
                            id: 2,
                        },
                        {
                            text: 'Email- и смс-рассылки анкет',
                            icon: '/img/icons/email.svg',
                            id: 3,
                        },
                        {
                            text: 'Возможность вставлять в анкету любые медиафайлы',
                            icon: '/img/icons/video.svg',
                            id: 4,
                        },
                        {
                            text: 'Настройка внешнего вида и\u00A0корпоративного стиля',
                            icon: '/img/icons/paint.svg',
                            id: 5,
                        },
                        {
                            text: 'Именная ссылка на анкету',
                            icon: '/img/icons/link.svg',
                            id: 6,
                        },
                        {
                            text: 'Логические правила в анкетах',
                            icon: '/img/icons/diagram.svg',
                            id: 7,
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

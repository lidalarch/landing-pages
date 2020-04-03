<template>
    <div id="page2" class="container-fluid page">
        <PictureTitle :promo="promo"/>
        <BlockMain :block="blockMain"/>
        <BlockCarousel :block="blockCarousel"/>
        <BlockDetails :block="blockWork"/>
        <BlockDetails :block="blockPluses"/>
        <BlockContacts :block="blockContacts"/>
    </div>
</template>

<script>

    import PictureTitle from './components/PictureTitle.vue'
    import BlockMain from './components/BlockMain.vue'
    import BlockDetails from './components/BlockDetails.vue'
    import BlockCarousel from './components/BlockCarousel.vue'
    import BlockContacts from './components/BlockContacts.vue'

    export default {
        name: 'Page2',
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
                    title: 'Опрашивайте потребителей и\u00A0клиентов с\u00A0сервисом Анкетолог',
                    button: {
                        text: 'Создать опрос',
                        url: 'http://vuex.vuejs.org/',
                    },
                },

                blockMain: {
                    cards: [
                        {
                            text: `Удобное программное обеспечение для проведения опроса и\u00A0анализа
                            результатов`,
                            icon: '/img/icons/69-web-layout.svg',
                            id: 1,
                            num: '01',
                        },
                        {
                            text: 'Портрет потребителя за 1 день',
                            icon: '/img/icons/1-user-man.svg',
                            id: 2,
                            num: '02',
                        },
                        {
                            text: 'Подбор аудитории для опроса по всей России и странам СНГ',
                            icon: '/img/icons/39-user-list.svg',
                            id: 3,
                            num: '03',
                        },
                    ],
                },

                blockCarousel: {
                    class: '',
                    title: 'Возможности анкет',
                    subtitle: 'Опрос потребителей',
                    text: `Онлайн-конструктор анкет с 18-ю типами вопросов и настройками внутренней
                    логики для создания опросов любой сложности`,
                    slides: [
                        {
                            id: 1,
                            picture: '/img/slides/slide-1.gif',
                            isActive: true,
                        },
                        {
                            id: 2,
                            picture: '/img/slides/slide-2.gif',
                            isActive: false,
                        },
                        {
                            id: 3,
                            picture: '/img/slides/slide-3.gif',
                            isActive: false,
                        },
                    ],
                    picture: true,
                    button: false,
                },

                blockWork: {
                    class: 'work',
                    title: 'Как это работает',
                    subtitle: 'Опрос потребителей',
                    cards: [
                        {
                            text: 'Создаем анкету',
                            picture: '/img/pictures/undraw_task_31wc.svg',
                            id: 1,
                            num: '01',
                        },
                        {
                            text: 'Подбираем аудиторию',
                            picture: '/img/pictures/undraw_hire_te5y.svg',
                            id: 2,
                            num: '02',
                        },
                        {
                            text: 'Запускаем опрос',
                            picture: '/img/pictures/undraw_voting_nvu7.svg',
                            id: 3,
                            num: '03',
                        },
                        {
                            text: 'Анализируем результаты',
                            picture: '/img/pictures/undraw_marketing_v0iu.svg',
                            id: 4,
                            num: '04',
                        },
                    ],
                    picture: true,
                },

                blockPluses: {
                    class: 'page2-pluses',
                    title: 'Преимущества сервиса Анкетолог',
                    subtitle: 'Опрос потребителей',
                    cards: [
                        {
                            text: 'Полный цикл',
                            subtext: `исследования потребительских предпочтений на одной платформе за 2 дня.
                            История опросов сохраняется в вашем личном кабинете`,
                            icon: '/img/icons/collaboration.svg',
                            id: 1,
                        },
                        {
                            text: 'Помощь специалистов',
                            subtext: `в проведении опроса – мы можем отредактировать или подготовить анкету
                             для опроса потребителей с нуля, а также подготовить полный отчет
                             по результатам исследования`,
                            icon: '/img/icons/support.svg',
                            id: 2,
                        },
                        {
                            text: 'Верификация',
                            subtext: `опрашиваемых респондентов и полученных ответов – каждый ответ
                            подвергается модерации, а личность респондента подтверждается по номеру телефона,
                            что гарантирует выбраковку некорректных ответов`,
                            icon: '/img/icons/woman.svg',
                            id: 3,
                        },
                        {
                            text: 'Подбор целевой аудитории',
                            subtext: 'по 70 параметрам выборки и внутренним фильтрам',
                            icon: '/img/icons/work-team.svg',
                            id: 4,
                        },
                    ],
                    picture: false,
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

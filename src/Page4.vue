<template>
    <div id="page4" class="container-fluid page">
        <PictureTitle :promo="promo"/>
        <BlockMain :block="blockMain"/>
        <BlockDetails :block="blockService"/>
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
        name: 'Page4',
        components: {
            PictureTitle,
            BlockMain,
            BlockDetails,
            BlockContacts,
        },
        data() {
            return {
                promo: {
                    title: 'Оценка узнаваемости бренда',
                    button: {
                        text: 'Создать опрос',
                        url: 'http://vuex.vuejs.org/',
                    },
                },

                blockMain: {
                    cards: [
                        {
                            text: 'Опрашивайте более 1000 человек за 1 день',
                            icon: '/img/icons/39-user-list.svg',
                            id: 1,
                            num: '01',
                        },
                        {
                            text: 'Выявляйте все показатели узнаваемости в одном исследовании',
                            icon: '/img/icons/46-pie.svg',
                            id: 2,
                            num: '02',
                        },
                        {
                            text: 'Отслеживайте известность торговой марки в\u00A0динамике',
                            icon: '/img/icons/14-bar.svg',
                            id: 3,
                            num: '03',
                        },
                    ],
                },

                blockService: {
                    class: 'service',
                    title: 'К вашим услугам',
                    subtitle: 'узнаваемость бренда',
                    cards: [
                        {
                            text: 'Облачный конструктор анкет',
                            subtext: `Облачный конструктор анкет с возможностью настраивать внутреннюю
                            логику и вставлять любые медиафайлы — чтобы создать опрос для оценки
                            вашего бренда`,
                            picture: '',
                            button: false,
                            id: 1,
                        },
                        {
                            text: '',
                            subtext: ``,
                            picture: '/img/slides/Browser.png',
                            button: false,
                            id: 2,
                        },
                        {
                            text: 'Онлайн-панель',
                            subtext: `с более чем 100 000 активных респондентов и 70 параметров настройки
                            выборки — чтобы найти аудиторию для оценки и провести репрезентативное
                            исследование`,
                            picture: '',
                            button: {
                                text: 'перейти к онлайн-панели',
                                url: 'http://vuex.vuejs.org/',
                            },
                            id: 3,
                        },
                        {
                            text: '',
                            subtext: ``,
                            picture: '/img/slides/Browser_1-1.png',
                            button: false,
                            id: 4,
                        },
                        {
                            text: 'Личный кабинет',
                            subtext: `с фильтрами для глубокого анализа данных — чтобы хранить,
                            выгружать и изучать результаты измерений ваших маркетинговых KPI`,
                            picture: '',
                            button: false,
                            id: 5,
                        },
                        {
                            text: '',
                            subtext: ``,
                            picture: '/img/slides/Browser_2-1.png',
                            button: false,
                            id: 6,
                        },
                    ],
                    picture: false,
                },

                blockPluses: {
                    class: 'page4-pluses',
                    title: 'Преимущества сервиса Анкетолог',
                    subtitle: 'узнаваемость бренда',
                    cards: [
                        {
                            text: 'Помощь экспертов в составлении опросов для оценки узнаваемости бренда',
                            subtext: `Наши маркетологи помогут сформулировать вопросы и продумать
                            внутреннюю логику анкеты, чтобы исследование было эффективным`,
                            icon: '/img/icons/support.svg',
                            id: 1,
                        },
                        {
                            text: 'Богатые возможности отображения и выгрузки данных',
                            subtext: `Результаты в личном кабинете представлены в виде удобных графиков
                             и диаграмм. Данные выгружаются в PDF, Word, Excel и SPSS`,
                            icon: '/img/icons/export.svg',
                            id: 2,
                        },
                        {
                            text: `Возможность заказать полный аналитический и статистический отчет
                            по результатам исследования узнаваемости бренда`,
                            subtext: `Отчет по результатам исследования содержит подробное описание
                            данных, в том числе в разрезе cоциально-демографических характеристик,
                            выводы и рекомендации по итогам исследования`,
                            icon: '/img/icons/analysis-1.svg',
                            id: 3,
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

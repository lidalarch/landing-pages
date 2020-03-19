<template>
    <div id="app" class="container-fluid">
        <PictureTitle/>
        <Block :block="block1"/>
    </div>
</template>

<script>
    import './scss/app.scss';
    import PictureTitle from './components/PictureTitle.vue'
    import Block from './components/Block.vue'

    export default {
        name: 'App',
        components: {
            PictureTitle,
            Block,
        },
        data() {
            return {
                block1: {
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
            };
        },
    }
</script>

<style lang="scss">

</style>

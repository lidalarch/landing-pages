<template>
    <div :class="'container-md block-carousel ' + block.class">

        <h6 v-if="block.subtitle"><i><img src="/img/icons/Ellipse.svg"/></i>{{ block.subtitle }}</h6>
        <h1>{{ block.title }}</h1>

        <slick ref="slick" :options="slickOptions">

            <div :class="'slide-item ' + (slide.isActive ? 'active' : '')"
                 v-for="slide of block.slides" :key="slide.id">
                <p>{{ slide.text }}</p>
                <img :src="slide.picture" :alt="slide.id">
            </div>
            <div :class="'slide-item ' + (slide.isActive ? 'active' : '')"
                 v-for="slide of block.slides" :key="slide.id">
                <p>{{ slide.text }}</p>
                <img :src="slide.picture" :alt="slide.id">
            </div>

        </slick>

<!--        <a class="slick-prev" v-on:click="prev"></a>-->
<!--        <a class="slick-next" v-on:click="next"></a>-->


        <div v-if="block.picture" class="background-image"></div>

        <button v-if="block.button" class="btn btn-danger">
            <a v-if="block.button.url" :href="block.button.url" target="_blank">
                {{ block.button.text }}
            </a>
        </button>

    </div>
</template>

<script>
    //import $ from 'jquery';
    import Slick from 'vue-slick';

    export default {
        name: 'BlockCarousel',
        components: {Slick},
        props: {
            block: Object,
        },

        data() {
            return {
                slickOptions: {
                    slidesToShow: 3,
                    centerMode: true,
                    centerPadding: '0px',
                    //autoplay: true,
                    autoplaySpeed: 10000,
                    dots: true,
                    infinite: true,
                    adaptiveHeight: true,
                     //prevArrow: $(".slick-prev"),
                     //nextArrow: $(".slick-next"),
                    // appendDots: $(".slick-dots"),
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                centerMode: true,
                                centerPadding: '0px',
                                slidesToShow: 1
                            }
                        },
                        {
                            breakpoint: 375,
                            settings: {
                                centerMode: true,
                                centerPadding: '0px',
                                slidesToShow: 1
                            }
                        }
                    ]
                },
            };
        },

        // methods: {
        //     next() {
        //         this.$refs.slick.next();
        //     },
        //     prev() {
        //         this.$refs.slick.prev();
        //     },
        //
        // }
    }

</script>

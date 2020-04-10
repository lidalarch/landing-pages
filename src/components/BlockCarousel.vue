<template>
    <div :class="'container-md block-carousel ' + block.class">

        <h6 v-if="block.subtitle"><i><img src="/img/icons/Ellipse.svg"/></i>{{ block.subtitle }}</h6>
        <h1>{{ block.title }}</h1>
        <p>{{ block.text }}</p>


        <div id="carousel" ref="carousel" class="carousel slide carousel-multi-item" data-ride="carousel">

            <div id="carousel-inner" class="carousel-inner" role="listbox">
                <div :class="'carousel-item ' + (slide.isActive ? 'active' : '')"
                     v-for="slide of block.slides" :key="slide.id">
                    <img :src="slide.picture" class="d-block w-100" :alt="slide.id">
                </div>
            </div>

            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>

            <ol class="carousel-indicators">
                <li :class="{active: slide.isActive}"
                    v-for="slide of block.slides" :key="slide.id"
                    data-target="#carousel" :data-slide-to="slide.id-1"></li>
            </ol>
        </div>


        <div v-if="block.picture" class="background-image"></div>


        <slick ref="slick" :options="slickOptions">

            <div :class="'slide-item ' + (slide.isActive ? 'active' : '')"
                 v-for="slide of block.slides" :key="slide.id">
                <img :src="slide.picture" :alt="slide.id">
            </div>

        </slick>


        <button v-if="block.button" class="btn btn-danger">
            <a v-if="block.button.url" :href="block.button.url" target="_blank">
                {{ block.button.text }}
            </a>
        </button>

    </div>
</template>

<script>
    // import $ from 'jquery';
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
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '600px',
                    autoplay: true,
                    autoplaySpeed: 3000,
                    dots: true,
                    infinite: true,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                centerMode: true,
                                centerPadding: '600px',
                            }
                        },
                        {
                            breakpoint: 375,
                            settings: {
                                centerMode: false,
                                slidesToShow: 1
                            }
                        }
                    ]
                },
            };
        },

        mounted() {

        }
    }

</script>

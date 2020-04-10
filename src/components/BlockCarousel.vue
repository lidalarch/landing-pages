<template>
    <div :class="'container-md block-carousel ' + block.class">

        <h6 v-if="block.subtitle"><i><img src="/img/icons/Ellipse.svg"/></i>{{ block.subtitle }}</h6>
        <h1>{{ block.title }}</h1>
        <p>{{ block.text }}</p>

        <div class="item-prev"></div>

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

        <div class="item-next"></div>

        <div v-if="block.picture" class="background-image"></div>

        <button v-if="block.button" class="btn btn-danger">
            <a v-if="block.button.url" :href="block.button.url" target="_blank">
                {{ block.button.text }}
            </a>
        </button>

    </div>
</template>

<script>
    import $ from 'jquery';

    export default {
        name: 'BlockCarousel',
        components: {},
        props: {
            block: Object,
        },

        computed: {
            // activeItems: function () {
            //     return this.block.slides.filter(function (item) {
            //         return item.isActive
            //     })
            // }
        },

        mounted() {
            //$('.carousel.carousel-multi-item .carousel-item').each(function(){
            // let next = $(this).next();
            // if (!next.length) {
            //     next = $(this).siblings(':first');
            // }
            // next.children(':first-child').clone().appendTo($(this));
            //
            // for (let i=0;i<2;i++) {
            //     next=next.next();
            //     if (!next.length) {
            //         next=$(this).siblings(':first');
            //     }
            //     next.children(':first-child').clone().appendTo($(this));
            // }
            //});
            //$(document).ready(function () {
            //      $("#carousel").on('slid.bs.carousel', function () {
            //          $('#carousel .carousel-inner .carousel-item.active').clone(true).unwrap().appendTo($('.item-prev').empty());
            //      });
           // });


            $("#carousel").on('slid.bs.carousel', this.onNewslide)

           // $('#carousel .carousel-inner .carousel-item.active').clone(true).unwrap().appendTo($('.item-prev').empty());



            // let observer = new MutationObserver(function (mutations) {
            //     mutations.forEach(function (mutation) {
            //         let newVal = $(mutation.target).prop(mutation.attributeName);
            //         if (mutation.attributeName === "class") {
            //             if (newVal === 'active') {
            //                 $('#carousel .carousel-inner .carousel-item.active').clone(true).unwrap().appendTo($('.item-prev').empty());
            //             }
            //         }
            //     });
            // });
            // let parentDOM = document.getElementById('carousel-inner');
            //
            // let items = parentDOM.getElementsByClassName('.carousel-item');
            // for (let item of items) {
            //  observer.observe(item, {
            //      attributes: true
            // });
             },
        beforeDestroy() {
            $("#carousel").off('slid.bs.carousel', this.onNewslide)
        },


        // watch: {
        //     'block.slide': function(old, newval) {
        //         //code
        //     }},


         //    this.$refs.carousel.addEventListener('slid.bs.carousel', function () {
         //                $('#carousel .carousel-inner .carousel-item.active').clone(true).unwrap().appendTo($('.item-prev').empty());
         //            }
         //    )
         // },


        methods: {
            onNewslide: function () {
                alert ('slid')
               // $('#carousel .carousel-inner .carousel-item.active').clone(true).unwrap().appendTo($('.item-prev').empty());
            }
        }


    }

</script>

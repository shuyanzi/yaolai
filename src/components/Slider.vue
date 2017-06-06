<template>
    <div class="details">
        <div class="goodsDetailsSwiper-wrap">
            <div class="swiper-container goodsDetailsSwiper">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>

</template>
<script>
    export default {
        mounted(){
            this.fnSlider();
        },
        watch:{
            // '$route':function(){
            //  alert(1);
            // }
        },
        methods:{
            fnSlider(){
                var swiper = new Swiper('.goodsDetailsSwiper', {
                    pagination: '.swiper-pagination',
                    paginationClickable: true
                });

            }
        }
    }
</script>
<style>
    .goodsDetailsSwiper-wrap{
        width: 100%;
        padding-top: 100%;
        position: relative;
    }


    .goodsDetailsSwiper{
        width: 100%;
        height: 100%;
        position: absolute;
        top:0;
        /*height: 300px;*/
        /*overflow: hidden;*/
        background: pink;
    }
    .goodsDetailsSwiper .swiper-pagination-bullet{
        background-color: #fff;
        opacity: 1;
    }
    .goodsDetailsSwiper .swiper-pagination-bullet-active{
        background: #c2a45c;
    }
</style>
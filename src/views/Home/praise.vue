<template>
  <div class="course-praise">
    <section class="text">
      <h5>
        <img src="../../assets/imgs/line-left.png" alt>
        <span>良心反馈好口碑</span>
        <img src="../../assets/imgs/line-right.png" alt>
      </h5>
    </section>
    <section class="praise-list">
      <swiper :options="swiperOption" :autoplay="true">
        <swiperSlide class="praise-item" v-for="(item,index) in list" :key="index">
          <img :src="item.src" :alt="item.desc">
        </swiperSlide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>

      <!-- <Carousel autoplay v-model="value2" loop>
        <CarouselItem class="praise-item" v-for="(item,index) in list" :key="index">
          <img :src="item.src" :alt="item.desc">
        </CarouselItem>
      </Carousel>-->
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

@Component({
  components: {
    swiper,
    swiperSlide
  }
})
export default class Praise extends Vue {
  @Provide() value2: number = 0
  @Provide() swiperOption: any = {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    observer: true,//修改swiper自己或子元素时，自动初始化swiper 
    observeParents: true,//修改swiper的父元素时，自动初始化swiper 
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    }
  }
  @Provide() list: Array<any> = [{
    src: require("../../assets/imgs/praise.jpg"),
    desc: '水1'
  }, {
    src: require("../../assets/imgs/praise.jpg"),
    desc: '水2'
  }, {
    src: require("../../assets/imgs/praise.jpg"),
    desc: '水3'
  }, {
    src: require("../../assets/imgs/praise.jpg"),
    desc: '水4'
  }, {
    src: require("../../assets/imgs/praise.jpg"),
    desc: '水5'
  }, {
    src: require("../../assets/imgs/praise.jpg"),
    desc: '水6'
  },]

}
</script>

<style lang="less">
.course-praise {
  .text {
    position: relative;
    padding: 50px 0;
    text-align: center;
    line-height: 22px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.56);
    h5 {
      position: relative;
      margin-bottom: 20px;
      font-size: 32px;
      z-index: 1;
      color: #313131;
      font-family: inherit;
      font-weight: 500;
      line-height: 1.1;
      span {
        background: #fff;
        padding: 0 40px;
      }
    }
  }
  .praise-list {
    height: 520px;
    .praise-item {
      width: 300px !important;
      display: inline-block !important;
      margin: 10px;
    }
  }
}
</style>

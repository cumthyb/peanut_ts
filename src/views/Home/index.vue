<template>
  <div class="home">
    <section class="carousel-container">
      <Carousel autoplay v-model="value2" loop>
        <CarouselItem v-for="item in carouseItems" :key="item.src">
          <router-link class="carousel-items" :to="item.herf">
            <img :src="item.src" :alt="item.desc">
          </router-link>
        </CarouselItem>
      </Carousel>
    </section>
    <section class="content">
      <CoursesCom></CoursesCom>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import CoursesCom from './courses.vue'

@Component({
  components: {
    CoursesCom
  }
})
export default class Home extends Vue {
  //data
  @Provide() value2: number = 0
  @Provide() carouseItems: Array<any> = [
    {
      src: require("../../assets/imgs/lun1.jpg"),
      herf: '/about',
      desc: '深度学习'
    },
    {
      src: require("../../assets/imgs/lun2.jpg"),
      herf: '/all',
      desc: '架构师'
    },
  ]
  mounted() {
  }
}
</script>


<style lang="less">
.home {
  margin-bottom: 100px;
  .carousel-container {
    width: 100%;
    height: 600px;
  }
  .content {
    width: 1140px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 10px;
    padding-right: 10px;
  }
}
</style>
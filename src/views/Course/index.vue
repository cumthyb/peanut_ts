<template>
  <div class="course-view-container">
    <Card class="course-card">
      <CoureseItemView :CourseItem="CourseItem"></CoureseItemView>
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator'

import CoureseItemView from '@/components/CoureseItemView/index.vue' // @ is an alias to /src

// 必须写
@Component({
  components: {
    CoureseItemView
  }
})
export default class CourseView extends Vue {
  @Provide() CourseItem = {
    imgsrc: require("../../assets/imgs/course-detail.png"),
    stds: 321,
    rank: 4
  }
}
</script>

<style lang="less">
.course-view-container {
  padding-left: 12px;
  padding-right: 12px;
  margin: 0 auto;
  width: 1200px;
  .course-card{
    background: #fff;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid #e4ecf3;
    position: relative;
    padding: 32px 0 32px 24px;
  }
}
</style>
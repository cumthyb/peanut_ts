<template>
  <div class="course-view-container">
    <div class="breadcrumb-container">
      <Breadcrumb>
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem to="/Course/classification">{{CourseItem.classification}}</BreadcrumbItem>
        <BreadcrumbItem>{{CourseItem.courseName}}</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <Card class="course-card">
      <CoureseItemView :CourseItem="CourseItem"></CoureseItemView>
    </Card>
    <section class="detail-container">
      <CourseDetail :Coursedetail="detail"></CourseDetail>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator'
import dateUtils from 'vue-dateutils';

import CoureseItemView from '@/components/CoureseItemView/index.vue' // @ is an alias to /src
import CourseDetail from '@/components/CoureseItemView/detail.vue'

// 必须写
@Component({
  components: {
    CoureseItemView,
    CourseDetail
  }
})
export default class CourseView extends Vue {
  @Provide() CourseItem = {
    imgsrc: require("../../assets/imgs/course-detail.png"),
    stds: 321,
    rank: 4,
    courseName: 'WEB全栈架构师【成长营】',
    classification: '前端',
    desc: '【跟高手学习，技能对标阿里P6+, 腾讯T2-3 】',
    price: 2354,
    pirod: this.getDateFormat(Date.now(), Date.now())

  }
  @Provide() detail: any = {}

  getDateFormat(start: number, end: number): string {
    let res = ''
    res = dateUtils.dateToStr("YYYY-MM-DD", new Date(start)) + ' 至 '
      + dateUtils.dateToStr("YYYY-MM-DD", new Date(end))
    return res
  }

}
</script>

<style lang="less">
.course-view-container {
  padding-left: 12px;
  padding-right: 12px;
  margin: 0 auto;
  width: 1200px;
  box-sizing: border-box;
  .breadcrumb-container {
    background: none;
    padding: 20px 0 20px;
  }
  .course-card {
    background: #fff;
    margin-bottom: 20px;
    border-radius: 4px;
    border: 1px solid #e4ecf3;
    position: relative;
    padding: 20px 0 20px 32px;
    .ivu-card-body {
      padding: 0;
    }
  }
  .detail-container {
  }
}
</style>
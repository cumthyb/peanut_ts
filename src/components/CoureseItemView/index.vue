<template>
  <div class="course-detail-container">
    <section class="left">
      <div class="course-detail-img">
        <img class="img-responsive" :src="CourseItem.imgsrc">
        <div class="course-detail-remask">
          <Icon class="icon" type="ios-people-outline"/>
          <span class="mhs">{{CourseItem.stds}}</span>人加入学习
          <Rate class="rate" allow-half v-model="CourseItem.rank"/>
        </div>
      </div>
    </section>
    <section class="right">
      <div class="top">
        <div class="titles"></div>
        <div class="desc"></div>
        <div class="price"></div>
        <div class="pirod"></div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop, Watch } from 'vue-property-decorator'

// 必须写
@Component({
  components: {

  }
})
export default class CourseItemView extends Vue {

  @Prop({
    type: Object,
    required: true
  }) CourseItem!: object;

  @Provide() CourseInfo: any = {}

  @Watch('CourseItem')
  onCourseItemChanged(val: any, oldVal: any) {
    debugger
  }
  mounted() {
    let _this = this
    setTimeout(() => {
      console.log(_this.CourseItem);
    }, 5000);
  }
}
</script>

<style lang="less">
.course-detail-container {
  box-sizing: border-box;
  width: 1150px;
  height: 270px;
  .left {
    position: relative;
    float: left;
    width: 480px;
    .course-detail-img {
      img {
        display: block;
        max-width: 100%;
        height: auto;
        border: 0;
      }
    }
    .course-detail-remask {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      color: #fff;
      padding: 10px;
      .icon{
        font-size: 22px;
        margin-right: 5px;
      }
      .rate{
        float: right;
      }
    }
  }
  .right {
    position: relative;
    padding-left: 24px;
    margin-left: 480px;
    font-size: 12px;
    color: #919191;
    .top {
      position: relative;
      padding-left: 24px;
      margin-left: 480px;
      font-size: 12px;
      color: #919191;
      .titles {
        margin-right: 76px;
        margin-right: 56px;
        margin-bottom: 14px;
        color: #313131;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
      }
      .desc {
      }
      .price {
      }
      .pirod {
      }
    }
  }
}
</style>

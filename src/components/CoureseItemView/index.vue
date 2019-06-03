<template>
  <div class="course-detail-container">
    <section class="brief-container"> 
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
        <div class="name">{{CourseItem.courseName}}</div>
        <div class="desc">{{CourseItem.desc}}</div>
        <div class="price">
          <span>价格</span>
          <span class="amount">￥{{CourseItem.price}}</span>
        </div>
        <div class="pirod">{{CourseItem.pirod}}</div>
      </div>
      <div class="bottom">
        <span class="btn buy">购买</span>
        <span class="btn learn">学习</span>
      </div>
    </section>
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
  .brief-container{
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
      .icon {
        font-size: 22px;
        margin-right: 5px;
      }
      .rate {
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
      font-size: 12px;
      color: #919191;
      .name {
        margin-right: 76px;
        margin-right: 56px;
        margin-bottom: 14px;
        color: #313131;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
      }
      .desc {
        margin-bottom: 16px !important;
        font-size: 12px !important;
      }
      .price {
        margin-bottom: 16px !important;
        .amount {
          font-size: 24px;
          line-height: 1;
          color: red;
        }
      }
      .pirod {
        background-color: #fafafa;
        margin-left: 0;
        padding: 16px 0 16px 16px;
        width: 580px;
      }
    }
    .bottom {
      position: absolute;
      bottom: -100px;
      right: 20px;
      .btn {
        color: #fff;
        background: #ff7200;
        border-color: #ff7200;
        opacity: 0.8;
        box-shadow: 0 6px 6px 0 rgba(255, 114, 0, 0.3);
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        touch-action: manipulation;
        cursor: pointer;
        white-space: nowrap;
        user-select: none;
        font-size: 14px;
        font-weight: 500;
        padding: 9px 12px;
        line-height: 1;
        border: 1px solid transparent;
        border-radius: 4px;
        outline: none;
        margin: 0 20px;
      }
    }
  }}

}
</style>

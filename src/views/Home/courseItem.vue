<template>
  <div class="course-card">
    <Card>
      <div>
        <router-link class="a-link" :to="{path:'/Course',query: {id:course.id}}">
          <img class="img" :src="course.imgsrc">
          <p class="title">{{course.title}}</p>
        </router-link>
        <div class="metas clearfix">
          <span class="view">
            <img src="../../assets/imgs/yuedu.svg" alt>
            <span>{{course.view}}</span>
          </span>
          <span class="comment">
            <img src="../../assets/imgs/pinglun.svg" alt>
            {{course.comment}}
          </span>
          <span class="price">{{course.price}}元</span>
        </div>
      </div>
    </Card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator'

@Component({
  components: {

  }
})
export default class courseItem extends Vue {
  @Prop({ default: {} })
  course: any
}
</script>

<style lang="less">
.course-card {
  display: inline-block;
  margin-bottom: 30px;
  .ivu-card-body {
    padding: 0;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
    border: none;
    background-color: #fff;
    box-sizing: border-box;
    width: 266px;
    .a-link {
      text-decoration: none;
      .img {
        text-decoration: none;
        display: block;
        max-width: 100%;
        height: auto;
        vertical-align: middle;
        border: 0;
        padding: 0;
        position: relative;
        overflow: hidden;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        box-sizing: border-box;
      }
      .title {
        margin-top: 10px;
        padding: 0 10px;
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
      }
    }
    .metas {
      position: relative;
      padding: 10px;
      color: #c1c1c1;
      .view {
        padding: 0 5px;
      }
      .comment {
        padding: 0 5px;
      }
      .price {
        position: absolute;
        right: 20px;
        color: #ed3e3e;
        font-size: 14px;
        margin-right: 0;
      }
    }
  }
}
</style>

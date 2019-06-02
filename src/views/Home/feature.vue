<template>
  <div class="course-feature">
    <section class="text">
      <h5>
<img src="../../assets/imgs/line-left.png" alt="">
        <span>课程特色</span>
<img src="../../assets/imgs/line-right.png" alt="">
      </h5>
    </section>
    <section class="feature-list">
      <Card class="feature-item" v-for="item in list" :key="item.content">
        <p slot="title" class="title">
          <Icon type="ios-star"></Icon>
          {{item.title}}
        </p>
        <p class="content">{{item.content}}</p>
      </Card>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator'

@Component({
  components: {

  }
})
export default class Feature extends Vue {
  @Provide() list: Array<any> = [{
    title: '特色一',
    content: '名师嘴对嘴，7*24在线答疑'
  }, {
    title: '特色二',
    content: '手把手教会，不会抱腿包睡'
  }, {
    title: '特色三',
    content: '推荐就业，大厂搬砖有望'
  }
    , {
    title: '特色五',
    content: '在线作业系统，在线反馈(吐槽)'
  },
  {
    title: '特色六',
    content: '知心大叔，360°生活照顾'
  },
  {
    title: '特色七',
    content: '就业服务指导，人生、理想聊死你'
  },]

}
</script>

<style lang="less">
.course-feature {
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
  .feature-list {
    padding-left: 100px;
    .feature-item {
      width: 300px;
      display: inline-block;
      margin: 10px;
    }
  }
}
</style>

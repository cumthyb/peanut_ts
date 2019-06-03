<template>
  <div class="courses-container">
    <section class="text-line">
      <h5>
<img src="../../assets/imgs/line-left.png" alt="">
        <span>精品课程</span>
<img src="../../assets/imgs/line-right.png" alt="">

      </h5>
      <div class="subtitle">一线名师系统、专业、高效的系列课程</div>
    </section>
    <section class="course-filter">
      <div class="left">
        <ul>
          <li
            v-for="item in filters"
            :key="item.key"
            :class="{ active: item.active }"
            @click="onFilterClick(item.key)"
          >
            <span>{{item.label}}</span>
          </li>
        </ul>
      </div>
      <div class="right">
        <ButtonGroup>
          <Button
            v-for="btn in filterBtns"
            :type="btn.active?'primary':'default'"
            :key="btn.key"
            @click="onSortClick(btn)"
          >{{btn.label}}</Button>
        </ButtonGroup>
      </div>
    </section>
    <section class="course-list">
      <CourseItem class="course-item" v-for="item in courseList" :key="item.id" :course="item"></CourseItem>
    </section>
    <section class="course-feature">
      <CourseFeature></CourseFeature>
    </section>
    <section class="course-praise">
      <Praise></Praise>
    </section>
    <div class="float-consult">
      <ButtonGroup vertical>
        <Button class="btn" v-for="item in contracts" :key="item.label" @click="onIconClick(item)">
          <Poptip :title="item.label" placement="left">
            <img class="icon" :src="item.icon" :alt="item.label">
            <img class="tip-img" slot="content" v-if="item.src" :src="item.src" :alt="item.label">
            <p slot="content" v-else="item.src">{{item.text}}</p>
          </Poptip>
        </Button>
      </ButtonGroup>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator'
import CourseItem from './courseItem.vue'
import CourseFeature from './feature.vue'
import Praise from './praise.vue'
@Component({
  components: {
    CourseItem,
    CourseFeature,
    Praise
  }
})
export default class Courses extends Vue {
  @Provide() filters: Array<any> = [
    {
      key: 'all',
      label: '全部',
      active: true
    },
    {
      key: 'type1',
      label: '类型1',
      active: false
    },
    {
      key: 'type2',
      label: '类型2',
      active: false
    },
    {
      key: 'type3',
      label: '类型3',
      active: false
    },
    {
      key: 'type4',
      label: '类型4',
      active: false
    }
  ]

  @Provide() filterBtns: Array<any> = [
    {
      key: 'new',
      label: '最新',
      active: true
    },
    {
      key: 'hot',
      label: '最热',
      active: false
    },
    {
      key: 'rec',
      label: '推荐',
      active: false
    },
  ]

  @Provide() contracts: Array<any> = [
    {
      icon: require("../../assets/imgs/weixin.svg"),
      src: require("../../assets/imgs/weixin.jpg"),
      label: '微信'
    },
    {
      icon: require("../../assets/imgs/qq.svg"),
      src: require("../../assets/imgs/qq.jpg"),
      label: 'QQ'
    },
    {
      icon: require("../../assets/imgs/email.svg"),
      text: 'cumthyb@163.com',
      label: '邮箱'
    },
  ]

  @Provide() courseList: Array<any> = [{
    id: 0,
    herf: 'wwww.baidu.com',
    imgsrc: require("../../assets/imgs/coursedemo.jpg"),
    title: '深度学习发展现状与展望',
    view: 5321,
    comment: 12,
    price:2400
  }, {
    id: 1,
    herf: 'wwww.baidu.com',
    imgsrc: require("../../assets/imgs/coursedemo.jpg"),
    title: '深度学习发展现状与展望',
    view: 5321,
    comment: 12,
    price:2001
  }, {
    id: 2,
    herf: 'wwww.baidu.com',
    imgsrc: require("../../assets/imgs/coursedemo.jpg"),
    title: '深度学习发展现状与展望',
    view: 5321,
    comment: 12,
    price:21200
  }, {
    id: 3,
    herf: 'wwww.baidu.com',
    imgsrc: require("../../assets/imgs/coursedemo.jpg"),
    title: '深度学习发展现状与展望',
    view: 5321,
    comment: 12,
    price:8200
  }, {
    id: 4,
    herf: 'wwww.baidu.com',
    imgsrc: require("../../assets/imgs/coursedemo.jpg"),
    title: '深度学习发展现状与展望',
    view: 5321,
    comment: 12,
    price:2000
  }, {
    id: 5,
    herf: 'wwww.baidu.com',
    imgsrc: require("../../assets/imgs/coursedemo.jpg"),
    title: '深度学习发展现状与展望',
    view: 5321,
    comment: 12,
    price:2200
  }, {
    id: 6,
    herf: 'wwww.baidu.com',
    imgsrc: require("../../assets/imgs/coursedemo.jpg"),
    title: '深度学习发展现状与展望',
    view: 5321,
    comment: 12,
    price:100
  }, {
    id: 7,
    herf: 'wwww.baidu.com',
    imgsrc: require("../../assets/imgs/coursedemo.jpg"),
    title: '深度学习发展现状与展望',
    view: 5321,
    comment: 12,
    price:500
  }, {
    id: 8,
    herf: 'wwww.baidu.com',
    imgsrc: require("../../assets/imgs/coursedemo.jpg"),
    title: '深度学习发展现状与展望',
    view: 5321,
    comment: 12,
    price:800
  }]

  onFilterClick(key: string) {
    this.filters.map(item => {
      item.active = item.key === key
    })
    this.doSearch(key)
  }

  onSortClick(btn: any) {
    this.filterBtns.map(item => {
      item.active = item.key === btn.key
    })
    console.log('sort ', btn)
  }

  onIconClick(btn: any) {
    console.log('icon ', btn)
  }

  doSearch(filter: string) {
    console.log('filter ', filter)
  }

  mounted() {
  }
}
</script>


<style lang="less">
.courses-container {
  .text-line {
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
    .subtitle {
      font-size: 16px;
      color: #919191;
    }
  }
  .course-filter {
    position: relative;
    min-height: 48px;
    margin: 0 0 20px;
    padding-right: 150px;
    .left {
      ul {
        list-style: none;
        height: 42px;
        li {
          float: left;
          margin: 0 20px;
          height: 42px;
          line-height: 42px;
          cursor: pointer;
          &:hover {
            background-color: #f5f5f5;
          }
          span {
            padding: 10px 15px;
            color: #616161;
          }
        }
        .active {
          background: #ff7200;
          border-radius: 4px;
          transition: all 0.3s ease;
          span {
            color: #fff;
          }
        }
      }
    }
    .right {
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .course-list {
    margin-left: -15px;
    margin-right: -15px;
    .course-item {
      position: relative;
      padding: 8px;
      color: #c1c1c1;
    }
  }
  .float-consult {
    position: fixed;
    right: 0;
    top: 50%;
    visibility: visible;
    z-index: 999;
    .btn {
      background: #ffa51f;
      border-color: #ee940e;

      .icon {
        width: 20px;
        height: 22px;
      }
      .tip-img {
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>
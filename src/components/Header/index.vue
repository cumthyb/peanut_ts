<template>
  <div id="navbar">
    <section id="left">
      <ul>
        <li>
          <router-link class="logo" to="/">
            <img src="../../assets/imgs/logo.png" alt="logo" width="120px" height="50px">
          </router-link>
        </li>
        <li v-for="item in navs" :key="item.router">
          <router-link class="router-item" :to="item.router">
            <span class="text">{{item.desc}}</span>
          </router-link>
        </li>
      </ul>
    </section>
    <section id="right">
      <Input suffix="ios-search" placeholder="搜索" style="width: auto"/>
      <router-link  to="/Login">
        <span class="btn longin" @click="onLogin">登录</span>
      </router-link>

      <router-link to="/Login">
        <span class="btn register" @click="onRegister">注册</span>
      </router-link>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'
export default class Header extends Vue {
  //data
  @Provide() navs: any = [{
    router: '/',
    desc: '首页'
  },
  {
    router: '/about',
    desc: '精品课'
  }, {
    router: '/all',
    desc: '全栈工程师训练营'
  }, {
    router: '/resumn',
    desc: '大咖简介'
  }
  ]

  onLogin() {
    console.log('onLogin')
  }

  onRegister() {
    console.log('onRegister')

  }

}
</script>

<style lang="less">
#navbar {
  background-color: #fff;
  height: 56px;
  line-height: 56px;
  display: flex;
  #left {
    flex: 1;
    float: left;
    margin: 0;
    padding-left: 20px;
    ul {
      padding-left: 0;
      list-style: none;
      li {
        float: left;
        margin-right: 20px;
        height: 56px;
        line-height: 56px;
        a {
          text-decoration: none;
          padding: 22px 20px 20px;
          font-size: 14px;
          color: #616161;
        }
        .logo {
          display: inline-block;
          padding: 3px 20px 3px 0;
          height: 56px;
          width: 120px;
          line-height: 50px;
          padding-right: 8px;
          color: #313131;
          .img {
            height: 50px;
            width: auto;
            display: block;
          }
        }
      }
    }
  }
  #right {
    flex: 1;
    text-align: right;
    padding-right: 50px;
    .search {
      margin-right: 20px;
    }
    .btn {
      margin-left: 20px;
      cursor: pointer;
    }
  }
}
</style>

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
      <Input suffix="ios-search" placeholder="搜索" style="width: auto" @on-enter="onSearchEnter"/>
      <div class="btns">
        <router-link to="/Login">
          <span class="btn longin" @click="onLogin">登录</span>
        </router-link>
        <router-link to="/Login">
          <span class="btn register" @click="onRegister">注册</span>
        </router-link>
      </div>
      <div class="userinfo">
        <Poptip title="通知" content="content" placement="bottom-start">
          <Icon class="icon" type="ios-notifications-outline"/>
        </Poptip>

        <Icon class="icon" type="ios-contact-outline" @click="onClickUser"/>
      </div>
    </section>
    <section id="float-user" v-if="showFloatUser">
      <div class="info">
        <router-link class="avatar" to="/">
          <img src="../../assets/imgs/avatar.png" alt>
        </router-link>
        <div class="desc">
          <p class="name">哈哈</p>
          <p class="grade">普通学员</p>
        </div>
      </div>
      <div class="link">
        <router-link class="ll left" to="/">
          <Icon class="icon" type="ios-person-outline"/>
          <span>个人中心</span>
        </router-link>
        <router-link class="ll right" to="/">
          <Icon class="icon" type="ios-settings"/>
          <span>个人设置</span>
        </router-link>
      </div>
      <div class="logout">
        <p @click="onLogout">退出</p>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide } from 'vue-property-decorator';

// 必须写
@Component({
  components: {

  }
})

export default class Header extends Vue {
  //data
  @Provide() navs: any = [
    {
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
    }]

  @Provide() showFloatUser: boolean = false

  onSearchEnter() {
    console.log(this)
  }

  onLogin() {
    console.log('onLogin')
  }

  onRegister() {
    console.log('onRegister')

  }

  onClickUser() {

    this.showFloatUser = true
  }
  onLogout() {
    this.showFloatUser = false
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
    .btns {
      display: inline-block;
      .search {
        margin: 0 15px;
      }
      .btn {
        margin: 0 15px;
        cursor: pointer;
      }
    }
    .userinfo {
      display: inline-block;
      text-align: left;
      .icon {
        font-size: 26px;
        margin: 0 15px;
        cursor: pointer;
      }
    }
  }
  #float-user {
    background-color: yellowgreen;
    position: absolute;
    right: 60px;
    top: 56px;
    z-index: 99;
    min-width: 80px;
    font-size: 12px;
    background-color: #fff;
    padding-top: 24px;
    padding-bottom: 0;
    border-radius: 4px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.02), 0 0 8px 0 rgba(0, 0, 0, 0.04),
      0 8px 8px 0 rgba(0, 0, 0, 0.06);
    box-sizing: border-box;
    .info {
      margin-bottom: 24px !important;
      padding: 0 32px;
      height: 80px;
      display: table;
      .avatar {
        display: inline-block;
        img {
          border-radius: 50%;
          width: 80px;
          padding: 3px;
          background: #fafafa;
          display: inline-block;
          transition: all 0.3s ease;
          vertical-align: middle;
        }
      }
      .desc {
        display: table-cell;
        vertical-align: middle;
        box-sizing: border-box;
        text-align: center;
        .name {
          width: 106px;
          font-size: 18px;
          line-height: 1;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.88);
        }
        .grade {
          margin-top: 8px !important;
          margin-bottom: 8px !important;
          width: 108px;
          font-size: 12px;
          line-height: 1;
          color: rgba(0, 0, 0, 0.56);
        }
      }
    }
    .link {
      margin-bottom: 24px !important;
      padding: 0 32px;
      font-size: 12px;
      line-height: 1;
      .ll {
        color: rgba(0, 0, 0, 0.56);
        .icon {
          margin-right: 4px;
          font-size: 14px;
        }
      }
      .left {
        padding-right: 34px;
        text-align: left;
      }
      .right {
        padding-left: 34px;
        text-align: right;
      }
    }
    .logout {
      padding: 16px 0;
      text-align: center;
      font-size: 12px;
      line-height: 1;
      box-shadow: inset 0 1px 0 0 rgba(0, 0, 0, 0.08);
      cursor: pointer;
    }
  }
}
</style>

<template>
  <div id="app">
    <div id="app-header">
      <Header></Header>
    </div>
    <div id="app-content">
      <div class="container">
        <router-view/>
      </div>
    </div>
    <div id="app-footer">
      <Footer></Footer>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Header from '@/components/Header/index.vue' // @ is an alias to /src
import Footer from '@/components/Footer/index.vue' // @ is an alias to /src

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue { }
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
  #app-content {
    min-height: 400px;
    // .container {
    //   width: 1140px;
    //   margin-right: auto;
    //   margin-left: auto;
    //   padding-left: 10px;
    //   padding-right: 10px;
    // }
  }
}
</style>

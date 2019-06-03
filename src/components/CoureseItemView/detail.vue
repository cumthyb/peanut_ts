<template>
  <div class="detail">
    <Tabs value="introduction">
      <TabPane label="介绍" name="introduction">
        <div class="detail-item introduction"> <introduction></introduction> </div>
      </TabPane>
      <TabPane label="目录" name="catalog">
        <div class="detail-item catalog"> <catalog></catalog> </div>
      </TabPane>
      <TabPane label="评价" name="comments">
        <div class="detail-item comments"> <comments></comments>  </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Provide, Prop } from 'vue-property-decorator'
import introduction from './introduction.vue'
import catalog from './catalog.vue'
import comments from './comments.vue'
// 必须写
@Component({
  components: {
    introduction, catalog, comments
  }
})
export default class Detail extends Vue {

  @Prop({
    type: Object,
    required: true
  }) Coursedetail!: object;

  @Provide() currentBar: string = 'introduction'


}
</script>


<style lang="less">
.detail {
  .detail-item {
    background: #fff;
    padding: 15px;
    margin-bottom: 20px;

    border-radius: 4px;
    border: 1px solid #e4ecf3;
  }
  .introduction {
  }
  .catalog {
  }
  .comments {
  }
}
</style>
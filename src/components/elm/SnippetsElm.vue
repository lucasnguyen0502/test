<template>
  <div class="snippets-elm">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>ELm: {{ data.id }}</span>
        <el-button style="float: right" type="danger" icon="el-icon-delete" circle @click="handleRemove"></el-button>
      </div>
      <div>
        <p>name?: {{ data.name }}</p>
        <p>class?: {{ data.class }}</p>
        <p>caption?: {{ data.caption }}</p>
        <p>type?: {{ data.type }}</p>
        <p>min?: {{ data.min }}</p>
        <p>max?: {{ data.max }}</p>
        <p>step?: {{ data.step }}</p>
        <p>default_value?: {{ data.default_value }}</p>
        <p>requires?: {{ data.requires }}</p>
        <el-button type="success" icon="el-icon-edit" circle @click="handleClick"></el-button>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts">
  import { ElementInterface } from '@/interface'
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'

  const global = namespace('global')

  @Component({ components: {} })
  export default class SnippetsElm extends Vue {
    @Prop({ required: true, type: Object }) data!: ElementInterface

    @global.State('elementSettings') elementSettings!: ElementInterface

    @global.Action('removeElm') removeElm!: (data: string | ElementInterface) => void
    @global.Action('setElmSettings') setElmSettings!: (data: string | ElementInterface) => void

    confilctClick = false

    @Watch('elementSettings', { deep: true, immediate: true }) watchSetting(new_: ElementInterface): void {
      if (new_.id === this.data.id) {
        this.data.name = new_.name
        this.data.class = new_.class
        this.data.caption = new_.caption
        this.data.type = new_.type
        this.data.min = new_.min
        this.data.max = new_.max
        this.data.step = new_.step
        this.data.default_value = new_.default_value
        this.data.requires = new_.requires
      }
    }

    handleRemove(): void {
      this.confilctClick = true
      this.removeElm(this.data.id)
    }

    handleClick(): void {
      if (this.confilctClick) {
        this.confilctClick = false
        return
      }
      console.log('clci')
      this.setElmSettings(this.data)
    }
  }
</script>
<style lang="scss" scoped>
  .snippets-elm {
    padding: 10px;
    cursor: pointer;
  }
</style>

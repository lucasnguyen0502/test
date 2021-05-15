<template>
  <div class="setting">
    <h3>Settings</h3>
    <div v-if="elementSettings.id !== ''">
      <p>id?: {{ elementSettings.id }}</p>
      <p>name?: <el-input placeholder="Please input" v-model="elementSettings.name"></el-input></p>
      <p>class?: <el-input placeholder="Please input" v-model="elementSettings.class"></el-input></p>
      <p>caption?: <el-input placeholder="Please input" v-model="elementSettings.caption"></el-input></p>
      <p>type?: <el-input placeholder="Please input" v-model="elementSettings.type"></el-input></p>
      <p>min?: <el-input placeholder="Please input" v-model="elementSettings.min"></el-input></p>
      <p>max?: <el-input placeholder="Please input" v-model="elementSettings.max"></el-input></p>
      <p>step?: <el-input placeholder="Please input" v-model="elementSettings.step"></el-input></p>
      <p>default_value?: <el-input placeholder="Please input" v-model="elementSettings.default_value"></el-input></p>
      <p>requires?: <el-input placeholder="Please input" v-model="elementSettings.requires"></el-input></p>
    </div>
  </div>
</template>
<script lang="ts">
  import { ElementInterface } from '@/interface'
  import { Component, Vue } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'

  const global = namespace('global')

  @Component({ components: {} })
  export default class SettingsComponent extends Vue {
    @global.State('elementSettings') elementSettings!: ElementInterface
    @global.Action('updateElm') updateElm!: (data: ElementInterface) => void

    // @Watch('elementSettings', { deep: true }) watchSetting(new_: ElementInterface, old: ElementInterface): void {
    //   console.log('watch')
    //   this.updateElm(new_)
    // }
  }
</script>
<style lang="scss" scoped>
  .setting {
  }
</style>

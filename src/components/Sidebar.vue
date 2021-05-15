<template>
  <div class="side-bar">
    <h3>Num Of Elements</h3>
    <el-input-number v-model="num" @change="handleChange" :min="1"></el-input-number>
    <!-- <h3>Elements</h3> -->
    <snippets-item />
    <settings-component />
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import SettingsComponent from './SettingsComponent.vue'
  import SnippetsItem from './elm/SnippetsItem.vue'
  import { namespace } from 'vuex-class'
  import { ElementInterface } from '@/interface'

  const global = namespace('global')

  @Component({ components: { SettingsComponent, SnippetsItem } })
  export default class SideBar extends Vue {
    // num = 1000
    @global.State('numOfElm') numOfElm!: number
    @global.Action('setNumOfElm') setNumOfElm!: (num: number) => void
    @global.Action('setListElm') setListElm!: (data: ElementInterface[]) => void

    get num(): number {
      return this.numOfElm
    }

    set num(value: number) {
      this.setNumOfElm(value)
    }

    handleChange(value: number): void {
      console.log(value)
      this.init()
    }

    init(): void {
      const data: ElementInterface[] = []
      for (let i = 0; i < this.numOfElm; i++) {
        data.push({
          id: `_${i}_` + Math.random().toString(36).substr(2, 9),
          name: `elm ${i}`,
          class: `class ${i}`,
          caption: `caption ${i}`,
          type: 'type',
          min: '10',
          max: '10',
          step: '10',
          default_value: '10',
          requires: '10'
        })
      }
      this.setListElm(data)
    }

    created(): void {
      this.init()
    }
  }
</script>
<style lang="scss" scoped>
  .side-bar {
    max-height: 100vh;
    overflow: scroll;
    padding-right: 10px;
  }
</style>

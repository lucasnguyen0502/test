<template>
  <el-container>
    <el-row :gutter="20" style="width: 100%">
      <el-col :span="24">
        <snippets-elm v-for="(value, key) in listElm" :key="key" :data="value" />
      </el-col>
    </el-row>
  </el-container>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import SnippetsElm from '@/components/elm/SnippetsElm.vue'
  import { namespace } from 'vuex-class'
  import { ElementInterface } from '@/interface'

  const global = namespace('global')

  @Component({
    components: {
      SnippetsElm
    }
  })
  export default class Home extends Vue {
    @global.State('listElm') listElm!: ElementInterface[]

    @Watch('listElm', { deep: true, immediate: true }) watchList(): void {
      this.$forceUpdate()
    }
  }
</script>

<template>
  <el-container>
    <el-aside width="350px">
      <side-bar />
    </el-aside>
    <el-container style="height: 100vh; overflow: scroll">
      <router-view />
    </el-container>
  </el-container>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import SideBar from './Sidebar.vue'

  @Component({ components: { SideBar } })
  export default class Layout extends Vue {}
</script>
<style lang="scss" scoped>
  .layout {
  }
</style>

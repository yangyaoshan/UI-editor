<template>
  <el-container :style="{height: height + 'px'}">
    <el-aside width="20%" style="background-color: rgb(238, 241, 246)">
      <h1 class="project-name">UI Editor</h1>
      <element-list></element-list>
    </el-aside>
    <el-main></el-main>
  </el-container>
</template>
<script>
import elementList from '@/components/element/element-list'
export default {
  data () {
    return {
    }
  },
  computed: {
    height: () => window.outerHeight
  },
  components: {
    elementList
  }
}
</script>
<style lang="scss" scoped>
.project-name{
  margin: 60px 0 30px;
  text-align: center;
}
.element-list{
  padding: 10px;
}
.element-list>li{
  float: left;
  margin: 10px;
  max-width: 100%
}
</style>

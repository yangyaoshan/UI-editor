<template>
  <el-container :style="{height: height + 'px'}">
    <el-aside width="20%" style="background-color: rgb(238, 241, 246); min-width: 260px;">
      <h1 class="project-name">UI Editor</h1>
      <element-list @handleDragend="handleDragend"></element-list>
    </el-aside>
    <el-main class="template-container">
      <preview-template></preview-template>
    </el-main>
  </el-container>
</template>
<script>
import elementList from '@/components/button'
import previewTemplate from '@/components/preview-template'
var getChildrenTextContent = function (children) {
  return children.map(function (node) {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}
/* Vue.component('preview-template', {
  render (createElement) {
    return createElement(
      'el-button',
      {
        props: {
          type: 'primary'
        }
      },
      'testdemo'
    )
  }
}) */

export default {
  data () {
    return {
    }
  },
  computed: {
    height: () => window.innerHeight
  },
  components: {
    elementList,
    previewTemplate
  },
  methods: {
    handleDrag (ev) {
      // console.log('handleDrag === ', ev)
    },
    handleDragend () {
      console.log(this.components)
    }
  }
}
</script>
<style lang="scss" scoped>
.project-name{
  margin: 60px 0 30px;
  text-align: center;
}
.template-container{
  position: relative;
  padding: 0;
  .box{
    position: absolute;
    width: 100px;
    height: 100px;
    background: red;
  }
}
</style>

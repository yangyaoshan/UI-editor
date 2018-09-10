<template>
  <div>
    <ul class="element-list clearfix">
      <li>
        <el-button type="primary">默认按钮</el-button>
      </li>
      <li>
        <el-button type="primary" plain>朴素按钮</el-button>
      </li>
      <li>
        <el-button type="primary" round>圆角按钮</el-button>
      </li>
      <li>
        <el-button type="primary" icon="el-icon-search" circle></el-button>
      </li>
      <li>
        <el-button type="primary" icon="el-icon-edit"></el-button>
      </li>
      <li>
        <el-button type="text">文字按钮</el-button>
      </li>
      <li>
        <el-button-group>
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-button-group>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>

</style>
<template>
  <div>
    <ul class="element-list clearfix">
      <!-- <li>
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
      </li> -->
      <li draggable="true" @drag="handleDrag" @dragend="handleDragend" :key="index" v-for="(item,index) in list">
        <el-button-group v-if="item.type === 'group'">
          <button-template :key="index" v-for="(child, index) in item.children" :item="child"></button-template>
        </el-button-group>
        <button-template v-else :item="item"></button-template>
        <div class="mask"></div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import {list} from './data.js'
import {throttle} from '@/utils/common'
let _throttle = throttle()
Vue.component('button-template', {
  template: '<el-button v-else :type="item.type" :plain="item.plain" :round="item.round" :circle="item.circle" :icon="item.icon">{{item.text}}</el-button>',
  props: {
    item: Object
  }
})
export default {
  data () {
    return {
      list: list
    }
  },
  methods: {
    handleDrag (event) {
      _throttle(() => {
        // console.log(this.list)
        this.$emit('handleDrag', {event})
      })
    },
    handleDragend (event) {
      this.$emit('handleDragend', {event})
    }
  }
}
</script>

<style lang="scss" scoped>
.element-list{
  padding: 10px;
  li{
    position: relative;
    float: left;
    margin: 10px;
    max-width: 100%;
    .mask{
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      cursor: move;
    }
  }
}
</style>

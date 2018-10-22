import Vue from 'vue'
//给定模板，和要挂载的元素id，挂载组件   
var mount = function(id, _component) {
  return new Promise((resolve, reject) => {
    //需要延迟才能取到document.getElementById(id)
    setTimeout(() => {
      let vm = new Vue({
        name: id.toString(),
        data() {
            return data
        },
        template: _component.template,
        el: document.getElementById(id),
        mounted() {
          console.log('mounted !');
        }
      })
      resolve(vm)
    }, 200)
  })
}

export default mount

<template>
  <div>
    <button @click="debounce(handle, 1000)">debounceHandle</button>
    <button @click="throttle(handle, 1000)">throttleHandle</button>
  </div>
</template>

<script>
export default {
  name: 'throttledebounce/throttle',
  data() {
    return {
      timer: null,
      flag: true,
    }
  },
  methods: {
    // 简易版 触发多次结束后才执行一次
    debounce(fn, delay){
      clearTimeout(this.timer);
      this.timer = setTimeout(function(){
        fn();
      }, delay)
    },
    // 简易版 触发阶段始终按照一定步调规律执行
    throttle(fn, delay){
      if(!this.flag) return false;
      this.flag = false;
      setTimeout(() =>{ // 使用箭头函数保留this
        fn();
        this.flag = true;
      }, delay)
    },
    handle() {
      console.log('点击');
    },
  }
}
</script>
<template>
  <div id='e'></div>
</template>

<script>
export default {
  mounted() {
    this.main();
  },
  methods: {
    main() {
      console.log('main');
      const start = new Date();
      var e = document.getElementById("e");
      var flag = true;
      var left = 0;

      function render() {
          if(flag == true){
              if(left>=100){
                flag = false
              }
              e.style.left = ` ${left++}px`
          }else{
              if(left<=0){
                  flag = true
              }
              e.style.left = ` ${left--}px`
          }
      }

      // 定时器效果
      // const timer = setInterval(function(){
      //   const now = new Date();
      //   if (now - start >= 5000) {
      //     clearInterval(timer);
      //   }
      //   render()
      // },1000/60) //每秒60帧


      // requestAnimationFrame效果
      /**
       * 实现即是每秒60帧渲染
       * 对于隐藏和不可见的元素不触发重绘和回流
       * 可以清除
       */
      (function loop(){
        render();
        const fAF = window.requestAnimationFrame(loop);
        const now = new Date();
        if (now - start >= 5000) {
          cancelAnimationFrame(fAF);
        }
      })()
    }
  },
}
</script>

<style scoped>
#e{
  width: 100px;
  height: 100px;
  background: red;
  position: absolute;
  left: 0;
  top: 0;
  zoom: 1;
}
</style>

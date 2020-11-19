<template>
  <div id="time"></div>
</template>

<script>
export default {
  mounted() {
    document.getElementById('time').innerHTML = new Date();
    document.addEventListener("visibilitychange", function() {
      console.log( document.visibilityState );
      console.log(document.hidden);
    });
  }
}
</script>
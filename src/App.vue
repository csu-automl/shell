<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}
#app {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: linear-gradient(180deg,#111733,#111428)
}
</style>

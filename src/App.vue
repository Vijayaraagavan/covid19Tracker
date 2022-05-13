<template>
<div id="nav">
  <router-link to="/">Home</router-link>
  <router-link to="/sample">About</router-link>
</div>
<router-view />
<!-- <div class="div">
  <HeaderView />
  <HomeView />
</div> -->
</template>

// <script>
// import HeaderView from './components/HeaderView.vue'
// import HomeView from './views/HomeView.vue'



// export default {
//   name: 'App',
//   components: {
//     HeaderView,
//     HomeView,
//   },
// }
// </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
body{
  margin: 0;
  background: #eee;
}
</style>

<template>
  <HeaderView />
  <!-- <DataTitle :text="dtitle" :dataDate="ddate" /> -->
  <ContentView />
</template>

<script>
import HeaderView from './components/HeaderView.vue'
import ContentView from './components/ContentView.vue'
// import DataTitle from './components/DataTitle.vue'
// import DataBoxes from './components/DataBoxes.vue'


export default {
  name: 'App',
  components: {
    HeaderView,
    ContentView,
  },
  data() {
    return {
      ddate: '',
      dtitle: '',
    }
  },
  methods: {
   
  }
}
</script>

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

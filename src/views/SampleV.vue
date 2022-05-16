<template>
<div class="grid grid-cols-5 md:grid-cols-3 lg:grid-cols-6 gap-4 p-5">
<!-- Sidebar contents -->
      <div class="border text-white text-lg font-bold text-center p-10 rounded-lg">
        <SideBar />
      </div>
      
<!-- Chart content -->
      <div class="bg-blue-100 col-span-3">
          <HeaderView />
          <ChartDisp />
      </div>

      <div class="bg-green-400 col-span-2 row-span-12 text-white-500 text-lg font-bold text-center p-10 rounded-lg">
          <div class="bg-blue-400 text-white-500 text-lg row-span-5 font-bold text-center p-10 rounded-lg">1

          </div>
          <div class="bg-blue-400 text-white-500 text-lg row-span-1 font-bold text-center p-10 rounded-lg">1

          </div>
      </div>            
  </div>
</template>

<script>
import HeaderView from '../components/HeaderView.vue'
import SideBar from '../components/SideBar.vue'
import ChartDisp from '../components/ChartDisp.vue'

export default {
  name: 'SampleV',
  components: {HeaderView, SideBar, ChartDisp}

}
</script>

<style>
body {
  background: url('../assets/bg-home.jpg') center no-repeat fixed;
  background-size: cover;

}
</style>
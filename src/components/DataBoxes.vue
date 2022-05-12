<template>
  <div class="grid md:grid-cols-2 gap-4">

<!-- box 1 -->
      <div class="shadow-md bg-blue-100 p-10 text-center rounded">
          <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases</h3>
          <div class="text-2xl mb-4">
              <span class="font-bold">New: </span>
              {{ stat.NewConfirmed}}
          </div>
          <div class="text-2xl mb-4">
              <span class="font-bold">Total: </span>
              {{ stat.TotalConfirmed}}
          </div>
      </div>

      <!-- box 2 -->
      <div class="shadow-md bg-blue-100 p-10 text-center rounded">
          <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases</h3>
          <div class="text-2xl mb-4">
              <span class="font-bold">New: </span>
              {{ stat.NewDeaths}}
          </div>
          <div class="text-2xl mb-4">
              <span class="font-bold">Total: </span>
              {{ stat.TotalDeaths}}
          </div>
      </div>


  </div>
</template>

<script>
// import {bus} from '../main'
export default {
    name: 'DataBoxes',
    props: ['stat'],
    data() {
        return {
            NewConfirmed: '',
            Count: '',
            TotalConfirmed: 0,
            NewDeaths:'',
            TotalDeaths: '',
        }
    },
    mounted() {
        this.emitter.on("endstats", isOpen => {
            this.NewConfirmed = isOpen
        })
        // this.$store.commit('increment')
        // this.Count = this.$store.state.count
        // console.log("new data is :", this.stat)
    }

}
</script>

<style>

</style>
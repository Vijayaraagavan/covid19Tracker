<template>
  <div class="grid md:grid-cols-2 gap-4">

<!-- box 1 -->
      <div class="shadow-md bg-blue-100 p-10 text-center rounded">
          <h3 class="text-3xl text-blue-900 font-bold mb-4">Cases</h3>
          <div class="text-2xl mb-4">
              <span class="font-bold">New: </span>
              {{ numberWithCommas(stat.NewConfirmed) }}
          </div>
          <div class="text-2xl mb-4">
              <span class="font-bold">Total: </span>
              {{ numberWithCommas(stat.TotalConfirmed) }}
          </div>
      </div>

      <!-- box 2 -->
      <div class="shadow-md bg-blue-100 p-10 text-center rounded">
          <h3 class="text-3xl text-blue-900 font-bold mb-4">Death</h3>
          <div class="text-2xl mb-4">
              <span class="font-bold">New: </span>
              {{ numberWithCommas(stat.NewDeaths) }}
          </div>
          <div class="text-2xl mb-4">
              <span class="font-bold">Total: </span>
              {{ numberWithCommas(stat.TotalDeaths) }}
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
        console.log("box is mounted")
        // this.$store.commit('increment')
        // this.Count = this.$store.state.count
        // console.log("new data is :", this.stat)
    },
    methods: {
        numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',')
        }
    }

}
</script>

<style>

</style>
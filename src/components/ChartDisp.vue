<template>
<button @click="start">click</button>
  <!-- <div id="synced-charts">
      <div id="chart-line">
          <div id="chart-area">

          </div>
      </div>
      <div id="chart-line2">
          <div id="chart-area2">

          </div>
      </div>
  </div> -->
  <div>
    <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
  </div>

</template>

<script>
export default {
  name: "ChartDisp",
  data() {
    return {
      options: {
          chart: {
            id: 'vuechart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
      },
      theme: {
        palette: 'palette2'
      },
      series: [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      },
      {
        name: 'series-2',
        data: [33, 59, 45, 11, 101, 78, 44, 94]
      }]
    }
    },
    methods: {
        start() {
            // var options = {
  // chart: {
  //   type: 'line'
  // },
  // series: [{
  //   name: 'sales',
  //   data: [30,40,35,50,49,60,70,91,125]
  // }],
  // xaxis: {
  //   categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
  // }
}}
}

</script>

<style>

</style>
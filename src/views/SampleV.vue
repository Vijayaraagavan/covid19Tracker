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
            <input type="text" v-model="itemName">
            <button @click="Handlejson">Send Orders</button>
            <p> Entered Value: {{ itemName }} </p>
            <p> Received response is: {{ id }} and model name is {{ model }} </p>
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
import axios from 'axios';

export default {
  name: 'SampleV',
  components: {HeaderView, SideBar, ChartDisp},
  data() {
    return {
      itemName: "",
      id: "",
      model: "",
    }
  },
  methods: {
    async Handlejson() {
      var data = {
            "num": this.itemName
        }
      // const res = await axios.post(`http://localhost:8000/items`, data)
      axios({method:"POST", url: "http://127.0.0.1:8000/items", data: data, 
        headers:{"content-type":"text/plain"} }).then(result => {
          console.log(result)
            var resul = result.data
            console.log(result.data.id, resul.model)
            this.id = resul.id
            this.model = resul.model 
        }).catch( error => {
            console.error(error);
        })
      // this.res = res.data;
      // console.log(this.res)
    }
  }
}
</script>

<style>
body {
  background: url('../assets/bg-home.jpg') center no-repeat fixed;
  background-size: cover;

}
</style>
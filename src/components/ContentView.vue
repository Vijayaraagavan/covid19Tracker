<template>
  <div>
      <button @click="fetchCovidData">Get info</button>
  </div>
    <main v-if="loading" class="flex flex-col justify-center align-center text-center">
        <div class="text-grey-500 text-3xl mt-10 mb-6">
            Fetching data...
            <img :src="loadingImage" class="w-24 m-auto" alt="gif" />
        </div>
    </main>

<div v-if="doneFetching">

  
    <DataTitles :text="title" :dataDate="dataDate" />
    <DataBoxes :stat="stats" />
    <CountrySelect :countries="countries" @getCountry="getCountryData" />
  </div>
</template>

<script>
// import {bus} from '../main'
import DataBoxes from "./DataBoxes";
import DataTitles from "./DataTitle.vue";
import CountrySelect from "./CountrySelect"

export default {
  name: "ContentView",
  components: { DataTitles, DataBoxes, CountrySelect },
  data() {
    return {
      loading: false,
      doneFetching: false,
      title: "Global",
      dataDate: "test",
      stats: {},
      countries: [],
      loadingImage: require("../assets/loading.gif"),
    };
  },
  async created() {
    console.log("loaded page");
    // const data = await this.fetchCovidData();
    // this.dataDate = data.Date
    // this.stats = data.Global;
    // this.countries = data.Countries;
    // this.loading = false;
    // this.$emit('enddata', this.dataDate, this.title)
    // this.emitter.emit('endstats', this.stats.NewConfirmed)
    // console.log("here it is ", this.stats, " and ", this.stats.TotalConfirmed);
    // this.$store.state.TotalConfirmed = this.stats.TotalConfirmed

    // this.$store.commit("addData", this.stats.NewDeaths);
    // this.$store.commit("addData", this.stats.TotalDeaths);
    // console.log("store is ", this.$store.state.covidData);
  },
  methods: {
    getCountryData(country) {
      console.log(country.CountryCode)
      this.stats = country
      this.title = country.Country
    },

    async fetchCovidData() {
      this.loading = true;
      const res = await fetch("https://api.covid19api.com/summary");
      const data = await res.json();
      
      this.dataDate = data.Date
      this.stats = data.Global;
      this.countries = data.Countries;

      setTimeout(() => {
        this.loading = false;
      this.doneFetching = true;
      }, 1000);
      return data;
    },
  },
};
</script>

<style>
/* .loadingImage {
    width: 65px;
    height: 50px;
    left: 50%;
    position: absolute;
} */
/* const country = this.countries.find((item) => item.ID === this.selected); */
</style>
<template>
  <div class="side flex flex-col justify-center align-center">
      <div>
          <img :src="logoLink" alt="logo" class="object-cover h-34 center w-32 mb-8 rounded-full" />
      </div>
      <ul>
          <li v-for="tab in tabs" :key="tab" class="text-left mb-10 hover:pl-3"><i :class="tab.icon"></i><a href="#" class="ml-4">{{ tab.name }}</a></li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'SideBar',
    data() {
        return {
            tabs: [
                {name: 'Home', icon: "fas fa-home"},
                {name: 'Orders', icon: "fa-solid fa-store"},
                {name: 'Deliveries', icon: "fa-solid fa-truck"},
                {name: 'Track Id', icon: "fa-solid fa-location-crosshairs"},
                {name: 'Customer Support', icon: "fa-solid fa-headset"},
                ],
            logoLink: require("../assets/logo.jpg")
        }
    },
}
</script>

<style scoped>
img {
    flex-basis: 100%;
}
</style>
<template>
  <nav class="bg-white shadow md:shadow-none px-5 md:px-20" role="navigation">
    <div class="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
      <div class="mr-4 md:mr-8">
        <a href="#" rel="home">
          <i class="fab fa-korvue fa-2x text-green-500"></i>
        </a>
      </div>

      <div class="ml-auto md:hidden">
        <button class="flex items-center px-3 py-2 border rounded" type="button" @click="showNavbar = !showNavbar">
          <svg class="h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>

      <div class="w-full md:w-auto md:flex-grow md:flex md:items-center" v-if="showNavbar">
        <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
          <li>
            <router-link to="/" class="block px-4 py-1 md:p-2 lg:px-4 text-md md:text-xl">Home</router-link>
          </li>
          <li>
            <router-link to="/foods" class="block px-4 py-1 md:p-2 lg:px-4 text-md md:text-xl">Foods</router-link>
          </li>
        </ul>

        <ul class="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:ml-auto md:mt-0 md:pt-0 md:border-0">
          <li>
            <router-link to="/cart" class="px-4 py-1 md:p-2 lg:px-4 relative inline-block ">
              <i class="fas fa-shopping-cart fa-lg fill-current mt-2">
                <span class="absolute top-3 right-3 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">{{ updateCarts ? updateCarts.length : order_qty.length }}</span>
              </i>
            </router-link>
          </li>
        </ul>
      </div>

    </div>
  </nav>
  <router-view/>
</template>

<script>
import axios from "axios";

export default {
  data(){
    return{
      showNavbar: true,
      order_qty: [],
    }
  },
  props: ['updateCarts'],
  methods: {
    setQty(data) {
      this.order_qty = data
    },
  },
  mounted(){
    axios.get("http://localhost:3000/keranjangs")
      .then((response) => this.setQty(response.data))
      .catch((error) => console.log(error))
  }
}
</script>

<style>
.router-link-exact-active {
  font-weight: bold;
  color: rgb(4, 185, 4);
}
</style>

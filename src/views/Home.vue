<template>
  <div class="home">
    <!-- Landing Page -->
    <Hero />

    <!-- Best Product Section -->
    <div class="flex p-9 md:p-28 items-center justify-between -mt-10 md:-mt-28 mb-3">
      <h1 class="text-xl md:text-3xl font-bold">Best Product</h1>
      <router-link to="/foods" class="bg-green-500 hover:bg-green-700 text-white font-bold py-px md:py-2 px-2 md:px-4 rounded flex space-x-3">
        See More <i class="fas fa-arrow-circle-right mt-1.5 ml-2"></i>
      </router-link>
    </div>
    <!-- Card Product -->
      <div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 -mt-10">
        <div v-for="(product, index) in products" :key="product.id">
          <div v-if="index < 4">
            <Card :product="product" />
          </div>
        </div>
      </div>
    <!-- End of Card Product -->
  </div>
  <Footer />
</template>

<script>
import Hero from '../components/Hero.vue'
import Card from '../components/CardProduct.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components : {
    Hero,
    Card,
    Footer
  },
  data(){
    return {
      products: [],
    }
  },
  methods: {
    setProduct(data){
      this.products = data
    }
  },
  mounted() {
    axios.get("https://my-json-server.typicode.com/rafli-dev/Kuyliner/products")
    .then((response) => this.setProduct(response.data))
    .catch((error) => console.log(error))
  }
}
</script>

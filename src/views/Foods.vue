<template>
    <div class="grid grid-cols-1 md:grid-cols-2 p-10 md:p-24 items-center justify-between -mt-5 md:-mt-14">
        <div>
            <h1 class="text-xl md:text-3xl font-bold">Food's List {{search}}</h1>
        </div>
        <div>
            <div class="grid justify-items-end pt-2 relative mx-auto text-gray-600">
                <input v-model="search" class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 w-full md:w-2/5 rounded-lg text-sm focus:outline-none" placeholder="Search" @keyup="searchFood">
                <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
                <i class="fas fa-search"></i>
                </button>
            </div>
        </div>
    </div>
    <!-- Card Product -->
        <div class="holder mx-auto w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 -mt-10">
            <div v-for="product in products" :key="product.id">
            <Card :product="product" />
            </div>
        </div>
    <!-- End of Card Product -->
    <Footer />
</template>

<script>
import Card from '../components/CardProduct.vue'
import Footer from '../components/Footer.vue'
import axios from 'axios'

export default {
    name: 'Foods',
    components: {
        Card,
        Footer,
    },
    data(){
        return{
            products: [],
            search: '',
        }
    },
    methods: {
        setProducts(data){
            this.products = data;
        },
        searchFood(){
            axios.get("https://my-json-server.typicode.com/rafli-dev/Kuyliner/products?q="+this.search)
            .then((response) => this.setProducts(response.data))
            .catch((error) => console.log(error))
        }
    },
    mounted(){
        axios.get("https://my-json-server.typicode.com/rafli-dev/Kuyliner/products")
        .then((response) => this.setProducts(response.data))
        .catch((error) => console.log(error))
    }
}
</script>

<style>

</style>
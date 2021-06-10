<template>
    <nav class="bg-grey-light p-3 rounded font-sans m-4">
        <ol class="list-reset flex text-grey-dark -ml-3 md:-ml-0 px-0 md:px-16">
            <li><router-link to="/" href="#" class="text-blue font-bold">Home</router-link></li>
            <li><span class="mx-2">/</span></li>
            <li><router-link to="/foods" href="#" class="text-blue font-bold">Foods</router-link></li>
            <li><span class="mx-2">/</span></li>
            <li>Food Order</li>
        </ol>
    </nav>
        <div class="grid grid-cols-1 md:grid-cols-2 p-3 m-4 px-0 md:px-20 mb-32">
            <div class="image w-11/12">
                <img :src="`https://raw.githubusercontent.com/rafli-dev/Kuyliner/main/src/assets/images/${product.gambar}`" alt="food order detail">
            </div>
            <div class="shadow-lg px-5 py-5 mt-4 md:-mt-4">
                <div class="mb-2">
                    <label class="text-xl">Name</label>
                    <input class="mt-2 mb-3 w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text" :value="product.nama" readonly>
                </div>
                
                <div class="mb-2">
                    <label class="text-xl">Price</label>
                    <input class="mt-2 w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" type="text" :value="product.harga" readonly>
                </div>

                <form v-on:submit.prevent>
                    <div class="mb-2">
                        <label class="text-xl">Order quantity</label>
                        <input class="mt-2 w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_name" type="number" required v-model="pesan.order_qty">
                    </div>
                    <div class="mb-2">
                        <label class="text-xl">Order Notes</label>
                        <textarea class="mt-2 w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" name="cus_name" type="number" required placeholder="Ex: Add Ketchup..." v-model="pesan.order_desc"></textarea>
                    </div>

                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" @click="pemesanan">
                        <i class="fas fa-plus mt-1.5 mr-2"></i> Add to cart
                    </button>
                </form>
            </div>
        </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'FoodDetail',
    data(){
        return {
            product: {},
            pesan: {}
        }
    },
    methods: {
        setProduct(data){
            this.product = data;    
        },
        pemesanan(){
            if (this.pesan.order_qty) {
                this.pesan.products = this.product;
                axios
                    .post("http://localhost:3000/keranjangs", this.pesan)
                    .then(() => {
                        this.$router.push({ path: "/cart"})
                        Swal.fire(
                            'Food successfully added to cart.',
                            'Please checkout your food cart',
                            'success'
                        )
                    })
                    .catch((err) => console.log(err))
            } else {
                Swal.fire(
                    'Failed to add your food!',
                    'Please fill in the order quantity',
                    'error'
                )
            }
        }
    },
    mounted() {
        axios.get("http://localhost:3000/products/"+ this.$route.params.id)
        .then((response) => this.setProduct(response.data))
        .catch((error) => console.log(error))
    },
    // computed :{
    //     productWithImage(){
    //         return {
    //             ...this.product,
    //             image: require(`../assets/images/${this.product.gambar}`)
    //         }
    //     }
    // }
}
</script>

<style>

</style>
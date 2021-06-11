<template>
    <App v-if="hiddenApp" :updateCarts="Carts" />
    <nav class="bg-grey-light p-3 rounded font-sans m-4">
        <ol class="list-reset flex text-grey-dark ml-0 md:-ml-16 px-0 md:px-16">
            <li><router-link to="/" href="#" class="text-blue font-bold">Home</router-link></li>
            <li><span class="mx-2">/</span></li>
            <li><router-link to="/foods" href="#" class="text-blue font-bold">Foods</router-link></li>
            <li><span class="mx-2">/</span></li>
            <li>Cart</li>
        </ol>
    </nav>

    <div class="container p-5 mx-auto my-5 -mt-6">
        <div class="container mx-auto border border-gray-300 rounded my-3 overflow-auto">
            <table class="w-full">
                <thead class="border-b border-gray-300">
                    <tr class="bg-green-400">
                        <th class="py-3 px-8 text-white text-left">No</th>
                        <th class="py-3 px-8 text-white text-left">Gambar</th>
                        <th class="py-3 px-8 text-white text-left">Name</th>
                        <th class="py-3 px-8 text-white text-center">Qty</th>
                        <th class="py-3 px-8 text-white text-center">Note</th>
                        <th class="py-3 px-8 text-white text-center">Price</th>
                        <th class="py-3 px-8 text-white text-center">Total</th>
                        <th class="py-3 px-8 text-white text-center">Delete</th>
                    </tr>
                </thead>
                <tbody v-for="(cart, index) in carts" :key="cart.id">
                    <tr class="hover:bg-gray-200">
                        <td class="py-5 px-8 text-gray-900" >{{ index + 1}}</td>
                        <td class="py-5 px-8 text-gray-900" >
                            <img class="w-full md:w-2/12" :src="require(`../assets/images/${cart.products.gambar}`)" alt="Image Food">
                        </td>
                        <td class="py-5 px-8 text-gray-900">{{ cart.products.nama }}</td>
                        <td class="py-5 px-8 text-gray-900">{{ cart.order_qty }}</td>
                        <td class="py-5 px-8 text-gray-900">{{ cart.order_desc ? cart.order_desc : "-"}}</td>
                        <td class="py-5 px-8 text-gray-900"><strong>Rp. {{cart.products.harga}}</strong></td>
                        <td class="py-5 px-8 text-gray-900"><strong>Rp.{{ cart.products.harga*cart.order_qty }}</strong></td>
                        <td class="py-5 px-8 text-gray-900">
                            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" @click="deleteItem(cart.id, index)">
                                <i class="fas fa-trash"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
                <!-- <strong>Total : Rp.{{ totalPrice }}</strong> -->
            </table>
        </div>
        <div class="flex justify-center md:justify-end">
            <form class="shadow-2xl px-5 py-5" v-on:submit.prevent>
                <div class="mb-4 mt-6">
                    <label class="block text-gray-700 text-sm font-semibold mb-2">Name</label>
                    <input
                        size="30"
                        class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-white border border-b-5 leading-tight focus:outline-none focus:shadow-outline h-10"
                        id="email"
                        type="text"
                        placeholder="Enter your name"
                        v-model="pesan.name"
                    />
                </div>
                <div class="mb-4 mt-6">
                    <label class="block text-gray-700 text-sm font-semibold mb-2">Table Number</label>
                    <input
                        size="30"
                        class="text-sm appearance-none rounded w-full py-2 px-3 text-gray-700 bg-white border border-b-5 leading-tight focus:outline-none focus:shadow-outline h-10"
                        id="email"
                        type="number"
                        placeholder="Enter your table number"
                        v-model="pesan.table_number"
                    />
                </div>
                <div class="flex justify-end">
                    <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded" @click="checkout">
                        <i class="fas fa-cart-plus mt-1.5 mr-2"></i> Order
                    </button>
                </div>
            </form>
        </div>
    </div>
    
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import App from '../App.vue'

export default {
    // :src="require(`../assets/images/${cart.products.gambar}`)"
    name: 'Cart',
    components: {
        App,
    },
    data() {
        return {
            carts: [],
            hiddenApp : false,
            pesan: {},
        }
    },
    methods: {
        setCart(data){
            this.carts = data;
        },
        deleteItem(id, index){
            axios.delete("http://localhost:3000/keranjangs/" + id)
                .then(() => {
                    this.carts.splice(index, 1)
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 5000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                                toast.addEventListener('mouseenter', Swal.stopTimer)
                                toast.addEventListener('mouseleave', Swal.resumeTimer)
                            }
                        })

                        Toast.fire({
                            icon: 'success',
                            title: 'delete food is successfully'
                        });
                })
                .catch((error) => console.log(error))
        },
        checkout(){
            if (this.pesan.name && this.pesan.table_number) {
                this.pesan.carts = this.carts;
                axios
                    .post("http://localhost:3000/pesanans", this.pesan)
                    .then(() => {
                        this.carts.map(function(item){
                            return axios
                                    .delete("http://localhost:3000/keranjangs/" + item.id)
                                    .catch((error) => console.log(error))
                        })
                        this.$router.push({ path: "/order-success"})
                        Swal.fire({
                            icon: 'success',
                            title: 'Thank you! Checkout Successfully'
                        });
                    })
                    .catch((err) => console.log(err))
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Please enter your name and table number!'
                })
            }
        }
        
    },
    mounted() {
        axios.get("https://my-json-server.typicode.com/rafli-dev/Kuyliner/keranjangs")
            .then((response) => this.setCart(response.data))
            .catch((error) => console.log(error))
    },
    computed : {
        totalPrice() {
            return this.carts.reduce(function(items, data){
                return items+(data.products.harga * data.order_qty)
            }, 0)
        }
    }
}
</script>

<style>

</style>

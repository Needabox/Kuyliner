<template>
    <!-- Content Card -->
    <div>
        <div class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative">
            <img class="w-full" :src="require(`../assets/images/${product.gambar}`)" alt="Food Image" />
            <div v-if="product.is_ready == true">
                <div class="badge absolute top-0 right-0 bg-blue-500 m-1 text-white p-1 px-2 text-xs font-bold rounded">Available</div>
            </div>
            <div v-else>
                <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-white p-1 px-2 text-xs font-bold rounded">Out of stock</div>
            </div>
            <div class="desc p-4 text-gray-800">
                <span class="title text-xl font-bold block cursor-pointer hover:underline">{{ product.nama }}</span>
                <span class="description text-sm block py-2 border-gray-400 mb-2">Harga : Rp. {{ product.harga }}</span>
                <div v-if="product.is_ready == true">
                    <router-link :to=" '/food/'+ product.id" class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded">
                        <i class="fas fa-cart-plus mt-1.5 mr-2"></i> Order
                    </router-link>
                </div>
                <div v-else>
                    <ButtonNotReady />
                </div>
            </div>
        </div>
    </div>
    <!-- End of content card -->
</template>

<script>
import ButtonNotReady from '../components/ButtonNotReady.vue'
export default {
    name: 'CardProduct',
    props: ['product'],
    components: {
        ButtonNotReady,
    }
}
</script>

<style>

</style>
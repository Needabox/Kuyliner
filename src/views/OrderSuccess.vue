<template>
    <div class="px-14 md:px-24 mt-5">
        <img src="../assets/wait.svg" alt="wait for your food" class="w-full md:w-4/12 mx-auto">
        <h1 class="text-2xl md:text-4xl text-center mt-3 font-serif">Thank You!</h1>
        <h1 class="text-lg md:text-3xl text-center mt-2 text-gray-600 mb-3">Please wait. Your order will be cooked by our chef</h1>
        <div class="flex  justify-center">
            <router-link to="/" class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded text-center">
                Back to home
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OrderSuccess'
}
</script>

<style>

</style>
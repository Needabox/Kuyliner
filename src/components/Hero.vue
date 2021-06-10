<template>
    <div class="grid p-12 md:p-24 mt-5">
        <div class="grid md:grid-cols-2">
            <div class="mt-0 md:mt-20">
                <h1 class="text-5xl md:text-6xl font-bold leading-none"><strong class="text-green-400">Enjoy</strong> Your Favorite Food With <strong class="text-green-400">Kuyliner</strong>.</h1>
                <p class="mt-3 mb-5 text-md md:text-2xl text-gray-600">We provide all kinds of food for you</p>
                <router-link to="/foods" class="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                    <i class="fas fa-arrow-right"></i> Order Here, Guys!
                </router-link>
            </div>
            <img src="./hero.svg" alt="Home" class="-mt-12 md:mt-0 order-first md:order-last w-full md:w-11/12">
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import * as images  from "../../images"

</script>
<template>
    <div class="w-full h-[13vh] bg-[#181826] flex items-center justify-between px-16">
        <nav class="text-[#fff] flex font-sans list-none  cursor-pointer font-bold text-sm">
            <RouterLink to="/">HOME</RouterLink>
            <RouterLink to="/about-us" class="mx-4">WHY CHOOSE US</RouterLink>
            <RouterLink to="/get-in-touch">GET IN TOUCH</RouterLink>
        </nav>
        <img :src="images.pursuit" alt="pursuit" class="w-[215px] h-[45px]"  />
        <RouterLink to="/sign-in" class="font-bold text-sm text-[#fff]">Log In to Your Account</RouterLink>

    </div>

</template>
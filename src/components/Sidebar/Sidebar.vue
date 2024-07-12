<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import * as images from "../../images";
</script>
<template>
    <div class="bg-[#38384D] w-[20vw] h-full p-10">
        <img :src="images.pursuit" alt="pursuit" />
        <div class="bg-[#38384D] w-full h-[1px] my-7"></div>
        <div class="w-full">
            <h4 class="text-[#CACADA] text-sm font-bold">DASHBOARD</h4>
            <nav class="flex flex-col w-full">
                <RouterLink class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold my-5 w-full h-full">
                    <img :src="images.earning" alt="earning" class="mr-2" />Your Earnings
                </RouterLink>
                <RouterLink class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold w-full h-full">
                    <img :src="images.payout" alt="earning" class="mr-2" />Payout History
                </RouterLink>
                <RouterLink to="/dashboard-payout-setting" class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold my-5 w-full h-full">
                    <img :src="images.wallet" alt="earning" class="mr-2" />Payout Settings
                </RouterLink>
                <RouterLink class="flex items-center text-[#CACADA] hover:bg-[#23A9D0] focus:bg-[#23A9D0] cursor-pointer p-3 rounded-md text-sm font-bold w-full h-full">
                    <img :src="images.logout" alt="earning" class="mr-2" />Logout
                </RouterLink>
            </nav>
        </div>
    </div>
</template>
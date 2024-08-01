<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import DashboardLayout from "../DashboardLayout/DashboardLayout.vue";
    import * as images from "../../images";
</script>
<template>
    <DashboardLayout>
        <div class="flex flex-col p-16">
            <div class="grid grid-cols-3 sm:grid-cols-1 gap-2">
                <div class="flex items-center justify-start p-5 bg-[#38384D] w-[300px] h-[115px] rounded-md">
                    <div class="flex items-center justify-center bg-[#FCAE17] w-[65px] h-[65px] rounded-md">
                        <img :src="images.bucket" alt="mining" />
                    </div>
                    <div class="ml-5">
                        <h5 class="text-[#CACADA] font-bold text-sm">Miners online</h5>
                        <h6 class="text-base text-[#fff] font-bold">13,293</h6>
                    </div>
                </div>
                <div class="flex items-center justify-start p-5 bg-[#38384D] w-[300px] h-[115px] rounded-md">
                    <div class="flex items-center justify-center bg-[#23A9D0] w-[65px] h-[65px] rounded-md">
                        <img :src="images.dollar" alt="mining" />
                    </div>
                    <div class="ml-5">
                        <h5 class="text-[#CACADA] font-bold text-sm">Revenue in Last 24 hours</h5>
                        <h6 class="text-base text-[#fff] font-bold">$5,392 USD</h6>
                    </div>
                </div>
                <div class="flex items-center justify-start p-5 bg-[#38384D] w-[300px] h-[115px] rounded-md">
                    <div class="flex items-center justify-center bg-[#ED5962] w-[65px] h-[65px] rounded-md">
                        <img :src="images.coin" alt="mining" />
                    </div>
                    <div class="ml-5">
                        <h5 class="text-[#CACADA] font-bold text-sm">Revenue in last 30 days</h5>
                        <h6 class="text-base text-[#fff] font-bold">Statistic Number Three</h6>
                    </div>
                </div>
            </div>
            <div class="flex my-5">
                <div class="grid grid-cols-3">
                    <div class="flex flex-col bg-[#38384D] w-[300px] h-[385px] rounded-md p-5">
                        <div class="flex justify-between w-full h-auto">
                            <h5 class="text-sm text-[#fff] font-bold">Current Coin</h5>
                            <h6 class="text-[#CACADA] text-base">USD</h6>
                        </div>
                        <div class="w-full h-[157px] bg-[#2C2C3A] mt-5">
                            <div class="flex flex-col items-start justify-center p-5 bg-[url('/src/assets/media/bitcoin.png')] bg-contain bg-no-repeat w-full h-full">
                                <div class="flex items-center">
                                    <img :src="images.bitcoin1" alt="bitcoin" />
                                    <h5 class="text-lg text-[#fff] font-bold">$39,498.30</h5>
                                </div>
                                <h5 class="text-lg text-[#fff] font-bold mt-5">Bitcoin (BTC)</h5>
                            </div>
                        </div>
                        <div class="bg-[#2C2C3A] w-full h-[1px] my-7"></div>
                        <div>
                            <label class="text-[#fff]">Set Coin Price</label>
                            <input 
                                type="type" 
                                placeholder="Set a price..." 
                                class="w-full h-full bg-[#2C2C3A] p-2 outline-none border-2 border-[#38384D] rounded-md" 
                            />
                        </div>
                    </div>
                    <div class="col-span-2 sm:hidden">
                        <img :src="images.Extrapolated" alt="extrapolated" />
                    </div>
                </div>
            </div>
            <div class="bg-[#38384D] w-full h-[289px] sm:h-auto rounded-md p-5">
                <h5 class="text-sm text-[#fff] font-bold">Current Coin</h5>
                <table class="border-collapse w-full mt-5">
                    <thead>
                        <tr class="text-[#CACADA] text-base p-5">
                            <th>Amount IN</th>
                            <th>Date</th>
                            <th>3rd Colmn</th>
                            <th>Fourth Colmn</th>
                        </tr>
                    </thead>
                    <tbody class="text-sm text-[#fff] font-bold">
                        <tr class="text-center">
                            <td class="p-5">0.129345 BTC</td>
                            <td>Jan. 15th 2021</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr class="text-center">
                            <td class="p-5">0.129345 BTC</td>
                            <td>Jan. 15th 2021</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                        <tr class="text-center">
                            <td class="p-5">0.129345 BTC</td>
                            <td>Jan. 15th 2021</td>
                            <td>--</td>
                            <td>--</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </DashboardLayout>
    
</template>
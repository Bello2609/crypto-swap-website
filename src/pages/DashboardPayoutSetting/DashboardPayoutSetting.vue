<script setup>
    import DashboardLayout from "../DashboardLayout/DashboardLayout.vue";
    import * as images from "../../images";
    const payoutSetting = [
        {
            media: images.bitcoin2,
            crypto: "Bitcoin",
            label1: "Wallet ID",
            placeholder1: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
            label2: "Auto Payout Threshold",
            placeholder2: "$0.00"
        },
        {
            media: images.ethereum1,
            crypto: "Ethereum",
            label1: "Wallet ID",
            placeholder1: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
            label2: "Auto Payout Threshold",
            placeholder2: "$0.00"
        },
        {
            media: images.binance,
            crypto: "Binance",
            label1: "Wallet ID",
            placeholder1: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
            label2: "Auto Payout Threshold",
            placeholder2: "$0.00"
        },
        {
            media: images.tether,
            crypto: "Tether (USDT)",
            label1: "Wallet ID",
            placeholder1: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
            label2: "Auto Payout Threshold",
            placeholder2: "$0.00"
        },
        {
            media: images.litecoin1,
            crypto: "Litecoin",
            label1: "Wallet ID",
            placeholder1: "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",
            label2: "Auto Payout Threshold",
            placeholder2: "$0.00"
        }
    ]
</script>
<template>
    <DashboardLayout>
        <div class="grid grid-cols-2 gap-3 p-5">
            <div v-for="payout in payoutSetting" :key="payout.crypto" class="bg-[#38384D] w-[528px] h-[338px] p-5 rounded-md">
                <div class="flex items-center">
                    <img :src="payout.media" alt="bitcoin" />
                    <h5 class="text-lg text-[#fff] font-bold ml-2">{{ payout.crypto }}</h5>
                </div>
                <form>
                    <div class="my-5">
                        <label class="text-[#fff]">{{ payout.label1 }}</label>
                        <input 
                            type="type" 
                            :placeholder="payout.placeholder1" 
                            class="mt-2 w-full h-full text-[#fff] bg-[#2C2C3A] p-2 outline-none border-2 border-[#38384D] rounded-md" 
                        />
                    </div>
                    <div class="my-5">
                        <label class="text-[#fff]">{{ payout.label2 }}</label>
                        <input 
                            type="type" 
                            :placeholder="payout.placeholder2" 
                            class="mt-2 w-full h-full text-[#fff] bg-[#2C2C3A] p-2 outline-none border-2 border-[#38384D] rounded-md" 
                        />
                    </div>
                    <button class="w-full h-[55px] bg-[#23A9D0] rounded-md my-3 text-[#fff]">Save</button>
                </form>
            </div>
        </div>
    </DashboardLayout>
</template>
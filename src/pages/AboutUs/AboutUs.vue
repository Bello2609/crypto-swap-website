<script setup>
    import Layout from "../../components/Layout/Layout.vue";
    import * as images from "../../images";
</script>
<template>
    <Layout>
        <div class="flex items-center justify-center w-full h-auto">
            <div class="flex flex-col items-center justify-center bg-[#181826] w-full h-[479px] text-center">
                <h6 class="text-[#FCAE17]">ABOUT US</h6>
                <h4 class="w-[400px] md:w-fit sm:w-[243px] text-3xl md:text-5xl sm:text-4xl font-bold text-[#fff]">
                    About Our Company.
                </h4>
            </div>
        </div>
        <div class="flex flex-col items-center my-10">
            <div class="flex flex-col items-center justify-center text-center">
                <h6 class="text-[#FCAE17]">OUR SERVICES</h6>
                <h4 class="w-[400px] md:w-fit sm:w-[243px] text-3xl md:text-5xl sm:text-4xl font-bold text-[#181826]">
                    What we offer.
                </h4>
            </div>
            <div class="grid grid-cols-3 gap-9 mt-10">
                <div class="w-[370px] h-[362px] border-2 border-[#23A9D0] p-10 rounded-md">
                    <div class="flex items-center justify-center bg-[#23A9D0] w-[100px] h-[100px] rounded-full bg-[#23A9D0]">
                        <img :src="images.convertshape" alt="shape">
                    </div>
                    <h5 class="font-bold text-lg text-[#181826] my-5">Service Name One.</h5>
                    <p class="text-base text-[#181826]">
                        Capitalize on low hanging fruit to then identify a ballpark value added 
                        within a activity to beta test.
                    </p>
                </div>
                <div class="w-[370px] h-[362px] border-2 border-[#FCAE17] p-10 rounded-md">
                    <div class="flex items-center justify-center bg-[#FCAE17] w-[100px] h-[100px] rounded-full">
                        <img :src="images.element3" alt="shape">
                    </div>
                <h5 class="font-bold text-lg text-[#181826] my-5">Service Name One.</h5>
                    <p class="text-base text-[#181826]">
                        Capitalize on low hanging fruit to then identify a ballpark value added 
                        within a activity to beta test.
                    </p>
                </div>
                <div class="w-[370px] h-[362px] border-2 border-[#ED5962] p-10 rounded-md">
                    <div class="flex items-center justify-center bg-[#ED5962] w-[100px] h-[100px] rounded-full">
                        <img :src="images.cpu" alt="shape">
                    </div>
                <h5 class="font-bold text-lg text-[#181826] my-5">Service Name One.</h5>
                    <p class="text-base text-[#181826]">
                        Capitalize on low hanging fruit to then identify a ballpark value added 
                        within a activity to beta test.
                    </p>
                </div>
            </div>
        </div>
        <div class="flex  bg-[#F3F9F1] px-16 mx-10 rounded-md">
            <div class="flex flex-col w-[50%]">
                <div class="flex flex-col md:px-10 sm:px-10 py-20 font-sans">
                    <h6 class="text-[#FCAE17] text-xs">SUBHEADER FOR HERO</h6>
                    <h4 class="w-[400px] md:w-fit sm:w-[243px] text-3xl md:text-5xl sm:text-4xl font-bold text-[#181826] leading-[63px]">
                        Bring to the table win-win survival strategies.
                    </h4>
                    <p class="w-[413px] md:w-fit sm:w-fit flex-wrap font-normal text-base text-[#181826] my-8">
                        Efficiently unleash cross-media information without cross-media value. 
                        Quickly maximize timely deliverables.
                    </p>
                    <div class="flex justify-center items-center w-[176px] h-[57px] font-medium bg-[#23A9D0] text-[#fff] p-3 w-40 h-12 rounded-full">
                        <RouterLink>
                            Get In Touch
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div class="flex flex-col text-[#181826] text-base w-[50%] py-20">
                <p class="font-bold">
                    Efficiently unleash cross-media information without cross-media value. 
                    Quickly maximize timely deliverables for real-time schemas. Dramatically maintain
                    clicks-and-mortar solutions without functional solutions.
                </p>
                <p class="font-normal my-7">
                    Capitalize on low hanging fruit to identify a ballpark value added activity to 
                    beta test. Override the digital divide with additional clickthroughs from DevOps. 
                    Nanotechnology immersion along the information highway will close the loop on 
                    focusing solely on the bottom line.
                </p>
                <p class="font-normal">
                    Podcasting operational change management inside of workflows to establish a 
                    framework. Taking seamless key performance indicators offline to maximise the 
                    long tail.
                </p>
            </div>
        </div>
    </Layout>
</template>
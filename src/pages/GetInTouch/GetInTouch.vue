<script setup>
    import Layout from "../Layout/Layout.vue"
    import Input from "@/components/Input/Input.vue";
</script>
<template>
    <Layout>
        <div class="flex items-center justify-center w-full h-auto">
            <div class="flex flex-col items-center justify-center bg-[#181826] w-full h-[479px] text-center">
                <h6 class="text-[#FCAE17]">CONTACT US</h6>
                <h4 class="w-[400px] md:w-fit sm:w-[243px] text-3xl md:text-5xl sm:text-4xl font-bold text-[#fff]">
                    Get in Touch With us.
                </h4>
                <p class="w-[413px] md:w-fit sm:w-fit flex-wrap font-normal text-base text-[#fff] mt-5">
                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative 
                </p>
                <p class="w-[413px] md:w-fit sm:w-fit flex-wrap font-normal text-base text-[#fff]">
                    approaches to corporate strategy foster collaborative thinking to further thinking.
                </p>
            </div>
        </div>
        <div class="flex w-full  justify-evenly my-10 px-10">
            <div class="flex flex-col w-[30vw]">
                <h6 class="text-[#FCAE17]">CONTACT FORM</h6>
                <h4 class="w-[400px] md:w-fit sm:w-[243px] text-3xl md:text-5xl sm:text-4xl font-bold text-[#000]">
                    Contact.
                </h4>
                <div class="flex sm:flex-col justify-between mt-10">
                    <div class="flex flex-col sm:w-full">
                        <h4 class="text-sm font-sans text-[#181826] font-bold">Contact Email</h4>
                        <h4 class="text-xs font-sans text-[#181826] font-medium">contact@pursuitsolutions.com</h4>
                    </div>
                </div>
            </div>
            <div class="flex flex-col w-[40vw]">
                
                    <p class="text-[#181826] text-sm w-[500px]">
                        Efficiently myocardinate market-driven innovation in open-source 
                        alignments. Dramatically create high-payoff infomediaries rather than 
                        client-centric without any particular delay.
                    </p>
                    <form class="flex flex-col">
                        <Input type="text" label="Full Name" placeholder="Johnathan Doe"  />
                        <Input type="text" label="Email Address" placeholder="john@emailaddress.com"  />
                        <Input type="number" label="Phone" placeholder="Johnathan Doe"  />
                        <Input type="text" label="Subject" placeholder="Account not working?"  />
                        <div class="flex flex-col">
                            <label class="text-[#181826] font-bold my-3">Message</label>
                            <textarea class="bg-[#F3F9F1]" rows="4" cols="100" placeholder="Enter your message..."></textarea>
                        </div>
                        <button class="w-full h-[55px] bg-[#23A9D0] rounded-md my-3 text-[#fff]">Submit Form</button>
                    </form>
                
            </div>
        </div>
    </Layout>
</template>
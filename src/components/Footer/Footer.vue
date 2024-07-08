<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import * as images from "../../images"
</script>
<template>
    <div className="flex flex-col w-full h-auto md:h-fit sm:h-fit bg-[#181826] justify-evenly overflow-x-hidden py-5">
                <div className="flex lg:flex-row md:flex-col sm:flex-col min-[500px]:flex-col justify-evenly md:items-start sm:items-start md:ml-10 sm:ml-10 mt-10">
                    <div>
                        <a href="/">
                            <img :src="images.pursuit" alt="enterprise" class="w-[215px] h-[45px]" />
                        </a>
                        <p className="w-72 flex-wrap text-[#fff] font-sans text-base my-3">
                            Collaboratively administrate turnkey channels whereas virtual e-tailers. 
                            Objectively seize scalable metrics whereas e-services.
                        </p>
                    </div>
                    
                    <div className="flex flex-col sm:mt-5">
                        <h4 className="text-base font-sans text-[#fff] font-bold">Quick Links</h4>
                        <div className="flex flex-col mt-3 font-normal">
                            <a href="/" className="flex-wrap w-[218px] text-base text-[#fff]">
                                Home
                            </a>
                            <a href="/" className="flex-wrap w-[218px] text-base text-[#fff]">
                                Why Choose Us
                            </a >
                            <a href="/" className="flex-wrap w-[218px] text-base text-[#fff]">
                                Get in Touch
                            </a >
                            <a href="/" className="flex-wrap w-[218px] text-base text-[#fff]">
                                Log In
                            </a >
                        </div>
                    </div>
                    <div className="flex flex-col sm:mt-5">
                        <h4 className="text-base font-sans text-[#fff] font-bold">Get in Touch</h4>
                        <div className="flex flex-col mt-3 font-normal">
                            <p className="flex-wrap w-[218px] text-base text-[#fff]">
                                Terms & Conditions
                            </p>
                            
                        </div>
                    </div>
                </div>
                <div className="flex flex-col font-sans font-medium text-base mx-16 sm:mx-10">
                    <div className="bg-[#38384D] h-px mt-3"></div>
                    <p className="text-[#616161] mt-5 text-base font-normal">Copyright ® 2024 Enterprise Hubs. All right reserved.</p>
                </div>
            </div>
</template>
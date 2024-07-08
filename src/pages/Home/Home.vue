<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
     import Layout from '@/components/Layout/Layout.vue';
     import * as images from "../../images"
</script>
<template>
     <Layout>
          <div class="flex flex-col">
               <div class="flex bg-[#181826] px-16">
                    <div class="flex flex-col w-[50%]">
                         <div className="flex flex-col md:px-10 sm:px-10 py-20 font-sans">
                              <h6 class="text-[#FCAE17] text-xs">SUBHEADER FOR HERO</h6>
                              <h4 className="w-[400px] md:w-fit sm:w-[243px] text-3xl md:text-5xl sm:text-4xl font-bold text-[#fff] leading-[63px]">
                                   Building the Future of Mining Pools.
                              </h4> 
                              <p className="w-[413px] md:w-fit sm:w-fit flex-wrap font-normal text-base text-[#ffffff] my-3">
                                   Enthusiastically mesh long-term high-impact infrastructures.
                              </p> 
                              <p className="w-[413px] md:w-fit sm:w-fit flex-wrap font-normal text-base text-[#ffffff] my-8">
                                   Organically grow the holistic world view of disruptive innovation 
                                   with the new workplace diversity and empowerment. Leverage agile 
                                   frameworks to provide a robust synopsis for high level overviews.
                              </p>
                              <div className="flex justify-center items-center w-[176px] h-[57px] font-medium bg-[#23A9D0] text-[#fff] p-3 w-40 h-12 rounded-full">
                                   <RouterLink>
                                        Learn more
                                   </RouterLink>
                              </div>
                              <div class="flex mt-20">
                                   <img :src="images.btc" alt="bitcoin" />
                                   <img class="mx-8" :src="images.dogecoin" alt="dogecoin"  />
                                   <img :src="images.ethereum" alt="ethereum"  />
                                   <img class="mx-8" :src="images.k" alt="k"  />
                                   <img :src="images.litecoin" alt="litecoin"  />
                              </div>
                         </div>
                    </div>
                    <div class="flex w-[50%]"><img :src="images.composition" alt="composition" /></div>
               </div>
               <div class="flex flex-col px-10 my-10">
                    <div class="flex items-center w-full">
                         <div class="w-1/2">
                              <h6 class="text-[#FCAE17] text-xs">SUBHEADER FOR HERO</h6>
                              <h4 className="w-[400px] md:w-fit sm:w-[243px] text-3xl md:text-5xl sm:text-4xl font-bold text-[#000] leading-[63px]">
                                   Key performance indicators.
                              </h4>
                         </div>
                         <div class="w-1/2">
                              <p class="w-[506px] text-[#181826] text-base">
                                   Completely synergize resource taxing relationships via premier 
                                   niche markets. Professionally cultivate one-to-one customer service
                                   with robust ideas. Dynamically innovate resource-leveling customer 
                                   service for state of the art.
                              </p>
                         </div>
                    </div>
                    <div class="grid grid-cols-3 mt-10">
                         <div class="w-[370px] h-[362px] bg-[#23A9D0] p-10 rounded-md">
                              <div class="flex items-center justify-center w-[100px] h-[100px] rounded-full bg-[#23A9D0]">
                                   <img :src="images.convertshape" alt="shape">
                              </div>
                              <h5 class="font-bold text-lg text-[#fff] my-5">Frameworks for a robust synopsis with issues.</h5>
                              <p class="text-base text-[#fff]">
                                   Capitalize on low hanging fruit to then identify a ballpark value 
                                   added within a activity to beta test.
                              </p>
                         </div>
                         <div class="w-[370px] h-[362px] bg-[#FCAE17] p-10 rounded-md">
                              <div class="flex items-center justify-center w-[100px] h-[100px] rounded-full">
                                   <img :src="images.element3" alt="shape">
                              </div>
                              <h5 class="font-bold text-lg text-[#181826] my-5">Frameworks for a robust synopsis with issues.</h5>
                              <p class="text-base text-[#181826]">
                                   Capitalize on low hanging fruit to then identify a ballpark value 
                                   added within a activity to beta test.
                              </p>
                         </div>
                         <div class="w-[370px] h-[362px] bg-[#ED5962] p-10 rounded-md">
                              <div class="flex items-center justify-center w-[100px] h-[100px] rounded-full">
                                   <img :src="images.cpu" alt="shape">
                              </div>
                              <h5 class="font-bold text-lg text-[#181826] my-5">Frameworks for a robust synopsis with issues.</h5>
                              <p class="text-base text-[#181826]">
                                   Capitalize on low hanging fruit to then identify a ballpark value 
                                   added within a activity to beta test.
                              </p>
                         </div>
                    </div>
                    <div class="flex w-full px-10 bg-[#F3F9F1] roundex-md my-10">  
                         <div class="flex flex-col w-[50%]">
                              <div className="flex flex-col md:px-10 sm:px-10 py-20 font-sans">
                                   <h6 class="text-[#FCAE17] text-xs">SUBHEADER FOR HERO</h6>
                                   <h4 className="w-[400px] md:w-fit sm:w-[243px] text-3xl md:text-5xl sm:text-4xl font-bold text-[#000] leading-[63px]">
                                        Begin collaboratively administrating sales.
                                   </h4>
                                   <p className="w-[413px] md:w-fit sm:w-fit flex-wrap font-normal text-base text-[#000] my-3">
                                        Efficiently unleash cross-media information without cross-media 
                                        value. Quickly maximize timely deliverables for schemas. With any 
                                        dramatically maintain clicks-and-mortar solutions.
                                   </p>
                                   <div className="flex justify-center items-center w-[176px] h-[57px] font-medium bg-[#23A9D0] text-[#fff] p-3 w-40 h-12 rounded-full">
                                        <RouterLink>
                                             Call to Action
                                        </RouterLink>
                                   </div>
                                   
                              </div>
                         </div>
                         <div class="flex w-[50%]"><img :src="images.composition2" alt="composition" /></div>
                    </div>
                    <div class="flex w-full px-10 roundex-md my-10">  
                         <div class="flex w-[50%]"><img :src="images.composition3" alt="composition" /></div>
                         <div class="flex flex-col w-[50%]">
                              <div className="flex flex-col md:px-10 sm:px-10 py-20 font-sans">
                                   <h6 class="text-[#FCAE17] text-xs">SUBHEADER FOR HERO</h6>
                                   <h4 className="w-[400px] md:w-fit sm:w-[243px] text-3xl md:text-5xl sm:text-4xl font-bold text-[#000] leading-[63px]">
                                        At the end of the day, going forward issues.
                                   </h4>
                                   <div className="flex justify-center items-center mt-8 w-[176px] h-[57px] font-medium bg-[#23A9D0] text-[#fff] p-3 w-40 h-12 rounded-full">
                                        <RouterLink>
                                             Call to Action
                                        </RouterLink>
                                   </div>
                                   
                              </div>
                         </div>
                    </div>
                    <div class="flex items-center justify-center w-full h-auto">
                         <div class="flex flex-col items-center justify-center bg-[#F3F9F1] w-[1170px] h-[479px] text-center">
                              <h4 className="w-[400px] md:w-fit sm:w-[243px] text-3xl md:text-5xl sm:text-4xl font-bold text-[#181826]">
                                   Completely synergize resource taxing new
                              </h4>
                              <h4 className="w-[400px] mt-2 md:w-fit sm:w-[243px] text-3xl md:text-5xl sm:text-4xl font-bold text-[#181826]">
                                   relationships via premier niche markets. 
                              </h4>
                              <p className="w-[413px] md:w-fit sm:w-fit flex-wrap font-normal text-base text-[#181826] mt-5">
                                   Proactively envisioned multimedia based expertise and cross-media growth. Seamlessly
                              </p>
                              <p className="w-[413px] md:w-fit sm:w-fit flex-wrap font-normal text-base text-[#181826]">
                                   begin to visualize quality intellectual capital without superior collaboration.
                              </p>
                              <div className="flex justify-center items-center mt-8 w-[176px] h-[57px] font-medium bg-[#23A9D0] text-[#fff] p-3 w-40 h-12 rounded-full">
                                   <RouterLink>
                                        Get in Touch
                                   </RouterLink>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </Layout>
</template>
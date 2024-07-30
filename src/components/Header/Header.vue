<!-- eslint-disable vue/multi-word-component-names
<script setup>
    import { ref } from "vue";  
    import * as images  from "../../images"
    import MenuIcon from "vue-material-design-icons/Menu.vue"
    import 'vue-material-design-icons/styles.css';

    const nav = ref(false);
   
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

        <div onClick={handleNav} className='sm:block md:block hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

    </div> -->


    <!-- <div className="flex flex-row justify-between h-20 px-20 sm:px-10 w-full items-center">
                <div>
                    <a href="/">
                        <img src={Images.Enterprise} alt="enterprise" className="w-[125px] h-[44px]" />
                    </a>
                </div>
                <div className="flex md:hidden sm:hidden items-center text-base font-sans font-medium">
                        <NavLink to="/" className={({isActive})=>(isActive ? "text-[#DE2223] mr-4" : "mr-4")} exact>HOME</NavLink>
                        <NavLink to="/about-us" className={({isActive})=>(isActive ? "text-[#DE2223] mx-4" : "mx-4")}>ABOUT</NavLink>
                        <NavLink to="/service" className={({isActive})=>(isActive ? "text-[#DE2223] mx-4" : "mx-4")}>SERVICES</NavLink>
                        <Menu>
                            <MenuButton as={Text} cursor="pointer">
                                LOCATION
                            </MenuButton>
                            <MenuList>
                                <MenuItem><NavLink to="/lagos">LAGOS</NavLink></MenuItem>
                                <MenuItem><NavLink to="/abuja">ABUJA</NavLink></MenuItem>
                                <MenuItem><NavLink to="/kano">KANO</NavLink></MenuItem>
                            </MenuList>
                        </Menu>
                        <NavLink  to="/gallery" className={({isActive})=>(isActive ? "text-[#DE2223] mx-4" : "mx-4")}>GALLERY</NavLink>
                        <NavLink  to="/blog" className={({isActive})=>(isActive ? "text-[#DE2223] mx-4" : "mx-4")}>BLOG</NavLink>
                        <NavLink  to="/franchise" className={({isActive})=>(isActive ? "text-[#DE2223] " : "mx-4")}>FRANCHISE</NavLink>
                        {/* <NavLink to="/contact-us" className="flex justify-center items-center mx-4 bg-[#DE2223] text-[#ffffff] w-40 h-12 rounded-md">
                            <motion.div
                                whileHover={{scale: 1.1}}
                                whileTap={{scale: 0.9}}>
                                Contact Us
                            </motion.div>
                        </NavLink> */}
                        
                        <motion.div 
                            className=" mx-4 bg-[#DE2223] text-[#ffffff] w-40 h-12 rounded-md"
                            whileHover={{scale: 1.1}}
                            whileTap={{scale: 0.9}}>
                            <NavLink to="/contact-us" className="flex justify-center items-center w-full h-full">Contact Us</NavLink>
                        </motion.div>
                </div>
                <div onClick={handleNav} className='sm:block md:block hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                </div>
                {
                    nav && (
                        <div className="fixed md:fixed w-screen h-full top-0 right-0  ease-in-out duration-500 bg-[#fff] text-base text-[#000000] font-sans font-medium">
                            <div  className='flex items-center justify-between p-5'>
                                <a href="/">
                                    <img src={Images.Enterprisemob} href="/" alt="enterprise logo on mobile" />
                                </a>
                                <div onClick={handleNav}>
                                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                                </div>
                            </div>
                            <div className="flex flex-col mx-10">
                                <div className="flex flex-col justify-between">
                                    <NavLink to="/" className="flex items-center justify-between my-4 text-xl font-medium">Home<span><GoArrowUpRight /></span></NavLink>
                                    <NavLink to="/about-us" className="flex items-center justify-between my-4 text-xl font-medium">About<span><GoArrowUpRight /></span></NavLink>
                                    <NavLink to="/service" className="flex items-center justify-between my-4 text-xl font-medium">Service<span><GoArrowUpRight /></span></NavLink>
                                    <Menu className="my-4">
                                        <MenuButton display="flex" as={Text} className="flex items-center justify-between my-4 text-xl font-medium w-[100%]" cursor="pointer" rightIcon={<ChevronDownIcon />}>
                                            <p className="flex items-center justify-between">Location <span><IoIosArrowDown /></span></p>
                                        </MenuButton>
                                        <MenuList minW="200px"> 
                                            <MenuItem minW="350px"><NavLink to="/lagos" className="my-4 text-xl font-medium w-[200px]">Lagos</NavLink></MenuItem>
                                            <MenuItem minW="350px"><NavLink to="/abuja" className="my-4 text-xl font-medium w-[200px]">Abuja</NavLink></MenuItem>
                                            <MenuItem minW="350px"><NavLink to="/kano" className="my-4 text-xl font-medium w-[200px]">Kano</NavLink></MenuItem>
                                        </MenuList>
                                    </Menu>
                                    <NavLink to="/gallery" className="flex items-center justify-between my-4 text-xl font-medium">Gallery<span><GoArrowUpRight /></span></NavLink>
                                    <NavLink to="/blog" className="flex items-center justify-between my-4 text-xl font-medium">Blog<span><GoArrowUpRight /></span></NavLink>
                                    <NavLink to="/franchise" className="flex items-center justify-between my-4 text-xl font-medium">Frachise<span><GoArrowUpRight /></span></NavLink>
                                    <motion.div
                                        className="flex justify-center items-center mt-10 bg-[#DE2223] text-[#ffffff] w-[80vw] h-12 rounded-md"
                                        whileHover={{scale: 1.1}}
                                        whileTap={{scale: 0.9}}>
                                        <NavLink to="/contact-us">Contact Us</NavLink>
                                    </motion.div>
                                </div>
                                <div className="flex flex-col items-center w-full">
                                    <Link to="*" className="underline text-[#81C167] text-lg font-bold my-5">Sign In</Link>
                                    <div className="flex text-[#DE2223] text-3xl">
                                        <a href="https://www.linkedin.com/company/enterprise-hubs/"><FaLinkedin /></a>
                                        <a href="https://www.instagram.com/enterprisehubs?igsh=YzljYTk1ODg3Zg==" className="mx-10"><AiFillInstagram /></a>
                                        <a href="https://www.facebook.com/enterprisehubs01?mibextid=ZbWKwL"><FaFacebookSquare /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div> -->

<!-- </template> -->

<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref } from "vue";  
import * as images from "../../images";
import MenuIcon from "vue-material-design-icons/Menu.vue";
import CloseIcon from "vue-material-design-icons/Close.vue";
import 'vue-material-design-icons/styles.css';

// State to toggle the menu
const nav = ref(false);

// Toggle function for the menu
const handleNav = () => {
  nav.value = !nav.value; // Toggles between true and false
};
</script>

<template>
  <div class="w-full h-[13vh] bg-[#181826] flex items-center justify-between px-16">
    <!-- Desktop Navbar -->
    <nav class="sm:hidden md:flex text-[#fff] font-sans list-none cursor-pointer font-bold text-sm">
      <RouterLink to="/" class="hover:text-gray-300">HOME</RouterLink>
      <RouterLink to="/about-us" class="mx-4 hover:text-gray-300">WHY CHOOSE US</RouterLink>
      <RouterLink to="/get-in-touch" class="hover:text-gray-300">GET IN TOUCH</RouterLink>
      <RouterLink to="/register" class="ml-4 hover:text-gray-300">REGISTER</RouterLink>
    </nav>

    <!-- Logo -->
    <img :src="images.pursuit" alt="pursuit" class="w-[215px] h-[45px]" />

    <!-- Log In Button -->
    <RouterLink to="/sign-in" class="sm:hidden md:block font-bold text-sm text-[#fff] hover:text-gray-300">
      Log In to Your Account
    </RouterLink>

    <!-- Mobile Menu Icon -->
    <div class="absolute right-10 hidden sm:block md:hidden" @click="handleNav">
      <!-- Conditional rendering of Menu and Close icons -->
      <MenuIcon v-if="!nav" class="text-white cursor-pointer" :size="35" />
      <CloseIcon v-else class="text-white cursor-pointer" :size="35" />
      <!-- <CloseIcon v-if="nav" class="text-white cursor-pointer" :size="50" />
      <MenuIcon v-else class="text-white cursor-pointer" :size="35" /> -->
      
    </div>
  </div>

  <!-- Mobile Menu -->
  <div
    v-if="nav"
    class="relative top-0 left-0 w-screen h-screen bg-[#181826] flex flex-col items-center justify-center z-50 md:hidden lg:hidden overflow-hidden"
  >
    <RouterLink
      to="/"
      class="text-[#fff] text-xl mb-6 hover:text-gray-300"
      @click="handleNav"
    >
      HOME
    </RouterLink>
    <RouterLink
      to="/about-us"
      class="text-[#fff] text-xl mb-6 hover:text-gray-300"
      @click="handleNav"
    >
      WHY CHOOSE US
    </RouterLink>
    <RouterLink
      to="/get-in-touch"
      class="text-[#fff] text-xl mb-6 hover:text-gray-300"
      @click="handleNav"
    >
      GET IN TOUCH
    </RouterLink>
    <RouterLink
      to="/sign-in"
      class="font-bold text-xl text-[#fff] hover:text-gray-300"
      @click="handleNav"
    >
      Log In to Your Account
    </RouterLink>
    <RouterLink
      to="/register"
      class="font-bold text-xl text-[#fff] hover:text-gray-300"
      @click="handleNav"
    >
      Register
    </RouterLink>
  </div>
</template>


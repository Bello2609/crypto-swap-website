<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
    import { defineProps } from 'vue';

    const props = defineProps({
        type: {
            type: String,
            required: true
        },
        label:{
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        }
    })
</script>
<template>
    <div class="flex flex-col my-3">
        <label class="text-[#181826] font-bold my-3">{{label}}</label>
        <div class="w-[370px] h-[50px]">
            <input 
                :type="type" 
                :placeholder="placeholder" 
                class="w-full h-full bg-[#F3F9F1] p-2 focus:border-2 focus:border-[#23A9D0] rounded-md" 
            />
        </div>
    </div>
</template>
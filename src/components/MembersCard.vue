<script setup>
const props = defineProps({
    image: {
      type: String  
    },
    name: {
        type: String
    },
    info_project: {
        type: Number
    },
    languages: {
        type: Array
    }
})

</script>
<template>
    <span class="container-members-span">
        <div class="container-members">
            <div class="box-img">
                <img :src="props.image" alt="">
            </div>

            <div class="box-content">
                <div class="box-texts">
                    <h2>{{ props.name }}</h2>
                    <p>Amount of projects: {{ props.info_project }}</p>
                    <p>Languages:</p>
                </div>

                <div class="box-languages">
                    <div class="boxes" v-for="(langs,index) in props.languages" :key="index"> <mdicon class="vicon" :name="langs" :height="40" :width="40" fill="black" /></div>
                </div>
            </div>
            <div class="overlay-about">
            </div> 
        </div>    
    </span>
</template>
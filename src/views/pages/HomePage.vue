<template>

    <div class="container">
        <h1>Welcome to API Project</h1>
         <HomeComponent />
    </div>

</template>


<script>
import HomeComponent from '@/components/HomeComponent.vue';


export default{
    name: 'Homepage',
    components: {
        HomeComponent,
    },


}

</script>
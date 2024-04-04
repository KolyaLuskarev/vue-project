

<script >

import FoodList from '/home/nluskarev/vue-project/src/components/FoodList.vue'


export default{
 
 name:'app',
 props:['persons'],
 components:{
   FoodList
 }
 
 }

</script>

<template>
    <div>
        
    <title>Vue.js Input Output</title>
   


    
    <div>
        <ul>
    <FoodList 
        v-for="(person, index) in persons" 
        v-bind:key="index" 
        :person="person"
    />
</ul>
</div>



    </div>

</template>

<style scoped>
ul{
    list-style-type: none;
    margin: 0;
    padding: 0;
}
</style>
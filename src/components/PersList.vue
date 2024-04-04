

<script setup>

import FoodList from './FoodList.vue'



</script>

<template>
    <div>
        
    <title>Vue.js Input Output</title>
   


    <div id="app">
        <input type="text" v-model="name" @input="updateList">
        <ul>
            <li v-for="(item, index) in names" :key="index">{{ item }}</li>
        </ul>
    </div>
<ul>Persons</ul>
<FoodList/>

    </div>

</template>
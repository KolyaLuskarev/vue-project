<template>
    <v-sheet class="mx-auto" width="300">
   <v-form @submit.prevent="storeFood.addFood(foodName,foodPrise)">
     <v-text-field
       v-model="foodName"
       :rules="rules"
       label="Name of dish"
     ></v-text-field>
     <v-text-field
       v-model="foodPrise"
       :rules="rules"
       label="Prise of dish"
     ></v-text-field>
     <v-btn class="mt-2" type="submit" block>Submit</v-btn>
   </v-form>
 </v-sheet>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useFoodStore }  from '@/stores/useFoodStore';

const storeFood = useFoodStore();
const foodName=ref("");
const foodPrise=ref("");


</script>

<style scoped></style>

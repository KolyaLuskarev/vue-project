<template>
    <v-sheet class="mx-auto" width="300">
   <v-form @submit.prevent="storeFood.addFood(foodName,foodPrise, custName)">
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

     <v-radio-group v-model="custName">
      <v-radio
        v-for="name in storeNames.names"
        :key="name.id"
        :label="name.name"
        :value="name.name"
      ></v-radio>
    </v-radio-group>
     
     <v-btn class="mt-2" type="submit" block>Submit</v-btn>
   </v-form>
 </v-sheet>
</template>
<script setup>
import { ref, computed } from 'vue'
import { useOrderStore }  from '@/stores/useOrderStore';
import { useNamesStore } from '@/stores/root';

const storeFood = useOrderStore();
const storeNames= useNamesStore();
const custName= ref("");
const foodName=ref("");
const foodPrise=ref("");


</script>

<style scoped></style>
@/stores/useOrderStore
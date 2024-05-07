<script setup>
import { useNamesStore } from '@/stores/root';
import { useOrderStore } from '@/stores/useOrderStore'
import InputFood from '../components/InputFoodForm.vue'
import Butt from '../components/AppButton.vue'
const store = useNamesStore()
const foodStore = useOrderStore()

</script>

<template>
   

   <div class="root">
     
      <div class="main">

         <InputFood/>
       
         <RouterLink :to=" '/result'">

       <Butt Declar="Results"  />

       </RouterLink>
       
      


      <div>

      <v-card
    class="mx-auto"
    max-width="300"
  >
  <v-list
      :items="foodStore.foodList"
      item-title="foodName"
      item-value="id"
    ></v-list>    
    <v-list
      :items="foodStore.foodPrice"
      item-title="foodPrice"
      item-value="id"
    ></v-list>  
  </v-card>

</div>
      </div>
  
   </div>
</template>

<style lang="sass" scoped>

@import '../assets/styles/main'

.root
   displey: flex
   min-height: 100vh
   background-color: $background

.main
   padding: 10px 20px
   position: relative




   
   

</style>@/stores/root@/stores/useOrderStore
<script setup>
import { useNamesStore } from '@/stores/root';
import { useOrderStore } from '@/stores/useOrderStore'
import InputFood from '../components/InputFoodForm.vue'
import Butt from '../components/AppButton.vue'
const store = useNamesStore()
const foodStore = useOrderStore()

const debtors= foodStore.debtors


</script>

<template>Result

<div class="root">
     
     <div class="main">
 <div>Current Count: {{ store.names }}</div>
      <div> Dishes: {{  foodStore.foodList  }}   </div>

      <div> {{  debtors }}  </div>

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
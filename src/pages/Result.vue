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


      <div>
    <h2>Должники:</h2>
    <ul v-if="debtors.length > 0">
      <li v-for="debtor in debtors" :key="debtor.id">
        <h3>{{ debtor.name }} - {{ debtor.debt.toFixed(2) }}</h3>
        <ul v-if="debtor.orders.length > 0">
          <template v-for="order in debtor.orders" :key="order.orderID" >
            <template v-if="debtor.name !== order.payerName">
               <li>
            <h4>{{ order.foodName }} ({{ order.partOfPrise.toFixed(2) }})</h4> 
            <p>Кому должен: {{ order.payerName }}</p>
            <!-- Список остальных участников заказа (кроме должника) -->
            <p v-if="order.custNames.length > 1">
              С кем:
              <span v-for="(cust, index) in order.custNames" :key="cust.id">
                {{ cust.name }}<span v-if="index !== order.custNames.length - 1">, </span>
              </span>
            </p>
         </li>
         </template>
          </template>
        </ul>
      </li>
    </ul>
    <p v-else>Нет должников</p>
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
<script setup>
  import { useOrderStore } from '@/stores/useOrderStore';

  const foodStore = useOrderStore();
  const debtorsStore = foodStore.debtors;
</script>

<template>
  <div class = "root">
    <div class = "main">
      <div class = "debtors">
        <h2>Debtors:</h2>
        <ul v-if = "debtorsStore.length > 0">
          <li v-for = "debtor in debtorsStore" :key = "debtor.id">
            <h3>{{ debtor.name }} - {{ debtor.debt.toFixed(2) }}</h3>
            <ul v-if = "debtor.orders.length > 0">
              <template v-for = "order in debtor.orders" :key = "order.orderID">
                <template v-if = "debtor.name !== order.payerName">
                  <li>
                    <h4>{{ order.foodName }} ({{ order.partOfPrise.toFixed(2) }})</h4>
                    <p>Whom does he owe: {{ order.payerName }}</p>
                    <!-- Список остальных участников заказа (кроме должника) -->
                    <p v-if = "order.custNames.length > 1">
                      With whom:
                      <span v-for = "(cust, index) in order.custNames" :key = "cust.id">
                        {{ cust.name }}
                        <span v-if = "index !== order.custNames.length - 1">, </span>
                      </span>
                    </p>
                  </li>
                </template>
              </template>
            </ul>
          </li>
        </ul>
        <p v-else>No debtors</p>
      </div>
    </div>
  </div>
</template>

<style lang = "sass" scoped>
  @import '../assets/styles/main'

  .root 
    min-height: 100vh
    background-color: $background
  
  .main 
    padding: 10px 20px
    position: relative
  
  .debtors 
    vertical-align: middle
    display: table
    height: 100vh
    text-align: center
    width: 100%

    h2, ul, p 
      width: 100%
    
  
</style>
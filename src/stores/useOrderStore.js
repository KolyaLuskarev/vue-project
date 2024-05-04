import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useOrderStore = defineStore('foodList', {
  state: () => ({
    /** @type {{ foodName: string,  foodPrise: number,  custNames: [], orderID: number}[]} */
    foodList: [],
    orderID: 0,
   

  }),
  actions: {
    addFood(foodName, foodPrise, custNames) {
      this.foodList.push(
        { foodName,
          foodPrise,
          custNames,
          orderID: this.orderID++,
          payerName: '',
        })
     
    },
  },
})
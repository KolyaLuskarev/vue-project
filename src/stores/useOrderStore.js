import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useOrderStore = defineStore('foodList', {
  state: () => ({
    /** @type {{ foodName: string,  foodPrise: number, foodID: number }[]} */
    foodList: [],
    orderID: 0,
    foodID: 0,
    /** @type {{ name: string , orderID: number }[]} */
    names: [],
  }),
  actions: {
    addFood(foodName, foodPrise, name) {
      this.foodList.push({ foodName, foodPrise,  foodID: this.foodID++ })
      
      this.names.push({ name, orderID: this.orderID++ })
    },
  },
})
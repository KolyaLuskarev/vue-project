import { defineStore } from 'pinia'

export const useOrderStore = defineStore('foodList', {
  state: () => ({
    /** @type {{ foodName: string,  foodPrise: number,  custNames: [], payerName: string, orderID: number}[]} */
    foodList: [],
    orderID: 0,
  }),
  actions: {
    addFood(foodName, foodPrise, custNames, payerName) {
      const numericPrise = parseFloat(foodPrise)
      if (isNaN(numericPrise)) {
        // Обработка ошибки: foodPrise не является числом
        alert('Price must be a number!')
        return
      }

      this.foodList.push({
        foodName,
        foodPrise,
        custNames,
        payerName,
        orderID: this.orderID++,
      })
    },
  },
  getters: {
    debtors: (state) => {
      // Группировка заказов по ID должника
      const ordersByDebtorId = {}
      for (const order of state.foodList) {
        for (const { id, name } of order.custNames) { // Деструктуризация id и name
          if (!ordersByDebtorId[id]) {
            ordersByDebtorId[id] = { name, orders: [] }
          }
          ordersByDebtorId[id].orders.push(order)
        }
      }

      // Создание массива должников
      const debtors = []
      for (const debtorId in ordersByDebtorId) {
        const { name, orders } = ordersByDebtorId[debtorId]
        let totalDebt = 0
        for (const order of orders) {
          if (order.payerName !== name) {
            totalDebt += order.foodPrise / order.custNames.length
            order.partOfPrise = order.foodPrise / order.custNames.length
          }
        }

        if (totalDebt > 0) {
          debtors.push({
            id: debtorId,    // Добавляем ID должника
            name: name,
            debt: totalDebt,
            orders: orders,
          })
        }
      }
      return debtors
    },
  },
})

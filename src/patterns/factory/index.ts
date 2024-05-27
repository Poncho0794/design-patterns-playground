import { Drink, Espresso, Mojito } from "./Drinks"


export abstract class DrinksShop {
  abstract createDrink: () => Drink
  bill: Drink[] = []
  getTotalBill = (): number => {
    return this.bill.reduce((prevTotal, currentDrink)=> {
      return prevTotal + currentDrink.price
    }, 0)
  }
  addDrinkToBill = (newDrink: Drink) => {
    this.bill.push(newDrink)
  }
}

export class Cafeteria extends DrinksShop{
  createDrink: () => Espresso = () => new Espresso()
}

export class Bar extends DrinksShop {
  createDrink: () => Mojito = () => new Mojito()
}
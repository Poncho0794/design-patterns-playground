export interface Drink {
  imageURL: string
  recipe: string
  printRecipe: () => void
  price: number
}

export class Espresso implements Drink {
  recipe: string = `- Pull your espresso shot
  - Whip cream until stiff peaks form
  - Dollop whipped cream on your espresso`
  imageURL: string = "https://unsplash.com/photos/white-ceramic-mug-with-coffee-on-brown-wooden-table-BewKTZMv7V0"
  price = 10
  printRecipe = () => {console.log(this.recipe)}
}

export class Mojito implements Drink {
  recipe: string = `
  - Muddle the lime juice, sugar and mint leaves in a small jug, crushing the mint as you go – you can use the end of a rolling pin for this. Pour into a tall glass and add a handful of ice.
  - Pour over the rum, stirring with a long-handled spoon. Top up with soda water, garnish with mint and serve.`
  imageURL: string = "https://unsplash.com/photos/a-glass-of-ice-water-with-a-lime-and-mint-garnish-aM3LR10BeAc"
  price = 20
  printRecipe = () => {console.log(this.recipe)}
}
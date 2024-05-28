export interface Drink {
  imageURL: string;
  recipe: string;
  printRecipe: () => void;
  price: number;
  name: string;
}

export class Espresso implements Drink {
  name = 'Espresso';
  recipe: string = `- Pull your espresso shot
  - Whip cream until stiff peaks form
  - Dollop whipped cream on your espresso`;
  imageURL: string =
    'https://images.unsplash.com/photo-1596952954288-16862d37405b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  price = 10;
  printRecipe = () => {
    console.log(this.recipe);
  };
}

export class Mojito implements Drink {
  name = 'Mojito';
  recipe: string = `
  - Muddle the lime juice, sugar and mint leaves in a small jug, crushing the mint as you go – you can use the end of a rolling pin for this. Pour into a tall glass and add a handful of ice.
  - Pour over the rum, stirring with a long-handled spoon. Top up with soda water, garnish with mint and serve.`;
  imageURL: string =
    'https://images.unsplash.com/photo-1653542772393-71ffa417b1c4?q=80';
  price = 20;
  printRecipe = () => {
    console.log(this.recipe);
  };
}

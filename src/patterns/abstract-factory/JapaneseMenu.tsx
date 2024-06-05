import { Appetizer, Dessert, MainDish, Menu } from '.';

export class JapaneseMenu implements Menu {
  menuName: string = 'Japanese Menu';
  createAppetizer = () => (
    <Appetizer
      title="Kushiagues"
      description="Japanese dish of deep-fried skewered meat and vegetables"
      imgUrl="https://imag.bonviveur.com/kushiages-de-queso-con-salsa-para-mojar_1000.webp"
    />
  );
  createMainDish = () => (
    <MainDish
      title="Ramen"
      printCal={() => alert('Tiene 1000 calorias')}
      description="Japanese noodle soup, with a combination broth and a selection of meats or vegetables"
      imgUrl="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
  createDessert = () => (
    <Dessert
      title="Japanese Cake"
      printSugarGr={() => alert('Tiene 6g de azucar')}
      description="A mix between a regular cheesecake mixed with a chiffon cake"
      imgUrl="https://peopleenespanol.com/thmb/hWpfy8HlRoRkh2YicwFFJOsQyBQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/recetas-1092-arroz-con-leche-2000-ac1485846508488e8da95f5f9c8de793.jpg"
    />
  );
}

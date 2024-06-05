import { Appetizer, Dessert, MainDish, Menu } from '.';

export class MexicanMenu implements Menu {
  menuName: string = 'Mexican Menu';
  createAppetizer = () => (
    <Appetizer
      title="Nachos"
      description="Tortilla frita con queso, carne, jalapenios y chili"
      imgUrl="https://images.unsplash.com/photo-1464219222984-216ebffaaf85?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
  createMainDish = () => (
    <MainDish
      title="Tacos"
      printCal={() => alert('Tiene 1000 calorias')}
      description="Tortilla de maiz, de barbacoa, cebolla y cilantro"
      imgUrl="https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=894&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />
  );
  createDessert = () => (
    <Dessert
      title="nachos"
      printSugarGr={() => alert('Tiene 6g de azucar')}
      description="Arroz cocido en leche, con canela"
      imgUrl="https://peopleenespanol.com/thmb/hWpfy8HlRoRkh2YicwFFJOsQyBQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/recetas-1092-arroz-con-leche-2000-ac1485846508488e8da95f5f9c8de793.jpg"
    />
  );
}

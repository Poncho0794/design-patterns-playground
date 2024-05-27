import { useState } from "react";
import { Drink } from "../../patterns/factory/Drinks";
import { Bar, Cafeteria, DrinksShop } from "../../patterns/factory";
interface Places {
  [x: string]: DrinksShop;
}
const places: Places = {
  cafe: new Cafeteria(),
  bar: new Bar(),
};
export const TestFactory = () => {
  const [place, setPlace] = useState({} as DrinksShop);
  const [drink, setDrink] = useState({} as Drink);

  const handlePlaceChange = (placeName: string) => {
    setPlace(places[placeName]);
  };

  return (
    <>
      <h1>Where to Go?</h1>
      <select onChange={(e) => handlePlaceChange(e.target.value)}>
        <option>Cafe</option>
        <option>Bar</option>
      </select>
      TODO: imprimir bebida, crear boton de agregar bebida, mostrar total
    </>
  );
};

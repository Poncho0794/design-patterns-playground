import { ReactElement } from 'react';
import { Appetizer, Dessert, MainDish } from './components';

export type DishProps = {
  imgUrl: string;
  title: string;
  description: string;
  type?: string;
};

export type MainDishProps = DishProps & {
  printCal: () => void;
};

export type DessertProps = DishProps & {
  printSugarGr: () => void;
};
export { Appetizer, MainDish, Dessert };
export interface Menu {
  menuName: string;
  createAppetizer: () => ReactElement<DishProps, any>;
  createMainDish: () => ReactElement<MainDishProps, any>;
  createDessert: () => ReactElement<DessertProps, any>;
}

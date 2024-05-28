import { useState } from 'react';
import { Drink } from '../../patterns/factory/Drinks';
import { Bar, Cafeteria, DrinksShop } from '../../patterns/factory';
import { FormControl, InputLabel, Select, MenuItem, Grid } from '@mui/material';
import { DrinksContainer } from './drinks-container';
interface Places {
  [x: string]: DrinksShop;
}
const places: Places = {
  Cafe: new Cafeteria(),
  Bar: new Bar(),
};
export const TestFactory = () => {
  const [place, setPlace] = useState<DrinksShop>({} as DrinksShop);
  const [placeName, setPlaceName] = useState('');
  const [mainDrink, setMainDrink] = useState<Drink>({} as Drink);
  const [drinkList, setDrinkList] = useState<Drink[]>([]);

  const handleAddDrink = () => {
    const newDrink = place?.createDrink();
    place?.addDrinkToBill(newDrink);
    setDrinkList([...place.bill]);
  };

  const handlePlaceChange = (placeName: string) => {
    const placeSelected = places[placeName];
    setPlace(placeSelected);
    const mainDrink = placeSelected.createDrink();
    setMainDrink(mainDrink);
    setPlaceName(placeSelected.name);
    setDrinkList([...placeSelected.bill]);
  };
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={8}>
        <h1>Where to Go?</h1>
        <FormControl fullWidth>
          <InputLabel id="place-select-label">Places</InputLabel>
          <Select
            labelId="place-select-label"
            id="place-select"
            label="Places"
            value={placeName}
            onChange={(e) => handlePlaceChange(e.target.value as string)}
          >
            <MenuItem value="Cafe">Cafe</MenuItem>
            <MenuItem value="Bar">Bar</MenuItem>
          </Select>
        </FormControl>
        {place.name && (
          <>
            <h2>{place.name}</h2>
            <h3>Drinks</h3>
            <DrinksContainer
              drinkList={drinkList}
              place={place}
              mainDrink={mainDrink}
              onAddDrink={handleAddDrink}
            />
          </>
        )}
      </Grid>
    </Grid>
  );
};

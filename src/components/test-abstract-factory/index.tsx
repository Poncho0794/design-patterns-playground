import { Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Menu } from '../../patterns/abstract-factory';
import { MexicanMenu } from '../../patterns/abstract-factory/MexicanMenu';
import { JapaneseMenu } from '../../patterns/abstract-factory/JapaneseMenu';
import { useState } from 'react';
interface Menus {
  [x: string]: Menu;
}
const menus: Menus = {
  'Mexican Menu': new MexicanMenu(),
  'Japanese Menu': new JapaneseMenu(),
};
export const TestAbstractFactory: React.FC = () => {
  const [menu, setMenu] = useState<Menu>({} as Menu);
  const [menuName, setMenuName] = useState('');

  const handleMenuChange = (menuName: string) => {
    setMenu(menus[menuName]);
    setMenuName(menuName);
  };
  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <h1>Which Menu do you want to see?</h1>
        <FormControl fullWidth>
          <InputLabel id="menu-select-label">Menus</InputLabel>
          <Select
            labelId="menu-select-label"
            id="menu-select"
            label="Menus"
            value={menuName}
            onChange={(e) => handleMenuChange(e.target.value as string)}
          >
            <MenuItem value="Japanese Menu">Japanese Menu</MenuItem>
            <MenuItem value="Mexican Menu">Mexican Menu</MenuItem>
          </Select>
        </FormControl>
        {menu.menuName && (
          <>
            <h2>{menu.menuName}</h2>
            <Grid container direction="row">
              <Grid item md={4}>
                {' '}
                {menu.createAppetizer()}
              </Grid>
              <Grid item md={4}>
                {' '}
                {menu.createMainDish()}
              </Grid>
              <Grid item md={4}>
                {' '}
                {menu.createDessert()}
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </Grid>
  );
};

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import { DrinksShop } from '../../../patterns/factory';
import { Drink } from '../../../patterns/factory/Drinks';
import { useEffect, useState } from 'react';

interface Props {
  drinkList: Drink[];
  place: DrinksShop;
  mainDrink: Drink;
  onAddDrink: () => void;
}
export const DrinksContainer: React.FC<Props> = ({
  drinkList,
  onAddDrink,
  mainDrink,
  place,
}) => {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setTotal(place.getTotalBill());
  }, [drinkList]);
  return (
    <Grid container direction="row">
      <Grid item md={8}>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={mainDrink.imageURL}
            title={mainDrink.name}
            component="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {mainDrink.name} - ${mainDrink.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {mainDrink.price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={() => onAddDrink()}>
              Add Drink
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item md={4}>
        <Box>
          <List>
            {drinkList &&
              drinkList.map((drink, index) => (
                <ListItem key={drink.name + index} divider>
                  <ListItemText>
                    {drink.name} - ${drink.price}
                  </ListItemText>
                </ListItem>
              ))}
            <ListItem key="Total">
              <ListItemText>
                <b>Total: </b> ${total}
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};

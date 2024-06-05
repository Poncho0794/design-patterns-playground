import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@mui/material';
import { DishProps, MainDishProps, DessertProps } from '..';

export const Appetizer: React.FC<DishProps> = ({
  title,
  description,
  imgUrl,
  type = 'aperitivo',
}: DishProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imgUrl}
        title={title}
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => alert(`El tipo de platillo es: ${type}`)}
        >
          Show dish type
        </Button>
      </CardActions>
    </Card>
  );
};
export const MainDish: React.FC<MainDishProps> = ({
  title,
  description,
  imgUrl,
  printCal,
}: MainDishProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imgUrl}
        title={title}
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => printCal()}>
          Show Calories
        </Button>
      </CardActions>
    </Card>
  );
};
export const Dessert: React.FC<DessertProps> = ({
  title,
  description,
  imgUrl,
  printSugarGr,
}: DessertProps) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imgUrl}
        title={title}
        component="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => printSugarGr()}>
          show sugar amount
        </Button>
      </CardActions>
    </Card>
  );
};

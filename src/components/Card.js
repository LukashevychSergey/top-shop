import { useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { ShopContext } from './ShopProvider';
import { observer } from '../helpers';

export default function ShopCard({ good }) {
  const { buyGood } = useContext(ShopContext);

  const handleBuy = () => {
    buyGood(good);
    observer.emit('BUY');
  };

  return (
    <Grid item xs={6} lg={3}>
      <Card sx={{ maxWidth: 345, ml: 8, mt: 3 }}>
        <CardMedia
          component="img"
          height="200"
          image={good.poster}
          alt="fruit"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {good.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Fruits are an excellent source of essential vitamins and minerals,
            and they are high in fiber. Fruits also provide a wide range of
            health-boosting antioxidants, including flavonoids. Eating a diet
            high in fruits and vegetables can reduce a person's risk of
            developing heart disease, cancer, inflammation, and diabetes.
          </Typography>
          <Typography variant="p">Price : {good.price}</Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={handleBuy}>
            Buy Now
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

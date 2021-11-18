import Grid from '@mui/material/Grid';

import ShopCard from './Card';

const CardList = (props) => {
  const { goods } = props;

  return (
    <Grid container spacing={0}>
      {goods.map((good) => (
        <ShopCard key={good.id} good={good} />
      ))}
    </Grid>
  );
};

export default CardList;

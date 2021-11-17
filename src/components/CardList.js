import Grid from '@mui/material/Grid';

import ShopCard from './Card';

const CardList = (props) => {
  const { goods } = props;

  return (
    <Grid container spacing={0}>
      {goods.map((item) => (
        <ShopCard
          key={item.id}
          name={item.name}
          price={item.price}
          poster={item.poster}
        />
      ))}
    </Grid>
  );
};

export default CardList;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { ShopContext } from './ShopProvider';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            FruitShop
          </Typography>
          <ShopContext.Consumer>
            {(state) => (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <Badge badgeContent={state.goods.length} color="primary">
                  <ShoppingCartOutlinedIcon />
                </Badge>
              </IconButton>
            )}
          </ShopContext.Consumer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

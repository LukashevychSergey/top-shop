import { createContext, useState } from 'react';

export const ShopContext = createContext({ goods: [] });

export function ShopProvider({ children }) {
  const [goods, setGoods] = useState([]);

  const buyGood = (good) => {
    setGoods(goods.concat(good));
  };

  return (
    <ShopContext.Provider value={{ goods, buyGood }}>
      {children}
    </ShopContext.Provider>
  );
}

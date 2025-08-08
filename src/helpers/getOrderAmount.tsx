import type { IOrder } from '../redux/types/types';

export const getOrderAmount = (orders: IOrder) => {
  let sumUSD = 0;
  let sumUAH = 0;
  orders.products.forEach((product) => {
    product.price.forEach((p) => {
      if (p.symbol === 'USD') sumUSD += p.value;
      if (p.symbol === 'UAH') sumUAH += p.value;
    });
  });

  return (
    <>
      <span>{sumUSD} $</span> <br />
      <span>{sumUAH} UAH</span>
    </>
  );
};

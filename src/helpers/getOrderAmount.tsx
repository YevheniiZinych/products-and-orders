import type { IProduct } from '../types/types';

export const getOrderAmount = (products: IProduct[]) => {
  let sumUSD = 0;
  let sumUAH = 0;
  products.forEach((product) => {
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

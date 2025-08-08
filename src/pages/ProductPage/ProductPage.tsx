// import { useEffect, useState } from 'react';
import { Products } from '../../components/Products/Products';
// import { useAppDispatch, useAppSelector } from '../../redux/hooks';

// import { fetchProducts } from '../../redux/ProductSlice/productOperation';

const ProductPage = () => {
  // const dispatch = useAppDispatch();
  // const { items, status, error, message } = useAppSelector((store) => store.product);

  return (
    <>
      <h1>Product page</h1>
      <Products />
    </>
  );
};

export default ProductPage;

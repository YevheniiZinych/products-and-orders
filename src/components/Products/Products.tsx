import { useState } from 'react';
import type { IProduct } from '../../types/types';
import { ProductsList } from '../ProductsList/ProductsList';
import type { Entity } from '../../types/types';

interface IProps {
  products: IProduct[];
  uniqueTypes: string[];
  setEntity: (value: Entity | null) => void;
  setSelectedProduct: (value: IProduct) => void;
  onDelete: (value: number) => void;
}
export const Products = ({
  products,
  uniqueTypes,
  setEntity,
  setSelectedProduct,
  onDelete,
}: IProps) => {
  const [selectedType, setSelectedType] = useState<string>('All');
  const [typeCount, setTypeCount] = useState<number>(products.length);
  return (
    <>
      <div className="products__filter mb-3 d-flex align-items-center gap-2 pt-5 ps-5">
        <p className="products__text">Продукты / {typeCount}</p>
        <div className=" d-flex align-items-center gap-2  w-25">
          <span className="products__type-text">Тип:</span>
          <select
            className="form-select"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="All">Все типы</option>
            {uniqueTypes?.map((t) => {
              return <option value={t}>{t}</option>;
            })}
          </select>
        </div>
      </div>
      <ProductsList
        products={products}
        selectedType={selectedType}
        setTypeCount={setTypeCount}
        setEntity={setEntity}
        setSelectedProduct={setSelectedProduct}
        onDelete={onDelete}
      />
    </>
  );
};

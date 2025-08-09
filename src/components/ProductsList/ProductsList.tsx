import { TbPointFilled } from 'react-icons/tb';
import { MdDeleteForever } from 'react-icons/md';
import { GoDeviceDesktop } from 'react-icons/go';
import type { Entity, IProduct } from '../../types/types';
import { formatDateFullNum } from '../../helpers/dateFull';
import { getOrderAmount } from '../../helpers/getOrderAmount';

import './ProductsList.scss';

interface IProps {
  products: IProduct[];
  selectedType: string | null;
  setTypeCount: (value: number) => void;
  setEntity: (value: Entity | null) => void;
  setSelectedProduct: (value: IProduct) => void;
  onDelete: (value: number) => void;
}

export const ProductsList = ({
  products,
  selectedType,
  setTypeCount,
  setSelectedProduct,
  setEntity,
  onDelete,
}: IProps) => {
  const filteredProducts =
    selectedType === 'All' || !selectedType
      ? products
      : products.filter(({ type }) => selectedType === type);

  setTypeCount(filteredProducts.length);

  return (
    <div className="container">
      <ul className="products-list d-flex flex-column  gap-3 text-start">
        {filteredProducts?.map((product) => {
          return (
            <li key={product.id} className="products-list__item d-flex align-items-center border">
              <TbPointFilled color="green" size="70" />
              <GoDeviceDesktop size="100" className="ms-4" />
              <div className="products-list__spec d-flex align-items-center gap-4 ms-4">
                <span>{product.title}:</span>
                <span>
                  {product.specification} Длинное предлинное длиннючее название продукта. Длинное
                  предлинное длиннючее название продукта. Длинное предлинное длиннючее название
                  продукта. Длинное предлинное длиннючее название продукта. Длинное предлинное
                  длиннючее название продукта. Длинное предлинное длиннючее название продукта.
                </span>
              </div>

              <div className="products-list__guarantee d-flex flex-column  ms-4 ">
                <span>c {formatDateFullNum(product.guarantee.start)}</span>
                <span>по {formatDateFullNum(product.guarantee.end)}</span>
              </div>

              <div className="products-list__amount ms-4">{getOrderAmount([product])}</div>

              <p className="products-list__order ms-4">
                Длинное предлинное длиннючее название прихода. Длинное предлинное длиннючее название
                прихода. Длинное предлинное длиннючее название прихода.Длинное предлинное длиннючее
                название прихода. Длинное предлинное длиннючее название прихода. Длинное предлинное
                длиннючее название прихода.
              </p>

              <button
                className="orders-list__delete"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(product.id);
                  setSelectedProduct(product);
                  setEntity('product');
                }}
              >
                <MdDeleteForever />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

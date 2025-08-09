import { IoCloseSharp } from 'react-icons/io5';
import { AiOutlinePlus } from 'react-icons/ai';
import { TbPointFilled } from 'react-icons/tb';
import { MdDeleteForever } from 'react-icons/md';
import { GoDeviceDesktop } from 'react-icons/go';
import type { IOrder } from '../../types/types';
import './OrderDetails.scss';

type IProps = {
  order: IOrder | null;
  onClose: () => void;
  setIsSelectedOrder: (value: boolean) => void;
  isSelectedOrder: boolean;
  onDelete: (id: number) => void;
  setEntity: (value: 'order' | 'product') => void;
};

export const OrderDetails = ({
  order,
  onClose,
  setIsSelectedOrder,
  isSelectedOrder,
  setEntity,
  onDelete,
}: IProps) => {
  return (
    <div className={`order-details ${isSelectedOrder ? 'active' : ''} border shadow`}>
      <button
        className="order-details__close d-flex align-items-center justify-content-center shadow"
        onClick={() => {
          onClose();
          setIsSelectedOrder(false);
        }}
      >
        <IoCloseSharp color="grey" />
      </button>
      <h2 className="order-details__title text-start ms-3 mt-3 mb-3 ">{order?.title}</h2>
      <div className="d-flex align-items-center gap-2 ms-3 mb-3">
        <span className="order-details__add d-flex align-items-center justify-content-center ">
          <AiOutlinePlus />
        </span>
        <span>Добавить продукт</span>
      </div>

      <div className="order-details__list--wrapp">
        <ul className="order-details__products-list ">
          {order?.products.map((prod) => (
            <li
              key={prod.id}
              className="order-details__product d-flex align-items-center border-bottom border-top "
            >
              <TbPointFilled color="green" />

              <GoDeviceDesktop size="30" />

              <div className="order-details__product-type">Type: {prod.type}</div>

              <span className="text-success">Свободен</span>

              <button
                onClick={() => {
                  onDelete(prod.id);
                  setEntity('product');
                }}
                className="order-details__delete"
              >
                <MdDeleteForever />
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

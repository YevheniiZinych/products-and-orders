import { MdDeleteForever } from 'react-icons/md';
import { FaListUl } from 'react-icons/fa';
import { MdArrowForwardIos } from 'react-icons/md';
import './OrderList.scss';
import type { IOrder, IProduct } from '../../types/types';
import { formatDateShort } from '../../helpers/dateShort';
import { formatDateFull } from '../../helpers/dateFull';
import { getOrderAmount } from '../../helpers/getOrderAmount';

interface IOrderListProp {
  orders: IOrder[];
  onDelete: (id: number) => void;
  selectedId?: number | null;
  setSelectedOrder: (orders: IOrder) => void;
  setIsSelectedOrder: (value: boolean) => void;
  isSelectedOrder: boolean;
  setEntity: (value: 'order' | 'product') => void;
  selectedOrder: IOrder | IProduct | null;
}

export const OrderList = ({
  orders,
  onDelete,
  setSelectedOrder,
  setIsSelectedOrder,
  isSelectedOrder,
  setEntity,
  selectedOrder,
}: IOrderListProp) => {
  return (
    <ul className={`orders-list d-flex flex-column  `}>
      {orders.map((order) => (
        <li
          key={order.id}
          onClick={() => {
            setIsSelectedOrder(true);
            setSelectedOrder(order);
          }}
          className={`orders-list__item ${isSelectedOrder ? 'active' : ''} border `}
        >
          <div className="orders-list__info d-flex align-items-center justify-content-between ">
            <p className="orders-list__name">{order.title}</p>
            <div className="orders-list__products d-flex align-items-center gap-4">
              <div className="d-flex align-items-center justify-content-center border rounded-circle p-2 ">
                <FaListUl color="grey" />
              </div>
              <div className="d-flex flex-column">
                <span className="text-start">{order.products.length}</span>
                <span>Продукта</span>
              </div>
            </div>
            <div className="order-list__date--wrapp d-flex flex-column">
              <span className="orders-list__date-short">{formatDateShort(order.date)}</span>
              <span className="orders-list__date-full">{formatDateFull(order.date)}</span>
            </div>
            <div className="orders-list__amount text-start">{getOrderAmount(order.products)}</div>
            <button
              className="orders-list__delete"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(order.id);
                setSelectedOrder(order);
                setEntity('order');
              }}
            >
              <MdDeleteForever />
            </button>
            {selectedOrder?.id === order.id && <MdArrowForwardIos size="30" />}
          </div>
        </li>
      ))}
    </ul>
  );
};

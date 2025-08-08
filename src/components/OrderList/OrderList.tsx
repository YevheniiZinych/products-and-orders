import { MdDeleteForever } from 'react-icons/md';
import { FaListUl } from 'react-icons/fa';
import './OrderList.scss';
import type { IOrder } from '../../redux/types/types';
import { formatDateShort } from '../../helpers/dateShort';
import { formatDateFull } from '../../helpers/dateFull';

interface IOrderListProp {
  orders: IOrder[];
  onDelete: (id: number) => void;
  selectedId?: number | null;
  setSelectedOrder: (orders: IOrder) => void;
  setIsSelectedOrder: (value: boolean) => void;
  isSelectedOrder: boolean;
  setEntity: (value: 'order' | 'product') => void;
}

export const OrderList = ({
  orders,
  onDelete,
  setSelectedOrder,
  setIsSelectedOrder,
  isSelectedOrder,
  setEntity,
}: IOrderListProp) => {
  const getOrderAmount = (orders: IOrder) => {
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
            <div className="orders-list__amount text-start">{getOrderAmount(order)}</div>
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
          </div>
        </li>
      ))}
    </ul>
  );
};

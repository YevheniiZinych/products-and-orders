import { GoDeviceDesktop } from 'react-icons/go';
import { TbPointFilled } from 'react-icons/tb';
import { MdDeleteForever } from 'react-icons/md';
import { IoCloseSharp } from 'react-icons/io5';
import type { IOrder, IProduct } from '../../redux/types/types';
import type { Entity } from '../../pages/OrdersPage/OrderPage';
import './Modal.scss';

interface IModalProp {
  cancelDelete: () => void;
  confirmDelete: (entity: 'order' | 'product') => Promise<void>;
  selectedOrder: IOrder | IProduct | null;
  deletedId: number | null;
  entity: Entity | null;
}

export const Modal = ({
  cancelDelete,
  confirmDelete,
  selectedOrder,
  deletedId,
  entity,
}: IModalProp) => {
  return (
    <div className="backdrop position-absolute top-0 end-0 h-100 w-100">
      <div className={`orders-page__modal ${deletedId ? 'active' : ''} `}>
        <div className="orders-page__modal-content">
          <p className="d-inline-block mt-3 mb-1 w-100 text-start fw-bold pb-4 border-bottom ps-4  ">
            Вы уверены, что хотите удалить этот приход?
          </p>
          <div className="orders-page__modal-title--wrapp d-flex align-items-center justify-content-around ">
            <TbPointFilled color="green" />
            <GoDeviceDesktop size="30" />
            <p className="orders-page__modal-title text-start mb-2">{selectedOrder?.title}</p>
          </div>
          <div className="orders-page__modal-btns d-flex  align-items-center justify-content-end pe-4">
            <button onClick={cancelDelete}>Отменить</button>
            <button
              onClick={() => {
                if (entity) {
                  confirmDelete(entity);
                }
              }}
              className="orders-page__modal-delete d-flex align-items-center justify-content-center gap-2 shadow"
            >
              <MdDeleteForever />
              Удалить
            </button>
          </div>
        </div>
        <div
          onClick={cancelDelete}
          className="order-page_modal-close d-flex align-items-center justify-content-center shadow"
        >
          <IoCloseSharp color="grey" />
        </div>
      </div>
    </div>
  );
};

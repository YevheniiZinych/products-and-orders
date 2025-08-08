import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { OrderList } from '../../components/OrderList/OrderList';
import { Modal } from '../../components/Modal/Modal';
import { OrderDetails } from '../../components/OrderDetails/OrderDetails';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchOrders, deleteOrder } from '../../redux/OrderSlice/orderOperation';
import { deleteProduct } from '../../redux/ProductSlice/productOperation';
import type { IOrder } from '../../redux/types/types';
import './OrderPage.scss';

export type Entity = 'order' | 'product';

const deleteOperations: Record<Entity, (id: number) => any> = {
  order: deleteOrder,
  product: deleteProduct,
};

const OrderPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletedId, setDeleteId] = useState<number | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
  const [isSelectedOrder, setIsSelectedOrder] = useState(false);
  const [entity, setEntity] = useState<Entity | null>(null);

  const dispatch = useAppDispatch();
  const { items: orders, status, error } = useAppSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleDeleteClick = (id: number) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async (entity: Entity) => {
    if (!deletedId) return;
    try {
      await dispatch(deleteOperations[entity](deletedId)).unwrap();
    } catch (error) {
      console.log(error);
    } finally {
      setShowDeleteModal(false);
      setDeleteId(null);
      dispatch(fetchOrders());
    }
  };

  const cancelDelete = () => {
    setDeleteId(null);
    setShowDeleteModal(false);
  };

  return (
    <section className="orders position-relative">
      <h2 className="orders__title d-flex align-items-center gap-3 pt-5 mb-5 text-start ps-5">
        <span className="orders__title-add d-flex align-items-center justify-content-center shadow">
          <AiOutlinePlus />
        </span>
        Приходы / {orders.length}
      </h2>
      {status === 'loading' && (
        <div className="spinner-border text-success" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {error && (
        <div className="toast-container position-fixed bottom-0 end-0 p-3">
          <div
            id="liveToast"
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-body">{error}</div>
          </div>
        </div>
      )}
      <div className="order__content--wrapp d-flex ">
        <OrderList
          orders={orders}
          onDelete={handleDeleteClick}
          setSelectedOrder={setSelectedOrder}
          setIsSelectedOrder={setIsSelectedOrder}
          isSelectedOrder={isSelectedOrder}
          setEntity={setEntity}
        />
        <OrderDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          setIsSelectedOrder={setIsSelectedOrder}
          isSelectedOrder={isSelectedOrder}
          onDelete={handleDeleteClick}
          setEntity={setEntity}
        />
      </div>
      {showDeleteModal && (
        <Modal
          cancelDelete={cancelDelete}
          confirmDelete={confirmDelete}
          selectedOrder={selectedOrder}
          deletedId={deletedId}
          entity={entity}
        />
      )}
    </section>
  );
};

export default OrderPage;

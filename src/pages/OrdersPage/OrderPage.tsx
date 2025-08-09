import { useEffect, useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { AnimatePresence, motion } from 'framer-motion';
import { OrderList } from '../../components/OrderList/OrderList';
import { Modal } from '../../components/Modal/Modal';
import { OrderDetails } from '../../components/OrderDetails/OrderDetails';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchOrders, deleteOrder } from '../../redux/OrderSlice/orderOperation';
import { deleteProduct } from '../../redux/ProductSlice/productOperation';
import type { IOrder, Entity } from '../../types/types';

import './OrderPage.scss';

const OrderPage = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletedId, setDeleteId] = useState<number | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<IOrder | null>(null);
  const [isSelectedOrder, setIsSelectedOrder] = useState(false);
  const [entity, setEntity] = useState<Entity | null>(null);
  const [showContent, setShowContent] = useState(false);

  const dispatch = useAppDispatch();
  const { items: orders, status, error } = useAppSelector((state) => state.order);

  useEffect(() => {
    if (status === 'succeeded') {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  const handleDeleteClick = (id: number) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (!deletedId || !entity) return;
    try {
      const variantOperation = entity === 'order' ? deleteOrder : deleteProduct;
      const res = await dispatch(variantOperation(deletedId)).unwrap();
      toast.success(res.message);
    } catch (error) {
      toast.error(`${error}`);
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
      {status === 'loading' && (
        <div className="spinner-border text-success mt-5" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}

      <AnimatePresence initial={false}>
        {showContent ? (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            key="box"
          >
            <h2 className="orders__title d-flex align-items-center gap-3 pt-5 mb-5 text-start ps-5">
              <span className="orders__title-add d-flex align-items-center justify-content-center shadow">
                <AiOutlinePlus />
              </span>
              Приходы / {orders.length}
            </h2>

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
            <div className="orders__content--wrapp d-flex ">
              <OrderList
                orders={orders}
                onDelete={handleDeleteClick}
                setSelectedOrder={setSelectedOrder}
                setIsSelectedOrder={setIsSelectedOrder}
                isSelectedOrder={isSelectedOrder}
                setEntity={setEntity}
                selectedOrder={selectedOrder}
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
          </motion.div>
        ) : null}
      </AnimatePresence>
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

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { Products } from '../../components/Products/Products';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { fetchProducts, deleteProduct } from '../../redux/ProductSlice/productOperation';
import { Modal } from '../../components/Modal/Modal';
import type { Entity, IProduct } from '../../types/types';
import './ProductPage.scss';

const ProductPage = () => {
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [entity, setEntity] = useState<Entity | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [showContent, setShowContent] = useState(false);

  const dispatch = useAppDispatch();
  const { items: products, status, error } = useAppSelector((store) => store.product);

  useEffect(() => {
    if (status === 'succeeded') {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [status]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const uniqueTypes = Array.from(new Set(products.map((p) => p.type)));

  const confirmDelete = async () => {
    if (!deleteId || !entity) return;
    try {
      const res = await dispatch(deleteProduct(deleteId)).unwrap();
      toast.success(res.message);
    } catch (error) {
      toast.error(`${error}`);
    } finally {
      setShowDeleteModal(false);
      setDeleteId(null);
      dispatch(fetchProducts());
    }
  };

  const handleDeleteClick = (id: number) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const cancelDelete = () => {
    setDeleteId(null);
    setShowDeleteModal(false);
  };

  return (
    <section className="products position-relative">
      <AnimatePresence initial={false}>
        {showContent ? (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            key="box"
          >
            <Products
              products={products}
              uniqueTypes={uniqueTypes}
              setEntity={setEntity}
              setSelectedProduct={setSelectedProduct}
              onDelete={handleDeleteClick}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>

      {status === 'loading' && (
        <div className="spinner-border text-success mt-5" role="status">
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
      {showDeleteModal && (
        <Modal
          deletedId={deleteId}
          entity="product"
          cancelDelete={cancelDelete}
          selectedOrder={selectedProduct}
          confirmDelete={confirmDelete}
        />
      )}
    </section>
  );
};

export default ProductPage;

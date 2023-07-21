import React, { useState } from "react";
import ProductList from "../components/molecules/ProductList/ProductList";
import Button from "../components/atoms/Button/Button";
import ProductForm from "../components/molecules/ProductForm/ProdcutForm";

const ProductCataloguePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1 className="font-medium text-2xl">Product Catalogue</h1>
      <div className="font-normal text-base py-2 text-gray-400">
        An Overview of all the products in the catalogue
      </div>
      <div className="flex flex-row-reverse space-x-6 space-x-reverse">
        {/* <Button type="delete" onClick={handleDeleteProduct} /> */}
        <Button type="primary" label="Add Product" onClick={handleOpenModal} />
      </div>
      <div className="mt-3">
        <ProductList />
      </div>
      <ProductForm
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};
export default ProductCataloguePage;

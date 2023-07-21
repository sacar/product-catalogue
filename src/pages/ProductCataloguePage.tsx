import React, { useContext, useEffect, useState } from "react";
import ProductList from "../components/molecules/ProductList/ProductList";
import Button from "../components/atoms/Button/Button";
import ProductForm from "../components/molecules/ProductForm/ProdcutForm";
import { Product } from "../types/product";
import { connect, useDispatch, useSelector } from "react-redux";
import { setProducts } from "../actions/action";
import { RootState } from "../store/store";

function getRandomProducts(numProducts: number): Product[] {
  const products: Product[] = [];

  for (let i = 0; i < numProducts; i++) {
    const product: Product = {
      id: i + 1,
      name: `Product ${i + 1}`,
      description: `Description for Product ${i + 1}`,
      price: Math.floor(Math.random() * 100) + 1, // Random price between 1 and 100
    };

    products.push(product);
  }

  return products;
}

const ProductCataloguePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProduct = (product: Product) => {
    console.log("add product", product);
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
        onAddProduct={handleAddProduct}
        onClose={handleCloseModal}
      />
    </div>
  );
};
export default ProductCataloguePage;

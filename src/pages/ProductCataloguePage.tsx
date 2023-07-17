import React, { useState } from "react";
import ProductList from "../components/molecules/ProductList/ProductList";
import Button from "../components/atoms/Button/Button";
import ProductForm from "../components/molecules/ProductForm/ProdcutForm";

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
  const [productList, setProductList] = useState<Product[]>(getRandomProducts(10))

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddProduct = (
    product: Product,
  ) => {
    const newProduct: Product = {
      id: productList.length + 1, // Generate a random ID
      name : product.name,
      description: product.description,
      price : product.price,
    };

    setProductList([...productList, newProduct]);
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
        <ProductList products={productList} />
      </div>
      <ProductForm isOpen={isModalOpen} onAddProduct={handleAddProduct} onClose={handleCloseModal} />
    </div>
  );
};

export default ProductCataloguePage;

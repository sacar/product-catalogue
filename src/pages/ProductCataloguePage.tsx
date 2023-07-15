import React from "react";
import ProductList from "../components/molecules/ProductList/ProductList";

const products = [
  { id: 1, name: "Product 1", price: 10, stock: 100 },
  { id: 2, name: "Product 2", price: 20, stock: 100 },
  { id: 3, name: "Product 3", price: 30, stock: 100 },
];

const ProductCataloguePage: React.FC = () => {
  return (
    <div>
      <h1 className="font-medium text-2xl">Product Catalogue</h1>
      <div className="font-normal text-base py-2 text-gray-400">
        An Overview of all the products in the catalogue
      </div>
      <div className="mt-3">
        <ProductList products={products} />
      </div>
    </div>
  );
};

export default ProductCataloguePage;

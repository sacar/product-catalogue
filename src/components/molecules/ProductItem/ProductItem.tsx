import React from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductItem;

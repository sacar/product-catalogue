import React from 'react';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          ID
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Description
        </th>
        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
          Price
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      {products.map((product) => (
        <tr key={product.id}>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {product.id}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {product.name}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {product.description}
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {product.price}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  );
};

export default ProductList;

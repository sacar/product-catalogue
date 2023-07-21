import React, { useEffect } from "react";
import { Product } from "../../../types/product";
import { RootState } from "../../../store/store";
import { connect } from "react-redux";
import { setProducts } from "../../../actions/action";
import { useState } from "react";
import axios from "axios";

// Define the ProductListProps type based on the Redux store state
const mapState = (state: RootState) => ({
  products: state.products.products,
});

const mapDispatch = {
  setProducts,
};

interface ProductListProps {
  products: Product[];
  setProducts: (products: Product[]) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, setProducts }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch products from API and update Redux state
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://rgwvhnxr23.execute-api.us-east-1.amazonaws.com/dev/products"
        );
        const data: Product[] = response.data;
        console.log("fetch", data);
        // Check if data is an array before setting the products
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          console.error('Invalid response format: Expected an array of products.');
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, [setProducts]);

  // Log products to check if the state is being updated
  useEffect(() => {
    console.log("Updated products:", products, products.length, typeof products);
    if(products.length > 0) {
      products.forEach(item => {
        console.log("item", item)
      })
    }

  }, [products]);

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
        {!loading &&
          products.map((product, index) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {index + 1}
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

export default connect(mapState, mapDispatch)(ProductList);

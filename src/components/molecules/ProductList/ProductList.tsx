import React, { useEffect } from "react";
import { Product } from "../../../types/product";
import { RootState } from "../../../store/store";
import { connect } from "react-redux";
import { setProducts } from "../../../actions/action";
import { useState } from "react";
import axios from "axios";
import TrashButton from "../../atoms/Button/IconButton";

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

    void fetchProducts();
  }, [setProducts]);



  const deleteProduct = async (productId: string) => {
    try {
      console.log("this is pid", productId)
      // Make API call to delete the product
      await axios.delete(`https://rgwvhnxr23.execute-api.us-east-1.amazonaws.com/dev/product/${productId}`);

      // Update the Redux state by removing the deleted product
      const updatedProducts = products.filter((product) => product.id !== productId);
      setProducts(updatedProducts);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleDelete = (productId:string) => {
    void deleteProduct(productId)
  }


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
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
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
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <TrashButton onClick={() => {handleDelete(product.id)}}/>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default connect(mapState, mapDispatch)(ProductList);

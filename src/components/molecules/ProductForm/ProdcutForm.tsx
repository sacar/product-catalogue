import React, { useState } from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import Modal from "../Modal/Modal";

interface ProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  isOpen,
  onClose,
  onAddProduct,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = () => {
    const product: Product = {
      id: Math.floor(Math.random() * 1000),
      name,
      description,
      price: parseFloat(price),
      imageUrl,
    };

    onAddProduct(product);
    setName("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      title="Add Product"
      onClose={onClose}
      primaryButtonLabel="Add"
      secondaryButtonLabel="Cancel"
      onPrimaryButtonClick={handleSubmit}
      onSecondaryButtonClick={onClose}
    >
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          value={name}
          onChange={(value) => setName(value)}
        />
        <TextInput
          label="Description"
          value={description}
          onChange={(value) => setDescription(value)}
        />
        <TextInput
          label="Price"
          value={price}
          onChange={(value) => setPrice(value)}
        />
        <TextInput
          label="Image URL"
          value={imageUrl}
          onChange={(value) => setImageUrl(value)}
        />
      </form>
    </Modal>
  );
};

export default ProductForm;

import React, { useState } from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import Modal from "../Modal/Modal";
import { Product } from "../../../types/product";
import { useDispatch } from "react-redux";
import { addProductAsync } from "../../../actions/thunk";

interface ProductFormProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FieldErrors {
  [fieldName: string]: string;
}

const ProductForm: React.FC<ProductFormProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [errors, setErrors] = useState<FieldErrors>({
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  });

  const validateField = (fieldName: string, value: string): string => {
    // Add specific validations for each field
    switch (fieldName) {
      case "name":
        if (!value.trim()) {
          return "Name is required";
        }
        break;
      case "description":
        if (!value.trim()) {
          return "Description is required";
        }
        break;
      case "price":
        if (!value) {
          return "Price is required";
        } else if (parseFloat(value) <= 0) {
          return "Price must be greater than zero";
        }
        break;
      case "imageUrl":
        if (!value.trim()) {
          return "Image URL is required";
        }
        break;
      default:
        break;
    }

    return ""; // No error
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newErrors: FieldErrors = {
      name: validateField("name", name),
      description: validateField("description", description),
      price: validateField("price", price),
      imageUrl: validateField("imageUrl", imageUrl),
    };

    // Check if any errors exist
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

    const product = {
      name,
      description,
      price: parseFloat(price),
      image_url: imageUrl,
    };

    // Dispatch the addProductAsync thunk to add the product and update the store
    dispatch(addProductAsync(product));
    setName("");
    setDescription("");
    setPrice("");
    setImageUrl("");
    onClose();
  };

  const handleTextInputChange = (value: string, fieldName: string) => {
    // Clear the error message for the specific field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: "", // Clear the error for the field when the input value changes
    }));

    // Update the input value
    switch (fieldName) {
      case "name":
        setName(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "price":
        setPrice(value);
        break;
      case "imageUrl":
        setImageUrl(value);
        break;
      default:
        break;
    }
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
      <TextInput
        label="Name"
        value={name}
        onChange={(value) => handleTextInputChange(value, "name")}
        error={errors.name}
      />
      <TextInput
        label="Description"
        value={description}
        onChange={(value) => handleTextInputChange(value, "description")}
        error={errors.description}
      />
      <TextInput
        label="Price"
        value={price}
        onChange={(value) => handleTextInputChange(value, "price")}
        error={errors.price}
      />
      <TextInput
        label="Image URL"
        value={imageUrl}
        onChange={(value) => handleTextInputChange(value, "imageUrl")}
        error={errors.imageUrl}
      />
    </Modal>
  );
};

export default ProductForm;

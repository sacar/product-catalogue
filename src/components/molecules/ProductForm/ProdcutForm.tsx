import React, { useState } from "react";
import TextInput from "../../atoms/TextInput/TextInput";
import Modal from "../Modal/Modal";

interface ProductFormProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: Product) => void;
}

interface FieldErrors {
  [fieldName: string]: string[];
}

const ProductForm: React.FC<ProductFormProps> = ({
  isOpen,
  onClose,
  onAddProduct,
}) => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const [errors, setErrors] = useState<FieldErrors>({
    name: [],
    description: [],
    price: [],
    imageUrl: [],
  });

  const validateField = (fieldName: string, value: string): string[] => {
    const fieldErrors: string[] = [];

    // Add specific validations for each field
    switch (fieldName) {
      case "name":
        if (!value) {
          fieldErrors.push("Name is required");
        }
        break;
      case "description":
        if (!value) {
          fieldErrors.push("Description is required");
        }
        break;
      case "price":
        if (!value) {
          fieldErrors.push("Price is required");
        } else if (parseFloat(value) <= 0) {
          fieldErrors.push("Price must be greater than zero");
        }
        break;
      case "imageUrl":
        if (!value) {
          fieldErrors.push("Image URL is required");
        }
        break;
      default:
        break;
    }

    return fieldErrors;
  };

  const handleSubmit = () => {
    // Validate required fields
    const newErrors: FieldErrors = {};

    // Validate each field
    Object.keys(errors).forEach((fieldName) => {
      const fieldErrors = validateField(fieldName, ({} as any)[fieldName]);
      if (fieldErrors.length > 0) {
        newErrors[fieldName] = fieldErrors;
      }
    });

    // Check if any errors exist
    if (Object.values(newErrors).some((error) => error)) {
      setErrors(newErrors);
      return;
    }

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

  const handleTextInputChange = (value: string, fieldName: string) => {
    // Clear the error messages for the specific field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: Array.isArray(prevErrors[fieldName])
        ? []
        : prevErrors[fieldName],
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
        errors={errors.name}
      />
      <TextInput
        label="Description"
        value={description}
        onChange={(value) => handleTextInputChange(value, "description")}
        errors={errors.description}
      />
      <TextInput
        label="Price"
        value={price}
        onChange={(value) => handleTextInputChange(value, "price")}
        errors={errors.price}
      />
      <TextInput
        label="Image URL"
        value={imageUrl}
        onChange={(value) => handleTextInputChange(value, "imageUrl")}
        errors={errors.imageUrl}
      />
    </Modal>
  );
};

export default ProductForm;

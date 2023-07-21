import React from "react";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  errors?: string[];
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  value,
  onChange,
  errors,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type="text"
        className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-blue-500 focus:border-blue-500 ${
          errors && errors.length > 0 ? "border-red-500" : "border-gray-300"
        }`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {errors &&
        errors.map((error, index) => (
          <p key={index} className="mt-1 text-sm text-red-500">
            {error}
          </p>
        ))}
    </div>
  );
};

export default TextInput;

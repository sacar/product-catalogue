import React, { ReactNode } from "react";
import Button from "../../atoms/Button/Button";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  onPrimaryButtonClick?: () => void;
  onSecondaryButtonClick?: () => void;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  title,
  onClose,
  onPrimaryButtonClick,
  onSecondaryButtonClick,
  primaryButtonLabel = "Primary",
  secondaryButtonLabel = "Secondary",
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
      <div className="relative bg-white w-full max-w-md mx-4 rounded-md shadow-lg">
        <div className=" bg-white rounded-md">
          <div className="flex items-center justify-between px-6 py-4">
            <h2 className="text-xl font-bold">{title}</h2>
            <button
              type="button"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={onClose}
            >
              <svg
                className="w-6 h-6 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M11.414 10l3.293-3.293a1 1 0 1 0-1.414-1.414L10 8.586 6.707 5.293a1 1 0 0 0-1.414 1.414L8.586 10l-3.293 3.293a1 1 0 1 0 1.414 1.414L10 11.414l3.293 3.293a1 1 0 0 0 1.414-1.414L11.414 10z"
                />
              </svg>
            </button>
          </div>
          <hr className=" border-gray-200" />
          <div className="mb-2 px-6 py-4">{children}</div>
          <hr className=" border-gray-200" />
          <div className="flex justify-end px-6 py-4 space-x-4">
            {onSecondaryButtonClick && (
              <Button
                type="secondary"
                label={secondaryButtonLabel}
                onClick={onSecondaryButtonClick}
              />
            )}
            {onPrimaryButtonClick && (
              <Button
                type="primary"
                label={primaryButtonLabel}
                onClick={onPrimaryButtonClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

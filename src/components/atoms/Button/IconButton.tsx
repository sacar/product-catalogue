import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TrashButtonProps {
    onClick: () => void;
  }

  const TrashButton: React.FC<TrashButtonProps> = ({ onClick }) => {
    return (
      <button
        className="text-red-600 hover:text-red-800 focus:outline-none"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    );
  };

  export default TrashButton;
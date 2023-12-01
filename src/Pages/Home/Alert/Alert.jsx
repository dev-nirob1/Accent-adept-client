import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const Alert = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null; 
  }

  return (
    <div className='p-4 rounded-md shadow-md bg-green-200 text-green-800'>
      <div className="flex items-center justify-between">
        <p className="text-sm">Note: {message}</p>
        <button onClick={handleClose} className="text-gray-600 hover:text-gray-800">
          <IoClose />
        </button>
      </div>
    </div>
  );
};

export default Alert;

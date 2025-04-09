// src/components/GlobalButton.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButton, setButtonLabel } from '../redux/buttonSlice';

const GlobalButton = ({ buttonId }) => {
  const dispatch = useDispatch();
  const button = useSelector((state) => state.buttons[buttonId]);

  const handleClick = () => {
    // Toggle button state on click
    dispatch(toggleButton({ buttonId }));
  };

  return (
    <div className="">
      <button
        onClick={handleClick}
        className={`p-2 text-white ${button.isActive ? 'bg-blue-500' : 'bg-gray-500'} rounded`}
      >
        {button.label}
      </button>
    </div>
  );
};

export default GlobalButton;

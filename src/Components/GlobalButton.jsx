import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleButton, setLoading } from '../redux/buttonSlice';
import { RefreshCcw } from 'lucide-react'; // Circular refresh icon

const GlobalButton = ({ buttonId }) => {
  const dispatch = useDispatch();
  const button = useSelector((state) => state.buttons[buttonId]);

  const handleClick = () => {
    dispatch(toggleButton({ buttonId }));

    if (buttonId === 'button2') {
      dispatch(setLoading({ buttonId, loading: true }));

      // Simulate loading
      setTimeout(() => {
        dispatch(setLoading({ buttonId, loading: false }));
      }, 2000);
    }
  };

  return (
    <div>
      <button
        onClick={handleClick}
        className={`text-white px-5 py-2 rounded-md hover:bg-teal-700-var transition cursor-pointer flex items-center justify-center gap-2 ${
          button.isActive ? 'bg-teal-700-var' : 'bg-gray-500'
        } disabled:opacity-50`}
        disabled={button.loading}
      >
        <RefreshCcw
          className={`h-5 w-5 ${button.loading ? 'animate-spin' : ''}`}
        />
        <span>{button.loading ? 'Londing...' : button.label}</span>
      </button>
    </div>
  );
};

export default GlobalButton;

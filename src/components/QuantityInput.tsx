import React from 'react';

interface QuantityInputProps {
  value: number;
  onChange: (newValue: number) => void;
}

const QuantityInput: React.FC<QuantityInputProps> = ({ value, onChange }) => {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => {
        const newValue = parseInt(e.target.value);
        onChange(newValue > 0 ? newValue : 1);
      }}
      onClick={(e) => e.stopPropagation()}
      className="border border-gray-300 rounded-md py-2 px-4 text-center w-16"
    />
  );
};

export default QuantityInput;

interface QuantityInputProps {
  value: number;
  onChange: (newValue: number) => void;
}

function QuantityInput({ value, onChange }: QuantityInputProps) {
  return (
    <input
      type="number"
      value={value}
      onChange={(e) => {
        const newValue = parseInt(e.target.value);
        onChange(newValue > 0 ? newValue : 1);
      }}
      onClick={(e) => e.stopPropagation()}
    />
  );
}

export default QuantityInput;

import React from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  onChangeSymbol: (symbol: string) => void;
}

const Modal = ({ show, onClose, onChangeSymbol }: ModalProps) => {
  const [inputValue, setInputValue] = React.useState("");

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Change Symbol</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter new stock or crypto symbol"
        />
        <button
          onClick={() => {
            onChangeSymbol(inputValue.toUpperCase());
            onClose();
          }}
        >
          Change Symbol
        </button>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

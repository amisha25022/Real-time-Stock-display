import { setSymbol } from "@/store/actions/stockActions";
import { AppDispatch, RootState } from "@/store/store";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

interface ModalProps {
  show: boolean;
  onClose: () => void;
}

const Modal = ({ show, onClose}: ModalProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const symbol = useSelector((state: RootState) => state.stock.symbol);
  const [currentSymbol, setCurrentSymbol] = useState(symbol);

 const handleSymbolChange = () => {
   dispatch(setSymbol(currentSymbol));
 };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Change Symbol</h2>
        <select
          value={currentSymbol}
          onChange={(event:any)=>{
            setCurrentSymbol(event.target.value);
          }}
          style={{ width: 200, marginBottom: 20 }}
        >
          <option value="GOOG">Google</option>
          <option value="BTC">Bitcoin</option>
          <option value="AAPL">Apple</option>
          <option value="ETH">Ethereum</option>
          <option value="AMZN">Amazon</option>
        </select>
        <button
          onClick={() => {
            handleSymbolChange();
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


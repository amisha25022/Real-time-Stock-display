import { useState } from "react";
import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import { useDispatch } from "react-redux";
import { setSymbol } from "../store/actions/stockActions";

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const changeSymbol = (symbol: string) => {
    dispatch(setSymbol(symbol));
  };

  return (
    <div>
      <h1>Real-Time Stock and Crypto Prices</h1>
      <DataTable />
      <button onClick={() => setShowModal(true)}>Change Symbol</button>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onChangeSymbol={changeSymbol}
      />
    </div>
  );
};

export default HomePage;

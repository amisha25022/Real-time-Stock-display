import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store/store";
import apiClient from "../utils/apiClient";

const DataTable = () => {
  const dispatch = useDispatch<AppDispatch>();
  const symbol = useSelector((state: RootState) => state.stock.symbol);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await apiClient.get(`/stocks?symbol=${symbol}`);
      console.log(`Fetched data for ${symbol}:`, response.data);
      setData(response.data);
    };

    fetchData();
    const intervalId = setInterval(fetchData, 5000);

    return () => clearInterval(intervalId);
  }, [symbol]);

  return (
    <table>
      <thead>
        <tr>
          <th>Symbol</th>
          <th>Open (USD)</th>
          <th>Close (USD)</th>
          <th>Timestamp</th>
        </tr>
      </thead>
      <tbody>
        {data.map((entry) => (
          <tr key={entry._id}>
            <td>{entry.symbol}</td>
            <td>{entry.open.toFixed(2)}</td>
            <td>{entry.close.toFixed(2)}</td>
            <td>{new Date(entry.timestamp).toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;

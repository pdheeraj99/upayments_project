import React, { useState, useEffect } from 'react';

import Api from '../services/Api';

export const DataContext = React.createContext();

export function DataProvider({ children }) {
  const [prodDetails, setProdDetails] = useState([]);
  const [val, setVal] = useState('');

  useEffect(() => {
    let mounted = true;
    Api().then((items) => {
      if (mounted) {
        setProdDetails(items);
      }
    });
    return () => (mounted = false);
  }, [val]);

  return (
    <DataContext.Provider value={{ prod: prodDetails, setValue: setVal }}>
      {children}
    </DataContext.Provider>
  );
}

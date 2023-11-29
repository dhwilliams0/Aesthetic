import React, { useState } from 'react';
import CurrentSearchContext from './searchContext';

export default function CurrentSearchContextProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState(null);
  const context = { searchTerm, setSearchTerm };

  return (
    <CurrentSearchContext.Provider value={ context }>
      {children}
    </CurrentSearchContext.Provider>
  );
}
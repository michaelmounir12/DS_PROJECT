import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  
  const [fItems,changeItems] = useState([])
  const [user,changeUser] = useState([])
  const [compareItems,changeCompareItems] = useState([])
  return (
    <AuthContext.Provider value={{fItems,changeItems,user,changeUser,compareItems,changeCompareItems}}>
      {children}
    </AuthContext.Provider>
  );
};
import React, { useContext, useEffect } from 'react';
import ItemList from './ItemsList';
import { AuthContext } from '../utils/context';

function Compare() {
  const { compareItems, changeCompareItems } = useContext(AuthContext);
  console.log(compareItems)
  useEffect(() => {
    return () => {
      changeCompareItems([]);
    };
  }, [changeCompareItems]);

  return (
    <div>
      <ItemList items={compareItems} />
    </div>
  );
}

export default Compare;

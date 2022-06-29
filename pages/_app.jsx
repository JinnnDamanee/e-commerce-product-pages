import '../styles/globals.css'
import { createContext, useContext, useEffect } from 'react'
import { useState } from 'react';

const CartContext = createContext(null);

export const useCartContext = () => {
  return useContext(CartContext);
}

function MyApp({ Component, pageProps }) {
  const [amount,setAmount] = useState(1);
  
  // Get rid of Hydration
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }
  
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <CartContext.Provider value={{amount,setAmount}}>
          <Component {...pageProps} />
      </CartContext.Provider>
    )
  }
}

export default MyApp

import '../styles/globals.css'
import { createContext, Suspense, useContext } from 'react'
import { useState } from 'react';


const cartContext = createContext(null);
export const useCartContext = () => {
  return useContext(cartContext);
}

function MyApp({ Component, pageProps }) {
  const [amount,setAmount] = useState(1);

  return (
      <cartContext.Provider value={{amount,setAmount}}>
        <Suspense>
          <Component {...pageProps} />
        </Suspense>
      </cartContext.Provider>
  )
}

export default MyApp

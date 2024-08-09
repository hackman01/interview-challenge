import { React, createContext, useEffect, useState } from 'react';
import { ContextProvider } from '../context/contextProvider'

const App = ({ Component, pageProps }) => {



   return(
  
    <ContextProvider>
    <Component {...pageProps} />
    </ContextProvider>
   )
};

export default App;

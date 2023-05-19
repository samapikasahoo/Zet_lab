import React from 'react';
import logo from './logo.svg';
import './App.css';
import Q1 from './Components/Q1';
import Q2 from './Components/Q2';
import Q3 from './Components/Q3';
import Q5 from './Components/Q5';
import Q6 from './Components/Q6';
import { Provider } from 'react-redux';
import store from './store';

import {useState,useEffect} from 'react'
export const MyContext = React.createContext('');

const App=() =>{



  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const [isMobile,setIsMobile]=useState(false)
  useEffect(() => {
    setIsMobile(width<=820);
  }, [width])


  return (
    <>
    <Provider store={store}>
      <Q1 value={isMobile}/>
      <Q2 value={isMobile}/>
      <MyContext.Provider value="This is content from Context Provider">
        <Q3 value={isMobile}/>
      </MyContext.Provider>
      <Q5 value={isMobile}/>
      <Q6 value={isMobile}/>
    </Provider>
      
    </>
  );
}

export default App;

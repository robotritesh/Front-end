import { createContext, useContext, useState } from 'react'
import './App.css'
import DataComponent from "./components/DataComponent";
import { DataProvider } from "./context/DataProvider";


function App(){
  return(
    <>
    <h4>Lorem ipsum dolor sit amet</h4>
    <DataProvider>
      <DataComponent/>
    </DataProvider>
    </>
  )
}



export default App

import './App.css'
import Nav from './components/nav'
import Table from './components/table'
import { useState, createContext, useEffect } from "react";
import axios from 'axios'
import {DataContext} from './context/data'
function App() {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async()=>{
      const data = await axios.get('http://3.88.1.181:8000/products/public/catalog?supplier=FragranceX&first=0&last=50')
      setData(data)
    }
    getData()
  })
  return (
    <div className='bg-gray-200 min-h-screen'>
      <DataContext.Provider value={{data, setData}}>
        <Nav/>
        <Table/>
      </DataContext.Provider>
    </div>
  )
}

export default App

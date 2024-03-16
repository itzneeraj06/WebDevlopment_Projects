import React from 'react'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import { filterdata } from './components/Data'
import './App.css'
const App = () => {
  return (
    <div className='main'>
      <Navbar />
      <Filter filterdata={filterdata}/>
      <Cards />
    </div>
  )
}

export default App
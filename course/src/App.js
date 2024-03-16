import React,{useState} from 'react'
import Cards from './components/Cards'
import Navbar from './components/Navbar'
import Filter from './components/Filter'
import { filterdata } from './components/Data'
import './App.css'
const App = () => {
  
  const [category, setCategory] = useState(filterdata[0].title);

  return (
    <div className='main'>
      <Navbar />
      <Filter filterdata={filterdata} setCategory={setCategory}/>
      <Cards category={category}/>
    </div>
  )
}

export default App
import './App.css'

import { Item } from './types/Item'
import { Category } from './types/Category'

import { categories } from './data/categories'
import { items } from './data/items'
import { useEffect, useState } from 'react'
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'

import { TableArea } from './components/TableArea/index'

const App = () => {

  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=>{
    setFilteredList( filterListByMonth(list, currentMonth) );
    console.log(filteredList)
  }, [list, currentMonth]);

  return (
    <div className="App">
      <div className='header'>
        <h1>Sistema Financeiro</h1>
      </div>
      <div className='body'>
        {/* Área de informações */}

        {/* Área de inserção */}

        <TableArea list={filteredList}/>
      </div>
    </div>
  )
}

export default App

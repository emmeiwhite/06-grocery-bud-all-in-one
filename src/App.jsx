import { useState } from 'react'
import GroceryForm from './components/GroceryForm'

const App = () => {
  const [itemList, setItemList] = useState([])

  function getItem(groceryItem) {
    console.log(groceryItem)
    setItemList([...itemList, groceryItem])
    console.log(itemList)
  }
  return (
    <main className="section-center">
      <GroceryForm getItem={getItem} />
    </main>
  )
}

export default App

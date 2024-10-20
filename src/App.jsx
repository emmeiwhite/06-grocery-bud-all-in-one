import { useState } from 'react'
import GroceryForm from './components/GroceryForm'
import GroceryList from './components/GroceryList'

const App = () => {
  const [listItems, setListItems] = useState([])

  function getItem(groceryItem) {
    setListItems([...listItems, groceryItem])
  }

  function handleDelete(id) {
    setListItems(listItems.filter(item => item.id !== id))
  }
  return (
    <main className="section-center">
      <GroceryForm getItem={getItem} />
      <GroceryList
        listItems={listItems}
        handleDelete={handleDelete}
      />
    </main>
  )
}

export default App

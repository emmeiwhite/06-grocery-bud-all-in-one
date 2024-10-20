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

  function handleChecked(id) {
    const updatedList = listItems.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })

    // Only state updates trigger a re-render
    setListItems(updatedList)
  }
  return (
    <main className="section-center">
      <GroceryForm getItem={getItem} />
      <GroceryList
        listItems={listItems}
        handleDelete={handleDelete}
        handleChecked={handleChecked}
      />
    </main>
  )
}

export default App

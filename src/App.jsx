import { useState } from 'react'
import GroceryForm from './components/GroceryForm'
import GroceryList from './components/GroceryList'

const setLocalStorage = items => {
  localStorage.setItem('list', JSON.stringify(items))
}

const App = () => {
  const [listItems, setListItems] = useState([])

  function getItem(groceryItem) {
    setListItems(list => {
      const updatedList = [...list, groceryItem]
      setLocalStorage(updatedList)
      return updatedList
    })
  }

  function handleDelete(id) {
    setListItems(list => {
      const listUpdatedAfterDelete = list.filter(item => item.id !== id)
      setLocalStorage(listUpdatedAfterDelete)
      return listUpdatedAfterDelete
    })
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

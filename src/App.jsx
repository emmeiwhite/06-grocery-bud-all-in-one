import { useState } from 'react'
import GroceryForm from './components/GroceryForm'
import GroceryList from './components/GroceryList'
import { ToastContainer, toast } from 'react-toastify'

const setLocalStorage = items => {
  localStorage.setItem('list', JSON.stringify(items))
}

const getLocalStorage = () => {
  const items = JSON.parse(localStorage.getItem('list'))
  if (items) {
    return items
  } else {
    return []
  }
}

const App = () => {
  const [listItems, setListItems] = useState(getLocalStorage())

  function getItem(groceryItem) {
    setListItems(list => {
      const updatedList = [...list, groceryItem]
      setLocalStorage(updatedList)

      toast.success('item added to the list')
      return updatedList
    })
  }

  function handleDelete(id) {
    setListItems(list => {
      const listUpdatedAfterDelete = list.filter(item => item.id !== id)
      setLocalStorage(listUpdatedAfterDelete)
      return listUpdatedAfterDelete
    })
    toast.success('deleted the item successfully')
  }

  function handleChecked(id) {
    const updatedList = listItems.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })

    setLocalStorage(updatedList)
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

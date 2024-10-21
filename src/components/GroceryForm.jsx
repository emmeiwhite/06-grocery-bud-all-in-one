import { useState } from 'react'
import { nanoid } from 'nanoid'
import { ToastContainer, toast } from 'react-toastify'
export default function GroceryForm({ getItem }) {
  const [item, setItem] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!item) {
      toast.error('please provide the value')
      return
    }

    const itemObj = {
      id: nanoid(),
      name: item,
      completed: false
    }
    getItem(itemObj)

    setItem('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer position="top-center" />
      <h4>Grocery Bud</h4>
      <div className="form-control">
        <input
          type="text"
          onChange={e => setItem(e.target.value)}
          value={item}
          className="form-input"
        />
        <button
          className="btn"
          type="submit"
        >
          Add Item
        </button>
      </div>
    </form>
  )
}

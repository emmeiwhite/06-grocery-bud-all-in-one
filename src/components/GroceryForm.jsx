import { useState } from 'react'
import { nanoid } from 'nanoid'

export default function GroceryForm({ getItem }) {
  const [item, setItem] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    if (!item) return

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

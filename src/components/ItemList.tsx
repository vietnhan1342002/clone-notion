import { useState } from 'react'

type Item = {
  id: number
  name: string
}

function ItemList() {
  console.log('RenderItem')

  const [items, setItems] = useState<Item[]>([])
  const [text, setText] = useState<string>('')
  const addItem = (): void => {
    if (!text.trim()) return
    setItems((prev) => [...prev, { id: Date.now(), name: text.trim() }])
    setText('')
  }
  const deleteItem = (id: number): void => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }
  const updateItem = (id: number): void => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, name: item.name + ' (updated)' } : item,
      ),
    )
  }
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2>Item List</h2>

        <input
          className="rounded border border-gray-300"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          className="bg-amber-50 p-2 hover:bg-blue-300 hover:cursor-pointer"
          onClick={addItem}
        >
          Add
        </button>
      </div>

      <ul>
        {items.map((item) => (
          <li className="flex gap-10 items-center" key={item.id}>
            <h1 className="font-bold">{item.name}</h1>
            <button
              className="bg-amber-50 p-2 hover:bg-blue-300 hover:cursor-pointer"
              onClick={() => updateItem(item.id)}
            >
              Update
            </button>
            <button
              className="bg-amber-50 p-2 hover:bg-blue-300 hover:cursor-pointer"
              onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemList

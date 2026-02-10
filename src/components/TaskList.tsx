type Item = {
  id: number
  name: string
}

type Props = {
  tasks: Item[]
  onAddTask: () => void
}

function TaskList({ tasks, onAddTask }: Props) {
  console.log('RenderItem')

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2>Item List</h2>
        {/* 
        <input
          className="rounded border border-gray-300"
          value={tasks.name}
          onChange={(e) => setText(e.target.value)}
        /> */}
        <button
          className="bg-amber-50 p-2 hover:bg-blue-300 hover:cursor-pointer"
          onClick={onAddTask}
        >
          Add
        </button>
      </div>

      <ul>
        {tasks.map((item) => (
          <li className="flex gap-10 items-center" key={item.id}>
            <h1 className="font-bold">{item.name}</h1>
            <button
              className="bg-amber-50 p-2 hover:bg-blue-300 hover:cursor-pointer"
              //   onClick={() => updateItem(item.id)}
            >
              Update
            </button>
            <button
              className="bg-amber-50 p-2 hover:bg-blue-300 hover:cursor-pointer"
              //   onClick={() => deleteItem(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TaskList

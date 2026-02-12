import { useRef } from 'react'

type Props = {
  onAdd: (task: { name: string; important: boolean }) => void
}

export default function TaskForm({ onAdd }: Props) {
  console.log('task form')
  const inputRef = useRef<HTMLInputElement>(null)
  const checkboxRef = useRef<HTMLInputElement>(null)
  //   const [name, setName] = useState('')
  //   const [important, setImportant] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const name = inputRef.current?.value || ''
    const important = checkboxRef.current?.checked || false

    if (!name.trim()) return

    onAdd({ name, important })
    // setName('')
    // setImportant(false)
    if (inputRef.current) inputRef.current.value = ''
    if (checkboxRef.current) checkboxRef.current.checked = false
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Task Name */}
      <div>
        <input
          ref={inputRef}
          //   value={name}
          onChange={() => {
            for (let i = 0; i < 1000000; i++) {
              //   setName(e.target.value)
              console.log(inputRef.current?.value.trim())
            }
          }}
          placeholder="Enter task name..."
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        />
        <p>Preview: {}</p>
      </div>

      {/* Important Checkbox */}
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          ref={checkboxRef}
          //   checked={important}
          //   onChange={(e) => setImportant(e.target.checked)}
          className="w-4 h-4 accent-red-500"
        />
        <label className="text-gray-700 font-medium">
          Mark as Important 🔥
        </label>
      </div>

      {/* Button */}
      <button
        // disabled={}
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 active:scale-95 transition disabled:bg-gray-300 
    disabled:text-gray-500 
    disabled:cursor-not-allowed 
    disabled:active:scale-100"
      >
        Add Task
      </button>
    </form>
  )
}

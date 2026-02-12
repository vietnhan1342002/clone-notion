import { useState } from 'react'
import TaskForm from '../components/TaskForm'

type Task = {
  id: number
  name: string
  important: boolean
}

export default function Task() {
  const [tasks, setTasks] = useState<Task[]>([])

  const addTask = (task: Omit<Task, 'id'>) => {
    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        ...task,
      },
    ])
  }

  return (
    <div className="bg-white rounded-xl shadow-md p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Task Manager</h1>
        <p className="text-gray-500 text-sm">
          Add and manage your tasks easily
        </p>
      </div>

      {/* Form */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <TaskForm onAdd={addTask} />
      </div>

      {/* Divider */}
      <div className="border-t pt-4">
        <h2 className="text-lg font-semibold text-gray-700 mb-3">Task List</h2>

        {tasks.length === 0 ? (
          <p className="text-gray-400 text-sm">
            No tasks yet. Add one above 👆
          </p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg border hover:shadow-sm transition"
              >
                <span className="text-gray-800 font-medium">{task.name}</span>

                {task.important && (
                  <span className="text-red-500 text-lg">🔥</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

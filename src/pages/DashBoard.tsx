import { useEffect, useState } from 'react'
// import TaskCounter from '../components/TaskCounter'
import TaskList from '../components/TaskList'

type Item = {
  id: number
  name: string
}

const initialTasks: Item[] = [
  { id: 1, name: 'Learn React render' },
  { id: 2, name: 'Understand state update' },
  { id: 3, name: 'Check re-render behavior' },
]

export default function Dashboard() {
  console.log('reder dashboard')

  const [tasks, setTasks] = useState<Item[]>(initialTasks)
  useEffect(() => {
    setTasks(tasks)
    console.log('in useEffect: ', tasks)
  }, [tasks])
  // const increase = () => {
  //   setTaskCount(taskCount + 1)
  // }

  // const decrease = () => {
  //   if (taskCount === 0) return
  //   setTaskCount(taskCount - 1)
  // }

  const onAddTask = () => {
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), name: `New Task ${prev.length + 1}` },
    ])
  }

  return (
    <div>
      <h2>Dashboard</h2>
      {/* <TaskCounter
        count={taskCount}
        onAddTask={increase}
        onMinusTask={decrease}
      /> */}
      <TaskList tasks={tasks} onAddTask={onAddTask} />
    </div>
  )
}

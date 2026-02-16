import { useEffect } from 'react'

type Props = {
  count: number
  onAddTask: () => void
  onMinusTask: () => void
}

export default function TaskCounter({ count, onAddTask, onMinusTask }: Props) {
  console.log('render task')
  useEffect(() => console.log('in useEffect'), [count])
  return (
    <div className="flex flex-col items-start gap-2">
      <main>
        <p>Total tasks: {count}</p>
      </main>
      <div className="flex items-start gap-2">
        <button onClick={onAddTask}>Add task</button>
        <button onClick={onMinusTask}>Minus task</button>
      </div>
    </div>
  )
}

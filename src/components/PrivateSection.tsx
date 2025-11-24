import { useState } from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const PrivateSection = () => {
  const [showPages, setShowPages] = useState(false)
  const pages = ['Project A', 'Project B', 'Project C', 'Project D']

  return (
    <div className="flex flex-col overflow-auto w-full" aria-label="Private">
      {/* Toggle main Private section */}
      <Button
        variant="ghost"
        onClick={() => setShowPages(!showPages)}
        className="h-8 w-full flex items-center justify-between rounded-md hover:bg-gray-200 px-2 cursor-pointer group text-xs text-gray-500"
      >
        <span>Private</span>
        <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-lg leading-none select-none cursor-pointer">
            ⋯
          </span>
          <span className="text-lg leading-none select-none border-2 cursor-pointer">
            +
          </span>
        </div>
      </Button>

      {/* Pages list */}
      {showPages && (
        <ul className="space-y-2">
          {pages.map((page, index) => (
            <li
              key={index}
              className="flex justify-between p-2 rounded hover:bg-gray-300 cursor-pointer group text-sm text-gray-500"
            >
              <Link to={`/page/${page}`}>{page}</Link>
              <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-lg leading-none select-none cursor-pointer">
                  ⋯
                </span>
                <span className="text-lg leading-none select-none cursor-pointer">
                  +
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default PrivateSection

import { Link } from "react-router"
import { Button } from "./ui/button"

const Header = () => {

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="px-4 py-2 h-16 flex items-center justify-between overflow-auto z-50 fixed top-0 right-0 left-0">
      {/* Logo */}
      <div className="text-xl font-bold text-gray-800">
        <Link to="/">Notion-Clone</Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-600">
        {menuItems.map((item, idx) => (
          <li key={idx} className="hover:bg-gray-100 rounded px-2 transition-colors">
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

      {/* Action buttons (desktop) */}
      <div className="hidden md:flex space-x-2">
        <Button className="px-3 py-1 rounded bg-white text-black hover:bg-gray-300 transition-colors">
          Login
        </Button>
        <Button className="px-3 py-1 rounded border bg-blue-500 border-blue-500 text-white hover:bg-blue-50 transition-colors">
          Sign Up
        </Button>
      </div>
    </nav>
  )
}
export default Header

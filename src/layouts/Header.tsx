import { useEffect } from 'react'

function Header() {
  console.log('Render Header')
  useEffect(() => {
    console.log(Date.now())
  }, [])
  return <header className="blink">Header</header>
}

export default Header

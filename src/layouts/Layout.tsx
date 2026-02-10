import Header from './Header'
import Sidebar from './Sidebar'
import Main from './Main'

function Layout() {
  console.log('Render Layout')

  return (
    <div>
      <Header />
      <div className="flex flex-col">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}

export default Layout

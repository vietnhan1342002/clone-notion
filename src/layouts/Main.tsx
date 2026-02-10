import ItemList from '../components/ItemList'
import Dashboard from '../pages/DashBoard'

function Main() {
  console.log('Render Main')
  return (
    <main className="flex flex-col">
      Main content
      <ItemList />
      <Dashboard />
    </main>
  )
}

export default Main

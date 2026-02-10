import ItemList from '../components/ItemList'

function Main() {
  console.log('Render Main')
  return (
    <main className="flex flex-col">
      Main content
      <ItemList />
    </main>
  )
}

export default Main

import ItemList from '../components/ItemList'
import Dashboard from '../pages/DashBoard'
import Task from '../pages/Task'

function Main() {
  console.log('Render Main')

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

        {/* Dashboard */}
        <section className="bg-white rounded-xl shadow-md p-6">
          <Dashboard />
        </section>

        {/* Item List */}
        <section className="bg-white rounded-xl shadow-md p-6">
          <ItemList />
        </section>

        {/* Task */}
        <section className="bg-white rounded-xl shadow-md p-6">
          <Task />
        </section>
      </div>
    </main>
  )
}

export default Main

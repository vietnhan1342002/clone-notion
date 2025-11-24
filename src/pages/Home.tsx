import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 mt-16 bg-gray-400"></main>
      <Footer />
    </div>
  )
}

export default Home

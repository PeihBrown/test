import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-[64px] md:pt-[84px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
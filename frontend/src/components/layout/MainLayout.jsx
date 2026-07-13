import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="flex-1 bg-slate-50">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout

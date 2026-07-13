import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import CompactFooter from './CompactFooter'

function MainLayout() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <>
      <Navbar />
      <main className={`flex-1 ${isHome ? 'bg-white' : 'bg-slate-50'}`}>
        <Outlet />
      </main>
      {isHome ? <CompactFooter /> : <Footer />}
    </>
  )
}

export default MainLayout

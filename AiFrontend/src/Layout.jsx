import { Outlet } from 'react-router';
import Footer from './components/Footer';
import Navbar from './components/navbar';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
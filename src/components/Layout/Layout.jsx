import { Outlet, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Toaster } from 'react-hot-toast'

const Layout = () => {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <div className={`min-h-screen flex flex-col ${isHome ? 'bg-[#F3F4F8]' : 'bg-white'}`}>
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                <Outlet />
            </main>
            <Footer />
            <Toaster
                position="top-center"
                toastOptions={{
                    duration: 2000,
                    style: {
                        background: '#333',
                        color: '#fff',
                    },
                    success: {
                        style: {
                            background: '#166534',
                        },
                    },
                    error: {
                        style: {
                            background: '#991B1B',
                        },
                    },
                }}
            />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node
}

export default Layout

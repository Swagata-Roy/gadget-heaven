import { Link, NavLink, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'
import logo from '../../assets/logo.png'

const NavItem = ({ to, children }) => {
    const location = useLocation()
    const isHome = location.pathname === '/'

    return (
        <NavLink
            to={to}
            className={({ isActive }) =>
                `px-6 py-3 text-base font-medium transition-all rounded-full ${isHome
                    ? isActive
                        ? 'text-black bg-white'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    : isActive
                        ? 'text-black bg-gray-200'
                        : 'text-black/90 hover:text-black hover:bg-black/10'
                }`
            }
        >
            {children}
        </NavLink>
    )
}

NavItem.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

const Navbar = () => {
    const location = useLocation()

    const getNavBackground = () => {
        switch (location.pathname) {
            case '/':
                return 'bg-transparent top-10'
            case '/dashboard':
                return 'bg-white'
            case '/stats':
                return 'bg-transparent'
            default:
                return 'bg-transparent'
        }
    }

    const getNavheight = () => {
        if (location.pathname.startsWith('/product/')) {
            return 'h-20'
        }
        switch (location.pathname) {
            case '/dashboard':
                return 'h-10'
            case '/stats':
                return 'h-20'
            case '/about':
                return 'h-20'
            default:
                return 'h-4'
        }
    }

    const getText = () => {
        switch (location.pathname) {
            case '/':
                return 'text-white'
            default:
                return 'text-black'
        }
    }

    return (
        <nav className={`relative ${getNavheight()}`}>
            <div className={`absolute left-0 right-0 z-50 ${getNavBackground()}`}>
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo*/}
                        <div className="flex items-center space-x-3">
                            <Link to="/" className="flex items-center gap-2">
                                <img src={logo} alt="logo" />
                                <span className={`text-2xl font-bold ${getText()}`}>GadgetHeaven</span>
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex items-center space-x-4">
                            <NavItem to="/">Home</NavItem>
                            <NavItem to="/about">About</NavItem>
                            <NavItem to="/stats">Stats</NavItem>
                            <NavItem to="/dashboard">Dashboard</NavItem>
                        </div>
                        <div className="flex items-center gap-4 ml-4">
                            <Link
                                to="/dashboard?tab=cart"
                                className='p-2 rounded-full bg-white text-black shadow-sm hover:bg-slate-200/20 transition-colors'
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                                    />
                                </svg>
                            </Link>
                            <Link
                                to="/dashboard?tab=wishlist"
                                className='p-2 rounded-full bg-white shadow-sm hover:bg-slate-200/20 transition-colors text-black'
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

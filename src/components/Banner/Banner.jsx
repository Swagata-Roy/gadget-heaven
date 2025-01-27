import { useNavigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const Banner = ({ activeTab, onTabChange, cartItemsCount, wishListItemsCount }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const getBannerContent = () => {
        switch (location.pathname) {
            case '/':
                return {
                    gradient: 'from-purple-500 to-purple-600',
                    title: 'Find Your Next Perfect Gadgets',
                    description: 'Discover a world of cutting-edge technology. From smartphones to smart home devices, find everything you need to stay connected and empowered.',
                    showButton: true,
                    hasImage: true
                }
            case '/dashboard':
                return {
                    gradient: 'from-purple-500 to-purple-600',
                    title: 'Your Shopping Dashboard',
                    description: 'Manage your cart and wishlist items all in one place',
                    showButton: false,
                    hasImage: false
                }
            case '/about':
                return {
                    gradient: 'from-purple-500 to-purple-600',
                    title: 'About GadgetHeaven',
                    description: 'Learn about our mission and commitment to bringing you the best in tech',
                    showButton: false,
                    hasImage: false
                }
            case '/stats':
                return {
                    gradient: 'from-purple-500 to-purple-600',
                    title: 'Shopping Statistics',
                    description: 'Track your shopping patterns and favorite items',
                    showButton: false,
                    hasImage: false
                }
            default:
                return null
        }
    }

    const content = getBannerContent()
    if (!content) return null

    const isHome = location.pathname === '/'

    return (
        <div className={`${isHome ? '' : '-mx-4 -mt-8 w-screen relative left-1/2 right-1/2 -translate-x-1/2'}`}>
            <div className={`relative bg-gradient-to-r ${content.gradient} ${isHome ? 'container mx-auto rounded-2xl mb-84 pt-20 pb-40' : 'mb-8 py-16'}`}>
                <div className="container mx-auto flex flex-col items-center justify-center h-full px-6">
                    {/* Text Content */}
                    <div className="text-center max-w-2xl space-y-4">
                        <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight text-center mb-4">
                            {content.title}
                        </h1>
                        <p className="text-lg text-white/90 max-w-xl mx-auto">
                            {content.description}
                        </p>
                        {content.showButton && (
                            <button
                                onClick={() => navigate('/dashboard')}
                                className="bg-white text-blue-600 px-8 py-3 mt-8 text-lg font-semibold rounded-full hover:bg-blue-50 transition-colors shadow-lg"
                            >
                                Shop Now
                            </button>
                        )}
                    </div>

                    {/* Image */}
                    {content.hasImage && (
                        <div className="absolute md:w-1/2 hidden md:flex justify-end top-114 left-80">
                            <img
                                src="src/assets/banner.jpg"
                                alt="Latest Gadgets"
                                className="w-full h-[400px] object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    )}

                    {/* Tabs for Dashboard */}
                    {location.pathname === '/dashboard' && (
                        <div className="flex justify-center space-x-8 mt-6">
                            <button
                                className={`px-6 py-3 font-semibold rounded-lg ${activeTab === 'cart'
                                    ? 'bg-white/20 text-white'
                                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                                    }`}
                                onClick={() => onTabChange('cart')}
                            >
                                Cart ({cartItemsCount})
                            </button>
                            <button
                                className={`px-6 py-3 font-semibold rounded-lg ${activeTab === 'wishlist'
                                    ? 'bg-white/20 text-white'
                                    : 'text-white/80 hover:bg-white/10 hover:text-white'
                                    }`}
                                onClick={() => onTabChange('wishlist')}
                            >
                                Wishlist ({wishListItemsCount})
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

Banner.propTypes = {
    activeTab: PropTypes.string,
    onTabChange: PropTypes.func,
    cartItemsCount: PropTypes.number,
    wishListItemsCount: PropTypes.number
}

Banner.defaultProps = {
    activeTab: 'cart',
    onTabChange: () => { },
    cartItemsCount: 0,
    wishListItemsCount: 0
}

export default Banner

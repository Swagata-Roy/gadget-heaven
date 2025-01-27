import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'
import { useWishList } from '../context/WishListContext'
import { useNavigate, useSearchParams } from 'react-router-dom'
import useTitle from '../hooks/useTitle'
import Banner from '../components/Banner/Banner'
import group from '../assets/Group.png'

const Dashboard = () => {
    useTitle('GadgetHeaven - Dashboard')
    const [searchParams] = useSearchParams()
    const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'cart')

    useEffect(() => {
        const tab = searchParams.get('tab')
        if (tab === 'cart' || tab === 'wishlist') {
            setActiveTab(tab)
        }
    }, [searchParams])
    const { cartItems, removeFromCart, sortCartByPrice, getTotalPrice, clearCart } = useCart()
    const { wishListItems, removeFromWishList } = useWishList()
    const navigate = useNavigate()

    const handlePurchase = () => {
        document.getElementById('purchaseModal').showModal()
    }

    const handlePurchaseComplete = () => {
        clearCart()
        document.getElementById('purchaseModal').close()
        navigate('/')
    }

    return (
        <>
            <Banner
                activeTab={activeTab}
                onTabChange={(tab) => {
                    setActiveTab(tab)
                    navigate(`?tab=${tab}`)
                }}
                cartItemsCount={cartItems.length}
                wishListItemsCount={wishListItems.length}
            />
            <div className="container mx-auto px-4 py-8">

                {/* Cart Tab Content */}
                {activeTab === 'cart' && (
                    <div>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">Total: ${getTotalPrice().toFixed(2)}</h2>
                            <div className="space-x-4">
                                <button
                                    onClick={sortCartByPrice}
                                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                                >
                                    Sort by Price
                                </button>
                                <button
                                    onClick={handlePurchase}
                                    disabled={cartItems.length === 0}
                                    className={`px-6 py-2 rounded transition-colors ${cartItems.length === 0
                                        ? 'bg-gray-300 cursor-not-allowed'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                        }`}
                                >
                                    Purchase
                                </button>
                            </div>
                        </div>

                        <div className="grid gap-6">
                            {cartItems.map((item) => (
                                <div
                                    key={item.product_id}
                                    className="bg-white rounded-lg shadow p-6 flex items-center justify-between"
                                >
                                    <div className="flex items-center space-x-4">
                                        <img
                                            src={item.product_image}
                                            alt={item.product_title}
                                            className="w-24 h-24 object-cover rounded"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {item.product_title}
                                            </h3>
                                            <p className="text-blue-600 font-bold">
                                                ${item.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeFromCart(item.product_id)}
                                        className="text-red-500 hover:text-red-700 text-xl font-bold"
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                            {cartItems.length === 0 && (
                                <div className="text-center py-12 bg-gray-50 rounded-lg">
                                    <p className="text-gray-500">Your cart is empty</p>
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Wishlist Tab Content */}
                {activeTab === 'wishlist' && (
                    <div className="grid gap-6">
                        {wishListItems.map((item) => (
                            <div
                                key={item.product_id}
                                className="bg-white rounded-lg shadow p-6 flex items-center justify-between"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={item.product_image}
                                        alt={item.product_title}
                                        className="w-24 h-24 object-cover rounded"
                                    />
                                    <div>
                                        <h3 className="text-lg font-semibold">
                                            {item.product_title}
                                        </h3>
                                        <p className="text-blue-600 font-bold">
                                            ${item.price.toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeFromWishList(item.product_id)}
                                    className="text-red-500 hover:text-red-700 text-xl font-bold"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                        {wishListItems.length === 0 && (
                            <div className="text-center py-12 bg-gray-50 rounded-lg">
                                <p className="text-gray-500">Your wishlist is empty</p>
                            </div>
                        )}
                    </div>
                )}

                {/* Purchase Modal */}
                <dialog
                    id="purchaseModal"
                    className="fixed inset-0 z-50 w-full h-full p-4 bg-transparent bg-opacity-50 backdrop-blur-sm"
                >
                    <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md mx-auto mt-[20vh] flex flex-col items-center">
                        <img
                            src={group}
                            alt="Success"
                            className="w-16 h-16 mb-6"
                        />
                        <h3 className="text-[28px] font-bold text-center mb-4">Payment Successful!</h3>
                        <p className="text-gray-600 text-center mb-8 text-lg">
                            Thank you for purchasing.
                        </p>
                        <p className="text-[22px] font-semibold text-center mb-2">
                            Total: ${getTotalPrice().toFixed(2)}
                        </p>
                        <button
                            onClick={handlePurchaseComplete}
                            className="px-8 py-3 bg-[#2BA24C] text-white text-lg font-semibold rounded-lg hover:bg-[#248A40] transition-colors"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </dialog>
            </div>
        </>
    )
}

export default Dashboard

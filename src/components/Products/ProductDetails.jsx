import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useCart } from '../../context/CartContext'
import { useWishList } from '../../context/WishListContext'
import productsData from '../../data/products.json'
import useTitle from '../../hooks/useTitle'

const ProductDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const product = productsData.products.find(p => p.product_id === id)

    useTitle(`GadgetHeaven - ${product?.product_title || 'Product Not Found'}`)
    const { addToCart } = useCart()
    const { addToWishList, isInWishList } = useWishList()

    useEffect(() => {
        if (!product) {
            navigate('/404')
        }
    }, [product, navigate])

    if (!product) return null

    const {
        product_title,
        product_image,
        price,
        description,
        specifications,
        availability,
        rating
    } = product

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="bg-white rounded-lg shadow-md p-6">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Product Image */}
                    <div className="relative">
                        <img
                            src={product_image}
                            alt={product_title}
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                        {!availability && (
                            <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded">
                                Out of Stock
                            </span>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-gray-800">
                            {product_title}
                        </h1>

                        <div className="flex items-center space-x-2">
                            <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
                            <span className="text-gray-600">({rating})</span>
                        </div>

                        <p className="text-2xl font-bold text-blue-600">
                            ${price.toFixed(2)}
                        </p>

                        <p className="text-gray-600">
                            {description}
                        </p>

                        <div className="border-t pt-4">
                            <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                {specifications.map((spec, index) => (
                                    <li key={index} className="text-gray-600">
                                        {spec}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex items-center space-x-4 pt-4">
                            <button
                                onClick={() => addToCart(product)}
                                className={`p-3 rounded-full transition-colors ${availability
                                    ? 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    : 'bg-gray-300 cursor-not-allowed'
                                    }`}
                                disabled={!availability}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
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
                            </button>
                            <button
                                onClick={() => addToWishList(product)}
                                disabled={isInWishList(product.product_id)}
                                className={`p-3 rounded-full transition-colors ${isInWishList(product.product_id)
                                    ? 'bg-red-100 text-red-500'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill={isInWishList(product.product_id) ? 'currentColor' : 'none'}
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
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails

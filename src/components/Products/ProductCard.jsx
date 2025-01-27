import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import '@smastrom/react-rating/style.css'

const ProductCard = ({ product }) => {
    const { product_id, product_title, product_image, price, availability } = product


    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative">
                <img
                    src={product_image}
                    alt={product_title}
                    className="w-full h-48 object-cover"
                />
                {!availability && (
                    <span className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-sm">
                        Out of Stock
                    </span>
                )}
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product_title}
                </h3>
                <div className="flex items-center justify-between mt-4">
                    <span className="text-lg text-gray-600 font-semibold">
                        Price: ${price.toFixed(2)}
                    </span>
                </div>
                <Link
                    to={`/product/${product_id}`}
                    className="mt-3 inline-block px-4 py-1 text-gray-700 text-sm rounded-full hover:bg-gray-100 transition-colors border-purple-600 border-2"
                >
                    View Details
                </Link>
            </div>
        </div>
    )
}

ProductCard.propTypes = {
    product: PropTypes.shape({
        product_id: PropTypes.string.isRequired,
        product_title: PropTypes.string.isRequired,
        product_image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        availability: PropTypes.bool.isRequired
    }).isRequired
}

export default ProductCard

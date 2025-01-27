import { Link, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

const categories = [
    { id: 'computers', name: 'Computers', icon: '💻' },
    { id: 'phones', name: 'Phones', icon: '📱' },
    { id: 'smartwatches', name: 'Smart Watches', icon: '⌚' }
]

const CategorySidebar = ({ onSelectCategory }) => {
    const location = useLocation()
    const currentCategory = new URLSearchParams(location.search).get('category')

    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-64">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Categories</h2>
            <ul className="space-y-2">
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link
                            to={`/?category=${category.id}`}
                            onClick={() => onSelectCategory(category.id)}
                            className={`flex items-center space-x-2 p-2 rounded-md transition-colors ${currentCategory === category.id
                                ? 'bg-blue-100 text-blue-600'
                                : 'hover:bg-gray-100'
                                }`}
                        >
                            <span className="text-xl">{category.icon}</span>
                            <span>{category.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

CategorySidebar.propTypes = {
    onSelectCategory: PropTypes.func.isRequired
}

export default CategorySidebar

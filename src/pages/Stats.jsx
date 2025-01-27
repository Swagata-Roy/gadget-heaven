import { useMemo } from 'react'
import productsData from '../data/products.json'
import useTitle from '../hooks/useTitle'
import Banner from '../components/Banner/Banner'

const Stats = () => {
    useTitle('GadgetHeaven - Stats')

    const stats = useMemo(() => {
        const products = productsData.products
        const totalProducts = products.length
        const categories = [...new Set(products.map(p => p.category))]
        const avgPrice = products.reduce((acc, p) => acc + p.price, 0) / totalProducts
        const avgRating = products.reduce((acc, p) => acc + p.rating, 0) / totalProducts
        const inStock = products.filter(p => p.availability).length

        const categoryStats = categories.map(cat => ({
            name: cat,
            count: products.filter(p => p.category === cat).length,
            avgPrice: products
                .filter(p => p.category === cat)
                .reduce((acc, p) => acc + p.price, 0) / products.filter(p => p.category === cat).length
        }))

        return {
            totalProducts,
            categories: categories.length,
            avgPrice,
            avgRating,
            inStock,
            outOfStock: totalProducts - inStock,
            categoryStats
        }
    }, [])

    return (
        <>
            <Banner />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8 text-center">Product Statistics</h1>

                {/* Overall Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-lg text-gray-600 mb-2">Total Products</h3>
                        <p className="text-4xl font-bold text-blue-600">{stats.totalProducts}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-lg text-gray-600 mb-2">Categories</h3>
                        <p className="text-4xl font-bold text-blue-600">{stats.categories}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-lg text-gray-600 mb-2">Average Price</h3>
                        <p className="text-4xl font-bold text-blue-600">${stats.avgPrice.toFixed(2)}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-lg text-gray-600 mb-2">Average Rating</h3>
                        <p className="text-4xl font-bold text-blue-600">{stats.avgRating.toFixed(1)}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-lg text-gray-600 mb-2">In Stock</h3>
                        <p className="text-4xl font-bold text-green-600">{stats.inStock}</p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-center">
                        <h3 className="text-lg text-gray-600 mb-2">Out of Stock</h3>
                        <p className="text-4xl font-bold text-red-600">{stats.outOfStock}</p>
                    </div>
                </div>

                {/* Category Stats */}
                <h2 className="text-2xl font-bold mb-6">Category Breakdown</h2>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                    Category
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                    Products
                                </th>
                                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                                    Avg. Price
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {stats.categoryStats.map((cat) => (
                                <tr key={cat.name} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 capitalize">{cat.name}</td>
                                    <td className="px-6 py-4">{cat.count}</td>
                                    <td className="px-6 py-4">${cat.avgPrice.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Stats

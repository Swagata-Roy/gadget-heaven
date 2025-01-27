import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Banner from '../components/Banner/Banner'
import CategorySidebar from '../components/Categories/CategorySidebar'
import ProductCard from '../components/Products/ProductCard'
import productsData from '../data/products.json'
import useTitle from '../hooks/useTitle'

const Home = () => {
    useTitle('GadgetHeaven - Home')
    const location = useLocation()
    const [selectedCategory, setSelectedCategory] = useState(() => {
        const params = new URLSearchParams(location.search)
        return params.get('category') || 'all'
    })

    const [filteredProducts, setFilteredProducts] = useState(productsData.products)

    useEffect(() => {
        if (selectedCategory === 'all') {
            setFilteredProducts(productsData.products)
        } else {
            setFilteredProducts(
                productsData.products.filter(
                    product => product.category === selectedCategory
                )
            )
        }
    }, [selectedCategory])

    const handleCategorySelect = (category) => {
        setSelectedCategory(category)
    }

    return (
        <>
            <Banner />
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Category Sidebar */}
                    <aside className="md:w-64 flex-shrink-0">
                        <div className="sticky top-4">
                            <CategorySidebar onSelectCategory={handleCategorySelect} />
                        </div>
                    </aside>

                    {/* Product Grid */}
                    <main className="flex-grow">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard
                                    key={product.product_id}
                                    product={product}
                                />
                            ))}
                        </div>

                        {/* No Products Message */}
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-12 bg-gray-50 rounded-lg">
                                <h3 className="text-xl text-gray-600">
                                    No products found in this category.
                                </h3>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </>
    )
}

export default Home

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import ProductDetails from './components/Products/ProductDetails'
import Stats from './pages/Stats'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { CartProvider } from './context/CartContext'
import { WishListProvider } from './context/WishListContext'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/product/:id",
        element: <ProductDetails />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/stats",
        element: <Stats />
      }
    ]
  }
])

function App() {
  return (
    <CartProvider>
      <WishListProvider>
        <RouterProvider router={router} />
      </WishListProvider>
    </CartProvider>
  )
}

export default App

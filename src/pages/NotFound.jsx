import { Link } from 'react-router-dom'
import useTitle from '../hooks/useTitle'

const NotFound = () => {
    useTitle('GadgetHeaven - Page Not Found')

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-blue-600">404</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
                <p className="text-gray-600 mt-2 mb-8">
                    Oops! The page you are looking for does not exist.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                    </svg>
                    Back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound

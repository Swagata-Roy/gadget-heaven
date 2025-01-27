const Footer = () => {
    return (
        <footer className="bg-gray-200 text-white py-12">
            <div className="container mx-auto">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-black text-center">Gadget Heaven</h2>
                    <p className="text-gray-600 text-center">Leading the way in cutting-edge technology and innovation.</p>
                    <div className="border-b border-gray-600 mt-4"></div>
                </div>
                <div className="flex justify-between items-start text-gray-600">
                    <div className="w-1/3">
                        <h3 className="text-lg font-medium mb-2">Services</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">Product Support</a></li>
                            <li><a href="#" className="hover:text-gray-400">Order Tracking</a></li>
                            <li><a href="#" className="hover:text-gray-400">Shipping & Delivery</a></li>
                            <li><a href="#" className="hover:text-gray-400">Returns</a></li>
                        </ul>
                    </div>
                    <div className="w-1/3">
                        <h3 className="text-lg font-medium mb-2">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">About Us</a></li>
                            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
                            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-1/3">
                        <h3 className="text-lg font-medium mb-2">Legal</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-gray-400">Cookie Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer

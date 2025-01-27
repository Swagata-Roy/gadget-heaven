import useTitle from '../hooks/useTitle'
import Banner from '../components/Banner/Banner'

const About = () => {
    useTitle('GadgetHeaven - About Us')

    return (
        <>
            <Banner />
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-12">
                        {/* Mission Section */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                            <p className="text-gray-600 leading-relaxed">
                                At GadgetHeaven, we're dedicated to bringing you the latest and most innovative technology solutions.
                                We believe in making cutting-edge gadgets accessible to everyone, providing not just products,
                                but a gateway to the future of technology.
                            </p>
                        </section>

                        {/* Values Section */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6">Our Values</h2>
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-3 text-blue-600">Quality First</h3>
                                    <p className="text-gray-600">
                                        We carefully curate our selection to ensure every gadget meets our high standards
                                        of quality and innovation.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-3 text-blue-600">Customer Focus</h3>
                                    <p className="text-gray-600">
                                        Your satisfaction is our priority. We're here to help you find the perfect tech
                                        solutions for your needs.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-3 text-blue-600">Innovation</h3>
                                    <p className="text-gray-600">
                                        We stay ahead of the curve, bringing you tomorrow's technology today.
                                    </p>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-3 text-blue-600">Trust</h3>
                                    <p className="text-gray-600">
                                        Building lasting relationships through transparency and reliability in every
                                        transaction.
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Why Choose Us Section */}
                        <section>
                            <h2 className="text-3xl font-bold mb-6">Why Choose GadgetHeaven?</h2>
                            <div className="space-y-4">
                                <p className="text-gray-600 leading-relaxed">
                                    With years of experience in the tech industry, we've built a reputation for
                                    excellence and reliability. Our dedicated team of tech enthusiasts is
                                    committed to providing you with:
                                </p>
                                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                                    <li>Carefully curated selection of premium gadgets</li>
                                    <li>Competitive prices and regular deals</li>
                                    <li>Expert guidance and support</li>
                                    <li>Secure shopping experience</li>
                                    <li>Fast and reliable shipping</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About

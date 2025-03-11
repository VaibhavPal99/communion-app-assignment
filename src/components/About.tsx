export const About = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
                            About Communion
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Building bridges between communities through meaningful connections and shared experiences.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Mission</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Connecting People Across Faiths & Interests
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Communion is dedicated to fostering understanding and collaboration between different communities, 
                            creating a platform where people can come together to share, learn, and grow.
                        </p>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center mb-12">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Values</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            What We Stand For
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Inclusivity</h3>
                            <p className="text-gray-500">
                                We believe in creating a welcoming space where everyone feels valued and respected, 
                                regardless of their background or beliefs.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">💡</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Learning</h3>
                            <p className="text-gray-500">
                                We promote continuous learning and understanding through shared experiences 
                                and open dialogue between different communities.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">🌱</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth</h3>
                            <p className="text-gray-500">
                                We support personal and community growth through meaningful connections 
                                and collaborative initiatives.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Section */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center mb-12">
                        <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Impact</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Making a Difference
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Community Building</h3>
                            <p className="text-gray-500">
                                Through our platform, we've facilitated countless meaningful connections between 
                                people from different backgrounds, fostering understanding and collaboration.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Cultural Exchange</h3>
                            <p className="text-gray-500">
                                Our events and activities provide opportunities for cultural exchange and 
                                learning, helping to break down barriers and build bridges between communities.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Join Our Community
                    </h2>
                    <p className="text-xl text-gray-500 mb-8">
                        Be part of something bigger. Connect, learn, and grow with us.
                    </p>
                    <button
                        onClick={() => window.location.href = '/events'}
                        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 font-medium"
                    >
                        Explore Events
                    </button>
                </div>
            </div>
        </div>
    );
}; 
import { useNavigate } from 'react-router-dom';

    export const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50"> 
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block">Connecting People Across</span>
                        <span className="block text-blue-600">Faiths & Interests</span>
                    </h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Join a vibrant community where people from different faiths and interests come together to share, learn, and grow. Discover meaningful connections and enriching experiences.
                    </p>
                    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                        <div className="rounded-md shadow">
                            <button
                                onClick={() => {navigate('/events')}}
                                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                            >
                                Explore Events
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
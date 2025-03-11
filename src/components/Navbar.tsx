import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <span className="text-3xl text-blue-600 hover:text-blue-700 transition-colors duration-200 font-family-sans font-semibold">
                            Communion
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            <button onClick={() => {navigate('/')}} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200">
                                Home
                            </button>
                            <button onClick={() => {navigate('/about')}} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200">
                                About
                            </button>
                            <button  onClick={() => {navigate('/events')}} className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-lg font-medium transition-colors duration-200">
                                Events
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )      
}
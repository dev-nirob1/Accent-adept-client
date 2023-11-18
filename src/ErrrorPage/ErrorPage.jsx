import { Link } from "react-router-dom";

const ErrorPage = () => {
    const refreshPage = () => {
        window.location.reload();
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <img
                    src="https://yourwebsite.com/path/to/your-logo.png"
                    alt="Your Logo"
                    className="mb-4"
                />
                <h1 className="text-4xl font-bold text-red-500 mb-2">Oh no! We hit a snag.</h1>
                <p className="text-gray-700 mb-4">
                Sorry, we encountered a hiccup while exploring the wonderful world of languages.
                </p>
                <div className="flex items-center justify-center space-x-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue"
                        onClick={refreshPage}
                    >
                        Refresh
                    </button>
                    <Link
                        to="/"
                        className="text-blue-500 hover:underline font-bold"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;

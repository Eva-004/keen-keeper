import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
            
            <h1 className="text-7xl font-bold text-[#244D3F]">404</h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mt-4 text-gray-800">
                Page Not Found
            </h2>
            
            <p className="text-gray-500 mt-2 max-w-md">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>

            <Link
                to="/"
                className="mt-6 px-6 py-2 bg-[#244D3F] text-white rounded-xl shadow hover:bg-[#07875d] transition"
            >
                Go Home
            </Link>

        </div>
        </div>
    );
};

export default ErrorPage;
import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
  return (
    <div className="w-11/12 mx-auto px-[3%] md:px-0 mt-[80px] text-center">
      <h1 className="text-6xl font-bold text-[#001931] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-[#627382] mb-8">Page Not Found</h2>
      <p className="text-base text-[#627382] mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="py-3 px-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg hover:scale-105 transition-all"
      >
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;

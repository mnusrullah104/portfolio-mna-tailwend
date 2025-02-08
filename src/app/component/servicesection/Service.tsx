'use client';

import React from 'react';

const Service = () => {
  return (
    <div className="service-page bg-[#103d4e] min-h-screen py-10">
      <h1 className="text-center text-white pt-6 font-semibold text-4xl">
        OUR <span className="text-[#00e1fa]">PROJECTS</span>
      </h1>

      <div className="container mx-auto px-4 py-10 mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Panel 1 */}
        <div className="panel relative h-64 w-full overflow-hidden rounded-lg shadow-xl bg-white transition-all duration-500 ease-in-out transform hover:scale-105 group m-4">
          <div className="card card1 bg-cover bg-center bg-no-repeat bg-[url('/mnar.jpg')] h-full w-full transition-all duration-500 ease-in-out"></div>
          <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-500 ease-in-out group-hover:bg-opacity-50"></div>
          <div className="slide flex flex-col justify-center items-center absolute inset-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
            <h6 className="para text-center font-bold text-2xl text-black">
              This is Resume Builder
            </h6>
            <a href="https://mna-resume3.vercel.app/my-resume.html" target="_blank" className="mt-5 px-4 py-2 bg-cyan-950 text-white rounded transition-all duration-300 hover:bg-teal-900 hover:opacity-85">
              Click to View
            </a>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="panel relative h-64 w-full overflow-hidden rounded-lg shadow-xl bg-white transition-all duration-500 ease-in-out transform hover:scale-105 group m-4">
          <div className="card card2 bg-cover bg-center bg-no-repeat bg-[url('/ecom.jpg')] h-full w-full transition-all duration-500 ease-in-out"></div>
          <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-500 ease-in-out group-hover:bg-opacity-50"></div>
          <div className="slide flex flex-col justify-center items-center absolute inset-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
            <h6 className="para text-center font-bold text-2xl text-black">
              This is Ecommerce Marketplace
            </h6>
            <a href="https://hakathon-q3-giaic.vercel.app/" target="_blank" className="mt-5 px-4 py-2 bg-cyan-950 text-white rounded transition-all duration-300 hover:bg-teal-900 hover:opacity-85">
              Click to View
            </a>
          </div>
        </div>

        {/* Panel 3 */}
        <div className="panel relative h-64 w-full overflow-hidden rounded-lg shadow-xl bg-white transition-all duration-500 ease-in-out transform hover:scale-105 group m-4">
          <div className="card card3 bg-cover bg-center bg-no-repeat bg-[url('/ctrl1.png')] h-full w-full transition-all duration-500 ease-in-out"></div>
          <div className="absolute inset-0 bg-black bg-opacity-0 transition-all duration-500 ease-in-out group-hover:bg-opacity-50"></div>
          <div className="slide flex flex-col justify-center items-center absolute inset-0 opacity-0 transition-all duration-500 ease-in-out group-hover:opacity-100">
            <h6 className="para text-center font-bold text-2xl text-white">
              This is my 3rd Project IOS Calculator App
            </h6>
            <a href="https://project-5-calculator-app.vercel.app/" target="_blank" className="mt-5 px-4 py-2 bg-cyan-950 text-white rounded transition-all duration-300 hover:bg-teal-900 hover:opacity-85">
              Click to View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
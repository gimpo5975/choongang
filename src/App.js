import React from 'react';

function App() {
  const imageNames = ['p2.jpg', 'p3.jpg', 'p4.jpg']; // Array of image names

  return (
    <div className="text-gray-900 pt-12 pr-0 pb-14 pl-0 bg-white">
      <div className="w-full pt-4 pr-5 pb-6 pl-5 mt-0 mr-auto mb-0 ml-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl">
        <div className="flex flex-col items-center sm:px-5 md:flex-row">
          <div className="flex flex-col items-start justify-center w-full h-full pt-6 pr-0 pb-6 pl-0 mb-6 md:mb-0 md:w-1/2">
            <div className="flex flex-col items-start justify-center h-full space-y-3 transform md:pr-10 lg:pr-16 md:space-y-5">
              <div className="bg-red-500 flex items-center leading-none rounded-full text-gray-50 pt-1.5 pr-3 pb-1.5 pl-2 uppercase inline-block">
                <p className="inline">
                  <span role="img" aria-label="Heart">❤️</span>
                </p>
                <p className="inline text-xs font-medium">Congratulations</p>
              </div>
              <p className="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">결혼기념일 축하!!</p>
              <div className="pt-2 pr-0 pb-0 pl-0">
                <a href="#" className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1 underline">원중올림</a>
                <p className="inline text-sm font-medium mt-0 mr-1 mb-0 ml-1">· 18rd, May 2024 ·</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="block">
              <img
                src="/p1.jpg"
                alt="article" className="object-cover rounded-lg max-h-64 sm:max-h-96 w-full h-full"/>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 sm:px-5 gap-x-8 gap-y-16">
          {imageNames.map((imageName, index) => (
            <div key={index} className="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4">
              <img
                src={`/${imageName}`} // Dynamically set the image source
                alt={`article-${index}`} // Add alt attribute with a unique value
                className="object-cover w-full mb-2 overflow-hidden rounded-lg shadow-sm max-h-56"
              />
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

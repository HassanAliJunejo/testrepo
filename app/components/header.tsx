// "use client"
// import Image from 'next/image';
// import React from 'react';

// const Header: React.FC = () => {
//   return (
//     <header className="bg-white shadow-sm border-t-4 border-blue-500">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
//         {/* Logo Section */}
//         <div className="flex-shrink-0 text-blue-600 font-bold text-lg">MORENT</div>

//         {/* Search Bar */}
//         <div className="relative flex-grow max-w-lg">
//           <input
//             type="text"
//             placeholder="Search something here"
//             className="w-full pl-10 pr-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
//           />
//           <span className="absolute inset-y-0 left-0 flex items-center pl-3">
//             <svg
//               className="w-5 h-5 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M10 14l4-4m0 0l-4-4m4 4H2"
//               />
//             </svg>
//           </span>
          
//           <span className="absolute inset-y-0 right-0 flex items-center pr-3">
//             <svg
//               className="w-5 h-5 text-gray-400"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M3 3h18M4 8h16M6 12h12"
//               />
//             </svg>
//           </span>
//         </div>

//         {/* Icons Section */}
//         <div className="flex items-center space-x-4">
//           <button className="text-gray-600 hover:text-blue-500">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >

//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             </svg>
//           </button>
//           <button className="text-gray-600 hover:text-blue-500">
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M20 12H4M4 12h16M4 6h16M4 18h16"
//               />
//             </svg>
//           </button>
//           <div className="w-8 h-8 rounded-full bg-gray-300">
//           <Image width={1000} height={1000} src="Image.png" alt='image' />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header


"use client"

import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* {first Element} Logo */}
        <div className="text-blue-600 text-xl font-bold">MORENT</div>

        {/* Search bar */}
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-lg shadow-lg">
          <input
            type="text"
            placeholder="Search something here"
            className="bg-transparent outline-none w-64 text-sm"
          />
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <img src="Like (1).png" alt="" />
 <img src="Notification.png" alt="" />
          
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-600"></span>


              <img src="Settings.png" alt="" />
          {/* Profile Picture */}
          <div className="w-10 h-10 rounded-full bg-gray-300">
            <img src="Image.png" alt="" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
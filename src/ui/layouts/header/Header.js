import React, { useState } from 'react';

const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    return(<></>);
    //
    // return (
    //     <nav className="bg-white border-gray-200 dark:bg-gray-900">
    //         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //             <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //                 <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
    //                 <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    //             </a>
    //             <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
    //                 <button
    //                     type="button"
    //                     onClick={() => setDropdownOpen(!dropdownOpen)}
    //                     className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    //                 >
    //                     <span className="sr-only">Open user menu</span>
    //                     <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user" />
    //                 </button>
    //                 {dropdownOpen && (
    //                     <div className="z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-700 dark:divide-gray-600 absolute top-full right-0">
    //                         <div className="px-4 py-3">
    //                             <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
    //                             <span className="block text-sm text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
    //                         </div>
    //                         <ul className="py-2">
    //                             <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a></li>
    //                             <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a></li>
    //                             <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a></li>
    //                             <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a></li>
    //                         </ul>
    //                     </div>
    //                 )}
    //                 <button
    //                     onClick={() => setMenuOpen(!menuOpen)}
    //                     type="button"
    //                     className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //                 >
    //                     <span className="sr-only">Open main menu</span>
    //                     <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
    //                          viewBox="0 0 17 14">
    //                         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
    //                               d="M1 1h15M1 7h15M1 13h15" />
    //                     </svg>
    //                 </button>
    //             </div>
    //
    //             <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${menuOpen ? 'flex' : 'hidden'}`}>
    //                 <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
    //                     {['Home', 'About', 'Services', 'Pricing', 'Contact'].map((item, index) => (
    //                         <li key={index}>
    //                             <a href="#" className={`block py-2 px-3 rounded-sm ${item === 'Home'
    //                                 ? 'text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500'
    //                                 : 'text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700'
    //                             }`} aria-current={item === 'Home' ? 'page' : undefined}>
    //                                 {item}
    //                             </a>
    //                         </li>
    //                     ))}
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>
    // );
};

export default Header;
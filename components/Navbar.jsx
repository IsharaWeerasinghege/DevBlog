import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div>
      <nav className="bg-white border-gray-200 sm:px-4 py-2.5 rounded dark:bg-gray-900 mb-10">
        <div className="container flex flex-wrap items-center justify-between mx-auto px-10">
          <a href="/" className="flex items-center">
            <span className="self-center text-xl font-bold whitespace-nowrap capitalize  text-gray-800">
              DevBlog
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="false"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {isOpen && (
            <div className="fixed inset-0 bg-white z-10 w-full h-full duration-500 pt-10 blur-1">
              <div className="flex justify-center items-center px-10 py-10">
                <ul>
                  {categories.map((category, index) => (
                    <li key={category.slug + index}>
                      <Link href={`/category/${category.slug}`}>
                        <span className="block py-2 font-semibold">
                          {category.name}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            )}
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              {categories.map((category, index) => (
                <li key={category.slug + index}>
                  <Link href={`/category/${category.slug}`}>
                    <span className="block pl-2 last:pl-0 pr-4 text-gray-800 font-bold text-lg hover:text-blue-600 duration-500">
                      {category.name}
                    </span>
                  </Link>
                </li>
              ))}

            </ul>
          </div>
        </div>

      </nav>

    </div>

  // <nav>
  //   <div className="bg-white container border-gray-200 mb-8 sm:px-4 py-2.5 z-20">
  //     <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 z-20">
  //       <div className="font-bold md:text-xl cursor-pointer flex items-center">
  //         DevBlog
  //       </div>
  //
  //       <div className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden z-20">
  //         <button
  //           data-collapse-toggle="navbar-default"
  //           type="button"
  //           aria-controls="navbar-default"
  //           aria-expanded="false"
  //           onClick={() => setIsOpen(!isOpen)}
  //         >
  //           <svg
  //             className="w-6 h-6"
  //             aria-hidden="false"
  //             fill="currentColor"
  //             viewBox="0 0 20 20"
  //             xmlns="http://www.w3.org/2000/svg"
  //           >
  //             <path
  //               fillRule="evenodd"
  //               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
  //               clipRule="evenodd"
  //             />
  //           </svg>
  //         </button>
  //
  //       </div>
  //
  //       <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-1 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${isOpen ? 'top-20 ' : 'top-[-490px]'}`}>
  //         {
  //           categories.map((category) => (
  //             <li key={category.slug} className="md:ml-8 text-xl md:my-0 my-7">
  //               <Link href={`/category/${category.slug}`}>
  //                 <span className="text-black hover:text-gray-400 duration-500">
  //                   {category.name}
  //                 </span>
  //               </Link>
  //             </li>
  //           ))
  //         }
  //       </ul>
  //     </div>
  //   </div>
  // </nav>
  );
};

export default Navbar;

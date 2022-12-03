import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '../services';
import logo from '../asset/devblog logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div>
      <nav className="bg-white border-gray-200 py-1 dark:bg-gray-900 mb-10 shadow-lg">
        <div className="container flex flex-wrap items-center justify-between mx-auto nav-padding">
          <a href="/" className="flex items-center">
            <span className="self-center drop-shadow font-sans font-semibold whitespace-nowrap capitalize  text-gray-800">
              <Image src={logo} alt="devblog" width={130} />
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-0 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                    <li key={category.slug + index + Math.random()}>
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
                <li key={category.slug + index + Math.random()}>
                  <Link href={`/category/${category.slug}`}>
                    <span className="block pl-2 last:pl-0 pr-0 drop-shadow text-gray-800 font-semibold text-right text-sm hover:text-blue-600 duration-500">
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
  );
};

export default Navbar;

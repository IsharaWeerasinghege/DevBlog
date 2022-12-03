import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8">
      <h3 className="text-xl mb-6 font-semibold border-b pb-2">Categories</h3>
      {categories?.map((category) => (
        <Link href={`/category/${category.slug}`} key={category.name + Math.random()} className="block font-sans font-semibold items-center w-full pb-3 mb-1 hover:text-blue-900 transition-all duration-500">
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default Categories;

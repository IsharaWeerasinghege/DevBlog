import React from 'react';
import Link from 'next/link';
import moment from 'moment';

const PostCard = ({ post }) => (

  <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-6">
    <div className="relative overflow-hidden shadow-md  mb-4">
      <img
        src={post?.featuredImage.url}
        alt={post.title}
        className="object-top h-40 md:h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
      />
    </div>
    <h1 className="transition duration-700 text-center mb-5 cursor-pointer hover:text-blue-900 text-2xl font-sans font-semibold">
      <Link href={`/post/${post.slug}`}>
        {post.title}
      </Link>
    </h1>
    <div className="block lg:flex text-center items-center justify-center mb-5 w-full">
      <div className="flex items-center justify-center mb-3 lg:mb-0 w-full lg:w-auto mr-8">
        <img
          src={post.author.photo.url}
          alt={post.author.name}
          height={30}
          width={30}
          className="align-middle img-author-sm rounded-full"
        />
        <p className="inline align-middle text-gray-700 font-sans text-lg ml-2"> {post.author.name}</p>
      </div>
      <div className="font-medium font-sans text-gray-700">
        <span>
          {moment(post.createdAt).format('MMM DD, YYYY')}
        </span>
      </div>
    </div>
    <p className="text-center font-sans text-lg text-gray-700 font-normal px-4 lg:px-20 mb-5">
      {post.excerpt}
    </p>
    <div className="text-center">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-blue-500 text-lg font-medium rounded-full font-sans text-white px-6 py-2 cursor-pointer">
          Continue Reading...
        </span>
      </Link>
    </div>
  </div>
);

export default PostCard;

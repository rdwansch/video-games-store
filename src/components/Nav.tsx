'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [searchInput, setSearchInput] = useState('');

  return (
    <div className="container flex items-center justify-between">
      <div className="text-xl text-white">
        <Link className="text-gray-300 hover:text-white" href="/">
          VzStore
        </Link>
      </div>
      <div className="flex gap-5">
        <Link className="text-gray-300 hover:text-white" href="/browse">
          Browse
        </Link>
      </div>
      <div className={` flex items-center gap-3 border-b border-gray-600 px-1 py-2`}>
        <input
          type="text"
          placeholder="search"
          className={`${
            searchInput !== '' ? 'w-60' : 'w-20'
          }  rounded bg-transparent text-gray-200 transition-[width] hover:w-60 focus:w-60 focus:outline-none`}
          onChange={e => setSearchInput(e.target.value)}
        />
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="text-white"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

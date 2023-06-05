'use client';

import useSWR, { useSWRConfig } from 'swr';
import { getAllGames } from '~/API/Games';
import { Game } from '~/types/Games.type';
import CardGame from '~/components/CardGame';
import { useEffect, useState } from 'react';

const fetcher = (...args: any) => fetch(args).then(res => res.json());

type Response = {
  results: Game[];
  count: number;
  next?: string;
  previous?: string;
  seo_title: string;
};

export default function Home() {
  const [page, setPage] = useState(1);
  const { cache } = useSWRConfig();
  const { data, isLoading, error } = useSWR<Response>(getAllGames(page + ''), fetcher);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="font-sans text-3xl font-bold text-white">New for You</h1>

        <div className="mt-10">
          {isLoading && <h2 className="text-2xl text-white">LOADING</h2>}
          <section className="">{data !== undefined && <CardGame results={data.results} />}</section>

          {/* This is an example component */}
          <div className="mx-auto my-20 flex flex-row justify-center">
            <button
              type="button"
              className="rounded-l-md border-r border-gray-100 bg-gray-800 py-2 px-3 text-white hover:bg-red-700 hover:text-white"
              onClick={() => {
                if (data?.previous) {
                  cache.delete(getAllGames(page + ''));
                  setPage(prev => prev - 1);
                }
              }}
            >
              <div className="flex flex-row align-middle">
                <svg className="mr-2 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="ml-2">Prev</p>
              </div>
            </button>
            <button
              type="button"
              className="rounded-r-md border-l border-gray-200 bg-gray-800 py-2 px-3 text-white hover:bg-red-700 hover:text-white"
              onClick={() => {
                if (data?.next) {
                  cache.delete(getAllGames(page + ''));
                  setPage(prev => prev + 1);
                }
              }}
            >
              <div className="flex flex-row align-middle">
                <span className="mr-2">Next</span>
                <svg className="ml-2 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

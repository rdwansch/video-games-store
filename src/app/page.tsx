'use client';

import useSWR from 'swr';

import { getAllGames } from '~/API/Games';
import { Game } from '~/types/Games.type';
import CardGame from '~/components/CardGame';

const fetcher = (...args: any) => fetch(args).then(res => res.json());

type Response = {
  results: Game[];
  count: number;
  next?: string;
  previous?: string;
  seo_title: string;
};

export default function Home() {
  const { data, isLoading, error } = useSWR<Response>(getAllGames, fetcher);

  return (
    <>
      <div className="container mx-auto">
        <h1 className="font-sans text-5xl font-bold text-white">New for You</h1>

        <div className="mt-10">
          {isLoading && <h2 className="text-2xl text-white">LOADING</h2>}
          <section className="">{data !== undefined && <CardGame results={data.results} />}</section>
        </div>
      </div>
    </>
  );
}

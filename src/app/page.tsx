'use client';

import useSWR from 'swr';
import { getAllGames } from '~/API/Games';

const fetcher = (...args: any) => fetch(args).then(res => res.json());

export default function Home() {
  const { data, error, isLoading } = useSWR(getAllGames, fetcher);

  console.log(data);

  return <h1 className="container text-2xl font-bold text-violet-500 underline">Halaman Page</h1>;
}

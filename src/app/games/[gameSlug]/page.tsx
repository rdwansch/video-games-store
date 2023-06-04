'use client';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import { getDetailGame } from '~/API/Games';
import { Game } from '~/types/Games.type';

const fetcher = (...args: any) => fetch(args).then(res => res.json());

export default function Page({ params }: { params: { gameSlug: string } }) {
  const router = useRouter();
  console.log(getDetailGame(params.gameSlug));
  const { data, isLoading, error } = useSWR<Game>(getDetailGame(params.gameSlug), fetcher);

  console.log(data);

  return <div></div>;
}

'use client';

import useSWR from 'swr';
import { useState, useEffect } from 'react';

import Image from 'next/image';

import { getAllGames } from '~/API/Games';
import { Game } from '~/types/Games.type';

const fetcher = (...args: any) => fetch(args).then(res => res.json());

export default function Home() {
  const { data, isLoading, error } = useSWR(getAllGames, fetcher);

  console.log(data?.results);
  return (
    <>
      <div className="container">
        <h1 className="font-sans text-5xl font-bold text-white">New for You</h1>

        <div className="mt-10">
          {isLoading && <h2 className="text-2xl text-white">LOADING</h2>}

          <section>
            {data !== undefined && (
              <div className="group relative flex w-[373px] items-center justify-center rounded-xl py-1 px-0.5 transition-transform hover:scale-105">
                <div className="rounded-xl bg-[#313131] px-3 py-3">
                  <div
                    style={{
                      background: `url(${'https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg'})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                    }}
                    className="h-48 w-[340px] "
                  ></div>
                  <h2 className="text-3xl text-white">GTA San Andreas</h2>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-gray-400">Mature</p>
                    </div>
                    <div className="">
                      <div className="flex gap-2 text-gray-400">
                        <div>Xbox</div>
                        <div>PC</div>
                        <div>PS4</div>
                      </div>
                      <div className="text-white">Icon Recomended</div>
                    </div>
                  </div>
                  <div className="absolute left-0 right-0 mx-auto hidden w-[364px] rounded-b-lg bg-[#313131] px-3 py-3 group-hover:block ">
                    <div className="divide-y divide-slate-400/[.24] text-sm">
                      <div className="flex justify-between text-gray-400">
                        <span>Released:</span>
                        <span>23 January 2023</span>
                      </div>

                      <div className="flex justify-between text-gray-400">
                        <span>Owned:</span>
                        <span>10855 player</span>
                      </div>

                      <div className="flex justify-between text-gray-400">
                        <span>Ratting:</span>
                        <span>4.47</span>
                      </div>

                      <div className="flex justify-between text-gray-400">
                        <span>Genres:</span>
                        <div className="w-3/4 text-right">Action, FPS, Mystery, Story, Open World, Adventure</div>
                      </div>
                    </div>

                    <button className="my-3 w-full rounded-lg bg-[#444444] py-1 text-gray-300 hover:text-white hover:shadow">
                      Add to whishlist
                    </button>
                    <button className="w-full rounded-lg bg-[#444444] py-1 text-gray-300 hover:text-white hover:shadow">
                      Show More Like This
                    </button>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
}

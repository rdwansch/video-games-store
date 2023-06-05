'use client';
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import { getDetailGame } from '~/API/Games';
import { Game } from '~/types/Games.type';
import Image from 'next/image';
import Link from 'next/link';

const fetcher = (...args: any) => fetch(args).then(res => res.json());

export default function Page({ params }: { params: { gameSlug: string } }) {
  const router = useRouter();
  console.log(getDetailGame(params.gameSlug));
  const { data, isLoading, error } = useSWR<Game>(getDetailGame(params.gameSlug), fetcher);

  if (!isLoading) {
    console.log(data);
  }

  return (
    <div className=" relative">
      {isLoading && <h3 className="text-3xl text-gray-300">Loading</h3>}
      {data && (
        <>
          <div
            className={`relative h-[500px] w-full bg-cover bg-center bg-no-repeat 
              after:absolute after:top-0 after:right-0 after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-[#161616] after:to-[#1616168c] after:content-['']`}
            style={{ backgroundImage: `url(${data.background_image})` }}
          />
        </>
      )}
      <div className="absolute left-0 right-0 top-32 mx-auto  max-w-5xl  p-10 ">
        {!isLoading && data && (
          <>
            <div className="flex flex-col gap-10 md:flex-row">
              <div className="">
                <h1 className="text-3xl text-white">{data.name}</h1>
                <div
                  className="mt-5  text-gray-300"
                  dangerouslySetInnerHTML={{ __html: data.description?.substring(0, 600) + '...' ?? '' }}
                />

                <div className="mt-5">
                  <table>
                    <tbody>
                      <tr>
                        <td className="text-gray-400">Platform</td>
                        <td className="text-gray-400">Release Date</td>
                      </tr>
                      <tr>
                        <td className="mr-10 w-1/2 text-gray-200">
                          {data.parent_platforms
                            ? data.parent_platforms.map(({ platform }) => platform.name).join(', ')
                            : 'N/A'}
                        </td>
                        <td className="text-gray-200">{data.released}</td>
                      </tr>

                      <br />

                      <tr>
                        <td className="text-gray-400">Genres</td>
                        <td className="text-gray-400">Age Rating</td>
                      </tr>
                      <tr>
                        <td className="mr-10 w-1/2 text-gray-200">{data.genres.map(genre => genre.name).join(', ')}</td>
                        <td className="text-gray-200">{data.esrb_rating.name}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-5">
                  <h3 className="text-gray-400">Tags</h3>
                  <p className="text-gray-300">{data!.tags?.map(tag => tag.name).join(', ')}</p>
                </div>
              </div>
              <div>
                {data.screen_shot && (
                  <Image
                    className="w-[400] max-w-full"
                    src={data.screen_shot[0].image}
                    key={data.screen_shot[0].image}
                    width={400}
                    height={0}
                    alt={data.name}
                  />
                )}

                <div className="mx-auto flex w-[400px] flex-col flex-wrap justify-evenly gap-2 md:flex-row">
                  {data.screen_shot?.map((ss, idx) =>
                    idx == 0 || idx == data.screen_shot!.length - 1 ? null : (
                      <Image
                        className="w-[190] max-w-full"
                        src={ss.image}
                        key={ss.image}
                        width={190}
                        height={0}
                        alt={data.name}
                      />
                    )
                  )}
                </div>
              </div>
            </div>
            <br />
            <br />
            <Link href="/" className="rounded border px-5 py-0.5 text-white">
              Back
            </Link>

            {/* <div className="mt-10">
              <h2 className="text-3xl text-white">More Likes {data.name}</h2>
            </div> */}
          </>
        )}
      </div>
    </div>
  );
}

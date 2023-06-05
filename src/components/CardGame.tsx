import Image from 'next/image';
import Link from 'next/link';
import { Game } from '~/types/Games.type';

export default function CardGame({ results }: { results: Game[] }) {
  const r = results[0].rating.toFixed(1);
  return (
    <>
      <div className="mx-auto flex flex-wrap items-center justify-center gap-5">
        {results.map(game => (
          <div
            className="group flex min-h-fit break-inside-avoid items-center justify-center rounded-xl p-4 transition hover:scale-105 group-hover:relative lg:w-[373px]"
            key={game.id}
          >
            <div className="rounded-xl bg-[#3131317e] px-3 py-3 hover:bg-[#313131]">
              <div
                style={{
                  background: `url(${game.background_image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center center',
                }}
                className="h-48 w-[340px] max-w-full"
                title={game.name}
              ></div>
              <div className="mt-2"></div>
              <Link href={`/games/${game.id}`}>
                <h2 className="text-2xl text-white hover:opacity-50">{game.name}</h2>
              </Link>
              <div className="flex justify-between">
                <div>
                  <p className="text-gray-400">{game?.esrb_rating?.name ?? 'N/A'}</p>
                </div>
                <div className="max-w-[70%]">
                  <div className="flex items-center justify-end gap-2 text-white">
                    {game.parent_platforms
                      ? game.parent_platforms.map(({ platform: { slug, name } }, idx) => (
                          <Image
                            src={`/icons/${slug}.png`}
                            key={slug}
                            alt={name}
                            width={slug == 'nintendo' ? 70 : 15}
                            height={1}
                            title={name}
                          />
                        ))
                      : 'N/A'}
                  </div>
                  <div className="flex justify-end py-3  text-white">
                    {/* exceptional | recommended | meh | skip */}
                    <Image
                      src={`/icons/${game.ratings[0].title}.png`}
                      width={30}
                      height={1}
                      alt={game.ratings[0].title}
                      title={game.ratings[0].title}
                    />
                  </div>
                </div>
              </div>
              <div className="absolute left-0 right-0 z-50 mx-auto hidden w-[364px] rounded-b-lg bg-[#313131] px-3 py-3 lg:group-hover:block">
                <div className="divide-y divide-slate-400/[.24] text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Released:</span>
                    <span>{game.released}</span>
                  </div>

                  <div className="flex justify-between text-gray-400">
                    <span>Owned:</span>
                    <span>{game.added} players</span>
                  </div>

                  <div className="flex justify-between text-gray-400">
                    <span>Ratting:</span>
                    <span>{game.rating}</span>
                  </div>

                  <div className="flex justify-between text-gray-400">
                    <span>Genres:</span>
                    <div className="w-3/4 text-right">{game.genres.map(genre => genre.name)}</div>
                  </div>
                </div>

                <button className="my-3 w-full rounded-lg bg-[#4444443f] py-1 text-gray-300 hover:bg-[#444444] hover:text-white hover:shadow">
                  Add to whishlist
                </button>
                <button className="w-full rounded-lg bg-[#4444443f] py-1 text-gray-300 hover:bg-[#444444] hover:text-white hover:shadow">
                  Show More Like This
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

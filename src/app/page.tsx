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
                  <div className="absolute left-0 right-0 mx-auto  w-[364px] rounded-b-lg bg-[#313131] px-3 py-3 group-hover:block ">
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
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, et natus eligendi consequuntur laudantium
              aliquid, quod ipsam nam provident dolorum alias pariatur, necessitatibus sapiente laborum veniam modi. Illo non
              consequatur suscipit, laudantium dignissimos consequuntur quod minima delectus soluta corporis adipisci culpa
              ex sequi accusamus ab aspernatur consectetur laboriosam eos nostrum cumque eum, repellat vero fuga? Fugit
              delectus sequi maiores nisi architecto nihil aut id totam! Molestias, excepturi? Asperiores aperiam facilis
              accusantium corrupti adipisci nostrum atque libero sint pariatur nobis dolor veniam dolorem illum blanditiis
              minima labore, aliquid quas. Itaque explicabo inventore eveniet veniam numquam dicta id eum quae aut
              consectetur laudantium quia omnis quos praesentium ipsam sequi qui, atque nihil maxime perferendis modi error
              repellat est! Voluptate magni inventore eum quis dolor impedit dolorum pariatur, exercitationem laborum tempore
              eveniet quibusdam natus hic incidunt id voluptas modi nam eligendi saepe officiis qui. Odio expedita corrupti
              inventore laudantium, magnam ipsa nisi error repudiandae dolor voluptatum aliquid facere deserunt praesentium
              eveniet voluptates, quod sint laboriosam nihil cupiditate nesciunt at deleniti temporibus. Fugit numquam vero
              perferendis odio, tempore ipsum harum beatae non quibusdam laudantium ullam, inventore, hic voluptatibus? Rerum
              quis nesciunt commodi eaque, similique error possimus expedita nisi officia repellendus eius accusamus,
              dignissimos minima deleniti suscipit odit dolor nam rem dolorum fugit eos voluptatibus porro quisquam? Ex
              ratione porro distinctio accusantium quasi esse, commodi quod quis optio sunt fuga expedita laborum vel,
              dolorem in dignissimos nostrum culpa et! Praesentium ipsum qui tenetur est odio quis, accusantium nobis sit
              modi, in libero excepturi. Quo, accusantium, iure laboriosam maiores quisquam laudantium ipsa nihil ducimus
              dolor doloremque fuga dolores repellendus. Dolores nam, eligendi, eaque non, rerum placeat quos praesentium
              beatae earum magni voluptatem accusamus. Id similique voluptatem nesciunt ut eaque quos sint libero ipsum quod
              itaque dignissimos labore, earum ullam eveniet eius, necessitatibus sit officia officiis commodi repellat, vero
              optio doloribus voluptate? Hic, accusamus. Minima natus quo enim, quasi expedita id illo dolore dolor
              reprehenderit modi consectetur vitae repellat aliquam distinctio debitis rerum quia architecto a nisi, delectus
              explicabo dicta! Adipisci quis temporibus possimus culpa aliquid magnam voluptatum molestiae, tenetur hic minus
              repellat eius praesentium itaque aliquam nesciunt aspernatur rem. Veritatis officiis ut nobis, maiores eum quos
              eos rerum recusandae ipsum facilis mollitia debitis necessitatibus quam, sapiente neque ratione beatae
              assumenda culpa! Nemo sunt sint vel ullam quaerat laudantium veritatis perspiciatis nihil, natus, est culpa,
              distinctio ex tempore? Quidem in eaque, voluptatem incidunt consequatur a velit magnam ipsa voluptatum
              provident dolorum mollitia quia at. Dolorum quae optio non magnam aliquam qui repellat, deserunt quisquam
              perferendis voluptate. Atque odio maxime, non beatae ad deserunt perferendis natus aliquam, consequatur
              molestias illum ut repudiandae a alias, nisi quidem reiciendis officiis ex magnam cumque? Praesentium, sunt?
              Delectus iure dolores impedit, facilis obcaecati officia dicta doloremque accusantium adipisci aliquam cumque
              vitae at, dolore nihil porro doloribus tempore reprehenderit ducimus deserunt. Sunt voluptas quis numquam
              aliquam consectetur omnis officiis, accusamus ratione, iusto ea ex quisquam tenetur minus quasi distinctio sint
              deserunt. Consectetur cumque vel animi excepturi tenetur reprehenderit ut inventore quo nesciunt? Reprehenderit
              ex velit fuga voluptatibus repudiandae sunt veritatis? Molestiae voluptatem quibusdam delectus. Repudiandae
              vitae eaque nulla odit voluptas neque ex quis quo magnam eius facilis, molestiae, eligendi numquam repellendus
              error eos quas nemo iusto consectetur dolorem consequuntur ad ratione? Exercitationem odio reiciendis, veniam
              iusto perferendis, deserunt corporis sequi neque quaerat optio autem non, facere nemo a. Quo vitae fugit ullam
              eos, reiciendis at autem quis non necessitatibus odit facere nemo facilis. Saepe, vero sit! Consectetur
              recusandae tempora accusantium at perferendis quis dolore voluptates non quam ea explicabo laboriosam
              exercitationem est velit rerum doloremque deserunt ipsam ducimus iure, eveniet perspiciatis modi animi!
              Recusandae tempore cum ipsum quibusdam laudantium odit commodi quod totam quis dolore accusamus alias aliquam
              dignissimos sunt explicabo dolor perferendis ea placeat, optio hic! Illo vero animi adipisci, eum atque
              consequatur asperiores nulla quis ipsam iure corrupti dolore? Molestiae aut debitis non esse dicta laborum
              omnis similique temporibus, atque repudiandae, quo odio enim beatae totam earum molestias quidem porro dolore?
              Neque odit corporis rem? Quaerat nulla tempora nihil doloribus reprehenderit doloremque, eum aperiam nostrum
              quia error iusto aspernatur id ad vero! Quibusdam a provident mollitia, eveniet dolores voluptatum est expedita
              accusantium nemo, repellat, corporis libero necessitatibus soluta distinctio quidem molestias error sapiente
              eius recusandae nisi earum quis placeat aut. Quasi explicabo laborum libero provident quos iusto, perspiciatis
              cumque facilis! Iure, nihil at sunt quibusdam blanditiis ut cum tempora dignissimos adipisci excepturi nostrum
              recusandae maiores deleniti rem, deserunt velit aspernatur repellendus. Veniam itaque, harum ut cumque
              accusamus recusandae consequuntur enim magnam temporibus distinctio est earum possimus consequatur explicabo
              reiciendis esse eveniet, minima dignissimos obcaecati incidunt ratione eius? Necessitatibus illum, consectetur,
              magni deleniti perferendis quos labore at facilis quam, fuga enim modi libero ullam eligendi officia odio
              voluptate ex quasi. Ut accusantium quod exercitationem ullam pariatur aliquam dolor excepturi, quia alias earum
              eligendi asperiores optio voluptatum inventore dolorum neque et tenetur quisquam minima ad unde ratione a
              consectetur? Exercitationem minima consectetur explicabo recusandae optio non cumque, culpa vitae unde autem ea
              aliquam ut quam, quidem sapiente nam deserunt? Similique natus accusamus cum eos esse quo magni necessitatibus
              accusantium quidem voluptates, ratione minima corporis fugit alias eius exercitationem velit fugiat sit rem
              tempora ducimus, odio labore ipsa temporibus. Fuga id vero sequi iusto maxime dolorem reiciendis eius hic,
              aperiam quasi illum amet sunt odio placeat nam nemo ex animi tenetur corrupti? Reiciendis numquam nisi totam
              tempora non eveniet! Sint commodi necessitatibus eveniet accusamus debitis reprehenderit itaque, odio,
              repellendus eligendi obcaecati nobis provident ipsam sed aut repellat nihil nostrum ea perspiciatis culpa
              aspernatur impedit animi explicabo. Laborum quidem similique minus sed totam atque rerum excepturi molestias
              eum tenetur libero velit cum blanditiis nam, doloribus aspernatur modi tempora vel repudiandae beatae fugiat
              quas! Veritatis eligendi sequi vero rem ipsam, vel optio cum dolore, facere sapiente aut modi illum, amet est
              non. Eaque corporis nemo, veniam consectetur ut aspernatur aliquam tempore in quam cumque dolorem inventore,
              debitis reprehenderit corrupti culpa labore neque blanditiis eius. Praesentium distinctio atque nostrum
              excepturi aut laboriosam eum perspiciatis nesciunt labore aperiam?
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import ManImg from "../../public/img/Man_Icon.png";
import WomanImg from "../../public/img/Woman_Icon.png";

export const Testimonials = () => {
  return (
    <Container>
      {/* Opozorilo za podrsanje (vidno in utripajoče) */}
      <div className="text-center mb-6">
        <p className="text-lg font-semibold text-themecolor animate-pulse">
          &lt;— Podrsaj —&gt;
        </p>
      </div>

      <Swiper
        modules={[Autoplay, FreeMode]}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        speed={4000}
        // Privzeto za zelo majhne zaslone (pod 640px): nastavljeno na 1.5, da se vidijo 2 slajda
        slidesPerView={1}
        spaceBetween={10} // Zmanjšan spaceBetween
        breakpoints={{
          // Sm (640px in več): 2 slida (za tablice)
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // Md (768px in več): 2.5 slida (širše tablice)
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          // Lg (1024px in več): 3 slidi (za namizne računalnike)
          1024: {
            slidesPerView: 3.5,
            spaceBetween: 40,
            centeredSlides: true,
          },
        }}
      >
        <SwiperSlide>
          <div className="h-full">
            {/* Zmanjšan padding in velikost besedila za mobilne naprave */}
            <div className="flex flex-col justify-between w-full h-full bg-gray-200 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 rounded-2xl">
              <p className="text-xs leading-relaxed sm:text-sm lg:text-lg text-trueGray-700">
                ej neznam ti povedat kok je hrbet boljse. Sem ti full full
                hvalezen ker sem se herniacije res utrašu. In hvala da si me
                <Mark>takoj</Mark>
                vzela.
              </p>

              <Avatar
                image={ManImg}
                name="Marko"
                title="Bolečine v ledvenem delu"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full">
            <div className="flex flex-col justify-between w-full h-full bg-gray-200 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 rounded-2xl">
              <p className="text-xs leading-relaxed sm:text-base lg:text-lg text-trueGray-700">
                ti pa morem povedat, da so noge veliko boljše.{" "}
                <Mark>Niso več boleče</Mark>, mravlinčenja na podpaltu ni več!
                Hvalaa tiii, še pridem 🥰
              </p>

              <Avatar image={WomanImg} name="Leja" title="Bolečine v nogah" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full">
            <div className="flex flex-col justify-between w-full h-full bg-gray-200 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 rounded-2xl">
              <p className="text-xs leading-relaxed sm:text-base lg:text-lg text-trueGray-700">
                Lucija jaz ne morem vrjet. Po 3 mesecih{" "}
                <Mark>spet mirno spim!</Mark>
                Mravlincenja po roki ni vec, oziroma je se tako minimalnoo.
                Hvala za tako drugačen, profesionalen, topel odnos, hvala ker
                pri vas taksni pacienti kot sem jaz nismo številka
              </p>

              <Avatar
                image={WomanImg}
                name="Zdenka"
                title="Mravlinčenje v roki"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full">
            <div className="flex flex-col justify-between w-full h-full bg-gray-200 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 rounded-2xl">
              <p className="text-xs leading-relaxed sm:text-base lg:text-lg text-trueGray-700">
                Suuuper sem, ful <Mark>majn bolii</Mark>. Hvalaa ti. Mami je tut
                ful bolje!
              </p>

              <Avatar image={WomanImg} name="Sara" title="Nestabilnost rame" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full">
            <div className="flex flex-col justify-between w-full h-full bg-gray-200 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 rounded-2xl">
              <p className="text-xs leading-relaxed sm:text-base lg:text-lg text-trueGray-700">
                Lucija jaz zdaj zaupam <Mark>samo še tebi</Mark>, mojih težav z
                glavobolj in bolečinah v vratu po 5 letih sploh ni več. Nism si
                mogla vrjet da je to možno🤩
              </p>

              <Avatar
                image={WomanImg}
                name="Monika"
                title="Glavoboli, bolečine v vratu"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full">
            <div className="flex flex-col justify-between w-full h-full bg-gray-200 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 rounded-2xl">
              <p className="text-xs leading-relaxed sm:text-base lg:text-lg text-trueGray-700">
                Ojjj Lucija☺️ so far, so good! Za enkrat je pocutje top. Vceri
                me je sicer neki "stihnalo" v krizu, ampak je blo pomoje ker sm
                mal pretiravala na legpressu, sm pol s konjskim mazilom resla.
                🙈 Mravljince pa tko obcutim res minimalno. Res mas{" "}
                <Mark>magicne roke</Mark>!
              </p>

              <Avatar image={WomanImg} name="Ana" title="Mravlinčenje v roki" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full">
            <div className="flex flex-col justify-between w-full h-full bg-gray-200 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 rounded-2xl">
              <p className="text-xs leading-relaxed sm:text-base lg:text-lg text-trueGray-700">
                Lucija, zdravo. Kaj ste naredila mojemu kolenu..?{" "}
                <Mark>Ni več bolečin</Mark>, nič ne pika in kljuva 🙂 Res sem
                vam hvaležna 👏 sem vas naprej pohvalila in so za vas rekli same
                pohvalne besede. Vsem naokrog trobim, kako ste mi pomagala.
                Hvala. Lep vikend vam želim in lep pozdrav. 🥰
              </p>

              <Avatar image={WomanImg} name="Vanja" title="Obraba kolena" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full">
            <div className="flex flex-col justify-between w-full h-full bg-gray-200 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 rounded-2xl">
              <p className="text-xs leading-relaxed sm:text-base lg:text-lg text-trueGray-700">
                nism si mislu da je lahk roka tok boljse, hvala ker si si vzela
                čas in mi rešla še <Mark>teniški komolc</Mark> poleg hrbta. Bi
                pa prišu vseeno še enkrat.
              </p>

              <Avatar image={ManImg} name="Uroš" title="Teniški komolec" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full">
            <div className="flex flex-col justify-between w-full h-full bg-gray-200 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 rounded-2xl">
              <p className="text-xs leading-relaxed sm:text-base lg:text-lg text-trueGray-700">
                Zdravo Lucija še enkrat hvala za <Mark>strokovno pomoč</Mark> v
                prejšnjem tednu. Zelo si mi pomagala pri mojih težavah v križu.
                Ta teden že normalno hodim v službo. P.S. vsak dan delam vaje za
                križ. 😉
              </p>

              <Avatar image={ManImg} name="Boštjan" title="Bolečine hrbta" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-full">
            <div className="flex flex-col justify-between w-full h-full bg-gray-200 px-4 py-4 sm:px-6 sm:py-8 lg:px-10 lg:py-10 rounded-2xl">
              <p className="text-xs leading-relaxed sm:text-base lg:text-lg text-trueGray-700">
                Zadnič je bil moj partner pri tebi na terapiji res HVALA!
                Naslednji dan je bil veliko boljši! Sedaj pa bi jaz potrebovala
                en <Mark>darilni bon</Mark>.
              </p>

              <Avatar image={WomanImg} name="Katja" title="Bolečine hrbta" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3"></div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    // Prilagajanje velikosti ikone in besedila za mobilne naprave
    <div className="flex items-center mt-4 space-x-2 sm:mt-6">
      {/* Zmanjšana ikona za mobilne naprave */}
      <div className="flex-shrink-0 overflow-hidden rounded-full w-8 h-8 sm:w-10 sm:h-10">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        {/* Zmanjšano ime za mobilne naprave */}
        <div className="text-sm font-medium text-trueGray-700 sm:text-base">
          {props.name}
        </div>
        {/* Zmanjšan naslov za mobilne naprave */}
        <div className="text-gray-600 text-xs sm:text-sm">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-themecolor bg-indigo-100 rounded-md ring-indigo-100 ring-4">
        {props.children}
      </mark>{" "}
    </>
  );
}

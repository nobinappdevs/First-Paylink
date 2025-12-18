import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Image from "next/image"; 
import adsImage from '@assets/ads.png';

import "swiper/css";
import "swiper/css/pagination";

const SpecialSlider = () => {
  const promoBanners = [
    { id: 1, title: "Get 10% Cash Back on Your next transaction "
      , buttonText: "Transfer  Money" },
    { id: 2, title: "Get 10% Cash Back on Your next transaction ", buttonText: "Transfer  Money" },
    { id: 3, title: "Get 10% Cash Back on Your next transaction ", buttonText: "Transfer  Money" },
  ];

  return (
    <div className="w-full mb-8">
      <Swiper
        spaceBetween={20}
        loop={true}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="pb-10"
      >
        {promoBanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            
            <div className="relative rounded-2xl py-12 p-8 text-white overflow-hidden">
              <Image
                src={adsImage}
                loading="eager"
                alt="banner"
                fill
                className="object-cover"
                priority
              />

              <div className="relative z-10">
                <h2 className="lg:text-3xl text-xl md:w-3/4 font-bold">{banner.title}</h2>
                <button className="mt-4 bg-white/20 cursor-pointer text-white text-sm px-6 py-1.5 rounded-md font-semibold ">
                  {banner.buttonText}
                </button>
              </div>
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialSlider;

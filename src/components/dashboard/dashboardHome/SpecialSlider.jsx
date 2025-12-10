import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const SpecialSlider = () => {
  const promoBanners = [
    { id: 1, title: "Get 10% Cash Back", subtitle: "on Your next transaction", buttonText: "Transfer Money", color: "from-teal-800 to-teal-700" },
    { id: 2, title: "Special Offer", subtitle: "Earn rewards on every purchase", buttonText: "Learn More", color: "from-purple-800 to-purple-700" },
    { id: 3, title: "Save More Today", subtitle: "Get exclusive deals and benefits", buttonText: "Explore Now", color: "from-blue-800 to-blue-700" },
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
            <div className={`bg-gradient-to-r ${banner.color} rounded-2xl py-[52px] p-8 text-white`}>
              <h2 className="text-3xl font-bold">{banner.title}</h2>
              <p className="text-lg opacity-90 mb-4">{banner.subtitle}</p>
              <button className="bg-white cursor-pointer text-black px-5 py-2 rounded-md font-semibold hover:bg-gray-200">
                {banner.buttonText}
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpecialSlider;

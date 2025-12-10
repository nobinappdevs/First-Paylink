import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import card1 from '@assets/card1.png' 
import card2 from '@assets/card2.png'
import card3 from '@assets/card3.png'
import Image from "next/image"; 

const VirtualCardSlider = () => {
  const cards = [
    {
      id: 1,
      name: "TOMSON MARTON",
      number: "1247 **** 0000 8471",
      valid: "12/38",
      type: "VISA",
      bgImage: card1,
      colorClass: "text-white", 
    },
    {
      id: 2,
      name: "TOMSON MARTON",
      number: "1247 **** 0000 8471",
      valid: "12/38",
      type: "VISA",
      bgImage: card2,
      colorClass: "text-white",
    },
    {
      id: 3,
      name: "TOMSON MARTON",
      number: "1247 **** 0000 8471",
      valid: "12/38",
      type: "VISA",
      bgImage: card3,
      colorClass: "text-white",
    },
    {
      id: 4,
      name: "TOMSON MARTON",
      number: "1247 **** 0000 8471",
      valid: "12/38",
      type: "VISA",
    bgImage: card1,
      colorClass: "text-white",
    },
    {
      id: 5,
      name: "TOMSON MARTON",
      number: "1247 **** 0000 8471",
      valid: "12/38",
      type: "VISA",
    bgImage: card3,
      colorClass: "text-white",
    },
  ];

  return (
    <div className="py-4 ">
      <div className="flex justify-between items-center mb-5 px-2 lg:px-5">
        <h3 className="text-xl font-bold text-secondery font-montserrat">
          My Virtual Card
        </h3>
        <button className="text-teal-700 font-semibold cursor-pointer">
          See All
        </button>
      </div>
      <div className="relative pb-10"> 
        <Swiper
          modules={[Pagination]}
          spaceBetween={15}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={true}
          pagination={{
            clickable: true,
            el: ".custom-pagination", 
          }}
          breakpoints={{
            320: { 
                slidesPerView: 1,
                spaceBetween: 0,
                centeredSlides: false,
            },
            768: {
                slidesPerView: 1.2,
                spaceBetween: 15,
                centeredSlides: true,
            }
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div 
                className={`relative overflow-hidden py-8 px-5 rounded-2xl min-h-[170px] `} // Default bg-gray-800
              >
                
                {card.bgImage && (
                  <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={card.bgImage} 
                      alt={`Card ${card.id} background`}
                      fill={true} 
                      sizes="(max-width: 768px) 90vw, 40vw"
                      className="object-cover" 
                    />
                  </div>
                )}
                <div className={`relative z-10 ${card.colorClass}`}>
                  
                  <div className="flex justify-between mb-16">
                    <p className="opacity-80">{card.name}</p>
                    <div className="flex gap-2">
                    </div>
                  </div>

                  <p className="text-xl tracking-widest font-semibold mb-6">
                    {card.number}
                  </p>

                  <div className="flex justify-between">
                    <div>
                      <p className="text-xs opacity-60">VALID THRU</p>
                      <p className="font-semibold">{card.valid}</p>
                    </div>
  
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination swiper-pagination"></div>
      </div>
    </div>
  );
};

export default VirtualCardSlider;
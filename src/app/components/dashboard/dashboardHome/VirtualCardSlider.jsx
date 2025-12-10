import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const VirtualCardSlider = () => {
    const cards = [
        { id: 1, name: "TOMSON MARTON", number: "1247 **** 0000 8471", valid: "12/38", color: "bg-blue-600", type: "VISA" },
        { id: 2, name: "TOMSON MARTON", number: "1247 **** 0000 8471", valid: "12/38", color: "bg-blue-900", type: "VISA" },
        { id: 3, name: "TOMSON MARTON", number: "1247 **** 0000 8471", valid: "12/38", color: "bg-purple-700", type: "VISA" },
        { id: 4, name: "TOMSON MARTON", number: "1247 **** 0000 8471", valid: "12/38", color: "bg-purple-700", type: "VISA" },
        { id: 5, name: "TOMSON MARTON", number: "1247 **** 0000 8471", valid: "12/38", color: "bg-purple-700", type: "VISA" },
    ];

    return (
        <div className="px-4 py-4"> 
            <div className="flex justify-between items-center mb-5">
                <h3 className="text-xl font-bold text-secondery font-montserrat">My Virtual Card</h3>
                <button className="text-teal-700 font-semibold cursor-pointer">See All</button>
            </div>

            <Swiper 
                spaceBetween={15} 
                slidesPerView={1.2}
                centeredSlides={true} 
                loop={true}
            >
                {cards.map((card) => (
                    <SwiperSlide key={card.id} className="!w-[82.5%]"> 
                        <div className={`${card.color} text-white p-6 rounded-2xl shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                            
                            <div className="flex justify-between mb-6">
                                <p className="opacity-80">{card.name}</p>
                                <div className="flex gap-2">
                                    <div className="w-8 h-6 bg-white/30 rounded"></div> 
                                    <span>📡</span> 
                                </div>
                            </div>

                            <p className="text-xl tracking-widest font-semibold mb-6">{card.number}</p>

                            <div className="flex justify-between">
                                <div>
                                    <p className="text-xs opacity-60">VALID THRU</p>
                                    <p className="font-semibold">{card.valid}</p>
                                </div>
                                <span className="text-3xl font-bold">{card.type}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
        </div>
    );
};

export default VirtualCardSlider;
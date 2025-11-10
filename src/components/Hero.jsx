"use client";
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function SimpleSwiper() {
  return (
    <div className="relative w-full h-[83vh]">
    {/* Матн дар маркази Swiper */}
      <div className='absolute  inset-0 flex items-center justify-center z-10'>
      <div className='flex flex-col items-center bg-[rgba(255,255,255,0.2)] backdrop-blur-md p-7 gap-3 pt-[30px] pb-[30px] rounded-3xl shadow-lg'>
  <img className='rounded-[10px]' src="https://www.maorif.tj/img/president.jpg" alt="" />
  <p className='text-white text-center text-1xl '>
    <span className='font-bold text-white text-2xl '>ЭМОМАЛӢ РАҲМОН</span> <br />
    АСОСГУЗОРИ СУЛҲУ ВАҲДАТИ МИЛЛӢ-ПЕШВОИ МИЛЛАТ
  </p>
</div>

<div className='flex flex-row w-[50%] items-center bg-[rgba(79,94,176,0.2)] backdrop-blur-md p-7 gap-4 rounded-3xl shadow-lg ml-10'>
  <img className='w-[160px]' src="https://www.maorif.tj/img/gerbtjk.png" alt="" />
  <p className='text-2xl font-bold text-white '>
    Фақат дар шароити сулҳ ва субот таълим ва тарбия устувор мешавад.
  </p>
</div>

    </div>

    <Swiper
      autoplay={{ delay: 3000 }}
      modules={[Autoplay]}
      className='w-full h-full'
    >
      <SwiperSlide>
        <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white text-4xl">
            <img src="https://jumhuriyat.tj/uploads/posts/2024-10/59342463dc_dar-nosiri-hisrav-kopija.webp" alt="Логотипи мактаб" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full  flex items-center justify-center text-white text-4xl">
          <img className='w-full' src="/IMG_2984.jpg" alt="My Image" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="w-full h-full bg-red-500 flex items-center justify-center text-white text-4xl">
          <img className='w-full' src="https://live.staticflickr.com/65535/54791537966_fb4382a335_b.jpg" alt="" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
  );
}

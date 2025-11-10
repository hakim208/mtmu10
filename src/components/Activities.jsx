"use client";
import { useState, useRef, useEffect } from "react";
import { Modal, Box, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  height: "85vh",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  overflow: "hidden",
  outline: "none",
};

export default function Activities() {
  const [byId, setById] = useState(null);
  const [muted, setMuted] = useState(false);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const activities = [
    {
      id: 1,
      title: "Олимпиадаҳо",
      description: "Иштирок дар олимпиадаҳои гуногуни фаннӣ ва дастовардҳои бузург. Хонандагони мо дар олимпиадаҳои математика, физика, химия ва дигар фаннҳо ҷоизаҳои зиёд ба даст овардаанд.",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: "Соли 2023 - 5 ғолиб, соли 2022 - 7 ғолиб, соли 2021 - 4 ғолиб",
      images: [
        "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      id: 2,
      title: "Бозиҳои варзишӣ",
      description: "Бозиҳои футбол, волейбол, баскетбол ва дигар навъҳои варзиш. Дастаҳои варзишии мактаби мо дар мусобиқаҳои шаҳрӣ ва вилоятӣ иштирок мекунанд.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: "Қаҳрамонони шаҳр дар футбол (2023), ҷои дуввум дар волейбол (2022)",
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
    {
      id: 3,
      title: "Чорабиниҳои фарҳангӣ",
      description: "Консертҳо, намоишномаҳо ва чорабиниҳои иҷтимоӣ. Ҳар моҳ чорабиниҳои гуногун барои тарбияи эҳсоси ватандӯстӣ ва ҳифзи анъанаҳо баргузор мешавад.",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      details: "Консерти байналмиллалӣ, намоиши \"Рӯзҳои фарҳангӣ\", ҷашни Наврӯз",
      images: [
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
      ]
    },
  ];

  const handleOpen = (activity) => {
    setById(activity);
  };

  const handleClose = () => {
    setById(null);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  // Барои тугмаҳои навигатсия
  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current;

      // Ба тугмаҳои навигатсия пайваст кардан
      if (prevRef.current && nextRef.current) {
        prevRef.current.onclick = () => swiper.slidePrev();
        nextRef.current.onclick = () => swiper.slideNext();
      }
    }
  }, [byId]);

  return (
    <section id="activities" className="py-20 px-4 md:px-8 border-b border-gray-200 relative bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-800 text-center mb-4 relative pb-4">
          Чорабиниҳо
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"></span>
        </h2>

        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Фаъолиятҳои гуногуни иҷтимоӣ, фарҳангӣ ва варзишӣ барои рушди умумиҷонибаи хонандагон
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.id}
              onClick={() => handleOpen(activity)}
              className="cursor-pointer bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-orange-700 mb-3 tracking-wide">
                  {activity.title}
                </h3>
                <p className="text-gray-600 leading-relaxed line-clamp-3">
                  {activity.description}
                </p>
                <div className="mt-4">
                  <span className="inline-block bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    Маълумоти бештар
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Модал бо Material-UI */}
     {/* Модал бо Material-UI */}
<Modal open={!!byId} onClose={handleClose} disableEnforceFocus>
  <Box sx={modalStyle}>
    {/* Тугмаҳои навигатсияи берун аз Swiper - ҶОИ ДУРУСТ */}
    <button
      ref={prevRef}
      className="absolute left-4 top-1/2 transform -translate-y-1/2 z-50 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-colors shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
      </svg>
    </button>

    <button
      ref={nextRef}
      className="absolute right-4 top-1/2 transform -translate-y-1/2 z-50 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-colors shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    </button>

    {/* Тугмаи пӯшони модал */}
    <button
      onClick={handleClose}
      className="absolute right-4 top-4 z-50 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition-colors shadow-lg"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>

    {/* Swiper бо ҳамаи activities */}
    <Swiper
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
      modules={[Pagination, Navigation]}
      className="h-full"
      pagination={{ clickable: true }}
      navigation={{
        prevEl: prevRef.current,
        nextEl: nextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
      }}
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
        // Слобод кардани activity-и интихобшуда
        if (byId) {
          const initialSlide = activities.findIndex(a => a.id === byId.id);
          swiper.slideTo(initialSlide);
        }
      }}
    >
      {activities.map((activity) => (
        <SwiperSlide key={activity.id}>
          <div className="flex h-full">
            {/* Таҳи тасвирҳо */}
            <div className="w-1/2 h-full bg-gray-100">
              <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                className="h-full"
              >
                {activity.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`${activity.title} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Таҳи маълумот */}
            <div className="w-1/2 h-full bg-white p-8 overflow-y-auto">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-orange-700 mb-4">
                  {activity.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  {activity.description}
                </p>

                {activity.details && (
                  <div className="bg-orange-50 rounded-xl p-4 border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-800 mb-2">Дастовардҳо ва ҷараёнҳо:</h4>
                    <p className="text-gray-600">{activity.details}</p>
                  </div>
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                    <span>Фаъолиятҳои доимӣ</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <span>Барои ҳама хонандагон</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
</Modal>
    </section>
  );
}

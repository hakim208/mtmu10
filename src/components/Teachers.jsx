"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Modal,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Close, Email, Phone, School, WorkspacePremium } from "@mui/icons-material";

export default function Teachers() {
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "95%" : "90%",
    maxWidth: "900px",
    maxHeight: isMobile ? "95vh" : "85vh",
    bgcolor: "background.paper",
    borderRadius: "16px",
    boxShadow: 24,
    overflow: "auto",
    outline: "none",
  };

  const teachers = [
    {
      id: 1,
      name: "Фарҳод Ҷалилов",
      subject: "Муаллими математика",
      degree: "Дараҷа: олим",
      experience: "20 соли таҷриба",
      email: "farhod.jalilov@maktab10.tj",
      phone: "+992 98 123 4567",
      bio: "Муаллими математика бо 20 соли таҷриба. Дорандаи ҷоизаи \"Муаллими соли 2022\". Зиёда аз 100 нафар хонандагони ӯ ғолибони олимпиадаҳои ҷумҳуриявӣ шудаанд.",
      achievements: [
        "Муаллими соли 2022",
        "Омӯзгори беҳтарини ноҳия 2020",
        "Зиёда аз 50 ғолиби олимпиада",
        "Муаллифи 2 китоби дарсӣ"
      ],
      skills: ["Математика", "Олимпиада", "Тадқиқот", "Навоварӣ"],
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Зебо Қодирова",
      subject: "Муаллими забони тоҷикӣ",
      degree: "Дараҷа: олим",
      experience: "18 соли таҷриба",
      email: "zebo.kadirova@maktab10.tj",
      phone: "+992 90 234 5678",
      bio: "Мутахассиси забони тоҷикӣ бо 18 соли таҷриба. Муаллифи 3 китоби дарсӣ барои хонандагони синфҳои гуногун. Дорандаи унвони \"Омӯзгори хизматнишондода\".",
      achievements: [
        "Муаллифи 3 китоби дарсӣ",
        "Омӯзгори хизматнишондода",
        "Беҳтарин омӯзгори фанни забони тоҷикӣ 2021",
        "Таҳсилкардаи Донишгоҳи Москва"
      ],
      skills: ["Забони тоҷикӣ", "Адабиёт", "Нависандагӣ", "Суханварӣ"],
      image: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Алишер Саидов",
      subject: "Муаллими физика",
      degree: "Дараҷа: олим",
      experience: "22 соли таҷриба",
      email: "alisher.saidov@maktab10.tj",
      phone: "+992 97 345 6789",
      bio: "Мутахассиси физика бо 22 соли таҷриба. Сарвари гурӯҳи тадқиқотии ҷавон олимон. Хонандагони ӯ дар мусобиқаҳои байналмилалӣ иштирок мекунанд.",
      achievements: [
        "Сарвари гурӯҳи тадқиқотӣ",
        "Омӯзгори физикаи соли 2023",
        "Зиёда аз 30 нафар донишҷӯ дар ДМТ",
        "Муаллифи 5 мақолаи илмӣ"
      ],
      skills: ["Физика", "Таҷриба", "Тадқиқот", "Технология"],
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Малика Юсупова",
      subject: "Муаллими химия",
      degree: "Дараҷа: олим",
      experience: "19 соли таҷриба",
      email: "malika.yusupova@maktab10.tj",
      phone: "+992 93 456 7890",
      bio: "Мутахассиси химия бо 19 соли таҷриба. Таҳсилкардаи Донишгоҳи Москва. Таҷрибаи кор дар лабораторияҳои пешрафта дорад.",
      achievements: [
        "Таҳсилкардаи Донишгоҳи Москва",
        "Муаллифи 5 мақолаи илмӣ",
        "Омӯзгори навовари соли 2022",
        "Сарвари клуби ҷавон химикҳо"
      ],
      skills: ["Химия", "Лаборатория", "Таҷриба", "Илм"],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    },
  ];

  return (
    <section id="teachers" className="py-20 px-4 md:px-8 relative bg-gradient-to-b from-blue-50 via-white to-blue-100">
      {/* Линияи боло */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"></div>

      <div className="max-w-6xl mx-auto">
        {/* Сарлавҳа */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-4 relative pb-4"
        >
          Муаллимони мо
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
        >
          Мутахассисони ботаҷриба ва ширкатдорони мо дар тарбияи насли оянда
        </motion.p>

        {/* Сеткаи муаллимон */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              onClick={() => setSelectedTeacher(teacher)}
              className="cursor-pointer relative bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="p-6 text-center">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500 shadow-lg object-cover"
                />
                <h3 className="text-lg font-bold text-blue-800 mb-1">{teacher.name}</h3>
                <p className="text-blue-600 font-semibold text-sm mb-2">{teacher.subject}</p>
                <p className="text-green-600 font-medium text-xs">{teacher.degree}</p>
                <p className="text-gray-600 text-xs mt-1">{teacher.experience}</p>

                {/* Тугмаи маълумоти бештар */}
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                    Маълумоти бештар
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Модали Material-UI */}
      <Modal
        open={!!selectedTeacher}
        onClose={() => setSelectedTeacher(null)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box sx={modalStyle}>
          {selectedTeacher && (
            <div className="relative">
              {/* Тугмаи пӯшони модал */}
              <IconButton
                onClick={() => setSelectedTeacher(null)}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                  zIndex: 10,
                  bgcolor: "rgba(0,0,0,0.7)",
                  color: "white",
                  "&:hover": { bgcolor: "rgba(0,0,0,0.9)" }
                }}
              >
                <Close />
              </IconButton>

              <div className={`flex ${isMobile ? "flex-col" : "flex-row"}`}>
                {/* Таҳи тасвир ва маълумоти асосӣ */}
                <div className={`${isMobile ? "w-full" : "w-2/5"} mb-[40px] bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white`}>
                  <div className="text-center">
                    <img
                      src={selectedTeacher.image}
                      alt={selectedTeacher.name}
                      className={`${isMobile ? "w-32 h-32" : "w-40 h-40"} rounded-full mx-auto mb-4 border-4 border-white shadow-2xl object-cover`}
                    />
                    <h2 className={`${isMobile ? "text-xl" : "text-2xl"} font-bold mb-2`}>
                      {selectedTeacher.name}
                    </h2>
                    <p className="text-orange-100 font-semibold mb-2">{selectedTeacher.subject}</p>
                    <p className="text-orange-200 text-sm mb-3">{selectedTeacher.degree}</p>
                    <p className="text-orange-200 text-sm">{selectedTeacher.experience}</p>
                  </div>

                  {/* Тамос */}
                  <div className={`mt-6 space-y-3 ${isMobile ? "text-center" : ""}`}>
                    <div className="flex items-center gap-3 text-orange-100">
                      <Email sx={{ fontSize: 20 }} />
                      <span className="text-sm break-all">{selectedTeacher.email}</span>
                    </div>
                    <div className="flex items-center gap-3 text-orange-100">
                      <Phone sx={{ fontSize: 20 }} />
                      <span className="text-sm">{selectedTeacher.phone}</span>
                    </div>
                  </div>
                </div>

                {/* Таҳи маълумоти муфассал */}
                <div className={`${isMobile ? "w-full" : "w-3/5"} p-6`}>
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Дар бораи муаллим</h3>
                  <p className="text-gray-700 leading-relaxed mb-6 text-sm">
                    {selectedTeacher.bio}
                  </p>

                  {/* Дастовардҳо */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-3">
                      <WorkspacePremium sx={{ color: "orange", fontSize: 24 }} />
                      <h4 className="text-lg font-semibold text-orange-700">Дастовардҳо</h4>
                    </div>
                    <div className="space-y-2">
                      {selectedTeacher.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Малакаҳо */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <School sx={{ color: "orange", fontSize: 24 }} />
                      <h4 className="text-lg font-semibold text-blue-700">Малакаҳо</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedTeacher.skills.map((skill, index) => (
                        <span
                          key={index}
                          className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </section>
  );
}

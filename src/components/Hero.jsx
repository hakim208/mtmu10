"use client";
import { motion } from "framer-motion";

export default function Hero() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section
      id="home"
      className="py-20 px-4 md:px-8 border-b border-gray-200 relative overflow-hidden bg-gradient-to-b from-orange-50 to-white"
    >
      {/* Навори равшан дар боло */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600"
      ></motion.div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Матн */}
        <motion.div
          className="flex-1 space-y-6"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-2xl md:text-3xl font-extrabold text-orange-600 text-center lg:text-left uppercase tracking-wide leading-relaxed">
            МУАССИСАИ ТАҲСИЛОТИ МИЁНАИ УМУМӢ №10
            <br />
            НОҲИЯИ ИСМОИЛИ СОМОНИ ШАҲРИ ДУШАНБЕ
          </h1>

          <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <motion.p variants={fadeUp}>
              МУАССИСАИ мо дар соли{" "}
              <span className="bg-gradient-to-r from-orange-100 to-orange-200 px-2 py-1 rounded font-semibold">
                1947
              </span>{" "}
              таъсис дода шудааст ва дар ин давра ба зиёда аз{" "}
              <span className="bg-gradient-to-r from-orange-100 to-orange-200 px-2 py-1 rounded font-semibold">
                16400 нафар
              </span>{" "}
              хонандагон таҳсил кардаанд. Мо ба тарбияи насли ҷавон ва таҳсилоти
              сифатӣ аҳамияти калон медиҳем.
            </motion.p>
            <motion.p variants={fadeUp}>
              Дар мактаби мо шароити муосир барои таҳсил фароҳам оварда шудааст, ки
              ба хонандагон имкон медиҳад, дониш ва малакаҳои зарурии замонро ба даст
              оранд.
            </motion.p>
          </div>

          {/* Статистика */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8"
            variants={fadeUp}
          >
            {[
              { number: "78", label: "Соли фаъолият" },
              { number: "16400", label: "Хонандагон" },
              { number: "56", label: "Муаллимон" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
              >
                <div className="text-5xl font-black bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-lg mt-2">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Сурат бо аниматсия */}
        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl opacity-10 blur-3xl -z-10"></div>
          <motion.img
            src="https://www.shutterstock.com/image-illustration/school-fasade-exterior-3d-illustration-260nw-1897916500.jpg"
            alt="Мактаби №10"
            className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 150 }}
          />
        </motion.div>
      </div>
    </section>
  );
}

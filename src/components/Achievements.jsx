export default function Achievements() {
  const achievements = [
    {
      title: 'Беҳтарин муассисаи сол',
      year: '2023',
      description: 'Беҳтарин муассисаи сол дар ноҳияи Исмоили Сомонӣ',
      image: 'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Ғолибони олимпиадаи миллии математика',
      year: '2022',
      description: '5 нафар ғолибони олимпиадаи миллии математика',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Муассисаи намунаи ҷумҳурӣ',
      year: '2021',
      description: 'Ҷоизадори мақоми мактаби намунаи ҷумҳурӣ',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      title: 'Ғолибони мусобиқаи варзишӣ',
      year: '2020',
      description: 'Ҷои 1-ум дар мусобиқаи варзиши байналмиллалӣ',
      image: 'https://khovar.tj/wp-content/uploads/2019/01/fb13297b6f386f9cce1dbc91cbd4dadb.jpg'
    }
  ]

  return (
    <section id="achievements" className="py-16 px-4 md:px-8 border-b border-gray-200 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600"></div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-800 text-center mb-4 relative pb-4">
          Ифтихори мо
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"></span>
        </h2>

        <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
          Дар давоми фаъолияти тӯлонии худ, муассисаи мо ҳамеша дар ҷадвалҳои ифтихорӣ ҷойгир будааст
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 border-l-4 border-blue-500">
              <h3 className="text-2xl font-bold text-blue-800 mb-4">Дастовардҳои Бузург</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
              Муассисаи миёнаи умумии №10 тӯли <span className="font-semibold text-blue-600">78 сол </span>
                фаъолияти пурсамар дар соҳаи таҳсилоти сифатӣ дорад. Мо бо ифтихор эълон мекунем, ки
                <span className="font-semibold text-blue-600"> 16400 нафар</span> хонандагон аз ин муассиса
                хатм карда, дар соҳаҳои гуногуни ҷамъият фаъолият мекунанд.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-blue-100">
                <div className="text-3xl font-black text-blue-600 mb-2">50+</div>
                <div className="text-gray-600 font-semibold">Ғолибони олимпиада</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-blue-100">
                <div className="text-3xl font-black text-blue-600 mb-2">25+</div>
                <div className="text-gray-600 font-semibold">Ҷоизаҳои байналмиллалӣ</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-blue-100">
                <div className="text-3xl font-black text-blue-600 mb-2">15</div>
                <div className="text-gray-600 font-semibold">Соли пайдарпаҳи сифатӣ</div>
              </div>
              <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-blue-100">
                <div className="text-3xl font-black text-blue-600 mb-2">100%</div>
                <div className="text-gray-600 font-semibold">Хатмкунандагони донишҷӯ</div>
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {achievement.year}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-black mb-2">78+</div>
              <div className="text-blue-100 font-semibold">Соли таърих</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">16400+</div>
              <div className="text-blue-100 font-semibold">Хатмкунанда</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">150+</div>
              <div className="text-blue-100 font-semibold">Ҷоизадорон</div>
            </div>
            <div>
              <div className="text-4xl font-black mb-2">56</div>
              <div className="text-blue-100 font-semibold">Омӯзгорон</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

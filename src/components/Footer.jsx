export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-r from-orange-800 to-orange-900 text-white py-12 mt-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400 relative pb-3">
              Тамос
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400"></span>
            </h3>
            <div className="space-y-2 text-orange-100">
              <p>📍 Адрес: шаҳри Душанбе, кӯчаи Мирзо Турсунзода</p>
              <p>📞 Телефон: +992 123 456 789</p>
              <p>✉️ Email: maktab10@example.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400 relative pb-3">
              Соатҳои корӣ
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400"></span>
            </h3>
            <div className="space-y-2 text-orange-100">
              <p>🕗 Душанбе - Ҷумъа: 8:00 - 17:00</p>
              <p>🕐 Шанбе: 8:00 - 14:00</p>
              <p>🔴 Якшанбе: рӯзи истироҳат</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400 relative pb-3">
              Пайвандҳои зуд
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400"></span>
            </h3>
            <div className="space-y-2">
              {['Асосӣ', 'Фаъолиятҳо', 'Муаллимон'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace('ҳо', '')}`}
                  className="block text-orange-100 hover:text-yellow-400 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-orange-700 mt-8 pt-8 text-center text-orange-200">
          <p>&copy; 2024 Мактаби миёнаи умумии №10. Ҳамаи ҳуқуқҳо ҳифз шудаанд.</p>
        </div>
      </div>
    </footer>
  )
}

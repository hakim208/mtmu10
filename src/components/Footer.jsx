export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400 relative pb-3">
              Тамос
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400"></span>
            </h3>
            <div className="space-y-2 text-blue-100">
              <p>📍 Адрес: шаҳри Душанбе, И.Сомонӣ кӯчаи С.Носир 35.</p>
              <p>📞 Телефон: +992 372 24 41 70</p>
              <p>✉️ Email: maktab10@example.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400 relative pb-3">
              Соатҳои корӣ
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400"></span>
            </h3>
            <div className="space-y-2 text-blue-100">
              <p>🕗 Душанбе - Шанбе: 8:00 - 18:10</p>
              <p>🔴 Якшанбе: Рӯзи истироҳати</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400 relative pb-3">
              Пайвандҳои зуд
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-yellow-400"></span>
            </h3>
            <div className="space-y-2">
              {['Асосӣ', 'Фаъолиятҳо', 'Омӯзгорон'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace('ҳо', '')}`}
                  className="block text-blue-100 hover:text-yellow-400 transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-8 pt-8 text-center text-blue-200">
          <p>&copy; 2024 Муассисаи таҳсилоти миёнаи умумии №10. Ҳамаи ҳуқуқҳо ҳифз шудаанд.</p>
        </div>
      </div>
    </footer>
  )
}

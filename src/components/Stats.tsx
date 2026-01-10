import { ArrowRight, TrendingUp, FileCheck, Clock } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '95%',
    label: 'précision',
  },
  {
    icon: FileCheck,
    value: '+10K',
    label: 'contenus analysés',
  },
  {
    icon: Clock,
    value: '24/7',
    label: 'disponibilité',
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-[#1827dd] to-[#345AFB] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjQwIiBjeT0iNDAiIHI9IjIiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-colors border border-white/20">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-5xl sm:text-6xl font-bold mb-2 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-lg text-blue-100 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Prêt à découvrir la vérité ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez des milliers d'utilisateurs qui font confiance à TruthLens pour analyser l'information
          </p>
          <button className="group bg-white text-[#345AFB] px-10 py-5 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all duration-300 inline-flex items-center gap-2 shadow-2xl hover:scale-105 transform">
            Tester TruthLens maintenant
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

import { Brain, Shield, GraduationCap, Eye } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Analyse intelligente',
    description: 'Notre IA examine les contenus en profondeur pour détecter les incohérences et les signaux d\'alerte.',
  },
  {
    icon: Shield,
    title: 'Lutte contre la désinformation',
    description: 'Protégez-vous contre les fake news et les manipulations avec des analyses factuelles et objectives.',
  },
  {
    icon: GraduationCap,
    title: 'Approche pédagogique',
    description: 'Développez votre esprit critique grâce à des explications claires et des ressources éducatives.',
  },
  {
    icon: Eye,
    title: 'Transparence technologique',
    description: 'Comprenez comment fonctionne notre technologie. Pas de boîte noire, juste de la clarté.',
  },
];

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Pourquoi TruthLens ?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des outils puissants pour naviguer dans l'information moderne
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#345AFB]/20 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#345AFB] to-[#5c86fe] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

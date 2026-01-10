import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Lightbulb, Lock, Search } from 'lucide-react';

const slides = [
  {
    icon: Lightbulb,
    title: 'Éduquez votre regard',
    description: 'Développez l\'esprit critique et apprenez à identifier les informations fiables grâce à nos outils d\'analyse avancés.',
    gradient: 'from-amber-500 to-orange-600',
  },
  {
    icon: Lock,
    title: 'La transparence avant tout',
    description: 'Comprendre sans boîte noire. Chaque analyse est expliquée clairement pour que vous sachiez exactement comment nous arrivons à nos conclusions.',
    gradient: 'from-[#345AFB] to-[#1827dd]',
  },
  {
    icon: Search,
    title: 'Vérité ou Mensonge ?',
    description: 'Analyse claire et accessible pour tous. Découvrez la fiabilité des informations en quelques secondes avec des résultats faciles à comprendre.',
    gradient: 'from-emerald-500 to-teal-600',
  },
];

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0"
                >
                  <div className={`bg-gradient-to-br ${slide.gradient} text-white p-12 sm:p-16 lg:p-20 min-h-[400px] sm:min-h-[450px] flex flex-col justify-center items-center text-center`}>
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                      <slide.icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                      {slide.title}
                    </h3>

                    <p className="text-lg sm:text-xl text-white/90 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors group"
            aria-label="Slide précédent"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#345AFB] transition-colors" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors group"
            aria-label="Slide suivant"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[#345AFB] transition-colors" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'w-8 bg-[#345AFB]' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

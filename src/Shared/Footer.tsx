import { Eye, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const navigation = [
  { name: 'Accueil', href: '#' },
  { name: 'Fonctionnalités', href: '#' },
  { name: 'À propos', href: '#' },
  { name: 'Contact', href: '#' },
];

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Mail, href: '#', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#345AFB] to-[#5c86fe] rounded-xl flex items-center justify-center shadow-lg">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">TruthLens</span>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Analysez et questionnez l'information avec des outils d'intelligence artificielle transparents et accessibles à tous.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Navigation</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-400 hover:text-[#5c86fe] transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 text-lg">Suivez-nous</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#345AFB] transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 TruthLens. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

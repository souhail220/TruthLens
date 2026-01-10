import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '#' },
    { label: 'Fonctionnalités', href: '#' },
    { label: 'À propos', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src='../assets/TruthLens.png' alt="Logo" className="w-30 h-28" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-[#345AFB] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Se connecter
              </Link>
              <Link
                to="/signup"
                className="bg-[#345AFB] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1827dd] transition-colors shadow-md hover:shadow-lg"
              >
                S'inscrire
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-700 hover:text-[#345AFB] transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-3 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-700 hover:text-[#345AFB] transition-colors font-medium block px-2 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Se connecter
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsOpen(false)}
                  className="bg-[#345AFB] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1827dd] transition-colors text-center"
                >
                  S'inscrire
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

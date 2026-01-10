import { useState } from 'react';

const recentSearches = ['IA', 'Climat', 'Santé', 'Économie'];

export function SearchContent() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900">Rechercher</h3>
      <div className="space-y-3">
        <input
          type="text"
          placeholder="Rechercher du contenu..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#345AFB] focus:border-transparent"
        />
        <button className="w-full bg-[#345AFB] text-white py-2 rounded-lg font-semibold text-sm hover:bg-[#1827dd] transition-colors">
          Rechercher
        </button>
        <div className="pt-4 border-t border-gray-200">
          <p className="text-xs font-semibold text-gray-600 mb-3">Recherches récentes</p>
          <div className="space-y-2">
            {recentSearches.map((query, idx) => (
              <button
                key={idx}
                className="block text-xs text-[#345AFB] hover:text-[#1827dd] transition-colors"
              >
                {query}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

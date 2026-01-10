import { Search as SearchIcon } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearch: () => void;
}

export function SearchBar({ searchQuery, onSearchChange, onSearch }: SearchBarProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="mb-12">
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <SearchIcon className="w-6 h-6" />
        </div>
        <input
          type="text"
          placeholder="Entrez vos termes de recherche ou parser le lien..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="w-full pl-14 pr-4 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-[#345AFB] focus:ring-2 focus:ring-[#345AFB]/10 transition-all"
        />
        <button
          onClick={onSearch}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#345AFB] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#1827dd] transition-colors"
        >
          Rechercher
        </button>
      </div>
    </div>
  );
}

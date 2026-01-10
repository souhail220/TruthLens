import { useState } from 'react';
import { DashboardHeader } from '../../Dashboard/Components/DashboardHeader';
import { Sidebar } from '../../Dashboard/Components/Sidebar';
import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { RecentSearches } from '../components/RecentSearches';
import { PopularSuggestions } from '../components/PopularSuggestions';
import { recentSearches as initialRecentSearches } from '../../data/articles';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  description: string;
  relevance: number;
}

export function SearchLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [recentSearches, setRecentSearches] = useState(initialRecentSearches.slice(0, 5));

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setHasSearched(true);
      setSearchResults([
        {
          id: '1',
          title: 'Les derniers développements en IA générative',
          category: 'Technologie',
          description: 'Découvrez les avancées récentes dans le domaine de l\'intelligence artificielle et ses applications pratiques.',
          relevance: 95,
        },
        {
          id: '2',
          title: 'Impact de l\'IA sur le marché du travail',
          category: 'Économie',
          description: 'Analyse complète de l\'impact de l\'automatisation et de l\'IA sur l\'emploi et l\'économie mondiale.',
          relevance: 87,
        },
        {
          id: '3',
          title: 'Régulation et éthique de l\'IA',
          category: 'Politique',
          description: 'Débats actuels sur la régulation de l\'IA et les enjeux éthiques associés.',
          relevance: 82,
        },
        {
          id: '4',
          title: 'Guide complet de ChatGPT et modèles similaires',
          category: 'Technologie',
          description: 'Tutoriel détaillé sur l\'utilisation des modèles de langage avancés.',
          relevance: 78,
        },
      ]);

      if (!recentSearches.includes(searchQuery)) {
        setRecentSearches([searchQuery, ...recentSearches.slice(0, 4)]);
      }
    }
  };

  const handleRemoveRecent = (query: string) => {
    setRecentSearches(recentSearches.filter(s => s !== query));
  };

  const handleSuggestionClick = (suggestion: string) => {
    setSearchQuery(suggestion);
    setHasSearched(true);
  };

  const handleRecentSearchClick = (query: string) => {
    setSearchQuery(query);
    setHasSearched(true);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />

      <div className="flex">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} onToggle={() => setSidebarOpen(!sidebarOpen)} />

        <main className="flex-1">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Search Header */}
            <div className="mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">Rechercher</h1>
              <p className="text-gray-600">Trouvez les informations que vous cherchez en un instant</p>
            </div>

            <SearchBar 
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              onSearch={handleSearch}
            />

            {hasSearched ? (
              <SearchResults searchQuery={searchQuery} results={searchResults} />
            ) : (
              <div className="space-y-8">
                <RecentSearches 
                  searches={recentSearches}
                  onSearchClick={handleRecentSearchClick}
                  onRemove={handleRemoveRecent}
                />
                <PopularSuggestions onSuggestionClick={handleSuggestionClick} />
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

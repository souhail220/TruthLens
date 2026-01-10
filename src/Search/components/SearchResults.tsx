import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SearchResult {
  id: string;
  title: string;
  category: string;
  description: string;
  relevance: number;
}

interface SearchResultsProps {
  searchQuery: string;
  results: SearchResult[];
}

export function SearchResults({ searchQuery, results }: SearchResultsProps) {
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'Technologie': 'bg-blue-100 text-blue-700',
      'Économie': 'bg-green-100 text-green-700',
      'Politique': 'bg-purple-100 text-purple-700',
      'Santé': 'bg-red-100 text-red-700',
      'Science': 'bg-indigo-100 text-indigo-700',
      'Éducation': 'bg-yellow-100 text-yellow-700',
      'Environnement': 'bg-emerald-100 text-emerald-700',
    };
    return colors[category] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Résultats pour "{searchQuery}"
        </h2>
        <p className="text-gray-600">{results.length} résultats trouvés</p>
      </div>

      <div className="space-y-4">
        {results.map((result) => (
          <Link
            key={result.id}
            to={`/article/${result.id}`}
            className="block bg-white p-6 rounded-xl border border-gray-200 hover:border-[#345AFB] hover:shadow-lg transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getCategoryColor(result.category)}`}>
                    {result.category}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    Pertinence: {result.relevance}%
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#345AFB] transition-colors">
                  {result.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {result.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#345AFB] transition-colors flex-shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

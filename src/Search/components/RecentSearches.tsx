import { Clock, Trash2 } from 'lucide-react';

interface RecentSearchesProps {
  searches: string[];
  onSearchClick: (query: string) => void;
  onRemove: (query: string) => void;
}

export function RecentSearches({ searches, onSearchClick, onRemove }: RecentSearchesProps) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <Clock className="w-5 h-5 text-gray-600" />
        <h2 className="text-xl font-bold text-gray-900">Recherches récentes</h2>
      </div>

      {searches.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {searches.map((query, idx) => (
            <div
              key={idx}
              className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-[#345AFB] hover:shadow-md transition-all"
            >
              <button
                onClick={() => onSearchClick(query)}
                className="flex-1 text-left font-medium text-gray-900 hover:text-[#345AFB] transition-colors"
              >
                {query}
              </button>
              <button
                onClick={() => onRemove(query)}
                className="ml-2 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
          <p className="text-gray-600">Aucune recherche récente</p>
        </div>
      )}
    </div>
  );
}

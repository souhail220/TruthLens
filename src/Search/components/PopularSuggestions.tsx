interface PopularSuggestionsProps {
  onSuggestionClick: (suggestion: string) => void;
}

const suggestions = [
  'Intelligence Artificielle',
  'Changement climatique',
  'Crypto-monnaies',
  'Santé numérique',
];

export function PopularSuggestions({ onSuggestionClick }: PopularSuggestionsProps) {
  return (
    <div>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Suggestions populaires</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {suggestions.map((suggestion, idx) => (
          <button
            key={idx}
            onClick={() => onSuggestionClick(suggestion)}
            className="p-4 bg-gradient-to-br from-[#345AFB]/5 to-[#5c86fe]/5 rounded-xl border border-[#345AFB]/20 hover:border-[#345AFB] hover:shadow-md transition-all text-left font-medium text-gray-900 hover:text-[#345AFB]"
          >
            {suggestion}
          </button>
        ))}
      </div>
    </div>
  );
}

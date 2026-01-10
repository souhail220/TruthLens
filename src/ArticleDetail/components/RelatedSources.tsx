interface RelatedSource {
  id: number;
  title: string;
  source: string;
  date: string;
  score: number;
}

interface RelatedSourcesProps {
  sources: RelatedSource[];
  getScoreColor: (score: number) => string;
  getScoreTextColor: (score: number) => string;
}

export function RelatedSources({ sources, getScoreColor, getScoreTextColor }: RelatedSourcesProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Autres sources</h2>
      <div className="space-y-4">
        {sources.map((source) => (
          <div
            key={source.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-all hover:border-[#345AFB] cursor-pointer"
          >
            <h3 className="font-semibold text-gray-900 text-sm mb-2 hover:text-[#345AFB] transition-colors line-clamp-2">
              {source.title}
            </h3>
            <div className="text-xs text-gray-600 mb-3">
              <div>{source.source}</div>
              <div>{source.date}</div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`text-sm font-bold ${getScoreTextColor(source.score)}`}>
                {source.score}%
              </span>
              <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${getScoreColor(source.score)}`}
                  style={{ width: `${source.score}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

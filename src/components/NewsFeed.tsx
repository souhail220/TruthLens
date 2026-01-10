import { Link } from 'react-router-dom';
import { articles } from '../data/articles';

const getScoreColor = (score: number) => {
  if (score >= 80) return 'bg-green-500';
  if (score >= 70) return 'bg-blue-500';
  if (score >= 60) return 'bg-yellow-500';
  return 'bg-red-500';
};

const getScoreTextColor = (score: number) => {
  if (score >= 80) return 'text-green-600';
  if (score >= 70) return 'text-blue-600';
  if (score >= 60) return 'text-yellow-600';
  return 'text-red-600';
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Technologie': 'bg-blue-100 text-blue-700',
    'Environnement': 'bg-green-100 text-green-700',
    'Santé': 'bg-red-100 text-red-700',
    'Économie': 'bg-purple-100 text-purple-700',
  };
  return colors[category] || 'bg-gray-100 text-gray-700';
};

export function NewsFeed() {
  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Actualités</h2>
        <p className="text-gray-600">Contenus analysés avec score de véracité</p>
      </div>

      <div className="space-y-6">
        {Object.values(articles).map((article) => (
          <Link
            key={article.id}
            to={`/article/${article.id}`}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow overflow-hidden group block"
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-gray-500">{article.date}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#345AFB] transition-colors mb-2">
                  {article.title}
                </h3>
              </div>
            </div>

            <p className="text-gray-700 mb-4 line-clamp-2">
              {article.description}
            </p>

            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
              <span className="text-sm font-medium text-gray-600">{article.source}</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-700">Score de véracité</span>
                <span className={`text-lg font-bold ${getScoreTextColor(article.score)}`}>
                  {article.score}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${getScoreColor(article.score)}`}
                  style={{ width: `${article.score}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-600">
                {article.score >= 80 && 'Contenu très fiable'}
                {article.score >= 70 && article.score < 80 && 'Contenu fiable'}
                {article.score >= 60 && article.score < 70 && 'Contenu potentiellement douteux'}
                {article.score < 60 && 'Contenu peu fiable'}
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="text-[#345AFB] font-semibold hover:text-[#1827dd] transition-colors py-2">
          Voir plus d'actualités
        </button>
      </div>
    </div>
  );
}

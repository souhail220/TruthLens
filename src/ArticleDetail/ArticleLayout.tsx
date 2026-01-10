import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, AlertCircle, TrendingDown } from 'lucide-react';
import { articles } from '../data/articles';
import { ArticleHeader } from './components/ArticleHeader';
import { ArticleContent } from './components/ArticleContent';
import { CommentsSection } from './components/CommentsSection';
import { RelatedSources } from './components/RelatedSources';

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

const getScoreBgColor = (score: number) => {
  if (score >= 80) return 'bg-green-50 border-green-200';
  if (score >= 70) return 'bg-blue-50 border-blue-200';
  if (score >= 60) return 'bg-yellow-50 border-yellow-200';
  return 'bg-red-50 border-red-200';
};

const getScoreStatus = (score: number) => {
  if (score >= 80) return { icon: CheckCircle2, text: 'Très fiable', color: 'text-green-600' };
  if (score >= 70) return { icon: CheckCircle2, text: 'Fiable', color: 'text-blue-600' };
  if (score >= 60) return { icon: AlertCircle, text: 'Potentiellement douteux', color: 'text-yellow-600' };
  return { icon: TrendingDown, text: 'Peu fiable', color: 'text-red-600' };
};

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    'Technologie': 'bg-blue-100 text-blue-700',
    'Environnement': 'bg-green-100 text-green-700',
    'Santé': 'bg-red-100 text-red-700',
    'Économie': 'bg-amber-100 text-amber-700',
    'Science': 'bg-indigo-100 text-indigo-700',
    'Éducation': 'bg-yellow-100 text-yellow-700',
  };
  return colors[category] || 'bg-gray-100 text-gray-700';
};

const initialComments = [
  {
    id: 1,
    author: 'Pierre Martin',
    date: 'Il y a 2 heures',
    content: 'Article très informatif. J\'apprécie la clarté des explications.',
    likes: 12,
  },
  {
    id: 2,
    author: 'Sophie Dubois',
    date: 'Il y a 5 heures',
    content: 'Intéressant, mais j\'aimerais voir plus de sources pour valider ces affirmations.',
    likes: 8,
  },
  {
    id: 3,
    author: 'Marc Lefevre',
    date: 'Il y a 1 jour',
    content: 'Excellent travail de recherche. Cela m\'aide à mieux comprendre le sujet.',
    likes: 15,
  },
];

export function ArticleLayout() {
  const { id } = useParams();
  const articleId = id ? parseInt(id) : null;
  const article = articleId ? articles[articleId] : null;

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h2>
          <Link to="/dashboard" className="text-[#345AFB] font-semibold hover:text-[#1827dd]">
            Retour aux actualités
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/dashboard" className="flex items-center gap-2 text-[#345AFB] hover:text-[#1827dd] font-medium transition-colors w-fit">
            <ArrowLeft className="w-5 h-5" />
            Retour aux actualités
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <article className="bg-white rounded-2xl shadow-lg p-8">
              <ArticleHeader
                category={article.category}
                title={article.title}
                author={article.author}
                date={article.date}
                source={article.source}
                getCategoryColor={getCategoryColor}
              />

              <ArticleContent
                mediaUrl={article.mediaUrl}
                mediaType={article.mediaType}
                isVerified={article.isVerified}
                title={article.title}
                score={article.score}
                fullContent={article.fullContent}
                evaluationMetrics={article.evaluationMetrics}
                getScoreColor={getScoreColor}
                getScoreTextColor={getScoreTextColor}
                getScoreBgColor={getScoreBgColor}
                getScoreStatus={getScoreStatus}
              />
            </article>

            <CommentsSection initialComments={initialComments} />
          </div>

          <div className="lg:col-span-1">
            <RelatedSources
              sources={article.relatedSources}
              getScoreColor={getScoreColor}
              getScoreTextColor={getScoreTextColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

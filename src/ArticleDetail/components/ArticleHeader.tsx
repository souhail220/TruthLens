import { Calendar, User } from 'lucide-react';

interface ArticleHeaderProps {
  category: string;
  title: string;
  author?: string;
  date: string;
  source: string;
  getCategoryColor: (category: string) => string;
}

export function ArticleHeader({ 
  category, 
  title, 
  author, 
  date, 
  source, 
  getCategoryColor 
}: ArticleHeaderProps) {
  return (
    <div className="mb-6 pb-6 border-b border-gray-200">
      <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(category)} mb-4`}>
        {category}
      </span>
      <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
        {title}
      </h1>
      <div className="flex flex-wrap items-center gap-6 text-gray-600">
        {author && (
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="text-sm">{author}</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">{date}</span>
        </div>
        <div className="text-sm font-medium">{source}</div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import { MessageSquare, ThumbsUp } from 'lucide-react';

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
  likes: number;
}

interface CommentsSectionProps {
  initialComments?: Comment[];
}

export function CommentsSection({ initialComments = [] }: CommentsSectionProps) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>(initialComments);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: comments.length + 1,
        author: 'Vous',
        date: 'À l\'instant',
        content: newComment,
        likes: 0,
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center gap-3 mb-6">
        <MessageSquare className="w-6 h-6 text-[#345AFB]" />
        <h2 className="text-2xl font-bold text-gray-900">Discussion ({comments.length})</h2>
      </div>

      <div className="mb-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Partagez votre avis..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#345AFB] focus:border-transparent"
          rows={4}
        />
        <div className="flex justify-end mt-3">
          <button
            onClick={handleAddComment}
            disabled={!newComment.trim()}
            className="px-6 py-2 bg-[#345AFB] text-white rounded-lg font-semibold hover:bg-[#1827dd] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Publier
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-200 pb-6 last:border-0">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#345AFB] to-[#5c86fe] rounded-full flex items-center justify-center text-white font-semibold flex-shrink-0">
                {comment.author.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-semibold text-gray-900">{comment.author}</span>
                  <span className="text-sm text-gray-500">{comment.date}</span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">{comment.content}</p>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#345AFB] transition-colors text-sm">
                    <ThumbsUp className="w-4 h-4" />
                    <span>{comment.likes}</span>
                  </button>
                  <button className="text-gray-600 hover:text-[#345AFB] transition-colors text-sm">
                    Répondre
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

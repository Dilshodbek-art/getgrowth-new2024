'use client';

import { useState, useEffect } from 'react';

interface Comment {
  id: string;
  name: string;
  text: string;
  reply_to: string | null;
  likes: number;
  created_at: string;
}

interface CommentsSectionProps {
  translations: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    commentPlaceholder: string;
    submitButton: string;
    submitting: string;
    replyButton: string;
    cancelButton: string;
    likeButton: string;
    deleteButton: string;
    deletePrompt: string;
    guestName: string;
    justNow: string;
    minutesAgo: string;
    hoursAgo: string;
    daysAgo: string;
    noComments: string;
    totalComments: string;
  };
}

export default function CommentsSection({ translations }: CommentsSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    fetchComments();
    const interval = setInterval(() => {
      fetchComments();
    }, 10000);
    return () => clearInterval(interval);
  }, [refreshKey]);

  const fetchComments = async () => {
    try {
      const response = await fetch('/api/comments');
      const data = await response.json();
      setComments(data.comments || []);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    setLoading(true);
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim() || 'Guest',
          text: text.trim(),
          reply_to: replyTo,
        }),
      });

      if (response.ok) {
        setText('');
        setName('');
        setReplyTo(null);
        setRefreshKey(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error posting comment:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLike = async (id: string) => {
    try {
      const response = await fetch(`/api/comments/${id}/like`, {
        method: 'POST',
      });
      if (response.ok) {
        setRefreshKey(prev => prev + 1);
      }
    } catch (error) {
      console.error('Error liking comment:', error);
    }
  };

  const handleDelete = async (id: string) => {
    const password = prompt(translations.deletePrompt);
    if (!password) return;

    try {
      const response = await fetch(`/api/comments/${id}/delete`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        setRefreshKey(prev => prev + 1);
      } else {
        alert('Unauthorized');
      }
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / 60000);

    if (diffInMinutes < 1) return translations.justNow;
    if (diffInMinutes < 60) return `${diffInMinutes} ${translations.minutesAgo}`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)} ${translations.hoursAgo}`;
    return `${Math.floor(diffInMinutes / 1440)} ${translations.daysAgo}`;
  };

  const parentComments = comments.filter(c => !c.reply_to);
  const getReplies = (commentId: string) => comments.filter(c => c.reply_to === commentId);

  const CommentItem = ({ comment, isReply = false }: { comment: Comment; isReply?: boolean }) => (
    <div className={`${isReply ? 'ml-8 mt-4' : 'mb-6'} bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <span className="font-semibold text-gray-800">{comment.name}</span>
          <span className="text-sm text-gray-500 ml-3">{getTimeAgo(comment.created_at)}</span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4 whitespace-pre-wrap">{comment.text}</p>
      
      <div className="flex items-center gap-4">
        <button
          onClick={() => handleLike(comment.id)}
          className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 transition-colors"
        >
          <span>👍</span>
          <span>{translations.likeButton}</span>
          {comment.likes > 0 && <span className="font-semibold">({comment.likes})</span>}
        </button>
        
        {!isReply && (
          <button
            onClick={() => {
              setReplyTo(comment.id);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            {translations.replyButton}
          </button>
        )}
        
        <button
          onClick={() => handleDelete(comment.id)}
          className="text-sm text-red-600 hover:text-red-800 transition-colors ml-auto"
        >
          {translations.deleteButton}
        </button>
      </div>
      
      {!isReply && getReplies(comment.id).map(reply => (
        <CommentItem key={reply.id} comment={reply} isReply={true} />
      ))}
    </div>
  );

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {translations.title}
          </h2>
          <p className="text-xl text-gray-600 mb-2">{translations.subtitle}</p>
          <p className="text-sm text-gray-500">
            {translations.totalComments}: {comments.length}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg mb-12">
          {replyTo && (
            <div className="mb-4 p-3 bg-blue-50 rounded-lg flex items-center justify-between">
              <span className="text-sm text-blue-800">
                {translations.replyButton}: {comments.find(c => c.id === replyTo)?.name}
              </span>
              <button
                type="button"
                onClick={() => setReplyTo(null)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                {translations.cancelButton}
              </button>
            </div>
          )}
          
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={translations.namePlaceholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </div>
          
          <div className="mb-4">
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={translations.commentPlaceholder}
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent resize-none"
              required
            />
          </div>
          
          <button
            type="submit"
            disabled={loading || !text.trim()}
            className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? translations.submitting : translations.submitButton}
          </button>
        </form>

        <div>
          {parentComments.length === 0 ? (
            <p className="text-center text-gray-500 py-12">{translations.noComments}</p>
          ) : (
            parentComments.map(comment => (
              <CommentItem key={comment.id} comment={comment} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

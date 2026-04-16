import { useState } from 'react';
import StarRating from '../components/common/StarRating.jsx';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating > 0 && feedback.trim()) {
      // Simulate submission
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-md mx-auto text-center py-20">
        <div className="text-6xl mb-6">🎉</div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank you!</h1>
        <p className="text-gray-600 mb-8">Your feedback has been submitted.</p>
        <button
          onClick={() => window.location.reload()}
          className="px-8 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-all font-medium"
        >
          Give More Feedback
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Your Feedback</h1>
        <p className="text-xl text-gray-600">Help us improve NutriPlanner</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border p-8">
        <div className="space-y-8">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">How would you rate us?</label>
            <StarRating rating={rating} onRatingChange={setRating} />
            {rating === 0 && <p className="text-sm text-red-500 mt-2">Please select a rating</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-4">
              What do you think?
            </label>
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Tell us about your experience..."
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none resize-vertical"
              required
            />
            {feedback.length < 10 && feedback.length > 0 && (
              <p className="text-sm text-red-500 mt-1">Feedback should be at least 10 characters</p>
            )}
          </div>

          <button
            type="submit"
            disabled={rating === 0 || feedback.trim().length < 10}
            className="w-full px-6 py-4 bg-primary-500 text-white rounded-xl hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all font-semibold text-lg shadow-lg disabled:shadow-none"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;


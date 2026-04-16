const StarRating = ({ rating = 0, onRatingChange, readonly = false }) => {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => !readonly && onRatingChange(star)}
          className={`text-2xl transition-colors ${
            star <= rating 
              ? 'text-yellow-400 fill-yellow-400' 
              : 'text-gray-300 hover:text-yellow-400'
          } ${readonly ? 'cursor-default' : 'cursor-pointer'}`}
        >
          ★
        </button>
      ))}
      {rating > 0 && (
        <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
      )}
    </div>
  );
};

export default StarRating;


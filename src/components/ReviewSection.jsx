// src/components/ReviewSection.jsx
const ReviewSection = ({ reviews = [] }) => {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-semibold mb-4">Customer Reviews</h3>

      {reviews.length === 0 ? (
        <p className="text-gray-500">No reviews yet.</p>
      ) : (
        reviews.map((review, idx) => (
          <div key={idx} className="mb-4 border-b pb-2">
            <p className="font-bold">{review.name}</p>
            <p className="text-yellow-500">
              {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
            </p>
            <p>{review.comment}</p>
          </div>
        ))
      )}

      <button className="mt-2 underline text-primary">Write a Review</button>
    </div>
  );
};

export default ReviewSection;

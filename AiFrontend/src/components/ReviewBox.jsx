import { useState, useEffect } from "react";
import axios from "axios";

export default function ReviewBox() {
    const [review, setReview] = useState("");
    const [loading, setLoading] = useState(false);
    const [reviews, setReviews] = useState([]);

    const API_URL = import.meta.env.VITE_API_URL;

    const fetchReviews = async () => {
        try {
            const res = await axios.get(`${API_URL}/review`);
            console.log(res.data);
            setReviews(res.data.reverse()); // show latest first
        } catch (err) {
            console.error("Error fetching reviews", err);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post(`${API_URL}/review`, { prompt: review });
            setReview("");
            fetchReviews();
        } catch (err) {
            console.error(err);
        }
        setLoading(false);
    };

    return (
        <div className="p-6 max-w-lg mx-auto text-white">
            {/* Review Input */}
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl p-6 shadow-xl mb-6">
                <h2 className="text-2xl font-bold mb-4 text-center">💬 Review Box</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <textarea
                        value={review}
                        onChange={(e) => setReview(e.target.value)}
                        placeholder="Write your review..."
                        className="w-full p-3 text-black rounded-lg"
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-2 bg-white text-indigo-700 rounded-lg font-semibold hover:bg-gray-200"
                    >
                        {loading ? "Analyzing..." : "Submit Review"}
                    </button>
                </form>
            </div>

            {/* All Reviews */}
            <div className="bg-white rounded-2xl p-4 text-black shadow-md">
                <h3 className="text-xl font-bold mb-3 text-center">📝 All Reviews</h3>
                {reviews.length === 0 ? (
                    <p className="text-gray-600 text-center">No reviews yet.</p>
                ) : (
                    <ul className="space-y-3">
                        {reviews.map((r) => (
                            <li
                                key={r.id}
                                className="p-3 border border-gray-200 rounded-lg flex flex-col"
                            >
                                <p className="text-gray-800">{r.content}</p>
                                <div className="mt-2">
                                    <span
                                        className={`text-sm font-semibold ${r.sentiment === "Positive"
                                                ? "text-green-600"
                                                : r.sentiment === "Negative"
                                                    ? "text-red-600"
                                                    : "text-gray-600"
                                            }`}
                                    >
                                        {r.sentiment}
                                    </span>
                                    <span className="text-xs text-gray-400 ml-2">
                                        {new Date(r.createdAt).toLocaleString()}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}

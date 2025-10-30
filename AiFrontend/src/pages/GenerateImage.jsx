import { useState } from "react";
import axios from "axios";

export default function ImageGenerator() {
  const [prompt, setPrompt] = useState("");
  const [imageBase64, setImageBase64] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError(null);
    setImageBase64(null);

    try {
      // https://localhost:8080/api/v1/generate-image?prompt=create a golden retreiver image who is coding
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_API_URL}/generate-image`,
        {
          params: { prompt },
        }
      );
      console.log(res.data);
      setImageBase64(res.data.imageBase64);
      setPrompt("");
    } catch (err) {
      setError("Failed to generate image. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Download function (no lib)
  const downloadImage = () => {
    if (!imageBase64) return;
    console.log("downloading image...");
    console.log(`data:image/png;base64,${imageBase64}`);
    // Create a temporary <a> tag and trigger download
    const link = document.createElement("a");
    link.href = `data:image/png;base64,${imageBase64}`; // Base64 string with MIME type
    link.download = "downloaded-image.png"; // file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-xl mx-auto my-12 p-6 bg-white rounded-2xl shadow-lg border-2 border-black">
      <h2 className="text-2xl font-bold mb-4 text-center">
        AI Image Generator
      </h2>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter prompt..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          onClick={handleGenerate}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg transition"
          disabled={loading}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      {imageBase64 && (
        <div className="mt-6 flex justify-center">
          <img
            src={`data:image/png;base64,${imageBase64}`}
            alt={prompt}
            className="rounded-xl shadow-lg max-w-full h-auto"
          />
        </div>
      )}
      <button
        className="btn btn-primary my-3 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-400"
        disabled={!imageBase64}
        onClick={downloadImage}
      >
        Download Image
      </button>

    </div>
  );
}
// generate an illustration to put on my technical website's homepage in which student is studying with transparent background
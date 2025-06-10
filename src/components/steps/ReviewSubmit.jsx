import { useState } from "react";
import axios from "axios";

export default function ReviewSubmit({ data, prev }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Backend API URL
  const backendUrl = "https://thewaybd.onrender.com/api/user/register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError("");
    setSuccess("");
    try {
      const response = await axios.post(backendUrl, data);

      // Handle success response
      if (response.data.success) {
        setSuccess("Registration successful! Your conference code has been sent to your email.");
      } else {
        setError(response.data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      // Handle error response
      setError(err.response?.data?.message || "Something went wrong. Please try again later.");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="p-6 bg-white rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Review & Submit</h2>
      <pre className="bg-gray-100 p-4 rounded mb-4 text-sm text-gray-800">
        {JSON.stringify(data, null, 2)}
      </pre>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      {success ? (
        <div className="text-green-600 font-bold text-center">{success}</div>
      ) : (
        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={prev}
            className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`px-4 py-2 rounded text-white ${
              loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            } transition flex items-center`}
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : null}
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
}
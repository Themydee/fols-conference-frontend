import { useState } from "react";
import axios from "axios";

export default function ReviewSubmit({ data, prev }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Backend API URL
  const backendUrl = "http://localhost:3300/api/user/register"; 

  const handleSubmit = async () => {
    setLoading(true);
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
      setLoading(false);
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
        <div className="flex justify-between">
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
              loading ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            } transition`}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      )}
    </div>
  );
}
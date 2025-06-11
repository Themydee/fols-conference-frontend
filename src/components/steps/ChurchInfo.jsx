import { useState } from "react";

const DESIGNATION_OPTIONS = [
  "",
  "Member",
  "Pastor",
  "Deacon",
  "Elder",
  "Instrumentalist",
  "Choir",
  "Usher",
  "Sunday School Teacher",
  "Children Church Teacher"

];

export default function ChurchInfo({ data, next, prev }) {
  const [form, setForm] = useState({
    parish: data.parish,
    area: data.area,
    designation: data.designation,
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        next(form);
      }}
      className="w-1/2 mx-auto mt-32 shadow-lg p-10"

    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Church Information</h2>
      <input
        name="parish"
        value={form.parish}
        onChange={handleChange}
        placeholder="Parish"
        required
        className="block w-full mb-3 border p-2 rounded"
      />
      <input
        name="area"
        value={form.area}
        onChange={handleChange}
        placeholder="Area"
        required
        className="block w-full mb-3 border p-2 rounded"
      />
      <select
        name="designation"
        value={form.designation}
        onChange={handleChange}
        required
        className="block w-full mb-3 border p-2 rounded"
      >
        {DESIGNATION_OPTIONS.map((option, idx) =>
          <option key={idx} value={option}>{option || "Select Designation"}</option>
        )}
      </select>
      <div className="flex justify-between">
        <button type="button" onClick={prev} className="px-4 py-2 bg-gray-300 rounded">Back</button>
        <button type="submit" className="px-4 py-2 bg-neutral-800 text-white rounded hover:bg-amber-400">Next</button>
      </div>
    </form>
  );
}
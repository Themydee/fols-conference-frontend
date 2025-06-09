import { useState } from "react";

export default function PersonalInfo({ data, next }) {
  const [form, setForm] = useState({
    name: data.name,
    email: data.email,
    age: data.age,
    gender: data.gender,
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        next(form);
      }}
    >
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className="block w-full mb-3 border p-2 rounded" />
      <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required className="block w-full mb-3 border p-2 rounded" />
      <input name="age" value={form.age} onChange={handleChange} type="number" placeholder="Age" required className="block w-full mb-3 border p-2 rounded" />
      <select name="gender" value={form.gender} onChange={handleChange} required className="block w-full mb-3 border p-2 rounded">
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <button className="px-4 py-2 bg-blue-600 text-white rounded" type="submit">Next</button>
    </form>
  );
}
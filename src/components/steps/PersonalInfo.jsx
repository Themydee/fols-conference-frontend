import { useState } from "react";

export default function PersonalInfo({ data, next }) {
  const styles = 'block w-full mb-3 border p-2 rounded border-gray-400 '

  const [form, setForm] = useState({
    name: data.name,
    email: data.email,
    age: data.age,
    gender: data.gender,
  });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center">
      <form
        onSubmit={e => {
          e.preventDefault();
          next(form);
        }}
        className="w-11/12 sm:w-2/3 md:w-1/3 bg-white p-6 rounded-md shadow-2xl"
      >
    <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center font-mono">Personal Information</h2>
    <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required className={styles} />
    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="Email" required className={styles} />
    <input name="age" value={form.age} onChange={handleChange} type="number" placeholder="Age" required className={styles} />
    <select name="gender" value={form.gender} onChange={handleChange} required className={styles} >
      <option value="">Select Gender</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
    </select>
    <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-amber-600" type="submit">Next</button>
  </form>
  </div>
  );
}
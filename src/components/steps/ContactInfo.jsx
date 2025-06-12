import { useState } from "react";

export default function ContactInfo({ data, next, prev }) {
  const [phone, setPhone] = useState(data.phone);

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        next({ phone });
      }}
      className="w-1/2 mx-auto mt-32 shadow-lg p-10"
    >
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
      <input name="phone" value={phone} onChange={e => setPhone(e.target.value)}
       type="tel" placeholder="Phone Number" required className="block w-full mb-3 border p-2 rounded" />
      <div className="flex justify-between">
        <button type="button" onClick={prev} className="px-4 py-2 bg-gray-300 rounded">Back</button>
        <button type="submit" className="px-4 py-2 bg-neutral-800 text-white rounded hover:bg-amber-400">Next</button>
      </div>
    </form>
  );
}
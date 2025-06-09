import React from "react";
import bannerImg from '../../assets/theWay.jpeg'

export default function Welcome({ next }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Banner Image */}
      <div className="w-full max-w-md mb-6">
        <img
          src={bannerImg} // Adjust the path as needed
          alt="RCCG THE WAY Youth Conference 2025 Banner"
          className="rounded-xl shadow-lg border-4 border-white"
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* Title and Info */}
      <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-yellow-600 drop-shadow">
        RCCG ANNUAL YOUTH CONFERENCE 2025
      </h1>
      <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800">
        July 25th-27th, 2025
      </h2>
      <div className="mb-4">
        <span className="block text-lg md:text-xl font-semibold text-blue-800">
          RCCG FOLS LP27 HQ
        </span>
        <span className="block text-gray-600">
          1 Israel Adebajo Close, Off Ladipo Oluwole Street, Ikeja, Lagos.
        </span>
      </div>
      {/* Welcome Text */}
      <p className="mb-8 text-gray-700 leading-relaxed text-center md:text-left">
          Welcome to <span className="font-semibold text-blue-700">THE WAY</span>!<br />
          Join us for this life-changing conference filled with impactful sessions, workshops, and networking opportunities.
          <br />
          <b>Note: You will need a verified email address to receive a one-time code, which will serve as your access pass during the program. </b>
          <br />
          <span className="font-medium text-gray-800">
            Please have your personal and church information ready.
          </span>
        </p>
      <button
        onClick={() => next({})}
        className="px-6 py-3 bg-blue-700 text-white rounded-lg font-semibold shadow hover:bg-blue-800 transition"
      >
        Start Registration
      </button>
    </div>
  );
}
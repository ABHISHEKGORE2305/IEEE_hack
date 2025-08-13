"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import getDoctor from "@/components/ui/getDoc";
import axios from "axios";

const Page = () => {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  useEffect(() => {
    const fetchDoctor = async () => {
      const doc = await getDoctor(id);
      setDoctor(doc);
      setLoading(false);
    };
    fetchDoctor();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64 text-lg font-semibold text-blue-700 animate-pulse">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden">
      <div className="flex flex-col items-center gap-6 p-8">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={
              doctor?.profile ||
              "https://cdn-icons-png.flaticon.com/512/6073/6073873.png"
            }
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* Name & Email */}
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-blue-700">
            {doctor?.name || "Doctor Name"}
          </h2>
          <p className="text-gray-500 mt-1">{doctor?.email}</p>
        </div>

        {/* Info Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
          <div className="bg-blue-50 rounded-lg px-4 py-3 text-center shadow-sm hover:shadow-md transition">
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Specialization
            </div>
            <div className="mt-1 font-semibold text-gray-800">
              {doctor?.specialization || "N/A"}
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg px-4 py-3 text-center shadow-sm hover:shadow-md transition">
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Experience
            </div>
            <div className="mt-1 font-semibold text-gray-800">
              {doctor?.experience || 0} yrs
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg px-4 py-3 text-center shadow-sm hover:shadow-md transition">
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Rating
            </div>
            <div className="mt-1 font-semibold text-gray-800">
              {doctor?.rating || 0} / 5
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg px-4 py-3 text-center shadow-sm hover:shadow-md transition">
            <div className="text-xs text-gray-500 uppercase tracking-wide">
              Verified
            </div>
            <div
              className={`mt-1 font-semibold ${
                doctor?.verified ? "text-green-600" : "text-red-600"
              }`}
            >
              {doctor?.verified ? "Yes" : "No"}
            </div>
          </div>
        </div>

        {/* Rating Stars */}
        <div className="flex items-center gap-1 text-2xl mt-2">
          {[1, 2, 3, 4, 5].map((_, index) => {
            const starValue = index + 1;
            return (
              <span
                key={starValue}
                className={`cursor-pointer transition-colors duration-200 ${
                  starValue <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }`}
                onClick={() => setRating(starValue)}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(0)}
              >
                ★
              </span>
            );
          })}
        </div>

        {/* Rate Button */}
        <button
          onClick={async (e) => {
            e.stopPropagation();
            const res = await axios.post("/api/doctor/rate", {
              rating: rating,
              doctorid: id,
            });
            if (res.status === 200) {
              setRating(0);
              setHover(0);
              alert("Thank you for your rating!");
              window.location.replace('/user_dashboard');
            }
          }}
          className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition"
        >
          Submit Rating
        </button>

        {/* Clinic Info */}
        {/* {doctor?.clinic && (
          <div className="mt-6 w-full">
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              Clinic Information
            </h3>
            <div className="bg-blue-50 rounded-lg p-4 shadow-sm border border-blue-100">
              <div className="text-gray-800 font-medium">
                {doctor.clinic.name}
              </div>
              <div className="text-gray-600 text-sm">
                {doctor.clinic.address}
              </div>
              <div className="text-gray-600 text-sm">
                {doctor.clinic.phone}
              </div>
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Page;

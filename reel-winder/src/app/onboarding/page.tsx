"use client";

import * as React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { completeOnboarding } from "./_actions";

export default function OnboardingComponent() {
  const [error, setError] = React.useState("");
  const { user } = useUser();
  const router = useRouter();
  const [showOther, setShowOther] = React.useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await completeOnboarding(formData);

    if (res?.message) {
      await user?.reload();
      router.push("/");
    }
    if (res?.error) {
      setError(res.error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-700 to-indigo-900 p-6">
      <div className="backdrop-blur-md bg-white/10 shadow-xl border border-white/20 rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-white text-center mb-6 drop-shadow-lg">
          🚀 Customize Your Experience
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Interests Selection */}
          <div>
            <label className="block text-white font-semibold mb-2">
              🎯 Select Your Interests
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Sports",
                "Business",
                "Lifestyle",
                "Technology",
                "Health & Wellness",
                "Travel",
                "Entertainment",
                "Education",
                "Food & Dining",
                "Fashion",
                "Finance",
                "Other",
              ].map((interest) => (
                <label
                  key={interest}
                  className="flex items-center space-x-3 text-white"
                >
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest.toLowerCase()}
                    className="w-5 h-5 accent-blue-500 transition-all hover:scale-110"
                    onChange={(e) => {
                      if (e.target.value === "other")
                        setShowOther(e.target.checked);
                    }}
                  />
                  <span className="hover:text-blue-400 transition">
                    {interest}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Show input if "Other" is selected */}
          {showOther && (
            <div>
              <label className="block text-white font-semibold mb-2">
                ✨ Specify Your Interest
              </label>
              <input
                type="text"
                name="other_interest"
                className="w-full bg-white/20 border border-white/30 text-white rounded-md p-2 focus:ring-2 focus:ring-blue-400"
                placeholder="Type your interest here"
              />
            </div>
          )}

          {/* Preferred Content Format */}
          <div>
            <label className="block text-white font-semibold mb-2">
              🎬 Preferred Content Format
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                "High-energy",
                "Informative",
                "Chill",
                "Motivational",
                "Cinematic",
              ].map((format) => (
                <label
                  key={format}
                  className="flex items-center space-x-3 text-white"
                >
                  <input
                    type="checkbox"
                    name="content_format"
                    value={format.toLowerCase()}
                    className="w-5 h-5 accent-purple-500 transition-all hover:scale-110"
                  />
                  <span className="hover:text-purple-400 transition">
                    {format}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {error && (
            <p className="text-red-400 text-sm text-center">⚠️ {error}</p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold py-3 rounded-xl shadow-lg hover:scale-105 transition-all"
          >
            🚀 Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

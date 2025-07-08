"use client";
import { useState } from "react";

const WaitlistForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("https://formspree.io/f/mnqekzqg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again later.");
      }
    } catch {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-md px-6 py-10 flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4 text-gray-900 text-center">Join the Waitlist</h2>
      {submitted ? (
        <div className="text-green-600 font-medium">Thank you for joining! We'll be in touch soon.</div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <input
            type="email"
            required
            placeholder="Your email address"
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            value={email}
            onChange={e => setEmail(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded px-4 py-2 transition-colors disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </button>
          {error && <div className="text-red-500 text-sm">{error}</div>}
        </form>
      )}
    </section>
  );
};

export default WaitlistForm; 
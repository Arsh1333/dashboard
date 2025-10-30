import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../utils/api";

export default function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.msg || "Login failed");

      localStorage.setItem("token", data.token);
      alert("Login successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen font-lato mt-4 rounded-4xl flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div>
            <label className="label font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full rounded-xl"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="label font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full rounded-xl"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn bg-green-500 hover:bg-green-600 text-white w-full rounded-xl mt-4 transition-all duration-200"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <div className="text-sm text-center mt-4">
            <span className="text-gray-600">New here?</span>
            <Link
              to="/signup"
              className="text-green-600 hover:text-green-800 font-medium"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

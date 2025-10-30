import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen rounded-4xl mt-8 flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Welcome Back
        </h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="label font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="input input-bordered w-full rounded-xl"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="label font-medium text-gray-700">Password</label>
            <input
              type="password"
              className="input input-bordered w-full rounded-xl"
              placeholder="Enter password"
            />
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end text-sm">
            <a
              href="#"
              className="text-green-600 hover:text-green-800 transition-colors"
            >
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="btn bg-green-500 hover:bg-green-600 text-white w-full rounded-xl mt-2 transition-all duration-200"
          >
            Login
          </button>

          {/* Sign Up Link */}
          <div className="text-sm text-center mt-4">
            <span className="text-gray-600">New here?</span>{" "}
            <Link
              to="/signup"
              className="text-green-600 hover:text-green-800 transition-colors font-medium"
            >
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

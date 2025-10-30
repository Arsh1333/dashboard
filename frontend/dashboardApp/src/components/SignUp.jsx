import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="min-h-screen rounded-4xl mt-8 flex items-center justify-center bg-gradient-to-br from-green-100 via-white to-green-200 px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-3xl p-8">
        <h2 className="text-3xl font-bold text-center text-green-600 mb-6">
          Create Account
        </h2>

        <form className="space-y-4">
          {/* Username */}
          <div>
            <label className="label font-medium text-gray-700">Username</label>
            <input
              type="text"
              className="input input-bordered w-full rounded-xl"
              placeholder="Enter your username"
            />
          </div>

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

          {/* Re-type Password */}
          <div>
            <label className="label font-medium text-gray-700">
              Re-type Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full rounded-xl"
              placeholder="Re-enter password"
            />
          </div>

          {/* Already have account */}
          <div className="text-sm text-center mt-2">
            <Link to="/login" className="text-green-600 hover:text-green-800">
              Already have an account? Login
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-green-500 hover:bg-green-600 text-white w-full rounded-xl mt-4 transition-all duration-200"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

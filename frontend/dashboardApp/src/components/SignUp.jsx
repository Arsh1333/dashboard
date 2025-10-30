import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Sign Up</legend>

        <label className="label">Username</label>
        <input type="text" className="input" placeholder="Username" />

        <label className="label">Email</label>
        <input type="email" className="input" placeholder="Email" />

        <label className="label">Password</label>
        <input type="password" className="input" placeholder="Password" />

        <label className="label">Re-type Password</label>
        <input type="password" className="input" placeholder="Password" />

        <Link to="/login" className="text-blue-400">
          {" "}
          Already have an account?
        </Link>
        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </>
  );
}

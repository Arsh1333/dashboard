import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar bg-base-200 rounded-2xl shadow-sm flex flex-wrap justify-between px-4 md:px-6 py-2">
      <div className="flex-1 flex justify-between items-center w-full md:w-auto">
        <Link to="/" className="btn btn-ghost text-green-500 text-xl italic">
          Dashboard
        </Link>

        {/* Mobile dropdown */}
        <div className="flex gap-2 md:hidden">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-28 rounded-4xl sm:w-40"
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow"
            >
              <li>
                <button
                  onClick={() => {
                    document.activeElement.blur();
                    navigate("/profile");
                  }}
                  className="justify-between"
                >
                  Profile <span className="badge">New</span>
                </button>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.activeElement.blur();
                    navigate("/login");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Desktop dropdown */}
      <div className="hidden md:flex gap-3 items-center">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered w-32 md:w-56 rounded-4xl"
        />
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow"
          >
            <li>
              <button
                onClick={() => {
                  document.activeElement.blur();
                  navigate("/profile");
                }}
                className="justify-between"
              >
                Profile <span className="badge">New</span>
              </button>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button
                onClick={() => {
                  document.activeElement.blur();
                  navigate("/login");
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

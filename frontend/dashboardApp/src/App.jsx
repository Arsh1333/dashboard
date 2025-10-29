import "./App.css";

function App() {
  return (
    <div className="font-lato w-full">
      {/* Nav */}
      <nav className="navbar bg-base-200 rounded-2xl shadow-sm flex flex-wrap justify-between px-4 md:px-6 py-2">
        <div className="flex-1 flex justify-between items-center w-full md:w-auto">
          <a className="btn btn-ghost text-xl">daisyUI</a>
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
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

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
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Dashboard Section */}
      <main className="mt-5 flex justify-start w-full">
        <div className="bg-base-200 min-h-screen rounded-3xl w-full text-left px-10 py-8">
          <h1 className="font-lato text-4xl">Dashboard</h1>
          <p className="text-gray-400 mt-2.5">Plan your goals</p>
          <div className="mt-[50px] flex">
            <div className="card bg-base-100 rounded-3xl w-96 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Card title!</h2>
                <p>
                  A card component has a figure, a body part, and inside body
                  there are title and actions parts
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
                <div className="card bg-base-100 rounded-3xl w-96 shadow-sm">
                  <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>
                      A card component has a figure, a body part, and inside
                      body there are title and actions parts
                    </p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

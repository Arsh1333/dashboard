import "./App.css";

function App() {
  return (
    <div className="font-lato w-full">
      {/* Nav */}
      <nav className="navbar bg-base-200 rounded-2xl shadow-sm flex flex-wrap justify-between px-4 md:px-6 py-2">
        <div className="flex-1 flex justify-between items-center w-full md:w-auto">
          <a className="btn btn-ghost text-green-500 text-xl italic">
            Dashboard
          </a>
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
      {/* <main className="mt-5 flex justify-start w-full">
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
    </div> */}
      {/* Dashboard Section */}
      <main className="mt-5 flex justify-start w-full">
        <div className="bg-base-200 min-h-screen rounded-3xl w-full text-left px-6 md:px-10 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h1 className="font-lato text-3xl md:text-4xl font-bold">
                Dashboard
              </h1>
              <p className="text-gray-400 mt-2.5">Plan your goals with ease</p>
            </div>
            <button className="bg-green-500 font-lato hover:bg-green-300 text-white rounded-2xl w-auto sm:w-[100px] h-[40px]">
              Add
            </button>
          </div>

          {/* Cards Section */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="card bg-green-100 hover:bg-green-200 transition-all duration-300 rounded-3xl shadow-md">
              <div className="card-body">
                <h2 className="card-title text-green-800 font-semibold">
                  Goal Tracker
                </h2>
                <p className="text-gray-700">
                  Set your personal targets and track progress efficiently with
                  visual indicators.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn rounded-2xl bg-green-500 hover:bg-green-600 border-none text-white">
                    View Goals
                  </button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="card hover:bg-gray-100 transition-all duration-300 rounded-3xl shadow-md border-none">
              <div className="card-body">
                <h2 className="card-title text-green-800 font-semibold">
                  Daily Tasks
                </h2>
                <p className="text-gray-700">
                  Organize your daily activities and stay productive every
                  single day.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn rounded-2xl border-green-300 text-black">
                    View Tasks
                  </button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="card hover:bg-gray-100 transition-all duration-300 rounded-3xl shadow-md border-none">
              <div className="card-body">
                <h2 className="card-title text-green-800 font-semibold">
                  Progress Insights
                </h2>
                <p className="text-gray-700">
                  Analyze your progress through weekly summaries and visual
                  analytics.
                </p>
                <div className="card-actions justify-end">
                  <button className="btn border-green-300 rounded-2xl text-black">
                    Analyze
                  </button>
                </div>
              </div>
            </div>
            {/*stats*/}
            <div className="stats shadow mt-[30px]">
              <div className="stat">
                <div className="stat-figure text-primary"></div>
                <div className="stat-title">Total Likes</div>
                <div className="stat-value text-primary">25.6K</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat bg-gray-100">
                <div className="stat-figure text-secondary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-8 w-8 stroke-current"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div className="stat-title ">Page Views</div>
                <div className="stat-value text-secondary">2.6M</div>
                <div className="stat-desc">21% more than last month</div>
              </div>

              <div className="stat">
                <div className="stat-figure text-secondary">
                  <div className="avatar avatar-online">
                    <div className="w-16 rounded-full">
                      <img src="https://img.daisyui.com/images/profile/demo/anakeen@192.webp" />
                    </div>
                  </div>
                </div>
                <div className="stat-value">86%</div>
                <div className="stat-title">Tasks done</div>
                <div className="stat-desc text-secondary">
                  31 tasks remaining
                </div>
              </div>
            </div>
            {/*table*/}
            <div className="stats shadow w-full">
              <div className="stat w-full">
                <div className="stat-title">Total Page Views</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:5000/api/auth/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="font-lato mt-4 rounded-4xl min-h-screen bg-base-200 flex flex-col items-center py-10 px-4 md:px-10">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg p-8 md:p-10">
        {/* User Info Header */}
        <div className="text-center mb-10">
          <div className="avatar mb-4">
            <div className="w-24 rounded-full ring ring-green-400 ring-offset-base-100 ring-offset-2">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User avatar"
              />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome{" "}
            <span className="text-green-500">
              {user ? user.name : "Loading..."}
            </span>
            !
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            {user ? user.email : "Fetching email..."}
          </p>
        </div>

        {/* Tabs Section */}
        <div className="tabs tabs-boxed w-full">
          <input
            type="radio"
            name="profile_tabs"
            className="tab"
            aria-label="Daily Streak"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6 rounded-2xl shadow-sm">
            <h2 className="font-semibold text-green-600 mb-2">Daily Streak</h2>
            <p className="text-gray-600">Keep your consistency strong! 🔥</p>
          </div>

          <input
            type="radio"
            name="profile_tabs"
            className="tab"
            aria-label="Your Goals"
            defaultChecked
          />
          <div className="tab-content bg-base-100 border-base-300 p-6 rounded-2xl shadow-sm">
            <h2 className="font-semibold text-green-600 mb-2">
              Goals Completed
            </h2>
            <p className="text-gray-600">
              You’ve achieved 8 out of 10 goals this week — great job! ✅
            </p>
          </div>

          <input
            type="radio"
            name="profile_tabs"
            className="tab"
            aria-label="Your Info"
          />
          <div className="tab-content bg-base-100 border-base-300 p-6 rounded-2xl shadow-sm">
            <h2 className="font-semibold text-green-600 mb-2">Your Info</h2>
            <ul className="text-gray-600 space-y-1">
              <li>
                <strong>Name:</strong> {user ? user.name : "Loading..."}
              </li>
              <li>
                <strong>Email:</strong> {user ? user.email : "Loading..."}
              </li>
              <li>
                <strong>Member since:</strong> Jan 2025
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

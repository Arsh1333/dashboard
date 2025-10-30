export default function Profile() {
  return (
    <>
      <div className="font-lato">
        <div className="mt-5">
          <h1 className="text-6xl mb-5 font-lato">
            Welcome <span className="text-green-500">Username</span>!
          </h1>
          <p className="text-sm mb-10 text-gray-300">username@xyz</p>
          {/* name of each tab group should be unique */}
          <div className="tabs tabs-box">
            <input
              type="radio"
              name="my_tabs_6"
              className="tab"
              aria-label="Daily streak"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              Daily streak
            </div>

            <input
              type="radio"
              name="my_tabs_6"
              className="tab"
              aria-label="Your goals"
              defaultChecked
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              Goals completed
            </div>

            <input
              type="radio"
              name="my_tabs_6"
              className="tab"
              aria-label="Your info"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              Your info
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

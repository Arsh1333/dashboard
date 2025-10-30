import { useState, useEffect } from "react";

export default function Hero() {
  const [showGoals, setShowGoals] = useState(false);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newGoal, setNewGoal] = useState({ title: "", description: "" });

  useEffect(() => {
    if (!showGoals) return;

    const fetchGoals = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/goals", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setGoals(data);
      } catch (err) {
        console.error("Error fetching goals:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchGoals();
  }, [showGoals]);

  const handleAddGoal = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newGoal),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Goal added successfully!");
        setShowAddGoal(false);
        setNewGoal({ title: "", description: "" });
        if (showGoals) setGoals((prev) => [...prev, data]); // Refresh list if open
      } else {
        alert(data.msg || "Failed to add goal");
      }
    } catch (err) {
      console.error("Error adding goal:", err);
    }
  };

  return (
    <main className="mt-5 flex justify-start w-full">
      <div className="bg-base-200 min-h-screen rounded-3xl w-full text-left px-6 md:px-10 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h1 className="font-lato text-3xl md:text-4xl font-bold">
              Dashboard
            </h1>
            <p className="text-gray-400 mt-2.5">Plan your goals with ease</p>
          </div>
          <button
            onClick={() => setShowAddGoal(true)}
            className="bg-green-500 font-lato hover:bg-green-400 text-white rounded-2xl w-auto sm:w-[100px] h-[40px]"
          >
            Add Goals
          </button>
        </div>

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
                <button
                  onClick={() => setShowGoals(true)}
                  className="btn rounded-2xl bg-green-500 hover:bg-green-600 border-none text-white"
                >
                  View Goals
                </button>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="card hover:bg-white bg-gray-100 transition-all duration-300 rounded-3xl shadow-md border-none">
            <div className="card-body">
              <h2 className="card-title text-green-800 font-semibold">
                Daily Tasks
              </h2>
              <p className="text-gray-700">
                Organize your daily activities and stay productive every single
                day.
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

          <div className="stats shadow mt-[30px]">
            <div className="stat">
              <div className="stat-title">Total Likes</div>
              <div className="stat-value text-primary">25.6K</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat bg-gray-100">
              <div className="stat-title">Page Views</div>
              <div className="stat-value text-secondary">2.6M</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-value">86%</div>
              <div className="stat-title">Tasks done</div>
              <div className="stat-desc text-secondary">31 tasks remaining</div>
            </div>
          </div>

          <div className="stats shadow w-full">
            <div className="stat w-full">
              <div className="stat-title">Total Page Views</div>
              <div className="stat-value">89,400</div>
              <div className="stat-desc">21% more than last month</div>
            </div>
          </div>
        </div>

        {showGoals && (
          <dialog open className="modal modal-open">
            <div className="modal-box rounded-3xl max-w-2xl">
              <h3 className="font-bold text-lg mb-4 text-green-600">
                Your Goals
              </h3>

              {loading ? (
                <p className="text-gray-400">Loading goals...</p>
              ) : goals.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {goals.map((goal) => (
                    <div
                      key={goal._id}
                      className="card bg-green-100 shadow-sm rounded-2xl"
                    >
                      <div className="card-body">
                        <h2 className="card-title text-green-800 font-semibold">
                          {goal.title}
                        </h2>
                        <p className="text-gray-700">{goal.description}</p>
                        <p className="text-xs text-gray-500 mt-2">
                          {new Date(goal.createdAt).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No goals found.</p>
              )}

              <div className="modal-action">
                <button
                  onClick={() => setShowGoals(false)}
                  className="btn btn-ghost"
                >
                  Close
                </button>
              </div>
            </div>
          </dialog>
        )}

        {showAddGoal && (
          <dialog open className="modal modal-open">
            <div className="modal-box rounded-3xl max-w-md">
              <h3 className="font-bold text-lg mb-4 text-green-600">
                Add New Goal
              </h3>
              <form onSubmit={handleAddGoal}>
                <label className="label">Title</label>
                <input
                  type="text"
                  value={newGoal.title}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, title: e.target.value })
                  }
                  className="input input-bordered w-full mb-3"
                  required
                />

                <label className="label">Description</label>
                <textarea
                  value={newGoal.description}
                  onChange={(e) =>
                    setNewGoal({ ...newGoal, description: e.target.value })
                  }
                  className="textarea textarea-bordered w-full mb-4"
                  required
                />

                <div className="modal-action">
                  <button
                    type="button"
                    onClick={() => setShowAddGoal(false)}
                    className="btn btn-ghost"
                  >
                    Cancel
                  </button>
                  <button type="submit" className="btn bg-green-500 text-white">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        )}
      </div>
    </main>
  );
}

import { useState, useEffect } from "react";

export default function Hero() {
  const [showGoals, setShowGoals] = useState(false);
  const [showTasks, setShowTasks] = useState(false);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);
  const [goals, setGoals] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  // ✅ Fetch Goals
  useEffect(() => {
    if (!showGoals) return;
    const fetchGoals = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/goals", {
          headers: { Authorization: `Bearer ${token}` },
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

  // ✅ Fetch Tasks
  useEffect(() => {
    if (!showTasks) return;
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("http://localhost:5000/api/tasks", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setTasks(data);
      } catch (err) {
        console.error("Error fetching tasks:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, [showTasks]);

  // ✅ Add Goal
  const handleAddGoal = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/goals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });
      const newGoal = await res.json();
      setGoals((prev) => [...prev, newGoal.goal || newGoal]);
      e.target.reset();
      setShowAddGoal(false);
    } catch (err) {
      console.error("Error adding goal:", err);
    }
  };

  // ✅ Add Task
  const handleAddTask = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, description }),
      });
      const newTask = await res.json();
      setTasks((prev) => [...prev, newTask.task || newTask]);
      e.target.reset();
      setShowAddTask(false);
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  // ✅ Delete Goal
  const handleDeleteGoal = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:5000/api/goals/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setGoals((prev) => prev.filter((goal) => goal._id !== id));
    } catch (err) {
      console.error("Error deleting goal:", err);
    }
  };

  // ✅ Delete Task
  const handleDeleteTask = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks((prev) => prev.filter((task) => task._id !== id));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <main className="mt-5 flex justify-start w-full">
      <div className="bg-base-200 min-h-screen rounded-3xl w-full text-left px-6 md:px-10 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1">
            <h1 className="font-lato text-3xl md:text-4xl font-bold">
              Dashboard
            </h1>
            <p className="text-gray-400 mt-2.5">Plan your goals with ease</p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Goals Card */}
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

          {/* Tasks Card */}
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
                <button
                  onClick={() => setShowTasks(true)}
                  className="btn rounded-2xl border-green-300 text-black hover:bg-green-100"
                >
                  View Tasks
                </button>
              </div>
            </div>
          </div>

          {/* Insights Card */}
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

          {/* ✅ YOUR STATS SECTION (UNTOUCHED) */}
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
                        <button
                          onClick={() => handleDeleteGoal(goal._id)}
                          className="btn btn-xs rounded-4xl p-4 bg-red-500 hover:bg-red-400 text-white mt-3"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No goals found.</p>
              )}
              <div className="modal-action flex justify-between">
                <button
                  onClick={() => setShowAddGoal(true)}
                  className="btn bg-green-500 hover:bg-green-400 text-white"
                >
                  Add Goal
                </button>
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

        {showTasks && (
          <dialog open className="modal modal-open">
            <div className="modal-box rounded-3xl max-w-2xl">
              <h3 className="font-bold text-lg mb-4 text-blue-600">
                Your Tasks
              </h3>
              {loading ? (
                <p className="text-gray-400">Loading tasks...</p>
              ) : tasks.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {tasks.map((task) => (
                    <div
                      key={task._id}
                      className="card bg-blue-100 shadow-sm rounded-2xl"
                    >
                      <div className="card-body">
                        <h2 className="card-title text-blue-800 font-semibold">
                          {task.title}
                        </h2>
                        <p className="text-gray-700">{task.description}</p>
                        <button
                          onClick={() => handleDeleteTask(task._id)}
                          className="btn btn-xs rounded-4xl p-4 bg-red-500 hover:bg-red-400 text-white mt-3"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No tasks found.</p>
              )}
              <div className="modal-action flex justify-between">
                <button
                  onClick={() => setShowAddTask(true)}
                  className="btn bg-blue-500 rounded-4xl hover:bg-blue-400 text-white"
                >
                  Add Task
                </button>
                <button
                  onClick={() => setShowTasks(false)}
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
              <h3 className="font-bold rounded-4xl text-lg mb-4 text-green-600">
                Add New Goal
              </h3>
              <form onSubmit={handleAddGoal}>
                <input
                  type="text"
                  name="title"
                  className="input input-bordered w-full mb-3"
                  placeholder="Goal title"
                  required
                />
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-full mb-3"
                  placeholder="Goal description"
                  required
                ></textarea>
                <div className="modal-action">
                  <button
                    type="submit"
                    className="btn bg-green-500 hover:bg-green-400 text-white"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddGoal(false)}
                    className="btn btn-ghost"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </dialog>
        )}

        {showAddTask && (
          <dialog open className="modal modal-open">
            <div className="modal-box rounded-3xl max-w-md">
              <h3 className="font-bold rounded-4xl text-lg mb-4 text-blue-600">
                Add New Task
              </h3>
              <form onSubmit={handleAddTask}>
                <input
                  type="text"
                  name="title"
                  className="input input-bordered w-full mb-3"
                  placeholder="Task title"
                  required
                />
                <textarea
                  name="description"
                  className="textarea textarea-bordered w-full mb-3"
                  placeholder="Task description"
                  required
                ></textarea>
                <div className="modal-action">
                  <button
                    type="submit"
                    className="btn bg-blue-500 hover:bg-blue-400 text-white"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddTask(false)}
                    className="btn btn-ghost"
                  >
                    Cancel
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

import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState("goals"); // "goals" | "tasks" | "info"
  const [goals, setGoals] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showAddGoal, setShowAddGoal] = useState(false);
  const [showAddTask, setShowAddTask] = useState(false);

  // Fetch user info
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;

      try {
        const res = await fetch("http://localhost:5000/api/auth/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setUser(data.user);
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUserData();
  }, []);

  // Fetch Goals when goals tab active
  useEffect(() => {
    if (activeTab !== "goals") return;
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
  }, [activeTab]);

  // Fetch Tasks when tasks tab active
  useEffect(() => {
    if (activeTab !== "tasks") return;
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
  }, [activeTab]);

  // Add Goal
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
      setActiveTab("goals"); // ensure user stays/returns to goals
    } catch (err) {
      console.error("Error adding goal:", err);
    }
  };

  // Add Task
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
      setActiveTab("tasks"); // ensure user stays/returns to tasks
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  // Delete Goal
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

  // Delete Task
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

        {/* Tabs */}
        <div className="tabs tabs-boxed w-full">
          <button
            className={`tab ${activeTab === "goals" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("goals")}
          >
            Your Goals
          </button>
          <button
            className={`tab ${activeTab === "tasks" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("tasks")}
          >
            Your Tasks
          </button>
          <button
            className={`tab ${activeTab === "info" ? "tab-active" : ""}`}
            onClick={() => setActiveTab("info")}
          >
            Your Info
          </button>
        </div>

        <div className="mt-6">
          {/* GOALS TAB */}
          {activeTab === "goals" && (
            <div className="bg-base-100 border-base-300 p-6 rounded-2xl shadow-sm">
              <h2 className="font-semibold text-green-600 mb-3 text-lg">
                Your Goals
              </h2>

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
                        <h3 className="card-title text-green-800 font-semibold">
                          {goal.title}
                        </h3>
                        <p className="text-gray-700">{goal.description}</p>
                        <div className="mt-3 flex gap-2">
                          <button
                            onClick={() => handleDeleteGoal(goal._id)}
                            className="btn btn-xs bg-red-500 hover:bg-red-400 text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No goals found.</p>
              )}

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowAddGoal(true)}
                  className="btn bg-green-500 hover:bg-green-400 text-white"
                >
                  Add Goal
                </button>
              </div>
            </div>
          )}

          {/* TASKS TAB */}
          {activeTab === "tasks" && (
            <div className="bg-base-100 border-base-300 p-6 rounded-2xl shadow-sm">
              <h2 className="font-semibold text-blue-600 mb-3 text-lg">
                Your Tasks
              </h2>

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
                        <h3 className="card-title text-blue-800 font-semibold">
                          {task.title}
                        </h3>
                        <p className="text-gray-700">{task.description}</p>
                        <div className="mt-3 flex gap-2">
                          <button
                            onClick={() => handleDeleteTask(task._id)}
                            className="btn btn-xs bg-red-500 hover:bg-red-400 text-white"
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400">No tasks found.</p>
              )}

              <div className="mt-4 flex justify-end">
                <button
                  onClick={() => setShowAddTask(true)}
                  className="btn bg-blue-500 hover:bg-blue-400 text-white"
                >
                  Add Task
                </button>
              </div>
            </div>
          )}

          {/* PERSONAL INFO TAB */}
          {activeTab === "info" && (
            <div className="bg-base-100 border-base-300 p-6 rounded-2xl shadow-sm">
              <h2 className="font-semibold text-green-600 mb-3 text-lg">
                Your Info
              </h2>
              <ul className="text-gray-600 space-y-2">
                <li>
                  <strong>Name:</strong> {user ? user.name : "Loading..."}
                </li>
                <li>
                  <strong>Email:</strong> {user ? user.email : "Loading..."}
                </li>
                <li>
                  <strong>Member since:</strong> Jan 2025
                </li>
                {/* Keep this area available for editable profile fields if you want to expand later */}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* ADD GOAL MODAL */}
      {showAddGoal && (
        <dialog open className="modal modal-open">
          <div className="modal-box rounded-3xl max-w-md">
            <h3 className="font-bold text-lg mb-4 text-green-600">
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

      {/* ADD TASK MODAL */}
      {showAddTask && (
        <dialog open className="modal modal-open">
          <div className="modal-box rounded-3xl max-w-md">
            <h3 className="font-bold text-lg mb-4 text-blue-600">
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
  );
}

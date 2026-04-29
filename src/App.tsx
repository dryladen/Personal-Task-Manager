import { useState } from "react";
import type { Task } from "./types";

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");
  console.log(tasks);
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden">
      <div className="bg-white p-6 rounded-lg shadow-md w-96 h-150 overflow-hidden">
        <h1 className="text-2xl font-bold ">My Task</h1>

        {/* date */}
        <p className="text-gray-500">Sunday, April 19</p>

        {/* INPUT */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            onChange={(data) => setNewTask(data.target.value)}
            placeholder="Tambah task..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600 disabled:bg-gray-600"
            disabled={newTask.length < 1} // apakah jumlah huruf di dalam newTask kurang dari 1 ? jika iya maka disable, jika tidak maka tidak disable
            onClick={() =>
              setTasks([
                ...tasks,
                { id: tasks.length + 1, text: newTask, done: false },
              ])
            }
          >
            +
          </button>
        </div>

        <div className="bg-gray-100 p-2 rounded flex justify-between my-4">
          <button className="flex-1 py-2 rounded bg-blue-500 text-white">
            All
          </button>
          <button className="flex-1 py-2 rounded text-gray-600">Active</button>
          <button className="flex-1 py-2 rounded text-gray-600">Done</button>
        </div>

        <div className="space-y-2">
          {/* ITEM menggunakan data tadi array Task */}
          {tasks.map((task) => {
            return (
              <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
                {/* KIRI: checkbox + text */}
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>{task.text}</span>
                </div>

                {/* KANAN: delete */}
                <button className="text-red-500 font-bold">X</button>
              </div>
            );
          })}

          <div className="flex justify-between items-center my-4">
            <p className="text-gray-500">3 Task Left</p>

            <button className="py-2 px-6 rounded bg-blue-500 text-white w-fit ">
              Clear Completed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

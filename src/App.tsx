function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden" >
      
      <div className="bg-white p-6 rounded-lg shadow-md w-96 h-150">
        <h1 className="text-2xl font-bold ">
          My Task
        </h1>
        

        {/* date */}
        <p className="text-gray-500">Sunday, April 19</p>

 {/* INPUT */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Tambah task..."
            className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
            +
          </button>
        </div>
<div className="flex items-center my-4">
  <div className="flex-1 h-px bg-gray-300"></div>
  
  <span className="px-2 text-gray-500 text-sm">
   Input Field + Add button
  </span>
  
  <div className="flex-1 h-px bg-gray-300"></div>
</div>

<div className="bg-gray-100 p-2 rounded flex justify-between">

  <button className="flex-1 py-2 rounded bg-blue-500 text-white">
    All
  </button>

  <button className="flex-1 py-2 rounded text-gray-600">
    Active
  </button>

  <button className="flex-1 py-2 rounded text-gray-600">
    Done
  </button>

</div>
<div className="flex items-center my-4">
  <div className="flex-1 h-px bg-gray-300"></div>
  
  <span className="px-2 text-gray-500 text-sm">
    Filter Buttons
  </span>
  
  <div className="flex-1 h-px bg-gray-300"></div>
</div>

<div className="space-y-2">

  {/* ITEM */}
  <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
    
    {/* KIRI: checkbox + text */}
    <div className="flex items-center gap-2">
      <input type="checkbox" className="w-4 h-4" />
      <span>Belajar React</span>
    </div>

    {/* KANAN: delete */}
    <button className="text-red-500 font-bold">
      X
    </button>

  </div>

  {/* ITEM */}
  <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
    <div className="flex items-center gap-2">
      <input type="checkbox" className="w-4 h-4" />
      <span>Kerjain tugas</span>
    </div>

    <button className="text-red-500 font-bold">
      X
    </button>
  </div>

</div>

<div className="space-y-2">

  {/* ITEM */}
  <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
    
    {/* KIRI: checkbox + text */}
    <div className="flex items-center gap-2">
      <input type="checkbox" className="w-4 h-4" />
      <span>Belajar React</span>
    </div>

    {/* KANAN: delete */}
    <button className="text-red-500 font-bold">
      X
    </button>

  </div>

  {/* ITEM */}
  <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
    <div className="flex items-center gap-2">
      <input type="checkbox" className="w-4 h-4" />
      <span>Kerjain tugas</span>
    </div>

    <button className="text-red-500 font-bold">
      X
    </button>
  </div>

  <div className="flex items-center justify-between bg-gray-100 p-3 rounded">
    <div className="flex items-center gap-2">
      <input type="checkbox" className="w-4 h-4" />
      <span>Kerjain tugas</span>
    </div>

    <button className="text-red-500 font-bold">
      X
    </button>
  </div>
  
  <div className="flex items-center my-4">
  <div className="flex-1 h-px bg-gray-300"></div>
  
  <span className="px-2 text-gray-500 text-sm">
    checkbox - task text - X delete
  </span>
  
  <div className="flex-1 h-px bg-gray-300"></div>
</div>

 <p className="text-gray-500">Sunday, April 19</p>
</div>




      </div>

    </div>

    
  )
}

export default App

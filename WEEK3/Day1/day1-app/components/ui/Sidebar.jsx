export default function Sidebar() {
  return (
    <aside id="sidebar" className="h-screen w-48 bg-gray-800 text-white p-4">

      <div className="mb-6">
        <h2 className="text-4xl underline decoration-indigo-400 font-bold">Menu</h2>
      </div>


     <ul className="space-y-4 text-sm">
        <p className="text-sm text-gray-500 uppercase mb-3 tracking-wide">Core</p>
        <li className="hover:text-gray-300 cursor-pointer text-2xl mb-2 font-semibold"> 🏠 Home</li>
        
        <p className="text-sm text-gray-500 uppercase mb-3 tracking-wide">Core</p>
        <li className="hover:text-gray-300 cursor-pointer text-2xl mb-2 font-semibold">⛑ Projects</li>
        
        <p className="text-sm text-gray-500 uppercase mb-3 tracking-wide">Core</p>
        <li className="hover:text-gray-300 cursor-pointer text-2xl mb-2 font-semibold">⚙ Settings</li>
        <li className="hover:text-gray-300 cursor-pointer text-2xl mb-2 font-semibold">₹ Plans</li>
        
        <p className="text-sm text-gray-500 uppercase mb-3 tracking-wide">Core</p>
        <li className="hover:text-gray-300 cursor-pointer text-2xl mb-2 font-semibold">👤 Profile</li>
     </ul>
    </aside>
  );
}

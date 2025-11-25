import Link from "next/link";
import { FaTachometerAlt, FaProjectDiagram, FaCog, FaUser, FaUsers,FaInfoCircle } from "react-icons/fa";
export default function Sidebar({isOpen, onClose}) {
  return (
    <div>
    {isOpen && (
        <div 
          className="fixed inset-0"
          onClick={onClose}
        />
      )}
      
      <aside 
        className={`fixed lg:static h-screen w-50 bg-gray-800 text-white p-4 transition-transform duration-250 
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
    {/* <aside id="sidebar" className="h-screen w-48 bg-gray-800 text-white p-4"> */}

      <div className="mb-6">
        <h2 className="text-4xl underline decoration-indigo-400 font-bold">Menu</h2>
      </div>


     <ul className="space-y-4 text-sm">
        <p className="text-sm text-gray-500 uppercase mb-6 tracking-wide">Core</p>
        <li>
        <Link href="/Dashboard" className="flex items-center gap-2 hover:text-gray-300 cursor-pointer text-2xl mb-6 font-semibold"> <FaTachometerAlt/> Dashboard</Link></li>
        
        <p className="text-sm text-gray-500 uppercase mb-6 tracking-wide">Interface</p>
        <li className="flex items-center gap-2 hover:text-gray-300 cursor-pointer text-2xl mb-6 font-semibold"><FaProjectDiagram/> Projects</li>
        
        <p className="text-sm text-gray-500 uppercase mb-6 tracking-wide">Addons</p>
        <li className="flex items-center gap-2 hover:text-gray-300 cursor-pointer text-2xl mb-6 font-semibold"><FaCog/> Settings</li>
        <li> 
          <Link href ="/Dashboard/users"className="flex items-center gap-2 hover:text-gray-300 cursor-pointer text-2xl mb-6 font-semibold"><FaUsers/> Users</Link></li>
        
        <p className="text-sm text-gray-500 uppercase mb-6 tracking-wide">Personal</p>
        <li>
          <Link href = "/Dashboard/profile"className="flex items-center gap-2 hover:text-gray-300 cursor-pointer text-2xl mb-6 font-semibold"><FaUser/> Profile</Link></li>
         
         <p className="text-sm text-gray-500 uppercase mb-6 tracking-wide">About</p>
          <li>
            <Link href="/about" className="flex items-center gap-2 hover:text-gray-300 cursor-pointer text-2xl mb-6 font-semibold"><FaInfoCircle/>About Us</Link></li>
     </ul>
    </aside>
    </div>
  );
}

// admin/components/Layout/AdminSidebar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Users, 
  ShoppingBag, 
  Layers, 
  ShoppingCart, 
  Image, 
  BarChart2, 
  Settings,
  LogOut 
} from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { assets } from '../../assets/assets'

const AdminSidebar = ({ isOpen, setIsOpen }) => {
  const { logout } = useAuth();

  const menuItems = [
    { icon: Home, label: 'Dashboard', path: '/admin' },
    { icon: Users, label: 'Users', path: '/admin/users' },
    { icon: ShoppingBag, label: 'Products', path: '/admin/products' },
    { icon: Layers, label: 'Categories', path: '/admin/categories' },
    { icon: ShoppingCart, label: 'Orders', path: '/admin/orders' },
    { icon: Image, label: 'Banners', path: '/admin/banners' },
    { icon: BarChart2, label: 'Reports', path: '/admin/reports' },
    { icon: Settings, label: 'Settings', path: '/admin/settings' },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 lg:hidden z-20"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 fixed lg:relative
        w-64 h-screen bg-white text-primary transition-transform duration-300 ease-in-out z-30
        flex flex-col
      `}>
        {/* Logo */}
        <div className="p-6 border-b border-primary-dark">
          <div className="flex items-center space-x-3">
            <img 
              src= {assets.MiniLogo}
              alt="Admin Logo"
              className="h-8 w-8"
            />
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-4">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) => `
                flex items-center px-6 py-3 text-primary hover:bg-primary-dark
                transition-colors duration-200
                ${isActive ? 'bg-primary-dark border-l-4 border-primary' : ''}
              `}
              onClick={() => setIsOpen(false)}
            >
              <item.icon className="h-5 w-5 mr-3" />
              <span className="font-medium">{item.label}</span>
            </NavLink>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-primary-dark">
          <button
            onClick={logout}
            className="flex items-center w-full px-4 py-2 text-red-500 cursor-pointer hover:bg-primary-dark rounded-lg transition-colors duration-200"
          >
            <LogOut className="h-5 w-5 mr-3" />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
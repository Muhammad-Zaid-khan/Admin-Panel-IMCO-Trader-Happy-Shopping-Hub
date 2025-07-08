// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './hooks/useAuth';

// Admin Auth
import AdminLogin from "./pages/Auth/AdminLogin";
import ProtectedAdminRoute from "./components/Auth/ProtectedAdminRoute";

// Admin Layout
import AdminLayout from "./components/Layout/AdminLayout";
import AdminDashboard from "./pages/Dashboard/AdminDashboard";
import OrderManagement from "./pages/Orders/OrderManagement";
import CategoryManagement from "./pages/Categories/CategoryManagement";
import BannerManagement from "./pages/Banners/BannerManagement";
import SalesReports from "./pages/Reports/SalesReports";
import Settings from "./pages/Settings/Settings";
import UserManagement from "./pages/Users/UserManagement";
import ProductManagement from "./pages/Products/ProductManagement"


// Admin Pages






// File structure should be:
/*
src/
  ├── admin/
  │   ├── components/
  │   │   ├── Auth/
  │   │   │   └── ProtectedAdminRoute.jsx
  │   │   └── Layout/
  │   │       └── AdminLayout.jsx
  │   └── pages/
  │       ├── Auth/
  │       │   └── AdminLogin.jsx
  │       ├── Dashboard/
  │       │   └── index.jsx
  │       ├── Users/
  │       │   └── index.jsx
  │       ├── Products/
  │       │   └── index.jsx
  │       ├── Categories/
  │       │   └── index.jsx
  │       ├── Orders/
  │       │   └── index.jsx
  │       ├── Banners/
  │       │   └── index.jsx
  │       ├── Reports/
  │       │   └── SalesReports.jsx
  │       └── Settings/
  │           └── index.jsx
  └── App.jsx
*/

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* Public Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin/>} />

          {/* Protected Admin Routes */}
          {/* <Route element={<ProtectedAdminRoute/>}> */}
            <Route path="/admin" element={<AdminLayout/>}>
              <Route index element={<AdminDashboard/>} />
              <Route path="users" element={<UserManagement/>} />
              <Route path="products" element={<ProductManagement/>} />
              <Route path="categories" element={<CategoryManagement/>} />
              <Route path="orders" element={<OrderManagement/>} />
              <Route path="banners" element={<BannerManagement/>} />
              <Route path="reports" element={<SalesReports/>} />
              <Route path="settings" element={ <Settings/>} />
            </Route>
          {/* </Route> */}

          {/* 404 Route */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

// Simple NotFound component
// const NotFound = () => {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="text-center">
//         <h1 className="text-6xl font-bold text-gray-900">404</h1>
//         <p className="text-xl text-gray-600 mt-4">Page not found</p>
//         <a
//           href="/admin"
//           className="mt-6 inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark"
//         >
//           Go to Dashboard
//         </a>
//       </div>
//     </div>
//   );
// };

export default App;

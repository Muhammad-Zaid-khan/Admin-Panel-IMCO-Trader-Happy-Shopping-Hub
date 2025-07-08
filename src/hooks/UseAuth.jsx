/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// admin/hooks/useAuth.jsx
import { useState, useEffect, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create auth context
const AuthContext = createContext(null);

// Demo admin users for testing
const DEMO_ADMINS = [
  {
    id: 1,
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123', // In real app, never store plain passwords
    role: 'admin',
    avatar: 'https://ui-avatars.com/api/?name=Admin+User',
    status: 'active'
  },
  {
    id: 2,
    name: 'Test Admin',
    email: 'test@example.com',
    password: 'test123',
    role: 'moderator',
    avatar: 'https://ui-avatars.com/api/?name=Test+Admin',
    status: 'active'
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  // Check auth status on mount
  useEffect(() => {
    checkAuthStatus();
  }, []);

  // Check if user is already logged in
  const checkAuthStatus = () => {
    try {
      const storedUser = localStorage.getItem('adminUser');
      const storedToken = localStorage.getItem('adminToken');
      
      if (storedUser && storedToken) {
        setUser(JSON.parse(storedUser));
        setIsAuthenticated(true);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Login function
  const login = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Find user (demo authentication)
      const admin = DEMO_ADMINS.find(a => 
        a.email === email && a.password === password
      );

      if (!admin) {
        throw new Error('Invalid email or password');
      }

      if (admin.status !== 'active') {
        throw new Error('Your account is not active. Please contact support.');
      }

      // Remove password from stored user data
      const { password: _, ...adminWithoutPassword } = admin;
      
      // Generate demo token
      const demoToken = btoa(`${email}:${Date.now()}`);
      
      // Store in localStorage
      localStorage.setItem('adminUser', JSON.stringify(adminWithoutPassword));
      localStorage.setItem('adminToken', demoToken);
      
      // Update state
      setUser(adminWithoutPassword);
      setIsAuthenticated(true);
      
      // Redirect to dashboard
      navigate('/admin/dashboard');
      
      return { success: true };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Logout function
  const logout = () => {
    try {
      setIsLoading(true);
      
      // Simulate API delay
      setTimeout(() => {
        // Clear storage
        localStorage.removeItem('adminUser');
        localStorage.removeItem('adminToken');
        
        // Reset state
        setUser(null);
        setIsAuthenticated(false);
        
        // Redirect to login
        navigate('/admin/login');
      }, 500);

    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Update profile
  const updateProfile = async (userData) => {
    try {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      const updatedUser = { ...user, ...userData };
      localStorage.setItem('adminUser', JSON.stringify(updatedUser));
      setUser(updatedUser);
      
      return { success: true, message: 'Profile updated successfully' };
    } catch (error) {
      setError('Profile update failed');
      return { success: false, error: 'Profile update failed' };
    } finally {
      setIsLoading(false);
    }
  };

  // Change password
  const changePassword = async (currentPassword, newPassword) => {
    try {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Find user and verify current password (demo only)
      const admin = DEMO_ADMINS.find(a => a.id === user.id);
      if (!admin || admin.password !== currentPassword) {
        throw new Error('Current password is incorrect');
      }

      return { success: true, message: 'Password changed successfully' };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Forgot password
  const forgotPassword = async (email) => {
    try {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Check if email exists
      const adminExists = DEMO_ADMINS.some(a => a.email === email);
      if (!adminExists) {
        throw new Error('No account found with this email');
      }

      return { 
        success: true, 
        message: 'Password reset instructions sent to your email' 
      };
    } catch (error) {
      setError(error.message);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  // Reset password
  const resetPassword = async (token, newPassword) => {
    try {
      setIsLoading(true);
      
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // In real app, verify token and update password
      return { 
        success: true, 
        message: 'Password has been reset successfully' 
      };
    } catch (error) {
      setError('Password reset failed');
      return { success: false, error: 'Password reset failed' };
    } finally {
      setIsLoading(false);
    }
  };

  // Check if token is expired
  const isTokenExpired = () => {
    const token = localStorage.getItem('adminToken');
    if (!token) return true;

    // In real app, decode JWT and check expiration
    return false;
  };

  // Refresh token
  const refreshToken = async () => {
    try {
      // Simulate token refresh
      const newToken = btoa(`${user.email}:${Date.now()}`);
      localStorage.setItem('adminToken', newToken);
      return true;
    } catch (error) {
      console.error('Token refresh failed:', error);
      return false;
    }
  };

  // Context value
  const value = {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    updateProfile,
    changePassword,
    forgotPassword,
    resetPassword,
    isTokenExpired,
    refreshToken
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default useAuth;
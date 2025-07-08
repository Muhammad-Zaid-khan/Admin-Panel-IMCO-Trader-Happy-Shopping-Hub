/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
// admin/pages/Dashboard/index.jsx
import React, { useState, useEffect } from 'react';
import { 
  TrendingUp, 
  Users, 
  ShoppingBag, 
  DollarSign,
  Package,
  ArrowUp,
  ArrowDown,
  AlertCircle,
  Clock,
  Calendar,
  RefreshCcw
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';


// Components
import StatCard from './components/StatCard';
import RecentOrders from './components/RecentOrders';
import TopProducts from './components/TopProducts';
import SalesChart from './components/SalesChart';
import CustomerChart from './components/CustomerChart';

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [isLoading, setIsLoading] = useState(true);
  const [dashboardData, setDashboardData] = useState({
    stats: {
      totalSales: 0,
      totalOrders: 0,
      totalCustomers: 0,
      totalProducts: 0,
      averageOrderValue: 0,
      pendingOrders: 0,
      lowStockProducts: 0,
      revenue: {
        current: 0,
        previous: 0,
        percentageChange: 0
      }
    },
    recentOrders: [],
    topProducts: [],
    salesData: [],
    customerData: []
  });

  useEffect(() => {
    fetchDashboardData();
  }, [timeRange]);

  const fetchDashboardData = async () => {
    setIsLoading(true);
    try {
      // Replace with actual API call
      const response = await fetch(`/api/admin/dashboard?timeRange=${timeRange}`);
      const data = await response.json();
      setDashboardData(data);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Sample data for demonstration
  const sampleData = {
    stats: {
      totalSales: 125000,
      totalOrders: 450,
      totalCustomers: 280,
      totalProducts: 89,
      averageOrderValue: 278,
      pendingOrders: 12,
      lowStockProducts: 5,
      revenue: {
        current: 125000,
        previous: 100000,
        percentageChange: 25
      }
    },
    recentOrders: [
      {
        id: 'ORD001',
        customer: 'John Doe',
        amount: 299,
        status: 'pending',
        date: '2024-03-15'
      },
      // Add more orders
    ],
    topProducts: [
      {
        id: 1,
        name: 'iPhone 13',
        sales: 45,
        revenue: 67500,
        stock: 23
      },
      // Add more products
    ]
  };

  const statCards = [
    {
      title: 'Total Revenue',
      value: `₹${dashboardData.stats.totalSales.toLocaleString()}`,
      icon: DollarSign,
      change: dashboardData.stats.revenue.percentageChange,
      changeType: dashboardData.stats.revenue.percentageChange >= 0 ? 'increase' : 'decrease',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Total Orders',
      value: dashboardData.stats.totalOrders,
      icon: Package,
      change: 8.2,
      changeType: 'increase',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Customers',
      value: dashboardData.stats.totalCustomers,
      icon: Users,
      change: 12.5,
      changeType: 'increase',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Average Order Value',
      value: `₹${dashboardData.stats.averageOrderValue}`,
      icon: TrendingUp,
      change: 3.2,
      changeType: 'decrease',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500">Welcome back! Here's what's happening with your store.</p>
        </div>
        <div className="flex items-center space-x-4">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="today">Today</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button
            onClick={fetchDashboardData}
            className="flex items-center px-4 py-2 bg-white border rounded-lg text-gray-600 hover:bg-gray-50"
          >
            <RefreshCcw className="h-4 w-4 mr-2" />
            Refresh
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Sales Overview</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Last 7 days</span>
              <Calendar className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div className="h-80">
            <SalesChart data={dashboardData.salesData} />
          </div>
        </div>

        {/* Customer Growth Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Customer Growth</h2>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Last 30 days</span>
              <Users className="h-4 w-4 text-gray-400" />
            </div>
          </div>
          <div className="h-80">
            <CustomerChart data={dashboardData.customerData} />
          </div>
        </div>
      </div>

      {/* Recent Orders & Top Products */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentOrders orders={dashboardData.recentOrders} />
        <TopProducts products={dashboardData.topProducts} />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Pending Orders */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Orders</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {dashboardData.stats.pendingOrders}
              </h3>
            </div>
            <div className="bg-yellow-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-yellow-600" />
            </div>
          </div>
          <div className="mt-4">
            <a href="/admin/orders?status=pending" className="text-sm text-primary hover:text-primary-dark font-medium">
              View pending orders →
            </a>
          </div>
        </div>

        {/* Low Stock Products */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Low Stock Products</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {dashboardData.stats.lowStockProducts}
              </h3>
            </div>
            <div className="bg-red-100 p-3 rounded-full">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
          </div>
          <div className="mt-4">
            <a href="/admin/products?stock=low" className="text-sm text-primary hover:text-primary-dark font-medium">
              View low stock products →
            </a>
          </div>
        </div>

        {/* Total Products */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Products</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {dashboardData.stats.totalProducts}
              </h3>
            </div>
            <div className="bg-blue-100 p-3 rounded-full">
              <ShoppingBag className="h-6 w-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4">
            <a href="/admin/products" className="text-sm text-primary hover:text-primary-dark font-medium">
              View all products →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
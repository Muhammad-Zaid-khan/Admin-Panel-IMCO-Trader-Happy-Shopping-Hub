/* eslint-disable no-unused-vars */
// admin/pages/Reports/SalesReports.jsx
import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  TrendingUp, 
  DollarSign, 
  ShoppingCart, 
  Users,
  Download,
  Calendar,
  Filter,
  ArrowUp,
  ArrowDown
} from 'lucide-react';
import {
  LineChart,
  Line,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

const SalesReports = () => {
  const [dateRange, setDateRange] = useState('week');
  const [reportType, setReportType] = useState('sales');
  const [isLoading, setIsLoading] = useState(false);
  const [customDateRange, setCustomDateRange] = useState({
    start: '',
    end: ''
  });

  // Sample data - Replace with actual API data
  const salesData = {
    daily: [
      { date: '2024-03-01', sales: 12500, orders: 45, customers: 38 },
      { date: '2024-03-02', sales: 15000, orders: 52, customers: 43 },
      // Add more daily data
    ],
    weekly: [
      { week: 'Week 1', sales: 85000, orders: 320, customers: 245 },
      { week: 'Week 2', sales: 92000, orders: 345, customers: 278 },
      // Add more weekly data
    ],
    monthly: [
      { month: 'January', sales: 350000, orders: 1250, customers: 890 },
      { month: 'February', sales: 420000, orders: 1480, customers: 1050 },
      // Add more monthly data
    ]
  };

  const summaryCards = [
    {
      title: 'Total Sales',
      value: '₹1,234,567',
      change: '+12.5%',
      isIncrease: true,
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Total Orders',
      value: '4,567',
      change: '+8.3%',
      isIncrease: true,
      icon: ShoppingCart,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Average Order Value',
      value: '₹2,750',
      change: '-3.2%',
      isIncrease: false,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'New Customers',
      value: '1,234',
      change: '+15.7%',
      isIncrease: true,
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const topProducts = [
    {
      id: 1,
      name: 'iPhone 13',
      sales: 125,
      revenue: '₹187,500',
      growth: '+15%'
    },
    // Add more products
  ];

  const handleDateRangeChange = (range) => {
    setDateRange(range);
    // Fetch new data based on range
  };

  const handleExportReport = () => {
    // Export logic
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Sales Reports</h1>
          <p className="text-gray-500 mt-1">Analyze your business performance</p>
        </div>
        <button
          onClick={handleExportReport}
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          <Download className="h-5 w-5" />
          Export Report
        </button>
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select
          value={dateRange}
          onChange={(e) => handleDateRangeChange(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="today">Today</option>
          <option value="week">This Week</option>
          <option value="month">This Month</option>
          <option value="year">This Year</option>
          <option value="custom">Custom Range</option>
        </select>

        {dateRange === 'custom' && (
          <>
            <input
              type="date"
              value={customDateRange.start}
              onChange={(e) => setCustomDateRange({ ...customDateRange, start: e.target.value })}
              className="border rounded-lg px-4 py-2"
            />
            <input
              type="date"
              value={customDateRange.end}
              onChange={(e) => setCustomDateRange({ ...customDateRange, end: e.target.value })}
              className="border rounded-lg px-4 py-2"
            />
          </>
        )}

        <select
          value={reportType}
          onChange={(e) => setReportType(e.target.value)}
          className="border rounded-lg px-4 py-2"
        >
          <option value="sales">Sales Report</option>
          <option value="orders">Orders Report</option>
          <option value="customers">Customer Report</option>
        </select>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">{card.title}</p>
                <h3 className="text-2xl font-bold mt-1">{card.value}</h3>
                <div className={`flex items-center mt-2 ${
                  card.isIncrease ? 'text-green-600' : 'text-red-600'
                }`}>
                  {card.isIncrease ? (
                    <ArrowUp className="h-4 w-4" />
                  ) : (
                    <ArrowDown className="h-4 w-4" />
                  )}
                  <span className="ml-1 text-sm">{card.change}</span>
                </div>
              </div>
              <div className={`${card.bgColor} p-3 rounded-full`}>
                <card.icon className={`h-6 w-6 ${card.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sales Trend Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Trend</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={salesData[dateRange]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={dateRange === 'daily' ? 'date' : dateRange === 'weekly' ? 'week' : 'month'} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="sales" stroke="#4F46E5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Orders Chart */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Orders Overview</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RechartsBarChart data={salesData[dateRange]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey={dateRange === 'daily' ? 'date' : dateRange === 'weekly' ? 'week' : 'month'} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="orders" fill="#4F46E5" />
              </RechartsBarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Top Products Table */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Products</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Product
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sales
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Revenue
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Growth
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{product.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{product.sales} units</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{product.revenue}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-green-600">{product.growth}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesReports;
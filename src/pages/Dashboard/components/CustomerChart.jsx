// admin/pages/Dashboard/components/CustomerChart.jsx
import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-md">
      <p className="font-medium text-gray-600">{label}</p>
      {payload.map((entry, index) => (
        <p
          key={index}
          style={{ color: entry.color }}
          className="font-semibold"
        >
          {entry.name === 'newCustomers' ? 'New' : 'Active'}: {entry.value}
        </p>
      ))}
    </div>
  );
};

const CustomerChart = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
        <XAxis 
          dataKey="date" 
          tick={{ fill: '#6B7280' }}
          tickLine={{ stroke: '#E5E7EB' }}
          axisLine={{ stroke: '#E5E7EB' }}
        />
        <YAxis
          tick={{ fill: '#6B7280' }}
          tickLine={{ stroke: '#E5E7EB' }}
          axisLine={{ stroke: '#E5E7EB' }}
        />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar 
          dataKey="newCustomers" 
          name="New Customers"
          fill="#4F46E5"
          radius={[4, 4, 0, 0]}
        />
        <Bar 
          dataKey="activeCustomers" 
          name="Active Customers"
          fill="#10B981"
          radius={[4, 4, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

CustomerChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      newCustomers: PropTypes.number.isRequired,
      activeCustomers: PropTypes.number.isRequired
    })
  ).isRequired
};

export default CustomerChart;
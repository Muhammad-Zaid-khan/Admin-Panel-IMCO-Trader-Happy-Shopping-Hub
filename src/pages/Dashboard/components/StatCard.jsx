/* eslint-disable no-unused-vars */
// admin/pages/Dashboard/components/StatCard.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { ArrowUp, ArrowDown } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, change, changeType, color, bgColor }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
          <div className={`flex items-center mt-2 ${
            changeType === 'increase' ? 'text-green-600' : 'text-red-600'
          }`}>
            {changeType === 'increase' ? (
              <ArrowUp className="h-4 w-4" />
            ) : (
              <ArrowDown className="h-4 w-4" />
            )}
            <span className="ml-1 text-sm">{Math.abs(change)}%</span>
          </div>
        </div>
        <div className={`${bgColor} p-3 rounded-full`}>
          <Icon className={`h-6 w-6 ${color}`} />
        </div>
      </div>
    </div>
  );
};

StatCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.elementType.isRequired,
  change: PropTypes.number.isRequired,
  changeType: PropTypes.oneOf(['increase', 'decrease']).isRequired,
  color: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired
};

export default StatCard;
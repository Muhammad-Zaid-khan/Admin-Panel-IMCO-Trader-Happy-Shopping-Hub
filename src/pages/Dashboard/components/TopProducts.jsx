// admin/pages/Dashboard/components/TopProducts.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { TrendingUp } from 'lucide-react';

const TopProducts = ({ products }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold text-gray-900">Top Products</h2>
        <div className="flex items-center text-sm text-gray-500">
          <TrendingUp className="h-4 w-4 mr-1" />
          Best Performers
        </div>
      </div>
      <div className="space-y-4">
        {products.map((product) => (
          <div key={product.id} className="flex items-center justify-between border-b pb-4">
            <div className="flex-1">
              <p className="font-medium text-gray-900">{product.name}</p>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-sm text-gray-500">
                  {product.sales} sales
                </span>
                <span className="text-sm text-gray-500">
                  Stock: {product.stock}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="font-medium text-gray-900">₹{product.revenue.toLocaleString()}</p>
              <p className="text-sm text-green-600">
                +{((product.sales / product.stock) * 100).toFixed(1)}% conversion
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <a href="/admin/products" className="text-sm text-primary hover:text-primary-dark font-medium">
          View all products →
        </a>
      </div>
    </div>
  );
};

TopProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      sales: PropTypes.number.isRequired,
      revenue: PropTypes.number.isRequired,
      stock: PropTypes.number.isRequired
    })
  ).isRequired
};

export default TopProducts;
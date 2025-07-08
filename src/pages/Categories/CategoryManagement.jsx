// admin/pages/Categories/index.jsx
import React, { useState } from 'react';
import { Plus, Edit, Trash, ChevronRight, Search } from 'lucide-react';
import CategoryModal from './component/CategoryModal';

const CategoryManagement = () => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: 'Electronics',
      slug: 'electronics',
      description: 'Electronic devices and accessories',
      icon: '📱',
      image: 'electronics-image-url',
      status: 'active',
      featured: true,
      subcategories: [
        { id: 1, name: 'Smartphones', productCount: 45 },
        { id: 2, name: 'Laptops', productCount: 32 },
        { id: 3, name: 'Accessories', productCount: 78 }
      ]
    },
    // Add more categories
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategories, setExpandedCategories] = useState(new Set());

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  const handleEdit = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleDelete = (categoryId) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter(cat => cat.id !== categoryId));
    }
  };

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Category Management</h1>
          <p className="text-gray-500 mt-1">Manage your product categories and subcategories</p>
        </div>
        <button
          onClick={() => {
            setSelectedCategory(null);
            setIsModalOpen(true);
          }}
          className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-dark"
        >
          <Plus className="h-5 w-5" />
          Add New Category
        </button>
      </div>

      {/* Search and Filters */}
      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <select className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent">
          <option>All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      {/* Categories List */}
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Products
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Featured
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredCategories.map((category) => (
                <React.Fragment key={category.id}>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <button
                          onClick={() => toggleCategory(category.id)}
                          className="mr-2 text-gray-500 hover:text-gray-700"
                        >
                          <ChevronRight
                            className={`h-5 w-5 transform transition-transform ${
                              expandedCategories.has(category.id) ? 'rotate-90' : ''
                            }`}
                          />
                        </button>
                        <span className="text-2xl mr-3">{category.icon}</span>
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {category.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {category.description}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        category.status === 'active'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {category.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {category.subcategories.reduce((acc, sub) => acc + sub.productCount, 0)} products
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {category.featured ? (
                        <span className="text-primary">★ Featured</span>
                      ) : (
                        'Not Featured'
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end gap-2">
                        <button
                          onClick={() => handleEdit(category)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDelete(category.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          <Trash className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Subcategories */}
                  {expandedCategories.has(category.id) && (
                    <>
                      {category.subcategories.map((subcategory) => (
                        <tr key={subcategory.id} className="bg-gray-50">
                          <td className="px-6 py-3">
                            <div className="flex items-center ml-8">
                              <div className="h-2 w-2 bg-gray-300 rounded-full mr-3"></div>
                              <span className="text-sm text-gray-600">
                                {subcategory.name}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-3">
                            <span className="text-sm text-gray-500">Active</span>
                          </td>
                          <td className="px-6 py-3">
                            <span className="text-sm text-gray-500">
                              {subcategory.productCount} products
                            </span>
                          </td>
                          <td className="px-6 py-3"></td>
                          <td className="px-6 py-3 text-right">
                            <div className="flex justify-end gap-2">
                              <button className="text-blue-600 hover:text-blue-900">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <Trash className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Category Modal */}
      <CategoryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        category={selectedCategory}
        onSave={(categoryData) => {
          // Handle save logic
          console.log(categoryData);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default CategoryManagement;
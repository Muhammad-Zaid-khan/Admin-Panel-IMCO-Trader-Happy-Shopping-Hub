// admin/pages/Banners/index.jsx
import React, { useState } from 'react';
import { Plus, Edit, Trash, Eye, ArrowUp, ArrowDown } from 'lucide-react';
import BannerModal from './component/BannerModal';

const BannerManagement = () => {
  const [banners, setBanners] = useState([
    {
      id: 1,
      title: "Summer Sale 2024",
      subtitle: "Up to 50% off on all products",
      image: "summer-sale-banner.jpg",
      link: "/summer-sale",
      status: "active",
      position: 1,
      startDate: "2024-06-01",
      endDate: "2024-06-30",
      type: "hero", // hero, promotional, category
      buttonText: "Shop Now",
      backgroundColor: "#FEF2F2",
      textColor: "#111827"
    },
    // Add more banners
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBanner, setSelectedBanner] = useState(null);
  const [filterType, setFilterType] = useState('all');

  const handleEdit = (banner) => {
    setSelectedBanner(banner);
    setIsModalOpen(true);
  };

  const handleDelete = (bannerId) => {
    if (window.confirm('Are you sure you want to delete this banner?')) {
      setBanners(banners.filter(banner => banner.id !== bannerId));
    }
  };

  const handleMoveUp = (index) => {
    if (index > 0) {
      const newBanners = [...banners];
      [newBanners[index], newBanners[index - 1]] = [newBanners[index - 1], newBanners[index]];
      setBanners(newBanners);
    }
  };

  const handleMoveDown = (index) => {
    if (index < banners.length - 1) {
      const newBanners = [...banners];
      [newBanners[index], newBanners[index + 1]] = [newBanners[index + 1], newBanners[index]];
      setBanners(newBanners);
    }
  };

  const handleToggleStatus = (bannerId) => {
    setBanners(banners.map(banner =>
      banner.id === bannerId
        ? { ...banner, status: banner.status === 'active' ? 'inactive' : 'active' }
        : banner
    ));
  };

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Banner Management</h1>
          <p className="text-gray-500 mt-1">Manage your website banners and promotional content</p>
        </div>
        <button
          onClick={() => {
            setSelectedBanner(null);
            setIsModalOpen(true);
          }}
          className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary-dark"
        >
          <Plus className="h-5 w-5" />
          Add New Banner
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-4">
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="all">All Types</option>
          <option value="hero">Hero Banners</option>
          <option value="promotional">Promotional Banners</option>
          <option value="category">Category Banners</option>
        </select>
      </div>

      {/* Banners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {banners
          .filter(banner => filterType === 'all' || banner.type === filterType)
          .map((banner, index) => (
            <div key={banner.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Banner Image */}
              <div className="relative aspect-w-16 aspect-h-9">
                <img
                  src={banner.image}
                  alt={banner.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 flex gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    banner.status === 'active'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {banner.status}
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {banner.type}
                  </span>
                </div>
              </div>

              {/* Banner Details */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{banner.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{banner.subtitle}</p>
                
                <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                  <div>
                    <p className="text-gray-500">Start Date</p>
                    <p className="font-medium">{banner.startDate}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">End Date</p>
                    <p className="font-medium">{banner.endDate}</p>
                  </div>
                </div>

                {/* Preview Button */}
                <div className="mb-4">
                  <a
                    href={banner.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Preview Banner
                  </a>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(banner)}
                      className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(banner.id)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                    >
                      <Trash className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleToggleStatus(banner.id)}
                      className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg"
                    >
                      <Eye className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleMoveUp(index)}
                      disabled={index === 0}
                      className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg disabled:opacity-50"
                    >
                      <ArrowUp className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleMoveDown(index)}
                      disabled={index === banners.length - 1}
                      className="p-2 text-gray-600 hover:bg-gray-50 rounded-lg disabled:opacity-50"
                    >
                      <ArrowDown className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Banner Modal */}
      <BannerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        banner={selectedBanner}
        onSave={(bannerData) => {
          // Handle save logic
          console.log(bannerData);
          setIsModalOpen(false);
        }}
      />
    </div>
  );
};

export default BannerManagement;
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// admin/pages/Banners/components/BannerModal.jsx
import React, { useState, useEffect } from 'react';
import { X, Upload, Image as ImageIcon, Palette } from 'lucide-react';
import { ChromePicker } from 'react-color';

const BannerModal = ({ isOpen, onClose, banner, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    image: '',
    link: '',
    status: 'active',
    type: 'hero',
    startDate: '',
    endDate: '',
    buttonText: 'Shop Now',
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
    position: 1
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [showBgColorPicker, setShowBgColorPicker] = useState(false);
  const [showTextColorPicker, setShowTextColorPicker] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (banner) {
      setFormData(banner);
      setImagePreview(banner.image);
    } else {
      resetForm();
    }
  }, [banner]);

  const resetForm = () => {
    setFormData({
      title: '',
      subtitle: '',
      image: '',
      link: '',
      status: 'active',
      type: 'hero',
      startDate: '',
      endDate: '',
      buttonText: 'Shop Now',
      backgroundColor: '#FFFFFF',
      textColor: '#000000',
      position: 1
    });
    setImagePreview(null);
    setErrors({});
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        setErrors({ ...errors, image: 'Image size should be less than 2MB' });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.subtitle.trim()) newErrors.subtitle = 'Subtitle is required';
    if (!formData.image) newErrors.image = 'Image is required';
    if (!formData.link.trim()) newErrors.link = 'Link is required';
    if (!formData.startDate) newErrors.startDate = 'Start date is required';
    if (!formData.endDate) newErrors.endDate = 'End date is required';
    if (new Date(formData.startDate) > new Date(formData.endDate)) {
      newErrors.endDate = 'End date must be after start date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSave(formData);
      resetForm();
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {banner ? 'Edit Banner' : 'Add New Banner'}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title*
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({...formData, title: e.target.value})}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.title ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter banner title"
                />
                {errors.title && (
                  <p className="text-red-500 text-xs mt-1">{errors.title}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subtitle*
                </label>
                <input
                  type="text"
                  value={formData.subtitle}
                  onChange={(e) => setFormData({...formData, subtitle: e.target.value})}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.subtitle ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter banner subtitle"
                />
                {errors.subtitle && (
                  <p className="text-red-500 text-xs mt-1">{errors.subtitle}</p>
                )}
              </div>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Banner Image*
              </label>
              <div className={`mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-dashed rounded-lg ${
                errors.image ? 'border-red-500' : 'border-gray-300'
              }`}>
                <div className="space-y-1 text-center">
                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="mx-auto h-32 w-full object-cover rounded-lg"
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setImagePreview(null);
                          setFormData({...formData, image: ''});
                        }}
                        className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-white rounded-full p-1"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <>
                      <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-primary hover:text-primary-dark focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageChange}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 2MB
                      </p>
                    </>
                  )}
                </div>
              </div>
              {errors.image && (
                <p className="text-red-500 text-xs mt-1">{errors.image}</p>
              )}
            </div>

            {/* Link and Button Text */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Link URL*
                </label>
                <input
                  type="text"
                  value={formData.link}
                  onChange={(e) => setFormData({...formData, link: e.target.value})}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.link ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter banner link"
                />
                {errors.link && (
                  <p className="text-red-500 text-xs mt-1">{errors.link}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Button Text
                </label>
                <input
                  type="text"
                  value={formData.buttonText}
                  onChange={(e) => setFormData({...formData, buttonText: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Enter button text"
                />
              </div>
            </div>

            {/* Date Range and Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Start Date*
                </label>
                <input
                  type="date"
                  value={formData.startDate}
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.startDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.startDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.startDate}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  End Date*
                </label>
                <input
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${
                    errors.endDate ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.endDate && (
                  <p className="text-red-500 text-xs mt-1">{errors.endDate}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Status
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="scheduled">Scheduled</option>
                </select>
              </div>
            </div>

            {/* Banner Type and Colors */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Banner Type
                </label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({...formData, type: e.target.value})}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  <option value="hero">Hero Banner</option>
                  <option value="promotional">Promotional Banner</option>
                  <option value="category">Category Banner</option>
                </select>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Background Color
                </label>
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded border cursor-pointer"
                    style={{ backgroundColor: formData.backgroundColor }}
                    onClick={() => setShowBgColorPicker(!showBgColorPicker)}
                  />
                  <input
                    type="text"
                    value={formData.backgroundColor}
                    onChange={(e) => setFormData({...formData, backgroundColor: e.target.value})}
                    className="ml-2 flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                {showBgColorPicker && (
                  <div className="absolute z-10 mt-2">
                    <ChromePicker
                      color={formData.backgroundColor}
                      onChange={(color) => setFormData({...formData, backgroundColor: color.hex})}
                    />
                  </div>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Text Color
                </label>
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded border cursor-pointer"
                    style={{ backgroundColor: formData.textColor }}
                    onClick={() => setShowTextColorPicker(!showTextColorPicker)}
                  />
                  <input
                    type="text"
                    value={formData.textColor}
                    onChange={(e) => setFormData({...formData, textColor: e.target.value})}
                    className="ml-2 flex-1 px-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                {showTextColorPicker && (
                  <div className="absolute z-10 mt-2">
                    <ChromePicker
                      color={formData.textColor}
                      onChange={(color) => setFormData({...formData, textColor: color.hex})}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                onClick={() => {
                  resetForm();
                  onClose();
                }}
                className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              // Continuing from the previous BannerModal code...

              <button
                type="submit"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
                    {banner ? 'Updating...' : 'Creating...'}
                  </>
                ) : (
                  <>
                    {banner ? 'Update Banner' : 'Create Banner'}
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Banner Preview */}
          <div className="mt-8 border-t border-gray-200 pt-8">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Banner Preview</h3>
            <div 
              className="relative rounded-lg overflow-hidden"
              style={{ backgroundColor: formData.backgroundColor }}
            >
              {imagePreview && (
                <div className="aspect-w-16 aspect-h-5">
                  <img
                    src={imagePreview}
                    alt="Banner Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center" style={{ color: formData.textColor }}>
                  <h2 className="text-2xl md:text-4xl font-bold mb-2">
                    {formData.title || 'Banner Title'}
                  </h2>
                  <p className="text-sm md:text-lg mb-4">
                    {formData.subtitle || 'Banner Subtitle'}
                  </p>
                  <button
                    className="px-6 py-2 rounded-lg text-sm md:text-base"
                    style={{
                      backgroundColor: formData.textColor,
                      color: formData.backgroundColor
                    }}
                  >
                    {formData.buttonText || 'Shop Now'}
                  </button>
                </div>
              </div>
            </div>

            {/* Preview Controls */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preview Device
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  onChange={(e) => {
                    // Add preview device logic
                  }}
                >
                  <option value="desktop">Desktop</option>
                  <option value="tablet">Tablet</option>
                  <option value="mobile">Mobile</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preview Background
                </label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  onChange={(e) => {
                    // Add preview background logic
                  }}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                </select>
              </div>
            </div>

            {/* Banner Information */}
            <div className="mt-6 bg-gray-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-900 mb-3">Banner Information</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Type</p>
                  <p className="font-medium">{formData.type}</p>
                </div>
                <div>
                  <p className="text-gray-500">Status</p>
                  <p className="font-medium">{formData.status}</p>
                </div>
                <div>
                  <p className="text-gray-500">Start Date</p>
                  <p className="font-medium">{formData.startDate}</p>
                </div>
                <div>
                  <p className="text-gray-500">End Date</p>
                  <p className="font-medium">{formData.endDate}</p>
                </div>
                <div>
                  <p className="text-gray-500">Link</p>
                  <p className="font-medium truncate">{formData.link}</p>
                </div>
                <div>
                  <p className="text-gray-500">Position</p>
                  <p className="font-medium">{formData.position}</p>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="mt-6 bg-blue-50 rounded-lg p-4">
              <h4 className="text-sm font-medium text-blue-900 mb-2">Quick Tips</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Use high-quality images (recommended: 1920x600px)</li>
                <li>• Ensure text is readable against the background</li>
                <li>• Keep the message clear and concise</li>
                <li>• Test the banner across different devices</li>
              </ul>
            </div>
          </div>

          {/* Responsive Preview */}
          <div className="mt-6 border-t border-gray-200 pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Responsive Preview</h3>
            <div className="grid grid-cols-3 gap-4">
              {/* Desktop Preview */}
              <div className="border rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-2">Desktop</p>
                <div className="aspect-w-16 aspect-h-5 bg-gray-100 rounded">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Desktop Preview"
                      className="object-cover rounded"
                    />
                  )}
                </div>
              </div>

              {/* Tablet Preview */}
              <div className="border rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-2">Tablet</p>
                <div className="aspect-w-4 aspect-h-3 bg-gray-100 rounded">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Tablet Preview"
                      className="object-cover rounded"
                    />
                  )}
                </div>
              </div>

              {/* Mobile Preview */}
              <div className="border rounded-lg p-2">
                <p className="text-xs text-gray-500 mb-2">Mobile</p>
                <div className="aspect-w-9 aspect-h-16 bg-gray-100 rounded">
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Mobile Preview"
                      className="object-cover rounded"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerModal;
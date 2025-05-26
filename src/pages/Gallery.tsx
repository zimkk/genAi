import React, { useState } from 'react';
import { SearchIcon, FilterIcon, DownloadIcon, TrashIcon, HeartIcon, XIcon, CalendarIcon, TagIcon } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { SAMPLE_IMAGES } from '../utils/constants';
const Gallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const handleImageClick = (id: string) => {
    setSelectedImage(id);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };
  const getSelectedImage = () => {
    return SAMPLE_IMAGES.find(img => img.id === selectedImage);
  };
  return <Layout>
      <div className="p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">
            My Gallery
          </h1>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <SearchIcon size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
              <input type="text" placeholder="Search images..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full sm:w-64 bg-white/5 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-400" />
            </div>
            <Button variant="secondary" icon={<FilterIcon size={18} />} onClick={() => setFilterOpen(!filterOpen)} className={filterOpen ? 'bg-white/20' : ''}>
              Filter
            </Button>
          </div>
        </div>
        {filterOpen && <Card variant="glass" className="p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Filter Options</h3>
              <button onClick={() => setFilterOpen(false)} className="text-white/60 hover:text-white">
                <XIcon size={18} />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2 flex items-center">
                  <CalendarIcon size={16} className="mr-1" />
                  Date Range
                </label>
                <select className="w-full bg-white/5 border border-white/20 rounded-lg p-2 text-white focus:outline-none focus:border-primary-400">
                  <option value="all">All Time</option>
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2 flex items-center">
                  <TagIcon size={16} className="mr-1" />
                  Style
                </label>
                <select className="w-full bg-white/5 border border-white/20 rounded-lg p-2 text-white focus:outline-none focus:border-primary-400">
                  <option value="all">All Styles</option>
                  <option value="realistic">Realistic</option>
                  <option value="anime">Anime</option>
                  <option value="digital-art">Digital Art</option>
                  <option value="oil-painting">Oil Painting</option>
                  <option value="watercolor">Watercolor</option>
                  <option value="pixel-art">Pixel Art</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-white/80 mb-2 flex items-center">
                  Sort By
                </label>
                <select className="w-full bg-white/5 border border-white/20 rounded-lg p-2 text-white focus:outline-none focus:border-primary-400">
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-4">
              <Button variant="secondary" size="sm">
                Reset Filters
              </Button>
              <Button variant="primary" size="sm">
                Apply Filters
              </Button>
            </div>
          </Card>}
        {/* Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {SAMPLE_IMAGES.map(image => <Card key={image.id} variant="default" hover className="overflow-hidden aspect-square cursor-pointer" onClick={() => handleImageClick(image.id)}>
              <img src={image.url} alt={image.prompt} className="w-full h-full object-cover" />
            </Card>)}
        </div>
        {/* Image Modal */}
        {selectedImage && <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={closeModal}>
            <div className="bg-dark-200 rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
              <div className="relative">
                <img src={getSelectedImage()?.url} alt={getSelectedImage()?.prompt} className="w-full max-h-[70vh] object-contain" />
                <button className="absolute top-4 right-4 bg-black/50 rounded-full p-1 text-white/80 hover:text-white" onClick={closeModal}>
                  <XIcon size={20} />
                </button>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium text-lg mb-1">Image Details</h3>
                    <p className="text-white/70 text-sm">
                      {getSelectedImage()?.prompt}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="secondary" size="sm" icon={<DownloadIcon size={16} />}>
                      Download
                    </Button>
                    <Button variant="secondary" size="sm" icon={<HeartIcon size={16} />}>
                      Favorite
                    </Button>
                    <Button variant="secondary" size="sm" icon={<TrashIcon size={16} />}>
                      Delete
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-white/50">Created On</p>
                    <p>{getSelectedImage()?.date}</p>
                  </div>
                  <div>
                    <p className="text-white/50">Style</p>
                    <p>{getSelectedImage()?.style}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </Layout>;
};
export default Gallery;
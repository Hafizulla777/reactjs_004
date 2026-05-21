import React, { useState } from 'react';

const MediaGallery = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all'); // all, image, video

  // Mock data for your downloader website gallery
  const mediaItems = [
    {
      id: 1,
      type: 'image',
      title: 'Cinematic Mountain Peak',
      category: 'Nature',
      thumbnail: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80',
      resolution: '4K Ultra HD'
    },
    {
      id: 2,
      type: 'video',
      title: 'Cyberpunk City Traffic Loop',
      category: 'Urban',
      thumbnail: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80',
      duration: '0:15',
      resolution: '1080p'
    },
    {
      id: 3,
      type: 'image',
      title: 'Minimalist Ocean Waves',
      category: 'Abstract',
      thumbnail: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&w=800&q=80',
      resolution: '8K Resolution'
    },
    {
      id: 4,
      type: 'video',
      title: 'Neon Abstract Waveform',
      category: 'Motion Graphics',
      thumbnail: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
      duration: '0:24',
      resolution: '4K Ultra HD'
    },
    {
      id: 5,
      type: 'image',
      title: 'Futuristic Sports Car Concept',
      category: 'Automotive',
      thumbnail: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
      resolution: '1440p'
    },
    {
      id: 6,
      type: 'video',
      title: 'Serene Forest Stream Rain',
      category: 'Nature',
      thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
      duration: '1:00',
      resolution: '1080p'
    },
  ];

  // Filtering Logic based on Search Input & Category Tabs
  const filteredMedia = mediaItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeFilter === 'all' || item.type === activeFilter;
    return matchesSearch && matchesTab;
  });

  return (
    <section className="w-full bg-slate-900 py-16 px-4 sm:px-6 lg:px-8 font-sans min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
            Discover Trending <span className="text-blue-500">Media Downloads</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base">
            Search and view historical live media links processed by users across our platforms.
          </p>
        </div>

        {/* Dynamic Controls Row (Search Bar + Filters) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-800">
          
          {/* Professional Search Bar */}
          <div className="relative w-full md:max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-slate-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search by keyword or tags (e.g. Nature)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm"
            />
          </div>

          {/* Filtering Buttons */}
          <div className="flex items-center space-x-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-end md:self-auto">
            {['all', 'image', 'video'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-lg capitalize transition-all ${
                  activeFilter === tab
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab === 'all' ? 'All Content' : `${tab}s`}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        {filteredMedia.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-slate-700 transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative aspect-16/10 overflow-hidden bg-slate-900">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  />
                  
                  {/* Video Badge Overlay */}
                  {item.type === 'video' && (
                    <span className="absolute bottom-3 right-3 bg-slate-950/80 backdrop-blur-sm text-white text-xs font-bold px-2 py-1 rounded-md flex items-center gap-1">
                      <svg className="w-3 h-3 fill-current text-blue-500" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                      {item.duration}
                    </span>
                  )}

                  {/* Resolution Badge Overlay */}
                  <span className="absolute top-3 left-3 bg-slate-950/60 backdrop-blur-sm text-slate-300 text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-md">
                    {item.resolution}
                  </span>

                  {/* Hover Overlay Mask with Actions */}
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button className="p-3 bg-white hover:bg-slate-100 text-slate-900 rounded-full shadow-lg active:scale-90 transition-transform">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>
                    <button className="p-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full shadow-lg active:scale-90 transition-transform shadow-blue-600/30">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Content Metadata Footer info */}
                <div className="p-4">
                  <span className="text-[11px] font-bold text-blue-500 uppercase tracking-widest">
                    {item.category}
                  </span>
                  <h3 className="text-sm font-semibold text-white mt-1 truncate">
                    {item.title}
                  </h3>
                </div>

              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-20 bg-slate-950 rounded-2xl border border-slate-800">
            <svg className="w-12 h-12 text-slate-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-lg font-medium text-white">No media files found</h3>
            <p className="text-slate-500 text-sm mt-1">Try tweaking your search keywords or clearing active filters.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default MediaGallery;
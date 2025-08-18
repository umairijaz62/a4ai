import Footer from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { newsitems } from '@/constant/newsitem';
import React from 'react';

const NewsPage = () => {


  return (
    <div className="min-h-screen bg-blue-50 ">
        <Navbar />
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
              Latest News & Updates
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Stay updated with our recent activities, achievements, and educational initiatives
            </p>
          </div>
        </div>
      </div>

      {/* News Items Section */}
      <div className="max-w-7xl mx-auto px-6 py-16" >
        <div className="space-y-20">
          {newsitems.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image Section */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl opacity-40 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="aspect-video bg-gray-100">
                      <img
                        src={item.image}
                        alt={`News item ${index + 1}`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PGNpcmNsZSBjeD0iMzAwIiBjeT0iMTgwIiByPSI0MCIgZmlsbD0iI2Q1ZDlkZiIvPjxwYXRoIGQ9Im0yODAgMTYwIDQwIDQwLTQwIDQweiIgZmlsbD0iI2E3YjJjMyIvPjx0ZXh0IHg9IjMwMCIgeT0iMjUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTYiIGZpbGw9IiNhN2IyYzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2">
                <div className="space-y-6">
                  {/* News Number Badge */}
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="h-px bg-gradient-to-r from-blue-500 to-transparent flex-1"></div>
                  </div>

                  {/* Description */}
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 text-lg leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Date extraction and highlighting */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    
                    {/* Organization Tags */}
                    {item.description.includes('NUST') && (
                      <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                        🏛️ Murabbi
                      </span>
                    )}
                    {item.description.includes('AI') && (
                      <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold">
                        🤖 AI
                      </span>
                    )}
                    {item.description.includes('Workshop') && (
                      <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold">
                        🛠️ Workshop
                      </span>
                    )}
                    {item.description.includes('Camp') && (
                      <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-semibold">
                        🏕️ Camp
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;
import React from 'react';

const Gallery = () => (
  <div className="container mx-auto p-8 bg-blue-50">
    <h2 className="text-3xl font-bold text-primary mb-4">Galeri</h2>
    <div className="grid grid-cols-3 gap-4">
      <img src="tg.jpg" alt="Gambar 1" className="w-full h-auto rounded-md shadow-lg" />
      <img src="mg.jpg" alt="Gambar 2" className="w-full h-auto rounded-md shadow-lg" />
      <img src="mg2.jpg" alt="Gambar 3" className="w-full h-auto rounded-md shadow-lg" />
    </div>
  </div>
);

export default Gallery;

import React from 'react';

const Home = () => (
  <div className="container mx-auto p-8 bg-blue-50">
    <div className="flex items-center">
      <img src="me.jpg" alt="Profil" className="w-32 h-32 rounded-full border-4 border-blue-500 mr-6" />
      <div>
        <h1 className="text-4xl font-bold text-primary mb-2">Hello!</h1>
        <p className="text-lg text-gray-700">Saya Najib, seorang Mahasiswa. Selamat datang di profil saya. Di sini Anda dapat mengetahui lebih lanjut tentang saya, hobi, prestasi, dan lainnya.</p>
      </div>
    </div>
  </div>
);

export default Home;

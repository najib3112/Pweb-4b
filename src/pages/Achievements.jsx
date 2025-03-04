import React from 'react';

const Achievements = () => (
  <div className="container mx-auto p-8 bg-blue-50">
    <h2 className="text-3xl font-bold text-primary mb-4">Prestasi Saya</h2>
    <table className="min-w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">#</th>
          <th className="border border-gray-300 px-4 py-2">Prestasi</th>
          <th className="border border-gray-300 px-4 py-2">Tahun</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">00</td>
          <td className="border border-gray-300 px-4 py-2">Top Global Barats</td>
          <td className="border border-gray-300 px-4 py-2">3030</td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">000</td>
          <td className="border border-gray-300 px-4 py-2">Rank Immortal</td>
          <td className="border border-gray-300 px-4 py-2">3029</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Achievements;

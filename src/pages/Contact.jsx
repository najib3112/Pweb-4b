import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form terkirim!');
    // Anda bisa menambahkan logika untuk mengirim data ke backend di sini
  };

  return (
    <div className="container mx-auto p-8 bg-blue-50">
      <h2 className="text-3xl font-bold text-primary mb-4">Kontak Saya</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2">Nama</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Masukkan nama"
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Masukkan email"
          />
        </div>
        <div>
          <label className="block mb-2">Pesan</label>
          <textarea 
            value={message} 
            onChange={(e) => setMessage(e.target.value)} 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Masukkan pesan"
            rows="4"
          />
        </div>
        <button type="submit" className="px-6 py-3 bg-primary text-white rounded-md hover:bg-blue-700">Kirim</button>
      </form>
    </div>
  );
};

export default Contact;

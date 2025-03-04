import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex space-x-8 text-white font-semibold">
        <li><Link to="/" className="hover:text-yellow-500">Home</Link></li>
        <li><Link to="/hobbies" className="hover:text-yellow-500">Hobi</Link></li>
        <li><Link to="/gallery" className="hover:text-yellow-500">Galeri</Link></li>
        <li><Link to="/achievements" className="hover:text-yellow-500">Prestasi</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-500">Kontak</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

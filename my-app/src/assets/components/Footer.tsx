import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Online German Classes</h3>
            <p className="text-sm">
              Empowering learners worldwide through accessible online education.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li>
                <a href="#" className="hover:text-blue-400">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2024 Danke Schon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto bg-white shadow-md">
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Footer Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">Kiwitter</h2>
              <p className="text-gray-400 mt-2">
                Connecting the world, one tweet at a time.
              </p>
            </div>

            {/* Footer Links */}
            <div className="mt-6 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700 mt-6 pt-6 text-center md:text-left">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Kiwitter. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

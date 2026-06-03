import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
     <footer className="w-full bg-gray-900 text-gray-200 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
          <p className="text-sm">Email:almamunab2001@gmail.com</p>
          <p className="text-sm">Phone: +8801785972741</p>
          <p className="text-sm">Address: tarash, sirajgonj, Bangladesh</p>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Social Links</h2>
          <div className="flex flex-col gap-2 text-sm">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Twitter
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex items-end md:justify-end">
          <p className="text-sm">
            © {year} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

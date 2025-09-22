import React from 'react';
import { Link } from 'react-router-dom';
export function Footer() {
  return <footer className="py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div className="mb-6">
              <img src="/rymaxus-logo-white.png" alt="Rymaxus Logo" className="h-8" />
            </div>
            <p className="text-gray-400 mb-6">
              Creating unforgettable brand experiences through innovative
              experiential marketing.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Services', 'Case Studies', 'Contact'].map(item => <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {['Live Activations', 'Brand Storytelling', 'Digital Installations', 'Influencer Partnerships', 'Event Production'].map(service => <li key={service}>
                  <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>)}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex">
              <input type="email" placeholder="Your email" className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-purple-500 text-white" />
              <button type="submit" className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-r-lg text-white font-medium">
                Send
              </button>
            </form>
          </div>
        </div>
        
        {/* Legal Links */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} Rymaxus. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>;
}
import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isStandalonePage = location.pathname !== '/';
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const shouldShowBackground = isStandalonePage || isScrolled;
  
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${shouldShowBackground ? 'bg-gradient-to-b from-black to-[#0E0B1F] backdrop-blur-md py-3 border-b border-gray-800/50' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold">
          <img src="/rymaxus-logo-white.png" alt="Rymaxus Logo" className="h-8 md:h-10" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {['About', 'Services', 'Case Studies', 'Contact'].map(item => <li key={item}>
                <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white hover:text-glow-blue transition-all">
                  {item}
                </a>
              </li>)}
          </ul>
        </nav>
        <button className="md:hidden text-gray-300" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      {isMobileMenuOpen && <div className="md:hidden bg-gradient-to-b from-black to-[#0E0B1F] backdrop-blur-lg absolute top-full left-0 right-0 border-t border-gray-800/50">
          <nav className="container mx-auto px-4 py-5">
            <ul className="flex flex-col gap-5">
              {['About', 'Services', 'Case Studies', 'Contact'].map(item => <li key={item}>
                  <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-gray-300 hover:text-white block py-2" onClick={() => setIsMobileMenuOpen(false)}>
                    {item}
                  </a>
                </li>)}
            </ul>
          </nav>
        </div>}
    </header>;
}
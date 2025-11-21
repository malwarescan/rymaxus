import React, { useEffect, useRef } from 'react';
import { ArrowDownIcon } from 'lucide-react';
export function Hero() {
  const glowRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        glowRef.current.style.setProperty('--x', `${x * 100}%`);
        glowRef.current.style.setProperty('--y', `${y * 100}%`);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return <section className="relative h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background gradient with interactive glow */}
      <div ref={glowRef} className="absolute inset-0 bg-gradient-to-br from-[#0E0B1F] via-[#1A1245] to-[#0E0B1F] z-0" style={{
      '--x': '50%',
      '--y': '50%'
    } as React.CSSProperties}>
        {/* Animated glow spot */}
        <div className="absolute w-[60vw] h-[60vw] rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-[100px] z-0" style={{
        left: 'var(--x)',
        top: 'var(--y)',
        transform: 'translate(-50%, -50%)'
      }} />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Tagline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
          <span className="block">Experiences That</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
            Move People
          </span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
          Creating unforgettable brand moments through innovative retail
          marketing.
        </p>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDownIcon className="w-6 h-6 text-gray-400" />
      </div>
    </section>;
}
import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const caseStudies = [{
    title: 'Stronger Membership. Smarter Connections.',
    client: "BJ's Wholesale Club",
    description: 'BJ\'s Wholesale Club saw comparable sales surge 34% in Q2 FY2025, with total net sales reaching $20.6 billion for fiscal 2024 and membership fee income rising 7.9%. Through in-store marketing excellence, Rymaxus-partnered D2C brands connect with over 8 million active members at the point of purchase with personalized, face-to-face engagement.',
    results: ['34% surge in comparable sales (Q2 FY2025)', '$20.6B total net sales for fiscal 2024', '7.9% increase in membership fee income', '8M+ active members reached at point of purchase']
  }, {
    title: 'Curated Scale Meets In-Store Excellence.',
    client: 'Costco',
    description: 'Costco closed fiscal 2024 with $250 billion in total net sales, a 5% year-over-year increase, driven by exceptional member engagement. Rymaxus collaborations integrate exclusive, high-velocity items into Costco\'s curated catalog, driving faster sell-through rates through strategic in-store marketing and personalized member engagement.',
    results: ['$250B total net sales for fiscal 2024', '5% year-over-year increase', 'Faster sell-through rates', 'Enhanced member engagement']
  }, {
    title: 'Direct-to-Consumer Marketing in Wholesale.',
    client: "Sam's Club",
    description: 'We specialize in direct-to-consumer marketing within the wholesale scene, serving as the in-store marketing team for large brands within Sam\'s Club retail spaces. We finish the customer journey with face-to-face assurance, connecting brands with members at the point of decision through personalized, in-store engagement and expert product demonstrations.',
    results: ['Face-to-face customer engagement', 'Point-of-decision connections', 'Personalized in-store experiences', 'Expert product demonstrations']
  }];
  const nextSlide = () => {
    setActiveIndex(prev => prev === caseStudies.length - 1 ? 0 : prev + 1);
  };
  const prevSlide = () => {
    setActiveIndex(prev => prev === 0 ? caseStudies.length - 1 : prev - 1);
  };
  return <section className="py-24 relative" id="case-studies">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Case Studies
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-4">
            Retail Success
          </p>
          <p className="text-lg text-gray-400 mb-4">
            Global brands see measurable success when they collaborate with us. From higher conversion and payment approval rates to faster processing speeds. Discover their stories here.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          {caseStudies.map((study, index) => <div key={index} className={`transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
              <div className="grid md:grid-cols-1 gap-8 items-center">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800 w-full">
                  <span className="text-sm text-purple-400 font-semibold">
                    {study.client}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">
                    {study.title}
                  </h3>
                  <p className="text-gray-300 mb-8">{study.description}</p>
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-blue-400">
                      Results
                    </h4>
                    <ul className="space-y-2">
                      {study.results.map((result, idx) => <li key={idx} className="flex items-start">
                          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-1.5 mr-2"></span>
                          <span className="text-gray-300">{result}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>)}
          {/* Navigation controls */}
          <div className="absolute bottom-4 right-4 flex space-x-2">
            <button onClick={prevSlide} className="p-2 rounded-full bg-gray-800/80 hover:bg-purple-600/80 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button onClick={nextSlide} className="p-2 rounded-full bg-gray-800/80 hover:bg-blue-600/80 transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
          {/* Pagination indicators */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {caseStudies.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-2 h-2 rounded-full transition-all ${index === activeIndex ? 'w-8 bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gray-500'}`} />)}
          </div>
        </div>
      </div>
    </section>;
}
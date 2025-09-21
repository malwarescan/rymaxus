import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
export function CaseStudies() {
  const [activeIndex, setActiveIndex] = useState(0);
  const caseStudies = [{
    title: 'Immersive Tech Conference',
    client: 'TechGlobal',
    description: 'Created a multi-sensory experience for 5,000+ attendees with interactive installations and virtual reality demonstrations.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    results: ['45% increase in brand recall', '12,000+ social media impressions', 'Featured in 3 industry publications']
  }, {
    title: 'Summer Product Launch',
    client: 'Oceanic Beverages',
    description: 'Designed a beach activation tour across Florida featuring interactive projection mapping and influencer partnerships.',
    image: 'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    results: ['250% ROI', '85,000+ product samples distributed', '28% conversion to purchase']
  }, {
    title: 'Digital Art Experience',
    client: 'Modern Museum of Art',
    description: 'Developed an interactive digital installation that transformed visitor movements into stunning visual art displays.',
    image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    results: ['Record attendance of 45,000+ visitors', 'Average engagement time of 24 minutes', 'Featured in national press']
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
          <p className="text-xl text-gray-300">
            Explore our most impactful experiential marketing campaigns and
            their results.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-2xl">
          {caseStudies.map((study, index) => <div key={index} className={`transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="relative h-[300px] md:h-[500px] overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 opacity-70"></div>
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover transition-transform duration-10000 hover:scale-110" />
                </div>
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
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
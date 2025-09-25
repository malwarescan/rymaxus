import React from 'react';
import { Zap, Target, Globe } from 'lucide-react';
export function About() {
  return <section className="py-24 relative" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              About Rymaxus
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            At Rymaxus, we bridge the gap between brands and audiences through
            immersive, unforgettable experiences that resonate on a deeper
            level.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {[{
          icon: <Zap className="w-10 h-10 text-purple-500" />,
          title: 'Innovative Approach',
          description: 'We blend cutting-edge technology with creative storytelling to craft experiences that captivate and inspire.'
        }, {
          icon: <Target className="w-10 h-10 text-blue-500" />,
          title: 'Results Driven',
          description: 'Our retail strategies are designed to achieve measurable outcomes and meaningful connections.'
        }, {
          icon: <Globe className="w-10 h-10 text-purple-500" />,
          title: 'Florida Roots, Global Reach',
          description: 'Based in vibrant Florida, we bring local energy to global brands through our worldwide network.'
        }].map((item, index) => <div key={index} className="bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-purple-900/50 transition-all group">
              <div className="mb-5 transform group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>)}
        </div>
      </div>
      {/* Background decorative element */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>
    </section>;
}
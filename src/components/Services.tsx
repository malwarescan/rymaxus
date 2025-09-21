import React from 'react';
import { Users, MonitorSmartphone, Lightbulb, Radio, Award, ArrowRight } from 'lucide-react';
export function Services() {
  const services = [{
    icon: <Users className="w-8 h-8" />,
    title: 'Live Activations',
    description: 'Immersive brand experiences that create lasting impressions and drive audience engagement.'
  }, {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Brand Storytelling',
    description: 'Crafting compelling narratives that connect your brand with your audience on an emotional level.'
  }, {
    icon: <MonitorSmartphone className="w-8 h-8" />,
    title: 'Digital Installations',
    description: 'Interactive technology experiences that blend the physical and digital worlds.'
  }, {
    icon: <Radio className="w-8 h-8" />,
    title: 'Influencer Partnerships',
    description: 'Strategic collaborations that amplify your brand message through authentic voices.'
  }, {
    icon: <Award className="w-8 h-8" />,
    title: 'Event Production',
    description: 'End-to-end management of experiential events that exceed expectations.'
  }, {
    icon: <ArrowRight className="w-8 h-8" />,
    title: 'Custom Solutions',
    description: 'Tailored experiential marketing strategies designed for your specific brand objectives.'
  }];
  return <section className="py-24 relative" id="services">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Our Services
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            We offer a full spectrum of experiential marketing solutions to help
            your brand create meaningful connections.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => <div key={index} className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full bg-gradient-to-br from-gray-900 to-gray-800 p-8 border border-gray-800 rounded-xl group-hover:border-purple-500/50 transition-all">
                <div className="mb-6 p-3 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg w-fit group-hover:bg-gradient-to-br group-hover:from-purple-600/30 group-hover:to-blue-600/30 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="flex items-center text-sm font-semibold text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>)}
        </div>
      </div>
      {/* Background decorative elements */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] -z-10"></div>
    </section>;
}
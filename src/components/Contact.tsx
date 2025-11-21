import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';
export function Contact() {
  return <section className="py-24 relative" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
              Let's Create Together
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300">
            Ready to create unforgettable brand experiences? Get in touch with
            our team.
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="p-3 bg-purple-900/20 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Location</h4>
                  <p className="text-gray-400">
                    Sarasota, Florida
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-blue-900/20 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Phone</h4>
                  <p className="text-gray-400">941-477-8166</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="p-3 bg-purple-900/20 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
                  <p className="text-gray-400">hr@rymaxus.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Full Name
                </label>
                <input type="text" id="name" className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email Address
                </label>
                <input type="email" id="email" className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea id="message" rows={4} className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white" placeholder="Tell us about your project"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-bold text-lg transition-all hover:shadow-glow relative overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center">
                  Create Your Experience
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Background decorative element */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#0E0B1F] to-transparent -z-10"></div>
    </section>;
}
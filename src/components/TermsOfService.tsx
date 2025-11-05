import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export function TermsOfService() {
  return (
    <div className="bg-gradient-to-b from-black to-[#0E0B1F] text-white min-h-screen">
      <Navbar />

      {/* Content */}
      <div className="container mx-auto px-4 py-24 max-w-4xl mt-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
          Terms of Service
        </h1>
        
        <div className="prose prose-invert max-w-none">
          <p className="text-gray-300 mb-6">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
            <p className="text-gray-300 mb-4">
              By accessing and using Rymaxus services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">2. Use License</h2>
            <p className="text-gray-300 mb-4">
              Permission is granted to temporarily download one copy of Rymaxus materials for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-4 space-y-2">
              <li>modify or copy the materials</li>
              <li>use the materials for any commercial purpose or for any public display</li>
              <li>attempt to reverse engineer any software contained on the website</li>
              <li>remove any copyright or other proprietary notations from the materials</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">3. Services</h2>
            <p className="text-gray-300 mb-4">
              Rymaxus provides retail marketing services including but not limited to live activations, brand storytelling, digital installations, influencer partnerships, and event production. All services are provided subject to separate service agreements.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">4. Disclaimer</h2>
            <p className="text-gray-300 mb-4">
              The materials on Rymaxus's website are provided on an 'as is' basis. Rymaxus makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">5. Limitations</h2>
            <p className="text-gray-300 mb-4">
              In no event shall Rymaxus or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Rymaxus's website, even if Rymaxus or a Rymaxus authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">6. Revisions</h2>
            <p className="text-gray-300 mb-4">
              Rymaxus may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">7. Contact Information</h2>
            <p className="text-gray-300 mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="text-gray-300">
              Email: hr@rymaxus.com<br />
              Phone: +1 (239) 233-2691<br />
              Address: Miami Design District, FL 33137
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}

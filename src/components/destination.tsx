"use client";

import { Rocket, Sparkles } from "lucide-react";

export default function DestinationSection() {
  return (
    <div className="min-h-screen bg-transparent text-white py-16 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <h1 className="text-yellow-400 text-5xl md:text-7xl font-bold text-center mb-16">
          DESTINATION
        </h1>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-8">
            <div>
              <h2 className="text-yellow-400 text-2xl font-semibold mb-2">
                Venue
              </h2>
              <p className="text-xl md:text-2xl">
                Thadomal Shahani Engineering College, Mumbai
              </p>
              <p className="text-gray-400">Maharashtra</p>
            </div>

            <div>
              <h2 className="text-yellow-400 text-2xl font-semibold mb-2">
                Date and Time
              </h2>
              <p className="text-xl">15 - 16 September 2023</p>
              <p className="text-xl">10 AM Onwards</p>
            </div>

            <div>
              <h2 className="text-yellow-400 text-2xl font-semibold mb-2">
                Extra Information
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Amidst the celestial expanse, the chosen venue for our epic
                event awaits. Embark on a journey through hyperspace and
                navigate to the Galactic Gathering Point. Let the Force guide
                your path as you join us in the cosmic celebration of innovation
                and inspiration. May the stars be your guide!
                <Rocket className="inline ml-2" />
                <Sparkles className="inline ml-2" />
              </p>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg border-4 border-yellow-400">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.4533797427337!2d72.83361531490056!3d19.054673487097343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c904d1f59205%3A0x4c2cc0a440cfbed6!2sThadomal%20Shahani%20Engineering%20College!5e0!3m2!1sen!2sin!4v1625147150000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

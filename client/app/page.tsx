"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  const yellowColor = "#FFC700";
  const pinkColor = "#FDE7F3";

  return (
    <main className="min-h-screen bg-black text-white flex flex-col select-none" style={{ backgroundColor: "#000" }}>
      {/* Local Styles */}
      <style jsx global>{`
        /* Local Override to ensure black background and no glow for this page */
        html, body {
          background-color: #000 !important;
          color: #fff !important;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        * {
          box-shadow: none !important;
        }
      `}</style>

      {/* Hero Section */}
      <section className="h-screen flex flex-col relative">
        <Navbar />

        <div className="flex-1 flex flex-col relative justify-center">
          <div className="flex-1 flex flex-col items-center justify-center -mt-[5vw]">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative flex items-end leading-[0.7] select-none"
              style={{
                color: yellowColor,
                fontFamily: 'var(--font-helvetica-neue)',
              }}
            >
              {/* Huge CEC Text */}
              <div className="text-[52vw] font-bold tracking-tighter flex italic" style={{ fontStyle: 'italic' }}>
                <span className="relative inline-block px-[0.01em]">
                  c
                  <span
                    className="absolute bottom-[20%] left-[14%] text-[1.8vw] text-black tracking-tighter font-bold z-30 not-italic"
                    style={{ transform: 'skewX(2deg)' }}
                  >
                    campus
                  </span>
                </span>
                <span className="relative inline-block px-[0.01em]">
                  e
                  <span
                    className="absolute bottom-[20%] left-[17%] text-[1.8vw] text-black tracking-tighter font-bold z-30 not-italic"
                    style={{ transform: 'skewX(2deg)' }}
                  >
                    events
                  </span>
                </span>
                <span className="relative inline-block px-[0.01em]">
                  c
                  <span
                    className="absolute bottom-[20%] left-[14%] text-[1.8vw] text-black tracking-tighter font-bold z-30 not-italic"
                    style={{ transform: 'skewX(2deg)' }}
                  >
                    commission
                  </span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Tagline */}
          <div className="absolute bottom-[5%] right-12 text-right max-w-[400px]">
            <p className="text-white text-[0.8rem] font-medium leading-[1.2] opacity-90 tracking-tight">
              bringing free campus entertainment to ucla since '65.
            </p>
          </div>
        </div>
      </section>

      {/* Most Recent / Upcoming Section */}
      <section className="h-screen w-full flex flex-row">
        {/* Most Recent Side */}
        <div
          className="flex-1 flex flex-col items-center justify-center p-8 transition-colors duration-300"
          style={{ backgroundColor: pinkColor }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h2
              className="text-[7.5vw] font-bold tracking-tighter mb-12 text-black lowercase leading-none"
              style={{ fontFamily: 'var(--font-helvetica-neue)' }}
            >
              most recent
            </h2>
            <div className="w-[30vw] aspect-square bg-[#D9D9D9] shadow-sm relative overflow-hidden cursor-pointer group">
              <Image
                src="/recent_thumbnail.jpg"
                alt="Most Recent Event"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>

        {/* Upcoming Side */}
        <div
          className="flex-1 flex flex-col items-center justify-center p-8 transition-colors duration-300"
          style={{ backgroundColor: yellowColor }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex flex-col items-center"
          >
            <h2
              className="text-[7.5vw] font-bold tracking-tighter mb-12 text-black lowercase leading-none"
              style={{ fontFamily: 'var(--font-helvetica-neue)' }}
            >
              upcoming
            </h2>
            <div className="w-[30vw] aspect-square bg-[#D9D9D9] shadow-sm relative overflow-hidden cursor-pointer group">
              <Image
                src="/upcoming_thumbnail.jpg"
                alt="Upcoming Event"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

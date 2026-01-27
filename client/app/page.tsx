"use client";

import { motion } from "framer-motion";
import Navbar from "./components/Navbar";

export default function Home() {
  const yellowColor = "#FFC700";

  return (
    <main className="min-h-screen bg-black text-white flex flex-col overflow-hidden select-none" style={{ backgroundColor: "#000" }}>
      {/* Local Styles */}
      <style jsx global>{`
        /* Local Override to ensure black background and no glow for this page */
        html, body {
          background-color: #000 !important;
          color: #fff !important;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
        * {
          box-shadow: none !important;
        }
      `}</style>

      <Navbar />

      {/* Main Content Area */}
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
    </main>
  );
}

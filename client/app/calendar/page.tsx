"use client";

import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";

export default function CalendarPage() {
    return (
        <main className="min-h-screen bg-black text-white flex flex-col overflow-hidden" style={{ backgroundColor: "#000" }}>
            {/* Local Styles */}
            <style jsx global>{`
        html, body {
          background-color: #000 !important;
          color: #fff !important;
          margin: 0;
          padding: 0;
        }
      `}</style>

            <Navbar />

            <div className="flex-1 p-4 md:p-8 flex items-center justify-center">
                <div className="w-full h-full max-h-[90vh] max-w-[90vw]">
                    <Calendar />
                </div>
            </div>
        </main>
    );
}

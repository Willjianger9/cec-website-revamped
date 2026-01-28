import React from 'react';
import { motion } from 'framer-motion';

const Mosaic = () => {
    // Color palette loosely based on the reference:
    // Bright retro/pop colors: Oranges, Pinks, Yellows, Blues, Greens
    const colors = [
        // Row 1
        "#FF5733", // Orange
        "#FF69B4", // Pink
        "#FFC300", // Yellow
        "#B0E0E6", // Light Blue
        "#00C853", // Green

        // Row 2
        "#FFC300", // Yellow
        "#FF3333", // Red
        "#FF8C00", // Dark Orange
        "#FFB6C1", // Light Pink
        "#FF1493", // Deep Pink

        // Row 3 (Offset)
        "#0000FF", // Blue
        "#FF69B4", // Pink
        "#FFD700", // Gold
        "#FF4500", // Red-Orange
        "#FFA500", // Orange

        // Row 4
        "#4169E1", // Royal Blue
        "#FFC0CB", // Pink
        "#FFFF00", // Yellow
        "#FF6347", // Tomato
        "#FF7F50"  // Coral
    ];
    const extraColors = [
        "#FF69B4", "#00BFFF", "#FFD700", "#32CD32", "#FF4500",
        "#9370DB", "#00FA9A", "#FF1493", "#1E90FF", "#FFFFE0"
    ];

    const allColors = [...colors, ...extraColors];

    return (
        <section className="h-screen w-full relative overflow-hidden bg-black font-helvetica">
            {/* Grid Background */}
            <div className="absolute inset-0 grid grid-cols-3 grid-rows-8 md:grid-cols-5 md:grid-rows-4 h-full w-full">
                {allColors.map((color, idx) => (
                    <div
                        key={idx}
                        className="w-full h-full transition-colors duration-500"
                        style={{ backgroundColor: color }}
                    />
                ))}
            </div>

            {/* Overlapping Text Group */}
            <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none text-black">
                <div className="relative w-full max-w-[90vw] aspect-[4/3] flex items-center justify-center">
                    {/* music */}
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        className="text-[18vw] leading-[0.8] font-bold tracking-tighter lowercase absolute left-[5%] top-[10%] z-10"
                    >
                        music
                    </motion.h1>

                    {/* film */}
                    <motion.h1
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-[18vw] leading-[0.8] font-bold tracking-tighter lowercase absolute right-[5%] top-[10%] z-10 text-right"
                    >
                        film
                    </motion.h1>

                    {/* concerts */}
                    <motion.h1
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-[22vw] leading-[0.8] font-bold tracking-tighter lowercase absolute left-[-5%] top-[35%] z-20"
                    >
                        concerts
                    </motion.h1>

                    {/* speakers */}
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-[22vw] leading-[0.8] font-bold tracking-tighter lowercase absolute bottom-[10%] right-[-3%] z-30"
                    >
                        speakers
                    </motion.h1>
                </div>
            </div>
        </section>
    );
};

export default Mosaic;

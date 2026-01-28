"use client";

import React, { useState } from 'react';
import {
    format,
    addMonths,
    subMonths,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay
} from 'date-fns';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data Structure for Events
export type CalendarEvent = {
    id: string;
    date: Date;
    title: string; // Not always shown if image used
    imageUrl?: string;
    rotation?: number; // For the tilted effect
    type: 'green-pin' | 'pink-pin' | 'tape' | 'sticker'; // Style of attachment
};

const today = new Date();
const currentYear = today.getFullYear();
const currentMonthIdx = today.getMonth();

const SAMPLE_EVENTS: CalendarEvent[] = [
    {
        id: '1',
        date: new Date(currentYear, currentMonthIdx, 15),
        title: 'The Master',
        imageUrl: '/upcoming_thumbnail.jpg',
        rotation: -5,
        type: 'pink-pin'
    },
    {
        id: '2',
        date: new Date(currentYear, currentMonthIdx, 28),
        title: 'A Woman Under The Influence',
        imageUrl: '/recent_thumbnail.jpg',
        rotation: 5,
        type: 'tape'
    }
];

const Calendar = () => {
    const [currentMonth, setCurrentMonth] = useState(new Date());

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    // Calendar Generation Logic
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const calendarDays = eachDayOfInterval({
        start: startDate,
        end: endDate,
    });

    const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div className="w-full h-full flex flex-col p-4 md:p-8 bg-[#FFE4E1] text-black font-helvetica rounded-3xl border border-black overflow-hidden relative selection:bg-black selection:text-white">
            {/* Header */}
            <div className="flex justify-between items-end mb-4 border-b border-black pb-2">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    {format(currentMonth, 'MMMM')}
                </h1>
                <div className="flex gap-4 mb-2">
                    <button onClick={prevMonth} className="hover:scale-110 transition-transform">←</button>
                    <button onClick={nextMonth} className="hover:scale-110 transition-transform">→</button>
                </div>
            </div>

            {/* Days Header */}
            <div className="grid grid-cols-7 border-b border-black">
                {weekDays.map((day, index) => (
                    <div key={`${day}-${index}`} className="text-center font-bold py-2 border-r border-black last:border-r-0">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="flex-1 grid grid-cols-7 grid-rows-5 md:grid-rows-5">
                {calendarDays.map((day, dayIdx) => {
                    // Find events for this day
                    const daysEvents = SAMPLE_EVENTS.filter(e => isSameDay(e.date, day));

                    // Check if day is in current month (for styling opacity)
                    const isCurrentMonth = isSameMonth(day, currentMonth);

                    // Border logic: Right border for all except last column. Bottom border for all rows except last? 
                    // Actually CSS Grid `gap-px` approach with bg-black is easiest for internal borders, 
                    // or manually applying borders.
                    const isLastCol = (dayIdx + 1) % 7 === 0;
                    // Approximate row calculation if fixed 5 rows, but days vary (5 or 6 weeks). 
                    // Let's rely on individual cell borders. 

                    // Check if day is today
                    const isToday = isSameDay(day, new Date());

                    return (
                        <div
                            key={day.toString()}
                            className={`
                relative p-2 min-h-[100px] border-black border-b 
                ${!isLastCol ? 'border-r' : ''}
                ${!isCurrentMonth ? 'opacity-25' : ''}
                hover:bg-black/5 transition-colors group
              `}
                        >
                            {/* Day Number */}
                            <span
                                className={`
                                    font-medium text-lg w-8 h-8 flex items-center justify-center rounded-full
                                    ${isToday ? 'bg-black text-white' : ''}
                                `}
                            >
                                {format(day, 'd')}
                            </span>

                            {/* Event Rendering */}
                            {daysEvents.map(event => (
                                <div
                                    key={event.id}
                                    className="absolute z-10 cursor-pointer flex justify-center items-center hover:z-50"
                                    style={{
                                        top: '15%',
                                        left: '50%',
                                        transform: `translateX(-50%) rotate(${event.rotation || 0}deg)`,
                                        width: '85%',
                                        transformOrigin: 'center center' // Ensure rotation happens around center
                                    }}
                                >
                                    {/* Pin/Tape Decoration placeholder */}
                                    <div className="w-16 h-20 bg-yellow-400 shadow-md p-1 border border-black/10 transition-transform duration-300 hover:scale-110 origin-center">
                                        {/* Placeholder for event content */}
                                        {event.imageUrl ? (
                                            <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url(${event.imageUrl})` }} />
                                        ) : (
                                            <span className="text-[10px] leading-tight block">{event.title}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Calendar;

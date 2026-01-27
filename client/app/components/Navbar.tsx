"use client";

import React from "react";
import {
    SiInstagram,
    SiSpotify,
    SiYoutube,
    SiTiktok
} from "react-icons/si";
import { FiSearch } from "react-icons/fi";
import Image from "next/image";

const yellowColor = "#FFC700";

export default function Navbar() {
    return (
        <nav
            className="h-16 flex items-center justify-between px-6 border-b border-black z-50 shrink-0 select-none"
            style={{ backgroundColor: yellowColor }}
        >
            <div className="flex items-center space-x-6">
                {/* Logo */}
                <div className="hover:scale-105 transition-transform cursor-pointer overflow-hidden">
                    <Image
                        src="/cec_logo_square.png"
                        alt="CEC Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                        unoptimized
                    />
                </div>

                {/* Social Icons */}
                <div className="flex items-center space-x-5">
                    <SocialIcon Icon={SiInstagram} href="https://instagram.com" />
                    <SocialIcon Icon={SiSpotify} href="https://spotify.com" />
                    <SocialIcon Icon={SiYoutube} href="https://youtube.com" />
                    <SocialIcon Icon={SiTiktok} href="https://tiktok.com" />
                </div>
            </div>

            <div className="flex items-center space-x-8">
                <div className="flex space-x-8 text-black font-bold text-lg">
                    <a href="#" className="hover:opacity-70 transition-opacity">Calendar</a>
                    <a href="#" className="hover:opacity-70 transition-opacity">Archive</a>
                    <a href="#" className="hover:opacity-70 transition-opacity">About</a>
                </div>
            </div>
        </nav>
    );
}

function SocialIcon({ Icon, href }: { Icon: React.ElementType, href: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:opacity-70 transition-opacity"
        >
            <Icon className="w-6 h-6" />
        </a>
    );
}

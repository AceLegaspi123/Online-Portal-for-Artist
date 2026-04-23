"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

// Import both versions of the logo
import logoLight from "../../logo-light.png";
import logoDark from "../../logo-dark.png";

export default function Logo() {
    // 1. Initialize state to track the theme
    const [currentTheme, setCurrentTheme] = useState<string>("dark");

    useEffect(() => {
        // 2. Check the class on the <html> element or read from localStorage
        const theme = document.documentElement.classList.contains("light") ? "light" : "dark";
        setCurrentTheme(theme);

        // 3. Optional: Create an observer to watch for theme changes without a refresh
        const observer = new MutationObserver(() => {
            const updatedTheme = document.documentElement.classList.contains("light") ? "light" : "dark";
            setCurrentTheme(updatedTheme);
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

        return () => observer.disconnect();
    }, []);

    return (
        <Link href="/">
            <Image 
                width={120}
                height={120}
                alt="ArtistryHub Logo"
                // 4. Ternary condition to switch source based on theme
                src={currentTheme === "light" ? logoLight : logoDark}
                className="w-25"
                priority // Ensures the logo loads immediately
            />
        </Link>
    );
}
"use client"

import { ThemeProviderProps } from "next-themes";
import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({children, ...props}: ThemeProviderProps) {
    return (
        <section>
            <NextThemesProvider {...props}>{children}</NextThemesProvider>
            
        </section>
    );
}
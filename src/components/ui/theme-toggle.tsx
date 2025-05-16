'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

export default function ThemeToggle({className}: {
    className?: string;
}) {
    const { setTheme, resolvedTheme } = useTheme()
    const [isDark, setIsDark] = useState(resolvedTheme == "dark");
    return (
        <button
            onClick={() => {
                setIsDark(!isDark)
                setTheme(!isDark? "dark": "light")
            }}
            className={cn("w-10 hover:cursor-pointer h-10 flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 transition-colors duration-300 shadow-md", className)}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={isDark ? 'moon' : 'sun'}
                    initial={{ scale: 0.8, rotate: -90, opacity: 0 }}
                    animate={{ scale: 1, rotate: 0, opacity: 1 }}
                    exit={{ scale: 0.8, rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute"
                >
                    {isDark ? (
                        <Moon className="w-5 h-5 text-blue-500" />
                    ) : (
                        <Sun className="w-5 h-5 text-yellow-500" />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}

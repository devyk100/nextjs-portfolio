"use client"

import { useScrollProgress } from "@/hooks/use-scroll-progress";

export default function ScrollProgress() {
    const scrollProgress = useScrollProgress();

    return (<>
        <div className="fixed top-0 left-0 h-[4px] w-full bg-transparent z-[99999]">
            <div
                className="h-full bg-primary transition-all duration-100 ease-out"
                style={{ width: `${scrollProgress}%` }}
            />
        </div>
    </>)
}
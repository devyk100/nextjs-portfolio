"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useTheme } from "next-themes";


export const MagneticCursor = () => {
    const { theme } = useTheme();
    const [isActive, setIsActive] = useState(false);
    const [targetRect, setTargetRect] = useState<DOMRect | null>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 400, damping: 40 });
    const springY = useSpring(mouseY, { stiffness: 400, damping: 40 });

    const magneticTargets = useRef<NodeListOf<HTMLElement>>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (targetRect) {
                // Lock cursor to center of target
                mouseX.set(targetRect.left + targetRect.width / 2);
                mouseY.set(targetRect.top + targetRect.height / 2);
            } else {
                // Free follow
                mouseX.set(e.clientX);
                mouseY.set(e.clientY);
            }
        };

        const handleEnter = (e: MouseEvent) => {
            const target = e.currentTarget as HTMLElement;
            setTargetRect(target.getBoundingClientRect());
            setIsActive(true);
        };

        const handleLeave = () => {
            setTargetRect(null);
            setIsActive(false);
        };

        magneticTargets.current = document.querySelectorAll(".magnetic");

        magneticTargets.current.forEach((el) => {
            el.addEventListener("mouseenter", handleEnter);
            el.addEventListener("mouseleave", handleLeave);
        });

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            magneticTargets.current?.forEach((el) => {
                el.removeEventListener("mouseenter", handleEnter);
                el.removeEventListener("mouseleave", handleLeave);
            });
        };
    }, [targetRect]);

    return (
        <>
            <motion.div
                className="pointer-events-none fixed  z-[9999] mix-blend-difference rounded-sm "
                style={{
                    backgroundColor: theme === "dark" ? "#fff" : "#e2e8f0", // slate-100
                    border: `2px solid ${theme === "dark" ? "#fff" : "#e2e8f0"}`,
                    translateX: springX,
                    translateY: springY,
                    x: "-50%",
                    y: "-50%",
                }}
                animate={{
                    width: isActive ? targetRect?.width as number + 3 : 13,
                    height: isActive ? targetRect?.height as number + 3: 13,
                    // borderRadius: isActive ? "16px" : "20px",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
            />
        </>
    );
};

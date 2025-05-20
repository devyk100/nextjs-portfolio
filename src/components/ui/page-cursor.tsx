// components/PageCursor.tsx
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type CursorMode = "default" | "hover";

const PageCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { damping: 20, stiffness: 300 });
  const springY = useSpring(cursorY, { damping: 20, stiffness: 300 });

  const [cursorMode, setCursorMode] = useState<CursorMode>("default");

  const magneticRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  // Optional: Magnetic effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      magneticRefs.current.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);

        const strength = Math.min(1, 150 / distance);

        el.style.transform = `translate(${dx * strength * 0.2}px, ${dy * strength * 0.2}px)`;
      });
    };

    const reset = () => {
      magneticRefs.current.forEach((el) => {
        el.style.transform = "translate(0px, 0px)";
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <>
      {/* Cursor Dot */}
      <motion.div
        className={`pointer-events-none fixed z-[9999] h-5 w-5 rounded-full border-2 ${
          cursorMode === "hover" ? "border-blue-500" : "border-white"
        }`}
        style={{
          translateX: springX,
          translateY: springY,
          x: "-50%",
          y: "-50%",
        }}
      />

      {/* Add this class to items you want to be magnetic */}
      <style>{`
        .magnetic {
          display: inline-block;
          transition: transform 0.2s ease;
        }
      `}</style>
    </>
  );
};

export default PageCursor;

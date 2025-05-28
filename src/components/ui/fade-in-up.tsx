"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function FadeInUp({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <div className="relative overflow-hidden"> {/* Ensures containment */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0.6 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
        style={{ willChange: "transform, opacity" }}
      >
        {children}
      </motion.div>
    </div>
  );
}

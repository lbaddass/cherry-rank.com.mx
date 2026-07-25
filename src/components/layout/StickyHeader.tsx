"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

export function StickyHeader() {
  const [visible, setVisible] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={reduceMotion ? { opacity: 1 } : { y: -64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduceMotion ? { opacity: 0 } : { y: -64, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed inset-x-0 top-0 z-50 h-16 border-b border-gray-200 bg-white/80 backdrop-blur-md"
        >
          <div className="mx-auto flex h-full max-w-container items-center justify-between px-6 md:px-8 lg:px-12">
            <Link
              href="/"
              className="font-display text-lg font-bold tracking-tight text-ink focus-ring rounded-sm"
              data-cursor-hover
            >
              Cherry Rank
            </Link>
            <Button href="/diagnostico" size="sm" variant="primary">
              Auditoría Gratis
            </Button>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

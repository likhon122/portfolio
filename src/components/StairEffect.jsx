"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";

const StairEffect = () => {
  const pathName = usePathname();
  return (
    <AnimatePresence mode="wait">
      <div key={pathName}>
        <div className=" h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-50 flex">
          <Stairs />
        </div>

        <motion.div
          className="h-screen w-screen fixed top-0 bg-primary pointer-events-none"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.7, duration: 0.2, ease: "easeInOut" }
          }}
        />
      </div>
    </AnimatePresence>
  );
};

export default StairEffect;

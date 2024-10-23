"use client";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const ServicesButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.4, duration: 0.2, ease: "easeIn" }
      }}
    >
      <div className="w-[40px] bg-white/80 h-[40px] md:w-[50px] md:h-[50px] rounded-full group-hover:bg-accent transition-all duration-500 flex items-center justify-center group-hover:rotate-[-90deg] cursor-pointer">
        <BsArrowDownRight className="text-primary text-2xl" />
      </div>
    </motion.div>
  );
};

export default ServicesButton;

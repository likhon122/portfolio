"use client";
import { animate, motion } from "framer-motion";

// Variants

const stairAnimations = {
  initial: {
    top: "0%"
  },
  animate: {
    top: "100%"
  },
  exit: {
    top: ["100%", "0%"]
  }
};

// Calculate the reverse index of the array

const reverseIndex = (index) => {
  const totalStep = 6;
  return totalStep - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render 6 motion of div each representing in step of the stairs 
    
    Each div will be the same animation define by the stairAnimations object

    The delay of each div will be calculated by the based on it's revers index ,

    Creating a staggered effect with decreasing delay for each subsequent step  
    */}

      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={stairAnimations}
          transition={{
            duration: 0.3,
            delay: 0.1 * reverseIndex(index),
            ease: "easeInOut"
          }}
          className="w-full h-full bg-black relative"
        />
      ))}
    </>
  );
};

export default Stairs;

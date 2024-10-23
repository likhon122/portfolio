"use client";
import { delay, motion } from "framer-motion";
import Image from "next/image";
import profileImage from "@/public/likhon-islam.jpg";
const Photo = () => {
  return (
    <>
      <div className="h-full w-full relative">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.1, ease: "easeIn" }
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.2, duration: 0.2, ease: "easeInOut" }
            }}
            className="w-[298px] h-[298px] xl:h-[350px] xl:w-[350px]"
          >
            <Image
              src={profileImage}
              priority
              quality={100}
              fill
              className=" rounded-full object-cover"
              alt="Likhon Islam Profile Image likhon islam"
            />
          </motion.div>
        </motion.div>

        {/* Image Animation */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 0.1, ease: "easeInOut" }
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.2, duration: 0.2, ease: "easeInOut" }
            }}
          >
            <motion.svg
              className="w-[300px] xl:w-[355px] h-[300px]  xl:h-[355px] z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              fill="transparent"
              viewBox="0 0 506 506"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.circle
                cx="253"
                cy="253"
                r="250"
                stroke="#00ff99"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                initial={{ strokeDasharray: "24 10 0 0" }}
                animate={{
                  strokeDasharray: [
                    "15 120 25 25",
                    "16 25 92 72",
                    "4 250 22 22"
                  ],
                  rotate: [120, 360]
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </motion.svg>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Photo;

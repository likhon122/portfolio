"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
const ResumeScrollArea = ({ experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.1, duration: 0.2, ease: "easeInOut" }
      }}
    >
      <ScrollArea className="h-[300px] md:h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-[30px]">
          {experience.items.map((item, index) => (
            <li
              key={index}
              className="flex flex-col bg-[#232329] h-[180px] md:h-[184px] py-4 px-6 md:py-6 md:px-10 rounded-xl items-start justify-center gap-1"
            >
              <span className="text-accent">{item.date}</span>
              <h3 className="text-base md:text-xl max-w-[260px] min-h-[60px]">
                {item.position}
              </h3>
              <div className="flex items-center gap-2 md:gap-3">
                <span className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] rounded-full bg-accent"></span>
                <h3 className="text-white/60 text-sm md:text-base">
                  {item.company}
                </h3>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </motion.div>
  );
};

export default ResumeScrollArea;

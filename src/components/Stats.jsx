"use client";
import CountUp from "react-countup";

const stats = [
  {
    title: "Years of Experience in Fiverr",
    count: 3
  },
  {
    title: "Project Completed",
    count: 5
  },
  {
    title: "Technologies Mastered",
    count: 6
  },
  {
    title: "Code Commit",
    count: 600
  }
];

const Stats = () => {
  return (
    <section>
      <div className="container mx-auto ">
        <div className="flex flex-wrap max-w-[80vw] mx-auto xl:max-w-none gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex gap-3 items-center xl:justify-start"
            >
              <CountUp
                end={stat.count}
                duration={5}
                delay={2}
                className="text-4xl xl:text-6xl font-extrabold"
              />
              <p
                className={`${
                  stat.title.length < 15 ? "max-w[100px]" : "max-w-[150px]"
                } leading-snug text-white/80`}
              >
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;

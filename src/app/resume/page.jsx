import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaDocker
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import ResumeScrollArea from "@/components/ResumeScrollArea";

// Function to generate metadata dynamically
export async function generateMetadata() {
  return {
    title: "Resume | Likhon Islam | Software Developer",
    description:
      "Explore the resume of Likhon Islam, a Full Stack Developer with 3 years of experience in web development. Specializing in React, Next.js, Node.js, and Tailwind CSS. Discover skills, experience, and education.",
    keywords:
      "Likhon Islam, Full Stack Developer, Resume, React, Next.js, Node.js, Tailwind CSS, web development",
    openGraph: {
      title: "Resume | Likhon Islam",
      description: "Explore my professional journey as a Full Stack Developer.",
      url: "https://likhonislam.me/resume",
      type: "website",
      images: [
        {
          url: "https://likhonislam.me/path-to-your-image.jpg", // Add a relevant image URL
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      site: "@your_twitter_handle", // Add your Twitter handle
      title: "Resume | Likhon Islam",
      description: "Explore my professional journey as a Full Stack Developer.",
      image: "https://likhonislam.me/path-to-your-image.jpg" // Add a relevant image URL
    }
  };
}

// About Me
const about = {
  title: "About Me",
  description:
    "I am Likhon Islam, a Full Stack Developer with a passion for learning and creating. I am a self-taught developer with a background in Computer Science. I have experience in building web applications using React, Next.js, Node.js, and Tailwind CSS. I am also familiar with Figma for designing user interfaces. I am currently looking for opportunities to work on exciting projects and expand my skill set.",
  info: [
    { fieldName: "Name", value: "Likhon Islam", isLink: false },
    { fieldName: "Email", value: "md.likhonislam2x@gmail.com", isLink: true },
    { fieldName: "Phone", value: "+8801622422800", isLink: true },
    { fieldName: "Location", value: "Kushtia, Bangladesh", isLink: false },
    {
      fieldName: "Experience",
      value: "3 years in web development Online Market place Fiverr",
      isLink: false
    },
    { fieldName: "Languages", value: "English, Bengali, Hindi", isLink: false },
    { fieldName: "Nationality", value: "Bangladeshi", isLink: false },
    { fieldName: "Freelance", value: "Available", isLink: false },
    {
      fieldName: "Website",
      value: "https://www.fiverr.com/fahim_hossen1",
      isLink: true
    }
  ]
};

// Experience
const experience = {
  icon: "/resume/badge.svg",
  title: "My Experience",
  description:
    "I have 3 years of experience in web development. I have worked on various projects and have experience in building web applications using React, Next.js, Node.js, and Tailwind CSS.",
  items: [
    {
      company: "Fiverr",
      position: "Freelancer",
      date: "2022 - Present"
    }
    // {
    //   company: "Dream It Solution",
    //   position: "Junior Frontend Developer",
    //   date: "2022 - 2023"
    // },
    // {
    //   company: "BD IT Agency",
    //   position: "Full Stack Developer",
    //   date: "2023 - 2024"
    // },
    // {
    //   company: "It Solution BD",
    //   position: "Full Stack Developer",
    //   date: "2024 - Present"
    // }
  ]
};

// Education Data
const education = {
  icon: "/resume/cap.svg",
  title: "My Education",
  description:
    "I have a background in Computer Science and I'm currently studying for a Diploma in Computer Science.",
  items: [
    {
      institution: "Taragunia Secondary High School",
      degree: "SSC in Humanities",
      date: "2021 - 2022"
    },
    {
      institution: "Kushtia Polytechnic Institute",
      degree: "Diploma in Computer Science",
      date: "2022 - Present"
    },
    {
      institution: "Open Source Programming",
      degree: "Full Stack Development",
      date: "2022 - Present"
    }
  ]
};

// Skills
const skills = {
  title: "My Skills",
  description:
    "I have experience in building web applications using React, Next.js, Node.js, and Tailwind CSS. I am also familiar with Figma for designing user interfaces.",
  items: [
    {
      name: "HTML",
      icon: <FaHtml5 />
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />
    },
    {
      name: "JavaScript",
      icon: <FaJs />
    },
    {
      name: "React",
      icon: <FaReact />
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs />
    },
    {
      name: "Figma",
      icon: <FaFigma />
    },
    {
      name: "Docker",
      icon: <FaDocker />
    }
  ]
};

const Resume = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-8 xl:py-0">
      <div className="container mx-auto px-4">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[40px] md:gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-4 md:gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full">
            {/* Experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] ">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h2 className="text-2xl md:text-4xl font-bold lg:text-start">
                    {experience.title}
                  </h2>
                  <p className="max-w-[600px] text-white/60 text-sm md:text-base lg:text-left">
                    {experience.description}
                  </p>
                </div>
                <ResumeScrollArea experience={experience} />
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h2 className="text-2xl md:text-4xl font-bold lg:text-start">
                    {education.title}
                  </h2>
                  <p className="max-w-[600px] text-white/60 text-sm md:text-base lg:text-left">
                    {education.description}
                  </p>
                </div>

                <ScrollArea className="h-[400px] md:h-[400px] lg:h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col bg-[#232329] h-[180px] md:h-[184px] py-4 px-6 md:py-6 md:px-10 rounded-xl items-start justify-center gap-1"
                      >
                        <span className="text-accent">{item.date}</span>
                        <h3 className="text-base md:text-xl max-w-[260px] min-h-[60px]">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-2 md:gap-3">
                          <span className="w-[4px] h-[4px] md:w-[6px] md:h-[6px] rounded-full bg-accent"></span>
                          <h3 className="text-white/60 text-sm md:text-base">
                            {item.institution}
                          </h3>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h2 className="text-2xl md:text-4xl font-bold lg:text-start">
                    {skills.title}
                  </h2>
                  <p className="max-w-[600px] text-white/60 text-sm md:text-base lg:text-left">
                    {skills.description}
                  </p>
                </div>

                <ScrollArea className="h-[400px] md:h-[400px] lg:h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-[30px]">
                    {skills.items.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={50}>
                          <Tooltip>
                            <TooltipTrigger className="w-[80%] mx-auto sm:mx-0 sm:w-full h-[100px] sm:h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent style={{ borderRadius: "0.5rem" }}>
                              <h3 className="text-base md:text-xl capitalize">
                                {skill.name}
                              </h3>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* About */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center lg:text-left">
                  <h2 className="text-2xl md:text-4xl font-bold lg:text-start">
                    {about.title}
                  </h2>
                  <p className="max-w-[600px] text-white/60 text-sm md:text-base lg:text-left">
                    {about.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px] md:h-[400px] lg:h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto md:mx-0 ">
                    {about.info.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center justify-center md:justify-start gap-4"
                      >
                        <span className="text-accent">{item.fieldName}</span>

                        {/* Check if item is a link based on isLink property */}
                        {item.isLink ? (
                          <a
                            href={
                              item.fieldName === "Email"
                                ? `mailto:${item.value}`
                                : item.fieldName === "Phone"
                                ? `tel:${item.value}`
                                : item.value
                            }
                            target={
                              item.fieldName === "Website" ? "_blank" : "_self"
                            }
                            rel={
                              item.fieldName === "Website"
                                ? "noopener noreferrer"
                                : ""
                            }
                            className="text-orange-200 hover:underline truncate max-w-full text-base sm:text-lg"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-white/60 text-base sm:text-lg truncate max-w-full">
                            {item.value}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;

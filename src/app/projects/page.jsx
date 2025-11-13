import ClientProjects from "@/components/ClientProjects";
import slide1 from "@/public/work/thumb1.png";
import slide2 from "@/public/work/thumb2.png";
import slide3 from "@/public/work/thumb3.png";
import slide4 from "@/public/work/thumb5.png";

// Project Data
const projects = [
  {
    _id: "1",
    num: 1,
    title: "Template's For Creative Professionals",
    category: "Full Stack",
    description:
      "A portfolio website built with Next.js, Express, Typescript, Tailwind CSS, and Framer Motion.",
    stack: [
      { name: "Next.js" },
      { name: "Express" },
      { name: "Typescript" },
      { name: "Tailwind CSS" },
      { name: "Stripe" },
      { name: "Shadcn UI" },
      { name: "JWT" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "RTK Query" },
      { name: "Redux Toolkit" },
    ],
    image: slide4,
    live: "https://lz-fly-frontend.vercel.app/",
    github: "https://github.com/likhon122/lz-fly-frontend",
  },
  {
    _id: "2",
    num: 2,
    title: "Chat Application",
    category: "Full Stack",
    description:
      "A chat application built with React, Node.js, Socket.io, and Express.js.",
    stack: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Socket.io" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "JWT" },
      { name: "Bcrypt" },
      { name: "RTK Query" },
      { name: "Redux Toolkit" },
      { name: "Styled Components" },
      { name: "Web Push Notifications" },
    ],
    image: slide1,
    live: "https://friends-adda.netlify.app",
    github: "https://github.com/likhon122/Chat-app",
  },
  {
    _id: "3",
    num: 3,
    title: "E-commerce",
    category: "Full Stack",
    description:
      "An e-commerce application built with React, Node.js, Express.js, and MongoDB.",
    stack: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "JWT" },
      { name: "Bcrypt" },
      { name: "RTK Query" },
      { name: "Redux Toolkit" },
      { name: "Styled Components" },
    ],
    image: slide2,
    live: "https://carfision.vercel.app/",
    github: "https://github.com/likhon122/car-fision-frontend",
  },
  {
    _id: "4",
    num: 4,
    title: "Portfolio",
    category: "Frontend",
    description: "My portfolio website built with Next.js and Framer Motion.",
    stack: [
      { name: "Next.js" },
      { name: "Framer Motion" },
      { name: "Tailwind CSS" },
      { name: "React Icons" },
    ],
    image: slide3,
    live: "https://likhonislam.me",
    github: "https://github.com/likhon122/protfolio",
  },
];

// SEO Optimization: generateMetadata function
export async function generateMetadata() {
  const title = "My Projects | Full Stack, E-commerce, and Portfolio";
  const description =
    "Showcasing my projects including a chat application, e-commerce platform, and portfolio built with modern web technologies like React, Node.js, and Next.js.";

  const url = "https://likhonislam.me";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: "/work/thumb1.png",
          width: 1200,
          height: 630,
          alt: "Chat Application Thumbnail",
        },
        {
          url: "/work/thumb2.png",
          width: 1200,
          height: 630,
          alt: "E-commerce Application Thumbnail",
        },
        {
          url: "/work/thumb3.png",
          width: 1200,
          height: 630,
          alt: "Portfolio Application Thumbnail",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: "/work/thumb1.png",
        },
      ],
    },
    alternates: {
      canonical: url,
    },
  };
}

const Projects = () => {
  return (
    <div>
      <ClientProjects projects={projects} />
    </div>
  );
};

export default Projects;

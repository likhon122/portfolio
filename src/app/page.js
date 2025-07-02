import Head from "next/head";
import Photo from "@/components/Photo";
import SocialLinks from "@/components/SocialLinks";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Function to generate metadata
export async function generateMetadata() {
  const data = await fetchData();

  return {
    title: `Home | ${data.name} | ${data.jobTitle}`,
    description: data.description,
    keywords: data.keywords.join(", "),
    openGraph: {
      title: `Home | ${data.name} | ${data.jobTitle}`,
      description: data.description,
      url: "https://likhonislam.me",
      type: "website",
      images: [
        {
          url: "https://likhonislam.me/path-to-your-image.jpg", // Update with your image URL
          width: 800,
          height: 600,
          alt: `${data.name} Profile Image`
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `Home | ${data.name} | ${data.jobTitle}`,
      description: data.description,
      image: "https://likhonislam.me/path-to-your-image.jpg" // Update with your image URL
    }
  };
}

// This is an async Server Component
export default async function Home() {
  const data = await fetchData();

  return (
    <>
      <Head>
        <link rel="canonical" href="https://likhonislam.me" />
      </Head>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex items-center justify-between flex-col xl:flex-row xl:pt-8 xl:pb-24">
            {/* Hero Text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <h1 className="h1">
                Hi, I&apos;m <br />
                <span className="text-accent">{data.name}</span>
              </h1>
              <h2 className="text-xl">{data.jobTitle}</h2>
              <p className="max-w-[500px] mb-9 text-white/80">
                {data.description}
              </p>

              {/* Social media buttons */}
              <div className="flex flex-col xl:flex-row gap-8 items-center">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2"
                  aria-label="Download CV"
                >
                  <a
                    href={data.cvLink}
                    download
                    className="flex items-center gap-2"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-xl" />
                  </a>
                </Button>
                <SocialLinks
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:text-primary hover:bg-accent duration-300"
                  }
                  socialLinks={data.socialLinks}
                />
              </div>
            </div>
            {/* Hero Picture */}
            <div>
              <div className="order-1 xl:order-none mb-8 xl:mb-0">
                <Photo alt={`${data.name} Profile Photo`} />
              </div>
            </div>
          </div>
          {/* Hero Stats */}
          <div className="mt-10">
            <Stats />
          </div>
        </div>
      </section>
    </>
  );
}

// Mock fetch function (replace with real API call if needed)
async function fetchData() {
  return {
    name: "Likhon Islam",
    jobTitle: "Web Developer",
    description:
      "I am Likhon Islam, a web Developer specializing in building elegant digital experiences. My expertise spans across modern web technologies like React.js, Next.js, Node.js, and more. I deliver tailored solutions that drive business success.",
    services: [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "API Integration"
    ],
    keywords: [
      "Software Developer",
      "Web Development",
      "Mobile Apps",
      "UI/UX Design",
      "React",
      "Next.js"
    ],
    cvLink: "/resumeCV.pdf",
    socialLinks: [
      { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile" },
      { name: "GitHub", url: "https://github.com/yourprofile" }
    ]
  };
}

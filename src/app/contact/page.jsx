import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { FaPhone, FaEnvelope, FaMapMarked } from "react-icons/fa";

// Contact Information Data
const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    value: "+8801611513484"
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    value: "md.likhonislam2x@gmail.com"
  },
  {
    icon: <FaMapMarked />,
    title: "Address",
    value: "Dhaka, Bangladesh"
  }
];

// SEO Optimization: generateMetadata function
export async function generateMetadata() {
  const title = "Contact Me | Likhon Islam Software Developer";
  const description =
    "Get in touch with Likhon Islam for web development services, including frontend, full-stack, and Next.js development. Contact by phone, email, or via the form.";
  const url = "https://likhonislam.me"; // Replace with your actual URL

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: "/public/images/contact-thumbnail.png", // Add an appropriate image
          width: 1200,
          height: 630,
          alt: "Contact Me Thumbnail"
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        {
          url: "/public/images/contact-thumbnail.png" // Add an appropriate image
        }
      ]
    },
    alternates: {
      canonical: url
    }
  };
}

const Contact = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="w-full xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl">
              <h2 className="text-2xl md:text-4xl text-accent">Get in touch</h2>
              <p className="text-base md:text-lg text-white/60">
                Fill out the form below to send me a message and I will get back
                to you as soon as possible.
              </p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                  type="name"
                  label="Name"
                  placeholder="Enter your name"
                  className="rounded-md"
                />
                <Input
                  type="email"
                  label="Email"
                  placeholder="Enter your email"
                  className="rounded-md"
                />
                <Input
                  type="phone"
                  label="Phone"
                  placeholder="Enter your phone"
                  className="rounded-md"
                />
              </div>

              {/* Service Selection */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Service</SelectLabel>
                    <SelectItem value="frontend">
                      Frontend Development (React)
                    </SelectItem>
                    <SelectItem value="fullstack">
                      Full Stack Development (MERN)
                    </SelectItem>
                    <SelectItem value="nextjs">Next.js</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Textarea for Message */}
              <Textarea
                className="h-[150px] md:h-[200px] rounded-md"
                placeholder="Type your message here"
              />

              {/* Submit Button */}
              <Button
                type="submit"
                size="md"
                className="w-full md:max-w-[180px] py-3"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6 md:gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex gap-4 md:gap-6 items-center">
                  <div className="w-[48px] h-[48px] rounded-xl md:w-[60px] md:h-[60px] bg-[#37373c] text-accent flex items-center justify-center">
                    <div className="text-xl md:text-2xl">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white/60 text-sm md:text-base">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-xl">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter
} from "react-icons/fa";

// Social links data
const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/likhon122",
    icon: <FaGithub />
  },
  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/likhon-islam-919438255",
    icon: <FaLinkedin />
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/imd.likhon",
    icon: <FaInstagram />
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/mdlikhon.islam.3975012",
    icon: <FaFacebook />
  },
  {
    name: "Twitter",
    url: "https://x.com/MDLikhon694258",
    icon: <FaTwitter />
  }
];

const SocialLinks = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socialLinks.map((social, index) => (
        <div key={index} className="group flex flex-col items-center">
          {/* Tooltip */}
          <div className="relative">
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-xl text-sm bg-accent text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {social.name}
              {/* Arrow */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-accent"></div>
            </div>
          </div>

          {/* Icon with Link */}
          <Link
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {social.icon}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;

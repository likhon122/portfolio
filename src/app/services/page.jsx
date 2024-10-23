import Head from "next/head";
import ServicesButton from "@/components/ServicesButton";
import Link from "next/link";

// Function to generate metadata dynamically
export async function generateMetadata() {
  const services = await fetchServicesData();

  return {
    title: `Services | Likhon Islam | Software Developer`,
    description:
      "Explore a range of services offered by Likhon Islam, including Frontend Development, Backend Development, API Development, and more. Get in touch to elevate your digital presence.",
    keywords: services.map((service) => service.title).join(", ")
  };
}

// Fetch services data dynamically (replace with real API call if needed)
async function fetchServicesData() {
  return [
    {
      _id: "1",
      serviceNum: "01",
      title: "Frontend Development",
      description:
        "Crafting beautiful and responsive user interfaces using React, Tailwind CSS, and modern frontend technologies for an exceptional user experience.",
      href: "/services/frontend-development"
    },
    {
      _id: "2",
      serviceNum: "02",
      title: "Backend Development",
      description:
        "Building scalable and secure backend systems with Node.js, Express, and MongoDB to ensure your application runs smoothly and efficiently.",
      href: "/services/backend-development"
    },
    {
      _id: "3",
      serviceNum: "03",
      title: "API Development",
      description:
        "Creating RESTful APIs and integrating third-party services to enhance your application's functionality and connectivity.",
      href: "/services/api-development"
    },
    {
      _id: "4",
      serviceNum: "04",
      title: "MERN Stack Development",
      description:
        "Developing full-stack applications using the MERN stack, delivering fully functional web applications tailored to your needs.",
      href: "/services/mern-stack-development"
    },
    {
      _id: "5",
      serviceNum: "05",
      title: "Next.js Development",
      description:
        "Leveraging Next.js for fast, SEO-friendly web applications that deliver an exceptional user experience.",
      href: "/services/nextjs-development"
    },
    {
      _id: "6",
      serviceNum: "06",
      title: "E-commerce Development",
      description:
        "Building e-commerce websites with Shopify, WooCommerce, and custom solutions that drive sales and enhance customer experience.",
      href: "/services/e-commerce-development"
    },
    {
      _id: "7",
      serviceNum: "07",
      title: "Web Hosting & Deployment",
      description:
        "Expertise in deploying applications to popular hosting platforms like Vercel, Netlify, and Heroku, ensuring high availability and performance.",
      href: "/services/web-hosting"
    },
    {
      _id: "8",
      serviceNum: "08",
      title: "Web Performance Optimization",
      description:
        "Optimizing websites for speed and performance using modern techniques to improve user experience and SEO.",
      href: "/services/performance-optimization"
    }
  ];
}

const Services = async () => {
  const services = await fetchServicesData(); // Ensure this is awaited properly

  return (
    <>
      <Head>
        <title>Services | Likhon Islam | Software Developer</title>
        <meta
          name="description"
          content="Explore a range of services offered by Likhon Islam, including Frontend Development, Backend Development, API Development, and more. Get in touch to elevate your digital presence."
        />
        <meta
          name="keywords"
          content={services.map((service) => service.title).join(", ")}
        />
        <link rel="canonical" href="https://likhonislam.me/services" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Web Development Services",
            provider: {
              "@type": "Person",
              name: "Likhon Islam",
              url: "https://likhonislam.me",
              sameAs: [
                "https://linkedin.com/in/yourprofile",
                "https://github.com/yourprofile"
              ]
            },
            areaServed: "Global",
            offers: services.map((service) => ({
              "@type": "Offer",
              name: service.title,
              description: service.description,
              url: `https://likhonislam.me${service.href}`
            }))
          })}
        </script>
      </Head>
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-10 text-white">
            My Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service._id}
                className="flex flex-col gap-6 justify-center group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline group-hover:text-transparent duration-500">
                    {service.serviceNum}
                  </div>
                  <ServicesButton href={service.href} />{" "}
                  {/* Pass the href to the button */}
                </div>
                <div>
                  <h3 className="text-[22px] md:text-[30px] xl:text-[35px] group-hover:text-accent text-white/80 transition-all duration-500 ">
                    {service.title}
                  </h3>
                  <p className="text-white/60">{service.description}</p>
                  <div className="border-b border-white/20 w-full"></div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <p className="text-lg text-white/80">
              Ready to start your project?{" "}
              <Link href="/contact" className="text-accent underline">
                Contact me
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

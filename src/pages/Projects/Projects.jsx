import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import proj1 from "@/assets/images/proj1.jpg";
import proj2 from "@/assets/images/proj2.jpg";
import proj3 from "@/assets/images/proj3.jpg";
import proj4 from "@/assets/images/proj4.jpg";
import proj5 from "@/assets/images/proj5.jpg";
import proj6 from "@/assets/images/proj6.jpg";
import proj7 from "@/assets/images/proj7.jpg";
import proj8 from "@/assets/images/proj8.jpg";
import proj9 from "@/assets/images/proj9.jpg";
import proj10 from "@/assets/images/proj10.jpg";

const projects = [
  {
    title: "Reserve Management Automation",
    description:
      "Mission-critical system for TCMB (Central Bank of Turkey) to manage foreign currency reserves, gold operations, and risk management. Handles all types of indebtedness operations including foreign currency, securities, and derivative product purchases. Built with React, Java and microservice architecture.",
    link: proj1,
    color: "#5196fd",
    githubLink: "https://github.com/alperenkaraca",
    liveLink: "https://www.tcmb.gov.tr",
  },
  {
    title: "Central Bank Correspondent Tracking",
    description:
      "Automation system tracking bank correspondents operating in the market, following and updating the accounts belonging to those banks, and handling all necessary transactions. Built with React.js and Java at TCMB.",
    link: proj2,
    color: "#34d399",
    githubLink: "https://github.com/alperenkaraca",
    liveLink: "https://www.tcmb.gov.tr",
  },
  {
    title: "BIST Swap Automation",
    description:
      "Automation of principal clearing and daily netting transactions carried out manually within the scope of the BIST swap market. Digitized previously manual financial processes into a reliable and auditable platform. Built with React.js and Java.",
    link: proj3,
    color: "#8f89ff",
    githubLink: "https://github.com/alperenkaraca",
    liveLink: "https://www.tcmb.gov.tr",
  },
  {
    title: "Affected User Dashboard",
    description:
      "Real-time analytics dashboard at Huawei that allows customers to specify parameters and run ad-hoc queries to display information about customers affected during a network outage or similar events. Built with React.js, Java and Hadoop.",
    link: proj4,
    color: "#ed649e",
    githubLink: "https://github.com/alperenkaraca",
    liveLink: "https://www.huawei.com",
  },
  {
    title: "Discovery",
    description:
      "Big data platform developed at Huawei to build programs related to wireless data and prepare maps in the formats that customers require. Enables large-scale wireless network data analysis and visualization.",
    link: proj5,
    color: "#f59e0b",
    githubLink: "https://github.com/alperenkaraca",
    liveLink: "https://www.huawei.com",
  },
  {
    title: "SmartCare",
    description:
      "Big data platform at Huawei used to develop programs related to cell data and prepare dashboards in the formats that customers require. Provides deep insight into mobile network performance metrics.",
    link: proj6,
    color: "#10b981",
    githubLink: "https://github.com/alperenkaraca",
    liveLink: "https://www.huawei.com",
  },
  {
    title: "Algeria Mobilis Network Analytics",
    description:
      "Provides general view of the Mobilis Network in Algeria, behavior analysis of subscribers, and ATM project progress preview. Built with React.js, Java and Hadoop at Huawei.",
    link: proj7,
    color: "#f43f5e",
    githubLink: "https://github.com/alperenkaraca",
    liveLink: "https://www.huawei.com",
  },
  {
    title: "BigData Enabling Platform",
    description:
      "Big data IDE enabling platform built at Huawei using Node.js, React.js, Eclipse Theia, Fusion Insight, GraphQL, Prisma and Scala — empowering data engineers to process large-scale datasets with a modern IDE experience.",
    link: proj8,
    color: "#00bcd4",
    githubLink: "https://github.com/alperenkaraca",
    liveLink: "https://www.huawei.com",
  },
  {
    title: "TIE — File Transformation System",
    description:
      "System to transform files from unstructured to structured format (like log files). Built using Hibernate, Spring Boot, Maven and React.js at Huawei. Enables automated data pipeline processing.",
    link: proj9,
    color: "#a78bfa",
    githubLink: "https://github.com/alperenkaraca",
    liveLink: "https://www.huawei.com",
  },
  {
    title: "Guanyn — RESTful Middleware",
    description:
      "Restful Service provider and middle-layer API to serve various services to in-company applications at Gevision Group. Built with Java and powered by Dropwizard framework for high-performance service delivery.",
    link: proj10,
    color: "#fb923c",
    githubLink: "https://github.com/alperenkaraca",
    liveLink: "https://github.com/alperenkaraca",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.03;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i / projects.length, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};

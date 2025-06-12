import { useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "framer-motion";
import { InView } from "react-intersection-observer";
import { GoDownload } from "react-icons/go";

export const About = () => {
  const controls = useAnimation();
  const [hasHovered, setHasHovered] = useState(false);

  return (
    <section id="about" className="section bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <InView
          triggerOnce
          onChange={(inView) => inView && controls.start("visible")}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 xl:gap-4">
            {/* Image Container - only visible on small screens */}
            <motion.div
              className="flex xl:hidden w-full justify-center"
              initial={{ opacity: 0.9, scale: 0.95 }}
              whileTap={{
                opacity: 1,
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
            >
              <motion.div
                className="relative group cursor-pointer"
              >
                <motion.img
                  className="w-[280px] sm:w-[320px] md:w-[360px] rounded-xl border-[3px] border-fuchsia-600 object-cover transition-all duration-300 relative z-10"
                  src="/Photo.png"
                  alt="Profile Picture"
                  style={{ opacity: 0.9 }} // Initial low opacity
                  whileTap={{
                    opacity: 1,
                    filter: "drop-shadow(0 0 12px #d946ef)",
                    transition: { duration: 0.3 },
                  }}
                />

                <motion.div
                  className="absolute -inset-1 rounded-xl bg-gradient-to-br from-fuchsia-600 to-purple-600 opacity-0 group-active:opacity-20 blur-xl transition-opacity duration-300 -z-10"
                />
              </motion.div>
            </motion.div>


            {/* Image Container */}
            <motion.div
              className="hidden xl:flex xl:w-2/3 justify-center"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.95 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHasHovered(true)}
              >
                <motion.img
                  className="xl:w-[400px] rounded-xl border-[3px] border-fuchsia-600 shadow-[0_0_40px_#d946ef70] object-cover transition-all duration-300 relative z-9"
                  src="/Photo.png"
                  alt="Profile Picture"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hasHovered ? 1 : 0 }}
                  whileHover={{
                    transition: { duration: 0.3 },
                    filter: "drop-shadow(0 0 12px #d946ef)",
                  }}
                />

                <motion.div
                  className="absolute -inset-1 rounded-xl bg-gradient-to-br from-fuchsia-600 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />
              </motion.div>
            </motion.div>

            {/* Content Container */}
            <motion.div
              className="block w-full lg:w-1/2 xl:w-2/3"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
                },
              }}
            >
              <div className="max-w-xl mx-auto lg:mx-0">
                <h2 className="text-3xl lg:text-6xl font-bold mb-3 text-center lg:text-left">
                  About Me
                </h2>
                <p className="mb-4 text-fuchsia-500 text-center lg:text-left">
                  Web Developer
                </p>
                <div className="h-1 w-72 bg-fuchsia-500 mb-6 mx-auto lg:mx-0" />
                <p className="mb-8 text-lg leading-relaxed text-center lg:text-left lg:pr-8">
                  I'm a Computer Science student passionate about turning
                  complex problems into elegant solutions. I specialize in web
                  development, building AI chatbots and interactive dashboards
                  with C, Python, React, and Flask.
                  <br />
                  <br />
                  As a leader at IEEE, I've earned recognition at multiple
                  hackathons for creating impactful tech solutions. When I'm not
                  coding, I explore emerging technologies and collaborate on
                  innovative projects. My goal: continuously grow as a developer
                  while building meaningful solutions for our digital world.
                </p>

                <motion.div
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.4,
                      },
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex justify-center lg:justify-start"
                >
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center px-6 py-3 mt-8 text-white font-medium border border-fuchsia-500 rounded-full bg-fuchsia-500/20 hover:bg-fuchsia-500/40 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-fuchsia-500/25"
                  >
                    Resume
                    <GoDownload className="ml-2 text-lg transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </InView>
      </div>
    </section>
  );
};

import {inViewHandler} from "../animationHandler";
import {motion,useAnimation} from "framer-motion";
import {InView} from "react-intersection-observer";
import {skills} from "../data"

export const Skills = () => {
  const animation = useAnimation();
  
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  };

  // Individual skill card variants with complex animations
  const skillVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.3,
      rotateY: -180,
      y: 100,
      filter: "blur(10px)"
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      rotateY: 0,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 50,
        duration: 1.5
      }
    },
    hover: {
      scale: 1.1,
      rotateY: 10,
      rotateX: 5,
      z: 50,
      boxShadow: "0 25px 50px rgba(217, 70, 239, 0.15)",
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 1
      }
    },
    tap: {
      scale: 0.95,
      rotateY: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 200,
        duration: 0.8
      }
    }
  };

  // Floating animation for background elements
  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Glow effect variants
  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: [0.2, 0.5, 0.2],
      scale: [0.8, 1.1, 0.8],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <InView onChange={(inView)=>inViewHandler(inView,animation)}>
      <section className="relative min-h-screen bg-black py-12 overflow-y-auto">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating orbs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full opacity-5"
              style={{
                background: `linear-gradient(45deg, #86198f, #6b21a8, #4c1d95)`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: i * 0.8 }}
            />
          ))}
          
          {/* Grid pattern */}
          <motion.div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(217, 70, 239, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(217, 70, 239, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto relative z-9">
          {/* Section title with animation */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={animation}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <motion.h2 
              className="text-4xl lg:text-5xl font-bold text-white mb-4"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                backgroundSize: '300% 100%',
                backgroundImage: 'linear-gradient(90deg, #ff00ff, #d946ef, #ff00ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundRepeat: 'no-repeat'
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              What I bring to the table
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-fuchsia-900 to-purple-900 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 3, delay: 1.5 }}
            />
          </motion.div>

          {/* Skills grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 perspective-1000 max-w-6xl mx-auto px-4"
            variants={containerVariants}
            initial="hidden"
            animate={animation}
          >
            {skills.map((skill, index) => (
              <motion.div 
                className="relative group cursor-pointer h-full"
                key={index}
                variants={skillVariants}
                whileHover="hover"
                whileTap="tap"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(45deg, #86198f, #6b21a8, #4c1d95)',
                    filter: 'blur(20px)',
                    transform: 'scale(1.1)',
                  }}
                  variants={glowVariants}
                  initial="initial"
                  whileHover="animate"
                />
                
                <motion.div 
                  className="relative bg-gray-900/50 backdrop-blur-sm p-4 rounded-2xl border border-gray-800 hover:border-fuchsia-900/50 transition-all duration-500 h-full flex flex-col items-center justify-center"
                  style={{
                    background: 'linear-gradient(135deg, rgba(217, 70, 239, 0.05), rgba(139, 92, 246, 0.05))',
                  }}
                >
                  <motion.div className="relative overflow-hidden rounded-xl h-24 w-24 flex items-center justify-center">
                    <motion.img 
                      src={skill.image} 
                      alt={skill.name || "Skill"}
                      className="w-16 h-16 object-contain filter drop-shadow-lg"
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -3, 3, 0],
                      }}
                      transition={{ duration: 0.8 }}
                    />
                    
                  </motion.div>

                  {skill.name && (
                    <motion.p 
                      className="text-white text-md font-medium text-center mb-4"
                      initial={{opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ delay: 0.1, duration: 0.8 }}
                    >
                      {skill.name}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </InView>
  );
};
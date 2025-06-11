import React, { useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {MeshDistortMaterial, Sphere, OrbitControls} from '@react-three/drei';
import {inViewHandler} from "../animationHandler";
import {motion,useAnimation} from "framer-motion";
import {InView} from "react-intersection-observer";
import { Link } from 'react-scroll';
import { FaRocket } from 'react-icons/fa';

const AnimatedSphere = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sphereRef = React.useRef();

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Calculate mouse position relative to window center
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    if (sphereRef.current) {
      // Smoothly rotate the sphere based on mouse position
      sphereRef.current.rotation.x += (mousePosition.y * 0.01);
      sphereRef.current.rotation.y += (mousePosition.x * 0.01);
    }
  });

  return (
    <Sphere ref={sphereRef} args={[1, 100, 200]} scale={1}>
      <MeshDistortMaterial
        color="#84198f"
        attach="material"
        distort={0.5}
        speed={2}
      />
    </Sphere>
  );
};

const AnimatedText = () => {
  const [currentText, setCurrentText] = useState(0);
  const texts = ["Ritu", "Frontend Developer"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.span
      key={currentText}
      initial={{ opacity: 0, y: 2, scale: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -2, scale: 1 }}
      transition={{ 
        duration: 0.9, 
        ease: "easeInOut",
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="inline-block"
    >
      <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
        {texts[currentText]}
      </span>
    </motion.span>
  );
};

export const Hero = () => {
  const animation = useAnimation();
  return (
    <InView onChange={(inView) => inViewHandler(inView,animation)}>
    <section id="home" className="h-[100vh] bg-black text-white flex items-center w-full flex-col">
      <style>
        {`
          @keyframes gradient-flow {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
        `}
      </style>
      <div className="container mx-auto h-full flex justify-center">
        <motion.div className="content-wrapper flex items-center w-full px-4 lg:px-8"
        initial = {{opacity:0, scale:0.9}}
        animate = {animation}
        >
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2">
            <div className="flex w-full">
              <div className="w-1 mr-8 md:h-80 bg-gradient-to-br from-purple-600 via-pink-600 to-red-600"/>
              <div className="text-content w-full">
                <h1 className="text-4xl md:text-5xl lg:text-6xl pb-4 font-bold text-center lg:text-left">
                  Hi, I'm
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl pb-4 font-bold text-center lg:text-left">
                  <AnimatedText />
                </h1>
                <p className="pb-4 text-lg md:text-xl text-center lg:text-left max-w-[600px] mx-auto lg:mx-0">
                  I create clean, modern, and fully responsive websites that blend seamless design with functionality.
                </p>
                <motion.div 
                initial={{opacity:0, scale:0.9}}
                animate={animation}
                transition={{duration:0.5, ease:"easeInOut"}}
                whileHover={{scale:1.05}}
                whileTap={{scale:0.95}}
                className="flex justify-center lg:justify-start">
                  <Link to="projects"
                    spy={true}
                    smooth={true}
                    duration={400}
                    offset={-70}
                    className="group relative inline-flex items-center justify-center w-auto h-auto px-5 py-3 mt-8 me-5 mb-2 rounded-full overflow-hidden transition-all duration-300 ease-in-out">
                    <div className="absolute inset-0 bg-fuchsia-500/20 backdrop-blur-sm hover:bg-fuchsia-800/90 transition-all duration-300" />
                    <span className="relative z-9 text-white font-medium flex items-center gap-2">
                      My Projects
                      <FaRocket className="text-lg transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="w-1/2 h-full hidden lg:block">
          {/* 3d animation */}
            <Canvas className="absolute inset-0">
              <OrbitControls enableZoom={false}/>
              <ambientLight intensity={0.9}/>
              <directionalLight position={[3, 2, 1]}/>
              <AnimatedSphere />
            </Canvas>
          </div>
        </motion.div>
      </div>
      <div className="bg-primary flex items-center justify-center">
      </div>
    </section>
    </InView>
  )
}
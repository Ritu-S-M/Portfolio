import React from 'react';
import {social} from '../data';
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';

export const Footer = () => {
  return (
    <footer 
    id="footer"
    className = "relative bottom-0 w-full h-[50vh] flex justify-between items-center flex-col px-4 py-8 mt-15 md:mt-0 bg-[#1f004d]"
    >
      <svg
        id="visual"
        version="1.1"
        viewBox="0 321.18 960 219.82"
        class="absolute -translate-y-full pb-4 w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
            d="M0 389L26.7 371.8C53.3 354.7 106.7 320.3 160 321.2C213.3 322 266.7 358 320 386C373.3 414 426.7 434 480 419.5C533.3 405 586.7 356 640 339.7C693.3 323.3 746.7 339.7 800 362.3C853.3 385 906.7 414 933.3 428.5L960 443L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
            fill="transparent"></path>
        <path
            d="M0 355L26.7 350C53.3 345 106.7 335 160 347.8C213.3 360.7 266.7 396.3 320 421.2C373.3 446 426.7 460 480 466.2C533.3 472.3 586.7 470.7 640 453.2C693.3 435.7 746.7 402.3 800 400.7C853.3 399 906.7 429 933.3 444L960 459L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
            fill="#12062d"></path>
        <path
            d="M0 505L26.7 502.2C53.3 499.3 106.7 493.7 160 484.5C213.3 475.3 266.7 462.7 320 444.2C373.3 425.7 426.7 401.3 480 409C533.3 416.7 586.7 456.3 640 475C693.3 493.7 746.7 491.3 800 479.3C853.3 467.3 906.7 445.7 933.3 434.8L960 424L960 541L933.3 541C906.7 541 853.3 541 800 541C746.7 541 693.3 541 640 541C586.7 541 533.3 541 480 541C426.7 541 373.3 541 320 541C266.7 541 213.3 541 160 541C106.7 541 53.3 541 26.7 541L0 541Z"
            fill="#12062d"></path>
        <path
            d="M 0 501 L 26.7 498 C 53.3 495 106.7 489 160 490 C 213.3 491 266.7 499 320 501.3 C 373.3 503.7 426.7 500.3 480 491.3 C 533.3 482.3 586.7 467.7 640 464.7 C 693.3 461.7 746.7 470.3 800 469.3 C 853.3 468.3 906.7 457.7 933.3 452.3 L 960 447 L 960 542 L 933.3 542 C 906.7 542 853.3 542 800 542 C 746.7 542 693.3 542 640 542 C 586.7 542 533.3 542 480 542 C 426.7 542 373.3 542 320 542 C 266.7 542 213.3 542 160 542 C 106.7 542 53.3 542 26.7 542 L 0 541 L 0 501 Z"
            fill="#1f004d"></path>
      </svg>

      {/* Logo and Name */}
      <div className='w-full flex-center flex-row mt-30'>
        <motion.div 
          initial={{opacity: 0, x:100, y: -20}}
          animate={{opacity: 1, x: 0, y: 0}}
          transition={{duration: 1, ease: "easeInOut"}}
          whileHover={{scale: 1.05}}
          className='absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 z-50 flex items-center justify-center '>
              <div className='flex flex-col items-center space-y-4'>
                  <div className='w-20 h-20 rounded bg-fuchsia-400 flex items-center justify-center'>
                      <Link to="home"
                        spy={true}
                        smooth={true}
                        duration={400}
                        offset={-70}
                        className="transition-all duration-400 ease-in-out">
                          <img src="/logo.png" alt="Logo" className='w-16 h-16 object-contain transition-transform hover:translate-x-2'/>
                      </Link>
                  </div>
                  <Link to="home"
                        spy={true}
                        smooth={true}
                        duration={400}
                        offset={-70}
                        className="transition-all duration-400 ease-in-out text-zinc-200 hover:text-fuchsia-400 cursor-pointer">
                        <h1 className='text-2xl font-semibold text-center '>Ritu Mathad</h1>
                  </Link>
              </div>
          </motion.div>
      </div>

      {/* Social Media Icons */}
      <div className="flex space-x-4 gap-x-20 gap-y-10 lg:gap-20">
        {social.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-2xl ${item.color} ${item.colorHover} transition-colors duration-300`}
          >
            {item.icon}
          </a>
        ))}
      </div>
      <p className="text-white text-sm mt-4">
        &copy; {new Date().getFullYear()} Ritu Mathad. All rights reserved.
      </p>

    </footer>
  )
}

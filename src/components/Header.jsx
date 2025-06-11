import { NavBar } from './NavBar';
import { Socials } from './Socials';
import { Link } from 'react-scroll';
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';
import {navigation} from '../data';
import { motion } from 'framer-motion';

export const Header = () => {
  
  const variants = {
    open :{clipPath : "circle(1200px at 43px 43px)",
    opacity: 1,
    transition: { type:"spring"},
    },
    closed: {clipPath: "circle(15px at 43px 37px)",
    opacity: 0,
    transition : { type:"spring", duration: 0.3, bounce: 0.1 },
    },
  }

  const[menu, setMenu] = useState(false);
  return (
    <header className='md:h-20 h-15 flex bg-black/70 items-center fixed top-0 w-full text-white z-10'>
      <div className="container mx-auto h-full flex items-center justify-center md:justify-between">
        {/* Logo and name - desktop */}
        <motion.div 
        initial={{opacity: 0, x: -100, y: -20}}
        animate={{opacity: 1, x: 0, y: 0}}  
        transition={{duration: 1, ease: "easeInOut"}}
        whileHover={{scale: 1.05}}
        className ='hidden md:flex items-center space-x-3 text-white hover:text-fuchsia-400 cursor-pointer'>
          <div className = 'w-9 h-9 rounded bg-fuchsia-300 flex items-center justify-center ml-2'>
              {/* Logo */}
              <Link to="home"
                spy={true}
                smooth={true}
                duration={400}
                offset={-70}
                className="transition-all duration-400 ease-in-out">
                  <img src="/logo.png" alt="Logo" className='md:block lg:block transition-transform hover:translate-x-2'/>
                </Link>
          </div>
          {/* Name */}
          <Link to="home"
                spy={true}
                smooth={true}
                duration={400}
                offset={-70}
                className="transition-all duration-400 ease-in-out">
                <h1 className='text-xl font-semibold'>Ritu Mathad</h1>
          </Link>
        </motion.div>
        <NavBar/>
        <Socials/>
      </div>
{/* Mobile section */}
    <div className="md:hidden">
      <motion.div 
      initial={{opacity: 0, x: 100, y: -20}}
      animate={{opacity: 1, x: 0, y: 0}}
      transition={{duration: 1, ease: "easeInOut"}}
      whileHover={{scale: 1.05}}
      className="absolute right-4 top-4 z-50">
        <button onClick={() => setMenu((prev) => !prev)} className="text-white">
          {menu ? <IoCloseSharp size={30} /> : <MdOutlineMenu size={30} />}
        </button>
    </motion.div>
  
        <motion.div 
        initial="closed"
        animate={menu ? "open" : "closed"}
        variants={variants}
        className='bg-fuchsia-950/90 w-2/3 h-screen text-white fixed  top-0 right-0 z-40 px-7 py-6'>
          {/* Navbar */}
          <ul>
            {navigation.map((item,index) => 
            <li>
              <Link to ={item.href}
              key={index}
              spy={true}
              smooth={true}
              duration={400}
              offset={-70}
              className="block py-2 text-lg hover:text-fuchsia-500  capitalize transition-colors duration-400 ease-in-out">
                {item.name}
                </Link>
            </li>
            )}
          </ul>
        </motion.div>
    </div>

    
    {/* Logo and Name */}
      <motion.div 
      initial={{opacity: 0, x:100, y: -20}}
      animate={{opacity: 1, x: 0, y: 0}}
      transition={{duration: 1, ease: "easeInOut"}}
      whileHover={{scale: 1.05}}
      className ='md:hidden absolute left-6 top-4 z-50 flex items-center space-x-2'>
          <div className = 'w-9 h-9 rounded bg-fuchsia-300 flex items-right justify-right ml-2'>
              <Link to="home"
                spy={true}
                smooth={true}
                duration={400}
                offset={-70}
                className="transition-all duration-400 ease-in-out">
                  <img src="/logo.png" alt="Logo" className='md:block lg:block transition-transform hover:translate-x-2'/>
                </Link>
          
          </div>
          <Link to="home"
                spy={true}
                smooth={true}
                duration={400}
                offset={-70}
                className="transition-all duration-400 ease-in-out hover:text-fuchsia-400 cursor-pointer">
                <h1 className='text-xl font-semibold'>Ritu Mathad</h1>
          </Link>
      </motion.div>

    </header>
  )
}
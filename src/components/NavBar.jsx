import { navigation} from '../data';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
export const NavBar = () => {
    return (
        <nav className="hidden md:block">
            <motion.div
            initial={{opacity: 0, y: -20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 1, ease: "easeInOut"}}
            >
            <ul className="flex md:px-10 space-x-8 capitalize text-[15px]">
                {navigation.map((item,index) =>{
                    return(
                        <motion.li
                        whileHover={{scale: 1.15}}
                        whileTap={{scale: 0.95}}
                        className="text-white hover:text-fuchsia-500 cursor-pointer"
                            key={index}>
                                <Link to={item.href}
                                spy={true}
                                smooth={true}
                                duration={400}
                                offset={-70}
                                className="transition-all duration-400 ease-in-out">
                                    {item.name}
                                </Link>

                        </motion.li>
                    );
                })}
            </ul>
            </motion.div>
        </nav>

    );
};
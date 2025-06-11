import { motion } from "framer-motion"
import {social} from "../data"

export const Socials = () => {
  return (
    <div className="hidden lg:block">
      <motion.ul 
      initial={{opacity: 0, y: -20}}
      animate={{opacity: 1, y: 0}}
      transition={{duration: 1, ease: "easeInOut"}}
      className="flex space-x-6">
        {
          social.map((item,index) =>{
            return(
              <motion.li
              whileHover={{scale: 1.25}}
              whileTap={{scale: 0.95}}
              className={
                `flex justify-content item-center ${item.color ? item.color :"text-white"} ${item.colorHover ? item.colorHover : "hover:text-orange-500"}`
              }>
                <a 
                className="text-base" 
                key = {index}
                href={item.href} 
                target="_blank"
                rel="noopener noreferrer"
                >
                  {item.icon}
                </a>
              </motion.li>
            )
          })
        }
      </motion.ul>
    </div>
  )
}

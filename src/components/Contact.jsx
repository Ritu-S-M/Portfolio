import React, { useState, useRef, useEffect } from 'react'
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";
import emailjs from 'emailjs-com';
import Spline from '@splinetool/react-spline';


// 3D Sphere Component


export const Contact = () => {
    const animation = useAnimation();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [emailstatus, setEmailStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
            setEmailStatus("empty");
            return;
        }

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then((result) => {
            console.log(result.text);
            setEmailStatus("success");
            // Reset form after successful submission
            setName("");
            setEmail("");
            setSubject("");
            setMessage("");
        }, (error) => {
            console.log(error.message);
            setEmailStatus("error");
        })
    }

    return (
        <InView onChange={(inView) => inViewHandler(inView, animation)}>
            <section 
                id="contact" 
                className="w-full min-h-screen py-8 px-4 sm:px-6 lg:px-8 xl:px-12 "
            >
                <motion.div
                    className="container mx-auto max-w-7xl h-full"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={animation}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    {/* Mobile Layout - Contact Form Only */}
                    <div className="flex md:hidden flex-col items-center justify-center min-h-full">
                        {/* Header Section */}
                        <div className="text-center mb-8">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                                Get In Touch
                            </h2>
                            <p className="text-base text-gray-200 max-w-md mx-auto px-4">
                                Reach out today to discuss your project needs!
                            </p>
                        </div>
                        
                        {/* Contact Form */}
                        <form 
                            onSubmit={sendEmail}
                            className="w-full max-w-md space-y-6"
                        >
                            <div className="space-y-4">
                                <input 
                                    className="w-full bg-white/10 text-white border border-fuchsia-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300 placeholder-gray-300" 
                                    type="text" 
                                    name="user_name"
                                    placeholder="Your Name"  
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input 
                                    className="w-full bg-white/10 text-white border border-fuchsia-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300 placeholder-gray-300"  
                                    type="email" 
                                    name="user_email"
                                    placeholder="Your Email"  
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input 
                                    className="w-full bg-white/10 text-white border border-fuchsia-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300 placeholder-gray-300"  
                                    type="text" 
                                    name="subject"
                                    placeholder="Subject"  
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                />
                                <textarea 
                                    className="w-full bg-white/10 text-white border border-fuchsia-500 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300 placeholder-gray-300 resize-vertical min-h-[120px]" 
                                    rows="5"
                                    name="message"
                                    placeholder="Your Message"  
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex justify-center"
                            >
                                <button 
                                    type="submit"
                                    className="inline-flex items-center justify-center px-8 py-3 text-base text-white font-semibold border border-fuchsia-500 rounded-full bg-fuchsia-500/20 hover:bg-fuchsia-500/40 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-fuchsia-500/25 min-w-[160px]"
                                >  
                                    Send Message
                                </button>
                            </motion.div>
                        </form>

                        {/* Status Messages */}
                        <div className='w-full max-w-md mt-6'>
                            {emailstatus === "empty" && (
                                <p className="text-orange-400 text-center text-sm font-medium">Please fill in all fields.</p>
                            )}
                            {emailstatus === "success" && (
                                <p className="text-green-400 text-center text-sm font-medium">✓ Email sent successfully!</p>
                            )}
                            {emailstatus === "error" && (
                                <p className="text-red-400 text-center text-sm font-medium">✗ Error sending email. Please try again.</p>
                            )}
                        </div>
                    </div>

                    {/* Desktop Layout - Split with 3D Element */}
                    <div className="hidden md:flex min-h-[900px]">
                        {/* Left Side - 3D Element */}
                        <div className="flex-1 flex justify-center bg-black/5">
                            <motion.div
                                initial={{ opacity: 0, x: -100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className="w-full h-full max-w-md max-h-md relative"
                            >
                                <iframe src='https://my.spline.design/robotfollowcursorforlandingpagemc-ZI6erdG5Du1zQpu7g2IJ6X2K/' frameborder='0' width='100%' height='100%'></iframe>
                            </motion.div>
                        </div>

                        {/* Right Side - Contact Form */}
                        <div className="flex-1 flex flex-col justify-center p-8 lg:p-12">
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            >
                                {/* Header */}
                                <div className="mb-8">
                                    <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 bg-gradient-to-r from-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                                        Get In Touch
                                    </h2>
                                    <p className="text-lg text-gray-200 max-w-md">
                                        Reach out today to discuss your project needs 
                                        and start collaborating on something amazing!
                                    </p>
                                </div>
                                
                                {/* Form */}
                                <form 
                                    onSubmit={sendEmail}
                                    className="space-y-6"
                                >
                                    {/* Name and Email Row */}
                                    <div className="flex flex-col lg:flex-row gap-4">
                                        <input 
                                            className="flex-1 bg-white/10 text-white border border-fuchsia-500 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300 placeholder-gray-300" 
                                            type="text" 
                                            name="user_name"
                                            placeholder="Your Name"  
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <input 
                                            className="flex-1 bg-white/10 text-white border border-fuchsia-500 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300 placeholder-gray-300"  
                                            type="email" 
                                            name="user_email"
                                            placeholder="Your Email"  
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>

                                    {/* Subject */}
                                    <input 
                                        className="w-full bg-white/10 text-white border border-fuchsia-500 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300 placeholder-gray-300"  
                                        type="text" 
                                        name="subject"
                                        placeholder="Subject"  
                                        value={subject}
                                        onChange={(e) => setSubject(e.target.value)}
                                    />

                                    {/* Message */}
                                    <textarea 
                                        className="w-full bg-white/10 text-white border border-fuchsia-500 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 focus:border-transparent transition-all duration-300 placeholder-gray-300 resize-vertical min-h-[150px]" 
                                        rows="6"
                                        name="message"
                                        placeholder="Your Message"  
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                
                                    {/* Submit Button */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex justify-start"
                                    >
                                        <button 
                                            type="submit"
                                            className="group relative inline-flex items-center justify-center px-10 py-4 text-lg text-white font-semibold border border-fuchsia-500 rounded-full bg-fuchsia-500/20 hover:bg-fuchsia-500/40 focus:bg-fuchsia-500/40 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-fuchsia-500/25 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 min-w-[180px]"
                                        >  
                                            <span className="relative z-10">Send Message</span>
                                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-fuchsia-500/0 via-fuchsia-500/20 to-fuchsia-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </button>
                                    </motion.div>
                                </form>

                                {/* Status Messages */}
                                <div className='mt-6'>
                                    {emailstatus === "empty" && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-orange-400 text-base font-medium"
                                        >
                                            Please fill in all fields.
                                        </motion.p>
                                    )}
                                    {emailstatus === "success" && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-green-400 text-base font-medium"
                                        >
                                            ✓ Email sent successfully!
                                        </motion.p>
                                    )}
                                    {emailstatus === "error" && (
                                        <motion.p 
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-red-400 text-base font-medium"
                                        >
                                            ✗ Error sending email. Please try again.
                                        </motion.p>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>    
        </InView>
    )
}
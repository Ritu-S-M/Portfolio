'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Preloader = ({ onLoadingComplete = () => {} }) => {
    const preloaderRef = useRef(null);

    useGSAP(
        () => {
            // Ensure the preloader is visible initially
            gsap.set(preloaderRef.current, { autoAlpha: 1 });
            
            // Set initial states for letters - properly hidden below
            gsap.set('.name-text span', { 
                y: '150%',
                rotateX: -90,
                transformOrigin: '50% 100%',
                opacity: 0
            });
            
            // Set initial states for background strips
            gsap.set('.preloader-item', { 
                y: '100%',
                scaleY: 1
            });

            const tl = gsap.timeline({
                defaults: {
                    ease: 'power2.out',
                },
            });

            // Background strips entry
            tl.to('.preloader-item', {
                y: '0%',
                duration: 0.8,
                stagger: {
                    amount: 0.4,
                    from: "center"
                },
                ease: 'power3.out'
            })

            // Name text animation with proper 3D effect and timing
            .to('.name-text span', {
                y: 0,
                rotateX: 0,
                opacity: 1,
                stagger: {
                    amount: 0.6,
                    from: "center"
                },
                duration: 0.8,
                ease: 'back.out(1.7)'
            }, '-=0.4')
            
            // Glow effect on letters
            .to('.name-text span', {
                textShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 40px rgba(168, 85, 247, 0.6), 0 0 60px rgba(168, 85, 247, 0.4)',
                stagger: 0.05,
                duration: 0.6
            }, '-=0.2')

            // Pause and subtle pulse effect
            .to('.name-text', {
                scale: 1.02,
                duration: 0.4,
                yoyo: true,
                repeat: 2,
                ease: 'power2.inOut'
            })

            // Exit animation with curtain effect
            .to('.preloader-item', {
                delay: 0.8,
                y: '-100%',
                duration: 0.8,
                stagger: {
                    amount: 0.5,
                    from: "edges"
                },
                ease: 'power2.inOut'
            })
            .to('.name-text span', { 
                y: '-150%',
                rotateX: 90,
                opacity: 0,
                stagger: {
                    amount: 0.3,
                    from: "random"
                },
                duration: 0.6,
                ease: 'power2.in'
            }, '<0.2')
            .to(preloaderRef.current, {
                autoAlpha: 0,
                duration: 0.6,
                ease: 'power2.inOut',
                onComplete: () => {
                    onLoadingComplete();
                    if (preloaderRef.current) {
                        preloaderRef.current.style.display = 'none';
                    }
                }
            }, '<0.2');
        },
        { scope: preloaderRef }
    );

    return (
        <div 
            className="fixed inset-0 z-[9999] flex bg-gradient-to-br from-slate-50 via-gray-100 to-slate-100" 
            ref={preloaderRef}
            style={{ visibility: 'visible' }}
        >
            {/* Animated background strips with subtle colors */}
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-gray-200/40 to-slate-300/40 backdrop-blur-sm border-r border-gray-300/30"></div>
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-slate-300/40 to-gray-200/40 backdrop-blur-sm border-r border-slate-300/30"></div>
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-gray-200/40 to-slate-300/40 backdrop-blur-sm border-r border-gray-300/30"></div>
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-slate-300/40 to-gray-200/40 backdrop-blur-sm border-r border-slate-300/30"></div>
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-gray-200/40 to-slate-300/40 backdrop-blur-sm border-r border-gray-300/30"></div>
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-slate-300/40 to-gray-200/40 backdrop-blur-sm border-r border-slate-300/30"></div>
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-gray-200/40 to-slate-300/40 backdrop-blur-sm border-r border-gray-300/30"></div>
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-slate-300/40 to-gray-200/40 backdrop-blur-sm border-r border-slate-300/30"></div>
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-gray-200/40 to-slate-300/40 backdrop-blur-sm border-r border-gray-300/30"></div>
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-slate-300/40 to-gray-200/40 backdrop-blur-sm border-r border-slate-300/30"></div>
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-gray-200/40 to-slate-300/40 backdrop-blur-sm border-r border-gray-300/30"></div>
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-slate-300/40 to-gray-200/40 backdrop-blur-sm border-r border-slate-300/30"></div>
            <div className="preloader-item h-full w-[7.69%] bg-gradient-to-b from-gray-200/40 to-slate-300/40 backdrop-blur-sm"></div>

            {/* Main text with enhanced styling */}
            <h3 className="name-text flex text-[10vw] lg:text-[150px] font-black text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 leading-none overflow-hidden bg-clip-text bg-gradient-to-r from-slate-600 via-gray-700 to-slate-600 drop-shadow-xl">
                <span className="inline-block" style={{ perspective: '1000px' }}>R</span>
                <span className="inline-block" style={{ perspective: '1000px' }}>I</span>
                <span className="inline-block" style={{ perspective: '1000px' }}>T</span>
                <span className="inline-block" style={{ perspective: '1000px' }}>U&nbsp;</span>
                <span className="inline-block" style={{ perspective: '1000px' }}>M</span>
                <span className="inline-block" style={{ perspective: '1000px' }}>A</span>
                <span className="inline-block" style={{ perspective: '1000px' }}>T</span>
                <span className="inline-block" style={{ perspective: '1000px' }}>H</span>
                <span className="inline-block" style={{ perspective: '1000px' }}>A</span>
                <span className="inline-block" style={{ perspective: '1000px' }}>D</span>
            </h3>

            {/* Subtle floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-slate-400 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gray-500 rounded-full opacity-20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                <div className="absolute top-1/2 left-1/6 w-1 h-1 bg-slate-500 rounded-full opacity-25 animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-gray-400 rounded-full opacity-15 animate-pulse" style={{animationDelay: '1.5s'}}></div>
            </div>

            {/* Subtle scanning line effect */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-400/60 to-transparent opacity-40 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-400/60 to-transparent opacity-40 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
        </div>
    );
};

export default Preloader;
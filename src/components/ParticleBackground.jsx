'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

gsap.registerPlugin(useGSAP);

const ParticleBackground = () => {
    const particlesRef = useRef([]);

    const setParticleStyles = () => {
        particlesRef.current.forEach((particle) => {
            gsap.set(particle, {
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1,
                opacity: Math.random(),
                left: Math.random() * window.innerWidth,
                top: Math.random() * (window.innerHeight + 1),
            });
        });
    };

    useGSAP(() => {
        setParticleStyles();

        particlesRef.current.forEach((particle) => {
            gsap.to(particle, {
                y: window.innerHeight,
                duration: Math.random() * 10 + 10,
                opacity: 0,
                repeat: -1,
                ease: 'none',
            });
        });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setParticleStyles();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {[...Array(100)].map((_, i) => (
                <div
                    key={i}
                    ref={(el) => {
                        if (el) particlesRef.current[i] = el;
                    }}
                    className="absolute rounded-full bg-white"
                />
            ))}
        </div>
    );
};

export default ParticleBackground;

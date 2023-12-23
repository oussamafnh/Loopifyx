import React, { useEffect, useRef, useState } from 'react';
import "./css/sec1.css";
import { motion, useScroll, useTransform, useAnimation, useMotionValueEvent } from "framer-motion";
import gsap from 'gsap';

const Sec1 = () => {
    const ref = useRef(null)
    // const [Isgoing, setIsgoing] = useState(false);


    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["100vh 0vh", "0vh 0vh"]
    });
    const scalP = useTransform(scrollYProgress, [0.7, 1], [-0.2, 1]);

    

    useEffect(() => {
        // Create GSAP timeline
        const tl = gsap.timeline({ repeat: -1 });

        // Animation
        tl.to("h1", { duration: 10, backgroundPosition: "-9260px 0" });

        // Cleanup on component unmount
        return () => {
            tl.kill(); // Kill the timeline to avoid memory leaks
        };
    }, []);


    return (

        <motion.div className="sec1" ref={ref}
        style={{
            opacity:scalP
        }}>
            <div className="home-title">
                <h1>Code Patterns Gallery</h1>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
                <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 6V14" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15 11L12 14L9 11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </motion.div>
    )
}

export default Sec1
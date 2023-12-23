import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";
// import PatternDisplay from './patternDisplay'; // Adjust the path based on your project structure
import patternsData from './patterns.json'; // Import the JSON file
import PatternDisplay from './PatternDisplay';
// import "./css/galery.css";
import './css/gallery.css';



const Gallery = () => {

    const ref = useRef(null);
    const Inview = useInView(ref);

    const cardanimation = useAnimation();

    useEffect(() => {
        if (Inview) {
            cardanimation.start("visible");
        }
    }, [Inview]);

    return (
        <div className='home-galery' ref={ref} >
            <div className="grid grid-cols-2 xl:grid-cols-4 md:grid-cols-3">
                {patternsData.map((pattern, index) => (
                    <motion.div
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 40 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        initial="hidden"
                        animate={cardanimation}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                        <PatternDisplay pattern={pattern} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Gallery
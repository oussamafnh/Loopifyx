import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation, useScroll, useTransform } from "framer-motion";
import patternsData from '../patterns.json';
import PatternDisplay from './PatternDisplay';
import './css/gallery.css';
import { useSelector } from 'react-redux';
import StyleComponent from './style';


const Gallery = () => {

    const theme = useSelector((state) => state.theme);


    const ref = useRef(null);
    const Inview = useInView(ref);

    const cardanimation = useAnimation();

    useEffect(() => {
        if (Inview) {
            cardanimation.start("visible");
        }
    }, [Inview]);

    return (
        <StyleComponent className={theme}>

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
        </StyleComponent>

    );
};

export default Gallery
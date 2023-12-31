import React, { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import patternsData from '../patterns.json';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './css/patternpage.css';
import { useSelector } from 'react-redux';
import StyleComponent from './style';



const PatternPage = () => {

    const theme = useSelector((state) => state.theme);


    const { id } = useParams();
    const patternId = parseInt(id, 10);
    const pattern = patternsData.find((p) => p.id === patternId);
    const codeRef = useRef(null);

    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            controls.start({ opacity: 1 });
        }
    }, [controls, inView]);

    const handleCopyClick = () => {
        if (codeRef.current) {
            codeRef.current.select();
            document.execCommand('copy');
        }
    };


    return (
        <StyleComponent className={theme}>

            <motion.div
                initial={{ opacity: 0 }}
                animate={controls}
                transition={{ duration: 1 }}
                ref={ref}
                className='patterpage'
            >
                <Link to="/">
                    <button className="back-button"><svg className='goback' width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.34375 13.5938H24.4688C24.7091 13.5938 24.9396 13.6892 25.1096 13.8592C25.2795 14.0291 25.375 14.2596 25.375 14.5C25.375 14.7404 25.2795 14.9709 25.1096 15.1408C24.9396 15.3108 24.7091 15.4062 24.4688 15.4062H6.34375C6.1034 15.4062 5.87289 15.3108 5.70293 15.1408C5.53298 14.9709 5.4375 14.7404 5.4375 14.5C5.4375 14.2596 5.53298 14.0291 5.70293 13.8592C5.87289 13.6892 6.1034 13.5938 6.34375 13.5938Z" fill="black" />
                        <path d="M6.71894 14.5L14.2354 22.0146C14.4055 22.1848 14.5011 22.4156 14.5011 22.6562C14.5011 22.8969 14.4055 23.1277 14.2354 23.2979C14.0652 23.468 13.8344 23.5636 13.5937 23.5636C13.3531 23.5636 13.1223 23.468 12.9521 23.2979L4.79587 15.1416C4.71148 15.0574 4.64452 14.9574 4.59883 14.8473C4.55315 14.7372 4.52963 14.6192 4.52963 14.5C4.52963 14.3808 4.55315 14.2627 4.59883 14.1526C4.64452 14.0425 4.71148 13.9425 4.79587 13.8584L12.9521 5.70211C13.1223 5.53194 13.3531 5.43634 13.5937 5.43634C13.8344 5.43634 14.0652 5.53194 14.2354 5.70211C14.4055 5.87228 14.5011 6.10308 14.5011 6.34374C14.5011 6.58439 14.4055 6.81519 14.2354 6.98536L6.71894 14.5Z" fill="black" />
                    </svg>
                    </button>
                </Link>

                <div className="content">

                    <div className="imgandtitle">
                        <h1>{pattern.title}</h1>
                        <img src={pattern.img_link} alt={pattern.title} />
                    </div>
                    <div className="code">
                        <div class="card-code">
                            <div class="header">
                                <div class="top">
                                    <div className="colors">
                                        <div class="circle">
                                            <span class="red circle2"></span>
                                        </div>
                                        <div class="circle">
                                            <span class="yellow circle2"></span>
                                        </div>
                                        <div class="circle">
                                            <span class="green circle2"></span>
                                        </div>
                                        <div class="title">
                                            <p id="title2">Pattern.js</p>
                                        </div>
                                    </div>
                                    <button class="copy" onClick={handleCopyClick}>
                                        <span data-text-end="Copied!" data-text-initial="Copy to clipboard" class="tooltip"></span>
                                        <span>
                                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="clipboard">
                                                <path d="M5.65355 0.834647C4.70867 0.834647 3.92756 1.57795 3.84882 2.50394H2.81575C2.2036 2.50805 1.61765 2.75284 1.18449 3.18541C0.751328 3.61798 0.505743 4.20361 0.500793 4.81575V16.8535C0.505743 17.4657 0.751328 18.0513 1.18449 18.4839C1.61765 18.9165 2.2036 19.1612 2.81575 19.1654H13.1811C13.7933 19.1612 14.3792 18.9165 14.8124 18.4839C15.2455 18.0513 15.4911 17.4657 15.4961 16.8535V4.81575C15.4919 4.20306 15.2467 3.61663 14.8135 3.18338C14.3802 2.75014 13.7938 2.50491 13.1811 2.50079H12.148C12.1089 2.04787 11.9022 1.62583 11.5685 1.31714C11.2347 1.00845 10.7979 0.835293 10.3433 0.831497L5.65355 0.834647ZM5.65355 2.50079H10.3465C10.4472 2.50079 10.5008 2.55433 10.5008 2.65512V4.0126C10.5008 4.11339 10.4472 4.16693 10.3465 4.16693H5.65355C5.55276 4.16693 5.49607 4.11339 5.49607 4.0126V2.65512C5.49607 2.55433 5.55276 2.49764 5.65355 2.49764V2.50079ZM2.81575 4.17008H3.84882C3.93071 5.08976 4.71182 5.83307 5.65355 5.83307H10.3465C10.8006 5.82935 11.237 5.65663 11.5706 5.34859C11.9043 5.04055 12.1113 4.61928 12.1512 4.16693H13.1843C13.2702 4.16431 13.3557 4.1793 13.4356 4.21098C13.5155 4.24266 13.5881 4.29036 13.6489 4.35114C13.7096 4.41192 13.7573 4.48449 13.789 4.56439C13.8207 4.64429 13.8357 4.72984 13.8331 4.81575V16.8535C13.8353 16.9392 13.8199 17.0244 13.7881 17.1039C13.7562 17.1835 13.7084 17.2556 13.6477 17.3161C13.587 17.3765 13.5145 17.4239 13.4349 17.4554C13.3552 17.4869 13.2699 17.5018 13.1843 17.4992H2.8189C2.73326 17.5018 2.64799 17.4869 2.56831 17.4554C2.48862 17.4239 2.4162 17.3765 2.35547 17.3161C2.29473 17.2556 2.24697 17.1835 2.21509 17.1039C2.18322 17.0244 2.1679 16.9392 2.17008 16.8535V4.81575C2.16747 4.72984 2.18246 4.64429 2.21414 4.56439C2.24582 4.48449 2.29351 4.41192 2.35429 4.35114C2.41507 4.29036 2.48764 4.24266 2.56755 4.21098C2.64745 4.1793 2.73299 4.16431 2.8189 4.16693L2.81575 4.17008Z" fill="black" />
                                            </svg>

                                            <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="checkmark">
                                                <path d="M6.28024 11.3408C6.21075 11.4106 6.12813 11.4661 6.03713 11.504C5.94613 11.5418 5.84854 11.5613 5.74999 11.5613C5.65143 11.5613 5.55385 11.5418 5.46285 11.504C5.37185 11.4661 5.28923 11.4106 5.21974 11.3408L0.985238 7.10551C0.774333 6.89454 0.655853 6.60844 0.655853 6.31013C0.655853 6.01182 0.774333 5.72572 0.985238 5.51476L1.51549 4.98451C1.72646 4.7736 2.01255 4.65512 2.31086 4.65512C2.60917 4.65512 2.89527 4.7736 3.10624 4.98451L5.74999 7.62826L12.8937 0.484505C13.1047 0.2736 13.3908 0.155121 13.6891 0.155121C13.9874 0.155121 14.2735 0.2736 14.4845 0.484505L15.0147 1.01476C15.2256 1.22572 15.3441 1.51182 15.3441 1.81013C15.3441 2.10844 15.2256 2.39454 15.0147 2.60551L6.28024 11.3408Z" fill="black" />
                                            </svg>

                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div class="code-container">
                                <textarea readonly="" name="code" id="code" class="area" ref={codeRef}>
                                    {pattern.code}
                                </textarea>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
        </StyleComponent>

    );
};

export default PatternPage;

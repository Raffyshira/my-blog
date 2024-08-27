import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AnimateReveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView]);
    return (
        <>
            <div
                ref={ref}
                style={{
                    position: "relative",
                    width: "100%",
                    overflow: "hidden"
                }}
            >
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 55 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{
                        duration: 0.75,
                        delay: 0.10
                    }}
                >
                    {children}
                </motion.div>
            </div>
        </>
    );
};

export default AnimateReveal;

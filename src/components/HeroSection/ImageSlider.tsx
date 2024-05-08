import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type ImageSliderProps = {
  currentIndex: number;
  image: string;
};

const ImageSlider = (props: ImageSliderProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className={"animate-presence-div"}
        key={props.currentIndex}
        // custom={direction}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          opacity: { duration: 1 },
        }}
      >
        <img
          src={props.image}
          alt={`slide - ${props.currentIndex}`}
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            position: "absolute",
            top: 0,
            objectFit: "cover",
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageSlider;

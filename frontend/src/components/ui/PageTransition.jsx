import React from "react";
import { motion } from "framer-motion";
import { pageTransition } from "./animations";

const PageTransition = ({ children, className = "" }) => (
  <motion.div
    className={className}
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageTransition}
  >
    {children}
  </motion.div>
);

export default PageTransition;

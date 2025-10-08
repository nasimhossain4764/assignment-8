import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ModernLoading = ({ onLoadingComplete, loadingTime = 3000 }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentText, setCurrentText] = useState("Initializing");

  const loadingTexts = [
    "Initializing",
    "Loading assets",
    "Processing data",
    "Almost there",
    "Ready to go",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(() => onLoadingComplete?.(), 500);
          }, 300);
          return 100;
        }
        return oldProgress + 1;
      });
    }, loadingTime / 100);

    return () => clearInterval(interval);
  }, [loadingTime, onLoadingComplete]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentText((current) => {
        const currentIndex = loadingTexts.indexOf(current);
        const nextIndex = (currentIndex + 1) % loadingTexts.length;
        return loadingTexts[nextIndex];
      });
    }, 600);

    return () => clearInterval(textInterval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  if (isComplete) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="text-center max-w-md mx-4">
          {/* Animated Logo/Icon */}
          <motion.div
            className="mb-8 flex justify-center"
            variants={pulseVariants}
            animate="pulse"
          >
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/25"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="w-8 h-8 rounded-full bg-white/90" />
              </motion.div>
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.h1
            className="text-3xl font-bold text-white mb-2"
            variants={itemVariants}
          >
            Welcome
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-8"
            variants={itemVariants}
          >
            {currentText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              ...
            </motion.span>
          </motion.p>

          {/* Progress Bar */}
          <motion.div className="mb-4" variants={itemVariants}>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>

          {/* Progress Percentage */}
          <motion.div
            className="text-cyan-400 font-mono text-sm"
            variants={itemVariants}
          >
            {progress}%
          </motion.div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  y: [0, -100],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ModernLoading;

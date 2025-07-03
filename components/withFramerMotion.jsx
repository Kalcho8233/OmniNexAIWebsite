import { motion } from "framer-motion";

export default function withFramerMotion(Component, options = {}) {
  const {
    initial = { opacity: 0, y: 50 },
    whileInView = { opacity: 1, y: 0 },
    transition = { duration: 0.6, ease: 'easeOut' },
    viewport = { once: true, amount: 0.3 }
  } = options;

  return function AnimatedSection(props) {
    return (
      <motion.div
        initial={initial}
        whileInView={whileInView}
        transition={transition}
        viewport={viewport}
      >
        <Component {...props} />
      </motion.div>
    );
  };
}

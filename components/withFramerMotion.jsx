import { motion } from "framer-motion";

export default function withFramerMotion(Component) {
  return function AnimatedSection(props) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Component {...props} />
      </motion.div>
    );
  };
}

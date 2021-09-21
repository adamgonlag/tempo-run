import { motion } from "framer-motion";
import styles from "../styles/components/Backdrop.module.scss";

export default function Backdrop({ children, onClick }) {
  const backdrop = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: { opacity: 0 },
  };
  return (
    <motion.div
      key="backdrop"
      className={styles.backdrop}
      onClick={onClick}
      variants={backdrop}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
}

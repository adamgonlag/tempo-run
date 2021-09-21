import { motion } from "framer-motion";
import styles from "../styles/components/PageLoader.module.scss";

const container = {
  animate: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: { opacity: 0 },
};

const PageLoader = ({ pageLoading, setPageLoading }) => {
  return (
    <motion.div
      className={styles.loader}
      variants={container}
      animate="animate"
      exit="exit"
      onAnimationComplete={() => setPageLoading(false)}
    ></motion.div>
  );
};
export default PageLoader;

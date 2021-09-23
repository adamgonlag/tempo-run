import { motion } from "framer-motion";
import Backdrop from "./Backdrop";
import styles from "../styles/components/Modal.module.scss";
import AuthButton from "./AuthButton";

export default function Modal({ handleClose, text, code }) {
  const container = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
        delay: 0.5,
      },
    },
    exit: { y: "100vh", opacity: 0 },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <Backdrop>
      <motion.div
        key="modal"
        onClick={(e) => e.stopPropagation()}
        className={styles.modal}
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div key="modal-header" variant={item}>
          <h1>Move at your own pace.</h1>
        </motion.div>
        <motion.p key="modal-text">
          Create the perfect pace making playlist to keep you in the zone.
        </motion.p>
        <AuthButton code={code} />
      </motion.div>
    </Backdrop>
  );
}

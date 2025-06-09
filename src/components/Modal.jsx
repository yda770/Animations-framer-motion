import { createPortal } from 'react-dom';
import { motion, MotionConfig } from 'framer-motion';
export default function Modal({ title, children, onClose }) {



  return createPortal(
    <>
      <MotionConfig reducedMotion="never">

        <div className="backdrop" onClick={onClose} />
        <motion.dialog
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          open className="modal">
          <h2>{title}</h2>
          {children}
        </motion.dialog>
      </MotionConfig>

    </>,
    document.getElementById('modal')
  );
}

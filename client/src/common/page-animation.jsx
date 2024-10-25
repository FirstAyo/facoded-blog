import { AnimatePresence, motion } from 'framer-motion';
import PropTypes from 'prop-types';

function AnimationWrapper({ children, initial = {opacity: 0 }, animate = { opacity: 1 }, transition = { duration: 1}, keyValue, className }) {
  return (
    <AnimatePresence>
        <motion.div
        key = { keyValue }
        initial = { initial }
        animate = { animate }
        transition = { transition }
        className = { className }
        >
            { children }
        </motion.div>
    </AnimatePresence>
  )
}

AnimationWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    initial: PropTypes.string.isRequired,
    animate: PropTypes.string.isRequired,
    transition: PropTypes.string.isRequired,
    keyValue: PropTypes.number.isRequired,
    className: PropTypes.string.isRequired,
}

export default AnimationWrapper

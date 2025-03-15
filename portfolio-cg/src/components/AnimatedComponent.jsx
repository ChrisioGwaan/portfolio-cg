import { motion } from "framer-motion";

export default function AnimatedComponent() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 bg-blue-200 rounded shadow"
        >
            <p>This content fades in on load!</p>
        </motion.div>
    );
}
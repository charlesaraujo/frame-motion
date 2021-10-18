import { motion } from "framer-motion";

function App() {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="save-button"
        onClick={() => null}
      >
        Abrir modal
      </motion.button>
    </div>
  );
}
export default App;

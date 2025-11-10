"use client";
import { motion } from "framer-motion";

export default function ModalCustom({ isOpen, onClose, img, text, description }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-[1000]"
      onClick={onClose}
    >

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="bg-white rounded-3xl shadow-2xl max-w-[60%] w-[60%] max-h-[80vh] mx-4 flex flex-col items-start gap-4 p-[20px] relative z-[1010] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-xl"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold text-orange-700 mb-2">{text}</h2>
        <img
          src={img}
          alt={text}
          className="w-[35%] h-auto object-contain mx-auto mb-4"
        />
        <p className="text-gray-900 leading-relaxed">{description}</p>
      </motion.div>
    </motion.div>
  );
}

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function Lightbox({ image, onClose }) {
  return (
    <AnimatePresence>
      {image && (
        <motion.div
          data-testid="lightbox-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-6 cursor-zoom-out"
        >
          <button
            data-testid="lightbox-close"
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-gold transition-colors"
            aria-label="Close"
          >
            <X className="h-7 w-7" />
          </button>
          <motion.figure
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={image.src} alt={image.title} className="w-full max-h-[80vh] object-contain" />
            <figcaption className="mt-4 flex items-baseline justify-between">
              <span className="font-serif text-xl italic text-slate-200">{image.title}</span>
              <span className="text-xs font-mono uppercase tracking-widest text-gold/70">{image.loc}</span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

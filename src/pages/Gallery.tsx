import { motion } from "framer-motion";
import { useState } from "react";
import BackButton from "@/components/navigation/BackButton";

interface Image {
  id: number;
  src: string;
  alt: string;
  category?: string;
}

// Placeholder images with different categories
const images: Image[] = [
  {
    id: 1,
    src: `${import.meta.env.BASE_URL}gallery/sanddunes.jpg`,
    alt: "Sand Dunes",
    category: "Colorado"
  },
  {
    id: 2,
    src: `${import.meta.env.BASE_URL}gallery/smokymountains.jpg`,
    alt: "Smoky Mountains",
    category: "Tennessee"
  },
  {
    id: 3,
    src: `${import.meta.env.BASE_URL}gallery/washington.jpg`,
    alt: "Crystal Mountain",
    category: "Washington"
  },
  {
    id: 4,
    src: `${import.meta.env.BASE_URL}gallery/lakediablo.jpg`,
    alt: "Lake Diablo",
    category: "Washington"
  },
  {
    id: 5,
    src: `${import.meta.env.BASE_URL}gallery/northernlights.jpg`,
    alt: "Northern Lights",
    category: "Washington"
  },
  {
    id: 6,
    src: `${import.meta.env.BASE_URL}gallery/borabora.jpg`,
    alt: "Bora Bora",
    category: "French Polynesia"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  return (
    <div className="relative min-h-screen bg-background p-8 pt-24">
      <BackButton />
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-light text-center mb-12"
      >
        My Adventures
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {images.map((image) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            whileHover={{ 
              y: -8,
              transition: { duration: 0.2 }
            }}
            whileTap={{ scale: 0.98 }}
            className="group relative aspect-square overflow-hidden rounded-lg bg-foreground/5 cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              onClick={() => setSelectedImage(image)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg font-medium">{image.alt}</h3>
                {image.category && (
                  <span className="text-white/80 text-sm">{image.category}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          />
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white text-xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </motion.div>
      )}
    </div>
  );
}
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openImageModal = (item: any) => {
    setSelectedImage(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const galleryItems = [
    {
      id: 1,
      title: "Oxygen Infusion Therapy",
      description: "Smooth skin texture, Reduction of wrinkles, Skin tightening, Complexion lightening",
      image: "https://cdn.builder.io/o/assets%2F8f78a356a05540998176ea24bafbe59e%2Fd7baed947d7d40a4b35241d6d0698ba7?alt=media&token=0e507c7c-6bdf-47b6-80d3-e12199624797&apiKey=8f78a356a05540998176ea24bafbe59e",
      category: "facial",
    },
    {
      id: 2,
      title: "Hair Fall Treatment",
      description: "Effective solution for hair loss and thinning concerns",
      image: "https://cdn.builder.io/o/assets%2F8f78a356a05540998176ea24bafbe59e%2F86dc68bbbe234a84a19e941acf1caf1e?alt=media&token=33fd1cbe-e285-4ee1-834a-38ebecb3e6c7&apiKey=8f78a356a05540998176ea24bafbe59e",
      category: "hair",
    },
    {
      id: 3,
      title: "Advanced Technology Treatment",
      description: "Experience the transformative power of our state-of-the-art technology",
      image: "https://cdn.builder.io/o/assets%2F8f78a356a05540998176ea24bafbe59e%2Fa264d24a23304dc58d30d2fb239b776c?alt=media&token=392fff96-1572-4348-89bc-c2935ba86430&apiKey=8f78a356a05540998176ea24bafbe59e",
      category: "treatment",
    },
    {
      id: 4,
      title: "Dark Underarm Treatment",
      description: "Get your underarms summer-ready with our specialized treatment",
      image: "https://cdn.builder.io/o/assets%2F8f78a356a05540998176ea24bafbe59e%2Fb46c7bf3780b4709a6d0a156da2accae?alt=media&token=b18961b3-0c92-465a-ba33-e3e7cf1a7401&apiKey=8f78a356a05540998176ea24bafbe59e",
      category: "body",
    },
    {
      id: 5,
      title: "Hair Regrowth Treatment",
      description: "Professional hair restoration and regrowth solutions",
      image: "https://cdn.builder.io/o/assets%2F8f78a356a05540998176ea24bafbe59e%2F4051a3075fdc4ded8fffa1dd9290ef9c?alt=media&token=d7312041-5579-4428-8eda-54807e5bcf2d&apiKey=8f78a356a05540998176ea24bafbe59e",
      category: "hair",
    },
    {
      id: 6,
      title: "Lip Enhancement with Fillers",
      description: "Hydrated, enhanced, and beautifully contoured lips",
      image: "https://cdn.builder.io/o/assets%2F8f78a356a05540998176ea24bafbe59e%2F8c8af96a3d934388901152469d3c2022?alt=media&token=b0c6421b-07aa-4857-82cc-0177770774b0&apiKey=8f78a356a05540998176ea24bafbe59e",
      category: "cosmetic",
    },
    {
      id: 7,
      title: "Dermal Filler Enhancement",
      description: "Subtle enhancement through expert dermal filler application",
      image: "https://cdn.builder.io/o/assets%2F8f78a356a05540998176ea24bafbe59e%2F6dff1bbad7a342ae93a12fc2a0a1e516?alt=media&token=9fce230e-f7c5-48d3-9042-1c46f0379c6f&apiKey=8f78a356a05540998176ea24bafbe59e",
      category: "cosmetic",
    },
    {
      id: 8,
      title: "Lip Hydration Therapy",
      description: "Professional lip hydration treatment for plump, healthy lips",
      image: "https://cdn.builder.io/o/assets%2F8f78a356a05540998176ea24bafbe59e%2F266edb8ab7f04812984e4809f4d94437?alt=media&token=0c2bd1c5-cc86-41a9-adfc-d625f4c077ce&apiKey=8f78a356a05540998176ea24bafbe59e",
      category: "cosmetic",
    },
    {
      id: 9,
      title: "Acne Treatment Progress",
      description: "Complete acne treatment journey showing remarkable improvement",
      image: "/images/Acne & pigmentation treatment.jpeg",
      category: "facial",
    },
    {
      id: 10,
      title: "Hair Growth Sessions",
      description: "Progressive hair regrowth over 4 treatment sessions",
      image: "/images/WhatsApp Image 2025-12-22 at 4.20.20 PM (1).jpeg",
      category: "hair",
    },
    {
      id: 11,
      title: "Jawline Contouring",
      description: "Non-invasive jawline enhancement treatment results",
      image: "/images/Chin filler.jpeg",
      category: "cosmetic",
    },
    {
      id: 12,
      title: "Hair Growth Treatment",
      description: "Advanced hair regrowth treatment with visible results",
      image: "/images/WhatsApp Image 2025-12-22 at 4.20.21 PM.jpeg",
      category: "hair",
    },
    {
      id: 13,
      title: "Acne Scar Treatment",
      description: "Complete acne scar removal treatment progression",
      image: "/images/Cosmelan peel treatment.jpeg",
      category: "facial",
    },
  ];

  const categories = [
    { id: "all", label: "All Treatments" },
    { id: "facial", label: "Facial Treatments" },
    { id: "hair", label: "Hair Treatments" },
    { id: "body", label: "Body Treatments" },
    { id: "cosmetic", label: "Cosmetic" },
    { id: "treatment", label: "Advanced Tech" },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <motion.div
        className="bg-gradient-to-br from-rose-50 to-amber-50 py-20 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            Treatment Gallery
          </h1>
          <p className="text-xl text-slate-600">
            Explore our latest treatments and transformations
          </p>
        </div>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category.id
                  ? "bg-slate-800 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Gallery Grid */}
      <motion.div
        className="max-w-7xl mx-auto px-4 pb-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Image Container */}
              <div 
                className="relative h-80 overflow-hidden bg-slate-100 cursor-pointer"
                onClick={() => openImageModal(item)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  {/* Content Overlay */}
                  <div className="w-full bg-gradient-to-t from-black to-transparent p-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-slate-300 text-sm font-semibold mb-1">
                      Treatment
                    </p>
                    <h3 className="text-white text-xl font-bold mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200 text-sm">{item.description}</p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="bg-white p-6">
                <span className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-semibold mb-3">
                  {item.category === "all"
                    ? "General"
                    : item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {isModalOpen && selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="relative max-w-3xl max-h-[80vh] w-full bg-white rounded-lg shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-[60vh] overflow-hidden rounded-t-lg">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
              >
                <X size={24} />
              </button>
              <div className="bg-white p-6 rounded-b-lg">
                <h3 className="text-slate-900 text-xl font-bold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-slate-600">{selectedImage.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openServiceModal = (service: any) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const serviceCategories = [
    {
      id: "skin-treatment",
      title: "Skin Treatment",
      description:
        "Our comprehensive skin treatment services are designed to address a variety of skin concerns, including acne, pigmentation, and dullness.",
      image: "https://images.pexels.com/photos/5659012/pexels-photo-5659012.jpeg",
      subcategories: [
        {
          name: "Clinical Peels",
          items: [
            "Party Peel",
            "Cosmelan Peel",
            "Dermamelan Peel",
            "Body Peels",
            "Acnelan",
            "Ferulac Dubai Lip Peel",
            "Custom Peels",
          ],
        },
        {
          name: "Medi Facials",
          items: [
            "Hydra Medi Facial",
            "Glo2 Facial",
            "Gold Express",
            "Exoluxe Facial",
            "Pink Peel Facial",
            "Yes Peel Facial",
            "Vampire Facial",
          ],
        },
        {
          name: "Skin Injectables",
          items: ["Volite", "Profhilo", "Rich Booster", "Botox", "Dermal Fillers"],
        },
        {
          name: "Moles & Skin Tag Removal",
          description:
            "Safely remove unwanted moles and skin tags for smoother, clearer skin with our advanced treatments.",
        },
      ],
    },
    {
      id: "anti-aging",
      title: "Anti-Aging Treatment",
      description:
        "Turn back the clock with our anti-aging treatments. We offer customized solutions to reduce fine lines, wrinkles, and sagging skin.",
      image: "https://images.pexels.com/photos/7582553/pexels-photo-7582553.jpeg",
    },
    {
      id: "cosmetic",
      title: "Cosmetic Treatment",
      description:
        "Enhance your natural beauty with our cosmetic treatments. Whether you're looking for fillers, Botox, or other non-invasive procedures.",
      image: "https://images.pexels.com/photos/5240836/pexels-photo-5240836.jpeg",
      subcategories: [
        {
          name: "Procedures",
          items: [
            "BB Glow Treatment",
            "Lip Micropigmentation",
            "Eyebrow Microblading",
            "Scalp Micropigmentation",
            "Lash Lift",
            "Body Piercing",
          ],
        },
      ],
    },
    {
      id: "laser-hair",
      title: "Laser Hair Reduction",
      description:
        "Say goodbye to unwanted hair with our laser hair reduction services. We use the latest laser technology for safe, effective, and long-lasting hair removal.",
      image: "https://images.pexels.com/photos/14438392/pexels-photo-14438392.jpeg",
    },
    {
      id: "body-contouring",
      title: "Body Contouring",
      description:
        "Non-invasive fat loss programs using lipolytic injections and EM SLIM NEO machine for arms, tummy, bra fat, and double chin.",
      image: "https://i.pinimg.com/1200x/f4/8c/26/f48c26e6e16355c058f32a64311ea837.jpg",
    },
    {
      id: "iv-infusions",
      title: "IV Infusions",
      description:
        "IV infusion therapies tailored to your needs, helping to improve skin hydration, energy levels, and overall well-being.",
      image: "https://images.pexels.com/photos/6010936/pexels-photo-6010936.jpeg",
      subcategories: [
        {
          name: "Infusion Drips",
          items: [
            "Reglow Drip - Glow",
            "Regenerative Drip - Ageless",
            "Revitalize Drip - Beauty",
            "Regrowth Drip - Hair Fall",
            "Reduce Drip - Weight Loss",
            "Recharge Drip - Gym",
            "Revive Drip - Immunity",
            "Renew Drip - Sports",
            "Recover Drip - Hangover",
          ],
        },
      ],
    },
    {
      id: "hair-growth",
      title: "Hair Growth & PRP Treatments",
      description:
        "Advanced hair restoration and growth treatments using cutting-edge technology and regenerative medicine.",
      image: "https://i.pinimg.com/1200x/96/44/7f/96447f397f68bcb7de434e1beb51f2b2.jpg",
      subcategories: [
        {
          name: "Hair Treatment Options",
          items: [
            "PRP (Platelet-Rich Plasma)",
            "PRF (Platelet-Rich Fibrin)",
            "Growth Factor Concentrate (GFC)",
            "QR678 - Innovative Hair Growth",
            "DRS1512",
            "Stem Cell Meso",
            "Hair Revival Treatment",
            "Hair Botox",
            "PDRN Therapy",
          ],
        },
      ],
    },
  ];

  const whyChooseReasons = [
    {
      icon: "👨‍⚕️",
      title: "Expert Team",
      description: "Certified Dermatologist, aesthetic physicians and therapists",
      image: "https://images.pexels.com/photos/5659012/pexels-photo-5659012.jpeg",
    },
    {
      icon: "🏥",
      title: "Advanced Technology",
      description: "State-of-the-art equipment and clinically-tested products",
      image: "https://images.pexels.com/photos/14438392/pexels-photo-14438392.jpeg",
    },
    {
      icon: "✨",
      title: "Personalized Care",
      description: "Customized treatment plans tailored to your unique needs",
      image: "https://images.pexels.com/photos/5240836/pexels-photo-5240836.jpeg",
    },
  ];

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
            Our Premium Services
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional treatments delivered by certified experts using premium products
            and advanced technology to deliver visible results.
          </p>
        </div>
      </motion.div>

      {/* Services Grid with Images */}
      <motion.div
        className="max-w-7xl mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-white"
            >
              {/* Image Container */}
              {service.image && (
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Content */}
              <div className="px-6 py-5">
                <div className="text-left mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                </div>
                <button
                  onClick={() => openServiceModal(service)}
                  className="w-full py-2 px-4 bg-rose-500 text-white rounded-lg transition-colors"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Service Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedService && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                {selectedService.image && (
                  <div className="h-64 w-full overflow-hidden">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {selectedService.title}
                </h2>
                <p className="text-slate-600 mb-6">{selectedService.description}</p>
                
                {selectedService.subcategories && (
                  <div className="space-y-6">
                    {selectedService.subcategories.map((subcategory: any, idx: number) => (
                      <div key={idx}>
                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-rose-500 rounded-full" />
                          {subcategory.name}
                        </h4>
                        {subcategory.description && (
                          <p className="text-slate-600 mb-3 ml-4 text-sm">
                            {subcategory.description}
                          </p>
                        )}
                        {subcategory.items && (
                          <div className="grid grid-cols-1 gap-1 ml-4">
                            {subcategory.items.map((item: string, itemIdx: number) => (
                              <div
                                key={itemIdx}
                                className="flex items-center gap-2 text-slate-700 text-sm"
                              >
                                <span className="text-rose-400">•</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Why Choose Us - With Images */}
      <motion.div
        className="bg-gradient-to-r from-primary-50 to-amber-50 py-20 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseReasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-white"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={reason.image}
                    alt={reason.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

    </div>
  );
}

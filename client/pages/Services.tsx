import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Services() {
  const [expandedService, setExpandedService] = useState<string | null>(null);

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
      image: "https://images.pexels.com/photos/6707559/pexels-photo-6707559.jpeg",
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
      image: "https://images.pexels.com/photos/5793903/pexels-photo-5793903.jpeg",
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
      description: "Certified dermatologists and aestheticians with years of experience",
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
              <button
                onClick={() =>
                  setExpandedService(
                    expandedService === service.id ? null : service.id
                  )
                }
                className="w-full px-6 py-5 flex flex-col items-start justify-between hover:bg-slate-50 transition-all"
              >
                <div className="text-left mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <span className="text-primary-500 font-semibold text-sm">
                    Learn More
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-primary-500 transition-transform ${
                      expandedService === service.id ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Expanded Content */}
              {expandedService === service.id && service.subcategories && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-slate-50 border-t border-primary-200 px-6 py-6"
                >
                  <div className="space-y-6">
                    {service.subcategories.map((subcategory, idx) => (
                      <div key={idx}>
                        <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary-500 rounded-full" />
                          {subcategory.name}
                        </h4>
                        {subcategory.description && (
                          <p className="text-slate-600 mb-3 ml-4 text-sm">
                            {subcategory.description}
                          </p>
                        )}
                        {subcategory.items && (
                          <div className="grid grid-cols-1 gap-1 ml-4">
                            {subcategory.items.map((item, itemIdx) => (
                              <div
                                key={itemIdx}
                                className="flex items-center gap-2 text-slate-700 text-sm"
                              >
                                <span className="text-primary-400">•</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

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

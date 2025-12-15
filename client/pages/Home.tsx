import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function Home() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        ease: "easeOut"
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      },
    },
  };

  const services = [
    {
      icon: "✨",
      title: "Professional Facials",
      description: "Custom facial treatments tailored to your skin type and concerns",
    },
    {
      icon: "💆",
      title: "Skin Treatments",
      description: "Advanced dermatological treatments for visible results",
    },
    {
      icon: "🧴",
      title: "Product Consultation",
      description: "Expert guidance to find the perfect skincare products for you",
    },
  ];


  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-white to-amber-50">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 0.5 }}
            className="absolute bottom-20 left-10 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 9, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 left-1/2 w-72 h-72 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          />
        </div>

        {/* Content */}
        <motion.div
          className="relative z-10 max-w-5xl mx-auto px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <p className="text-rose-500 font-semibold mb-4 text-lg">Welcome to SkinWork</p>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight inline-block"
          >
            Elevate Your Skin, Elevate Your Life
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Premium skincare solutions for beauty professionals, aestheticians, and dermatology patients. Discover luxury products and professional treatments designed for your most radiant skin.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://click4appointment.com/clinic-details/skinwork-3874"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-rose-500 text-white px-8 py-4 rounded-full font-semibold transition-all"
            >
              Book a Treatment <ArrowRight className="ml-2" size={20} />
            </a>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <img
            src="https://images.pexels.com/photos/3785806/pexels-photo-3785806.jpeg"
            alt="Woman with beautiful skin"
            className="w-full h-full object-cover mix-blend-overlay opacity-40"
          />
        </motion.div>
      </section>


      {/* Professional Treatment Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-rose-50 to-amber-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-2xl bg-gray-100">
                <img
                  src="https://i.pinimg.com/1200x/58/e1/84/58e184d168a0189bc22d0ab76275e8ca.jpg"
                  alt="Professional skin care treatment"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80';
                  }}
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Professional Expertise You Can Trust
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Our team of certified dermatologists and aestheticians brings years of experience and a passion for skincare excellence. We're committed to delivering results that you can see and feel.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Certified dermatologists and aestheticians",
                  "Premium, clinically-tested products",
                  "Personalized treatment plans",
                  "State-of-the-art facilities",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Check className="text-rose-500" size={20} />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center bg-rose-500 text-white px-8 py-3 rounded-full font-semibold transition-all"
              >
                Learn Our Story
              </Link>
            </motion.div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
    </main>
  );
}

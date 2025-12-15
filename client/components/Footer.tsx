import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const footerLinks = [
    {
      title: "Services",
      links: [
        { name: "Professional Treatments", href: "/services" },
        { name: "Consultations", href: "/services" },
        { name: "Custom Facials", href: "/services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/about" },
        { name: "Blog", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "#" },
        { name: "Appointments", href: "#" },
      ],
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
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="bg-gradient-to-b from-slate-50 to-white border-t border-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F8f78a356a05540998176ea24bafbe59e%2Fedda637fd5074fd989d83fed65a6afa5?format=webp&width=800"
                alt="SkinWork"
                className="h-12 w-auto filter brightness-75"
              />
              <span className="font-bold text-slate-900">Skinwork</span>
            </Link>
            <p className="text-slate-600 text-sm">
              Premium skincare solutions for beauty professionals and dermatology patients.
            </p>
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/skinworkclinic?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary-500 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-primary-500 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-primary-500 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section) => (
            <motion.div key={section.title} variants={itemVariants}>
              <h3 className="font-semibold text-slate-900 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-slate-600 hover:text-primary-500 text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-slate-900 mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <Phone size={16} className="mt-1 flex-shrink-0 text-primary-500" />
                <span>+91 8088385292<br/>+91 7975805848</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <Mail size={16} className="mt-1 flex-shrink-0 text-primary-500" />
                <span>info@skinwork.in</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-slate-600">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-primary-500" />
                <span>Rajajinagar Metro Station<br/>Fern Arcade, 4th floor<br/>Service road, WOC road</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <div className="border-t border-primary-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
            <p>&copy; 2025 SkinWork. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

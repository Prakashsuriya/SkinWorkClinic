import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export default function Contact() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-rose-50 to-amber-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Get In Touch</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Visit us or give us a call.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-rose-100"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <Phone className="text-rose-500" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Call Us</h3>
              <p className="text-slate-600 mb-2">+91 8088385292</p>
              <p className="text-slate-600">+91 7975805848</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-rose-100"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <Mail className="text-rose-500" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600">info@skinwork.in</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-rose-100"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                <Clock className="text-rose-500" size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Business Hours</h3>
              <p className="text-slate-600 text-sm">Mon-Fri: 10AM-8PM</p>
              <p className="text-slate-600 text-sm">Sat: 11AM-7PM</p>
              <p className="text-slate-600 text-sm">Sun: 12PM-6PM</p>
            </div>
          </motion.div>
        </div>

        {/* Main Contact Info & Map Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                <MapPin className="text-rose-500" size={20} />
              </div>
              Visit Our Clinic
            </h2>
            <div className="space-y-4">
              <p className="text-slate-700 font-medium">Rajajinagar Metro Station</p>
              <p className="text-slate-600">Fern Arcade building, 4th floor</p>
              <p className="text-slate-600">Service road, WOC road</p>
              <div className="pt-4 border-t border-rose-100">
                <p className="text-slate-600 text-sm mb-2">We're conveniently located near the metro station with easy access from all parts of the city.</p>
                <p className="text-slate-600 text-sm">Free parking available for our clients.</p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-lg h-96 border border-rose-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3518.032249626775!2d77.5494721!3d13.000469299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d42fe6061ab%3A0xae5415f8b9a43eef!2sSkin%20Work%20Clinic!5e1!3m2!1sen!2sin!4v1766466008923!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Customer Testimonials</h1>
          <p className="text-xl text-slate-600 mb-12">
            Real experiences from our satisfied clients
          </p>

          <div className="bg-white rounded-2xl p-12 border-2 border-rose-200 shadow-lg">
            <div className="text-6xl mb-6">⭐</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Full Testimonials Page Coming Soon
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              Continue prompting to fill in the detailed testimonials content, including:
            </p>
            <ul className="text-left space-y-2 text-slate-600 mb-8 inline-block">
              <li>• Customer reviews and ratings</li>
              <li>• Success stories</li>
              <li>• Before and after photos</li>
              <li>• Video testimonials</li>
              <li>• Client transformations</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";

export default function Products() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Product Gallery</h1>
          <p className="text-xl text-slate-600 mb-12">
            Premium skincare products for professional and personal use
          </p>

          <div className="bg-white rounded-2xl p-12 border-2 border-rose-200 shadow-lg">
            <div className="text-6xl mb-6">🧴</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Full Product Gallery Coming Soon
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              Continue prompting to fill in the detailed product content, including:
            </p>
            <ul className="text-left space-y-2 text-slate-600 mb-8 inline-block">
              <li>• Product categories</li>
              <li>• Individual product pages</li>
              <li>• Product descriptions & ingredients</li>
              <li>• Pricing and availability</li>
              <li>• Add to cart functionality</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-slate-900 mb-6">About SkinWork</h1>
          <p className="text-xl text-slate-600 mb-12">
            Learn our story and mission
          </p>

          <div className="bg-white rounded-2xl p-12 border-2 border-rose-200 shadow-lg">
            <div className="text-6xl mb-6">💫</div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Full About Page Coming Soon
            </h2>
            <p className="text-slate-600 text-lg mb-6">
              Continue prompting to fill in the detailed about content, including:
            </p>
            <ul className="text-left space-y-2 text-slate-600 mb-8 inline-block">
              <li>• Company history and mission</li>
              <li>• Team bios and credentials</li>
              <li>• Brand values and philosophy</li>
              <li>• Certifications and awards</li>
              <li>• Community involvement</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

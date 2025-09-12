import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Users, Shield, Globe, Heart, X } from "lucide-react";

const TransformationShowcase = () => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-transformation-showcase", handler);
    return () =>
      window.removeEventListener("open-transformation-showcase", handler);
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                How Alumni Nexus Transforms Engagement
              </h3>
              <button
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <motion.div
                  className="rounded-xl border border-gray-100 p-5 bg-gradient-to-br from-blue-50 to-white"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: "0 16px 32px rgba(0,0,0,0.06)",
                  }}
                >
                  <Zap className="w-6 h-6 text-blue-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-1">
                    Launch Multi-channel Campaigns
                  </p>
                  <p className="text-sm text-gray-600">
                    Email, SMS, and push in one flow with smart segments.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-xl border border-gray-100 p-5 bg-gradient-to-br from-indigo-50 to-white"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.05 }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: "0 16px 32px rgba(0,0,0,0.06)",
                  }}
                >
                  <Users className="w-6 h-6 text-indigo-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-1">
                    Grow Mentorship Networks
                  </p>
                  <p className="text-sm text-gray-600">
                    AI-assisted mentor/mentee matching.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-xl border border-gray-100 p-5 bg-gradient-to-br from-emerald-50 to-white"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: "0 16px 32px rgba(0,0,0,0.06)",
                  }}
                >
                  <Shield className="w-6 h-6 text-emerald-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-1">
                    Secure Payments & Donations
                  </p>
                  <p className="text-sm text-gray-600">
                    Integrated payments and receipts.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-xl border border-gray-100 p-5 bg-gradient-to-br from-purple-50 to-white"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.15 }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: "0 16px 32px rgba(0,0,0,0.06)",
                  }}
                >
                  <Globe className="w-6 h-6 text-purple-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-1">
                    Global Alumni Directory
                  </p>
                  <p className="text-sm text-gray-600">
                    Searchable profiles with privacy controls.
                  </p>
                </motion.div>
                <motion.div
                  className="rounded-xl border border-gray-100 p-5 bg-gradient-to-br from-rose-50 to-white"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                  whileHover={{
                    y: -4,
                    scale: 1.02,
                    boxShadow: "0 16px 32px rgba(0,0,0,0.06)",
                  }}
                >
                  <Heart className="w-6 h-6 text-rose-600 mb-3" />
                  <p className="font-semibold text-gray-900 mb-1">
                    Community & Events
                  </p>
                  <p className="text-sm text-gray-600">
                    Plan events, RSVPs, and follow-ups.
                  </p>
                </motion.div>
              </div>
              <div className="mt-6 flex justify-end">
                <button
                  className="px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TransformationShowcase;

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

type GuidedDemoProps = {
  open: boolean;
  onClose: () => void;
};

const steps = [
  {
    title: 'Switch Tenants Instantly',
    desc: 'Demo the multi-tenant architecture by switching institutions to see isolated data.',
    badge: 'Multi-tenant',
  },
  {
    title: 'Onboard Alumni in 1 Click',
    desc: 'Import a CSV or invite via email; we validate and deduplicate automatically.',
    badge: 'Onboarding',
  },
  {
    title: 'Send a Campaign',
    desc: 'Reach alumni across email/SMS/push with templates and smart segments.',
    badge: 'Engagement',
  },
  {
    title: 'View Live Analytics',
    desc: 'Track opens, CTR, and engagement cohorts updated in near real-time.',
    badge: 'Analytics',
  },
];

const useTrapScroll = (enabled: boolean) => {
  useEffect(() => {
    if (!enabled) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, [enabled]);
};

const GuidedDemo: React.FC<GuidedDemoProps> = ({ open, onClose }) => {
  const [index, setIndex] = React.useState(0);
  useTrapScroll(open);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!open) return;
      if (e.key === 'ArrowRight') setIndex((i) => Math.min(i + 1, steps.length - 1));
      if (e.key === 'ArrowLeft') setIndex((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

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
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="guided-demo-title"
          >
            <div className="absolute right-3 top-3">
              <button
                aria-label="Close demo"
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-6 pt-6 pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs rounded-md bg-blue-50 text-blue-700 font-semibold">
                    {steps[index].badge}
                  </span>
                  <h3 id="guided-demo-title" className="text-xl sm:text-2xl font-bold text-gray-900">
                    {steps[index].title}
                  </h3>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500">
                  {steps.map((_, i) => (
                    <div key={i} className={`h-1.5 w-8 rounded-full ${i <= index ? 'bg-blue-600' : 'bg-gray-200'}`} />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-gray-600">
                {steps[index].desc}
              </p>
            </div>

            <div className="px-6 pb-6">
              <motion.div
                key={index}
                className="rounded-xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-4 sm:p-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2 space-y-3">
                    <div className="h-4 w-40 bg-gray-200 rounded" />
                    <div className="h-3 w-64 bg-gray-200 rounded" />
                    <div className="h-3 w-48 bg-gray-100 rounded" />
                    <div className="h-24 w-full bg-white border border-gray-100 rounded-lg" />
                  </div>
                  <div className="space-y-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="flex items-center gap-2 p-2 rounded-lg border border-gray-100 bg-white">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">Ready to go</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="px-6 pb-6 flex items-center justify-between">
              <button
                onClick={() => setIndex((i) => Math.max(i - 1, 0))}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
              >
                <ArrowLeft className="w-4 h-4" />
                Back
              </button>
              {index < steps.length - 1 ? (
                <button
                  onClick={() => setIndex((i) => Math.min(i + 1, steps.length - 1))}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                >
                  Next
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  Done
                </button>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GuidedDemo;



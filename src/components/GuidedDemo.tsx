import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Building2, Users, Mail, BarChart3, Database, Upload, Send, Eye } from 'lucide-react';

type GuidedDemoProps = {
  open: boolean;
  onClose: () => void;
};

const steps = [
  {
    title: 'Switch Tenants Instantly',
    desc: 'Demo the multi-tenant architecture by switching institutions to see isolated data.',
    badge: 'Multi-tenant',
    icon: Building2,
    demoContent: {
      left: {
        title: 'Institution Selector',
        items: [
          { name: 'Stanford University', active: true, students: '17,381' },
          { name: 'MIT', active: false, students: '11,934' },
          { name: 'Harvard University', active: false, students: '23,731' },
        ]
      },
      right: {
        title: 'Data Isolation',
        stats: [
          { label: 'Alumni Records', value: '45,231', color: 'blue' },
          { label: 'Active Campaigns', value: '12', color: 'green' },
          { label: 'Engagement Rate', value: '68%', color: 'purple' },
        ]
      }
    }
  },
  {
    title: 'Onboard Alumni in 1 Click',
    desc: 'Import a CSV or invite via email; we validate and deduplicate automatically.',
    badge: 'Onboarding',
    icon: Upload,
    demoContent: {
      left: {
        title: 'Import Options',
        items: [
          { name: 'CSV Upload', icon: Database, status: 'ready' },
          { name: 'Email Invites', icon: Mail, status: 'ready' },
          { name: 'API Integration', icon: Users, status: 'ready' },
        ]
      },
      right: {
        title: 'Processing Status',
        stats: [
          { label: 'Records Imported', value: '2,847', color: 'green' },
          { label: 'Duplicates Found', value: '23', color: 'orange' },
          { label: 'Validation Errors', value: '5', color: 'red' },
        ]
      }
    }
  },
  {
    title: 'Send a Campaign',
    desc: 'Reach alumni across email/SMS/push with templates and smart segments.',
    badge: 'Engagement',
    icon: Send,
    demoContent: {
      left: {
        title: 'Campaign Builder',
        items: [
          { name: 'Event Invitation', icon: Mail, status: 'draft' },
          { name: 'Newsletter', icon: Mail, status: 'scheduled' },
          { name: 'Fundraising Appeal', icon: Mail, status: 'sent' },
        ]
      },
      right: {
        title: 'Delivery Status',
        stats: [
          { label: 'Emails Sent', value: '8,432', color: 'blue' },
          { label: 'Open Rate', value: '34%', color: 'green' },
          { label: 'Click Rate', value: '12%', color: 'purple' },
        ]
      }
    }
  },
  {
    title: 'View Live Analytics',
    desc: 'Track opens, CTR, and engagement cohorts updated in near real-time.',
    badge: 'Analytics',
    icon: BarChart3,
    demoContent: {
      left: {
        title: 'Real-time Metrics',
        items: [
          { name: 'Engagement Trends', icon: BarChart3, status: 'live' },
          { name: 'Geographic Data', icon: Eye, status: 'live' },
          { name: 'Cohort Analysis', icon: Users, status: 'live' },
        ]
      },
      right: {
        title: 'Performance',
        stats: [
          { label: 'Total Engagement', value: '89%', color: 'green' },
          { label: 'Growth Rate', value: '+23%', color: 'blue' },
          { label: 'ROI', value: '340%', color: 'purple' },
        ]
      }
    }
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
                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Left Side - Interactive Content */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-3">
                      {React.createElement(steps[index].icon, { className: "w-5 h-5 text-blue-600" })}
                      <h4 className="font-semibold text-gray-900">{steps[index].demoContent.left.title}</h4>
                    </div>
                    <div className="space-y-2">
                      {steps[index].demoContent.left.items.map((item, i) => (
                        <motion.div
                          key={i}
                          className={`flex items-center justify-between p-3 rounded-lg border transition-all ${
                            item.active ? 'border-blue-200 bg-blue-50' : 'border-gray-200 bg-white'
                          }`}
                          whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex items-center gap-3">
                            {item.icon && React.createElement(item.icon, { className: "w-4 h-4 text-gray-600" })}
                            <span className="text-sm font-medium text-gray-900">{item.name}</span>
                            {item.status && (
                              <span className={`px-2 py-0.5 text-xs rounded-full ${
                                item.status === 'ready' ? 'bg-green-100 text-green-700' :
                                item.status === 'draft' ? 'bg-yellow-100 text-yellow-700' :
                                item.status === 'scheduled' ? 'bg-blue-100 text-blue-700' :
                                item.status === 'sent' ? 'bg-green-100 text-green-700' :
                                item.status === 'live' ? 'bg-purple-100 text-purple-700' :
                                'bg-gray-100 text-gray-700'
                              }`}>
                                {item.status}
                              </span>
                            )}
                          </div>
                          {item.students && (
                            <span className="text-xs text-gray-500">{item.students} alumni</span>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Stats & Metrics */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-gray-900">{steps[index].demoContent.right.title}</h4>
                    </div>
                    <div className="space-y-3">
                      {steps[index].demoContent.right.stats.map((stat, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center justify-between p-3 rounded-lg bg-white border border-gray-100"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="text-sm text-gray-600">{stat.label}</span>
                          <span className={`text-lg font-bold ${
                            stat.color === 'blue' ? 'text-blue-600' :
                            stat.color === 'green' ? 'text-green-600' :
                            stat.color === 'purple' ? 'text-purple-600' :
                            stat.color === 'orange' ? 'text-orange-600' :
                            stat.color === 'red' ? 'text-red-600' :
                            'text-gray-600'
                          }`}>
                            {stat.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
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



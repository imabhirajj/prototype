import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Maximize2, X, Volume2, VolumeX, Download } from 'lucide-react';

const DemoPreview = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const demoSteps = [
    {
      title: "Alumni Dashboard",
      description: "Real-time analytics and engagement metrics",
      time: "0:15"
    },
    {
      title: "Event Management",
      description: "Create and manage alumni events seamlessly",
      time: "0:45"
    },
    {
      title: "Networking Features",
      description: "AI-powered mentor-mentee matching",
      time: "1:20"
    },
    {
      title: "Fundraising Tools",
      description: "Integrated donation and campaign management",
      time: "1:50"
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className={`bg-white rounded-2xl shadow-2xl overflow-hidden ${
            isFullscreen ? 'w-full h-full max-w-none max-h-none' : 'max-w-4xl w-full max-h-[90vh]'
          }`}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Alumni Nexus Demo</h2>
              <p className="text-gray-600">See our platform in action</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <Maximize2 className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 p-6">
            {/* Video Player */}
            <div className="lg:col-span-2">
              <div className="relative bg-gradient-to-br from-gray-900 to-blue-900 rounded-xl overflow-hidden aspect-video">
                {/* Demo Video Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <motion.div
                      className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Play className="w-8 h-8" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">Interactive Demo</h3>
                    <p className="text-white/80">Click play to see Alumni Nexus in action</p>
                  </div>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between bg-black/50 backdrop-blur-sm rounded-lg p-3">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                      </button>
                      <span className="text-white text-sm">2:30</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="p-2 hover:bg-white/20 rounded-full transition-colors"
                      >
                        {isMuted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Demo Steps */}
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-900 mb-4">Demo Highlights</h4>
              {demoSteps.map((step, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="font-semibold text-gray-900">{step.title}</h5>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                      {step.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer CTA */}
          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
              <div>
                <h4 className="font-semibold text-gray-900">Ready to get started?</h4>
                <p className="text-sm text-gray-600">Schedule a personalized demo with our team</p>
              </div>
              <div className="flex gap-3">
                <button 
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2"
                  onClick={() => {
                    // Simulate brochure download
                    const link = document.createElement('a');
                    link.href = '/brochure.pdf'; // This would be your actual brochure file
                    link.download = 'AlumniNexus_Brochure.pdf';
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  <Download className="w-4 h-4" />
                  Download Brochure
                </button>
                <button 
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                  onClick={() => {
                    onClose();
                    // Trigger demo modal from parent
                    const event = new CustomEvent('open-guided-demo');
                    window.dispatchEvent(event);
                  }}
                >
                  <Play className="w-4 h-4" />
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DemoPreview;

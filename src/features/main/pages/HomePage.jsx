import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import { Dialog } from "primereact/dialog";
import { useState } from "react";
import { 
  CubeIcon, 
  ChartBarIcon, 
  DevicePhoneMobileIcon,
  UserCircleIcon,
  ArrowRightIcon,
  PlayCircleIcon,
  XMarkIcon
} from '@heroicons/react/24/outline';

const HomePage = () => {
  const [showDemo, setShowDemo] = useState(false);

  const handleDemoClick = () => {
    setShowDemo(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Demo Modal */}
      <Dialog 
        visible={showDemo} 
        onHide={() => setShowDemo(false)}
        header="Product Demo"
        className="w-full max-w-4xl"
        contentClassName="p-0 bg-black"
        headerClassName="bg-gray-900 text-white border-b border-gray-800"
        closeIcon={<XMarkIcon className="w-5 h-5" />}
      >
        <div className="relative pt-[56.25%]">
          <iframe
            src="https://www.youtube.com/embed/your-video-id"
            className="absolute top-0 left-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Dialog>

      {/* Hero Section */}
      <section className="flex items-center justify-center min-h-[calc(100vh-64px)] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center space-y-8 max-w-4xl">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-600">
            Smart Storage Solutions
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Manage your inventory efficiently with our modern and user-friendly platform.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Button className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-primary-500/50 transition-all flex items-center gap-2">
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
            <Button 
              severity="secondary" 
              outlined 
              className="px-8 py-3 text-lg font-semibold flex items-center gap-2"
              onClick={handleDemoClick}
            >
              Watch Demo
              <PlayCircleIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-primary-400">
            Key Features
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-800/50 p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-14 w-14 rounded-full bg-primary-500/20 flex items-center justify-center mb-4">
                <CubeIcon className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Inventory Control</h3>
              <p className="text-gray-400">Manage your inventory in real-time with automatic updates and detailed reports.</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-800/50 p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-14 w-14 rounded-full bg-primary-500/20 flex items-center justify-center mb-4">
                <ChartBarIcon className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Advanced Analytics</h3>
              <p className="text-gray-400">Gain valuable insights with our analytics tools and custom reports.</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-800/50 p-6 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="h-14 w-14 rounded-full bg-primary-500/20 flex items-center justify-center mb-4">
                <DevicePhoneMobileIcon className="w-8 h-8 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Mobile Access</h3>
              <p className="text-gray-400">Access your information from anywhere with our optimized mobile app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-primary-900/30 to-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-400">10K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-400">1M+</div>
              <div className="text-gray-400">Items Tracked</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-400">99.9%</div>
              <div className="text-gray-400">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary-400">24/7</div>
              <div className="text-gray-400">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800/30 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <UserCircleIcon className="w-8 h-8 text-primary-400" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">John Smith</div>
                  <div className="text-sm text-gray-400">Logistics Manager</div>
                </div>
              </div>
              <p className="text-gray-300 italic">"This platform has revolutionized how we manage our warehouse inventory. Couldn't be happier!"</p>
            </div>
            <div className="bg-gray-800/30 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <UserCircleIcon className="w-8 h-8 text-primary-400" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Sarah Johnson</div>
                  <div className="text-sm text-gray-400">Operations Director</div>
                </div>
              </div>
              <p className="text-gray-300 italic">"The analytics features have given us insights we never had before. Game-changing for our business."</p>
            </div>
            <div className="bg-gray-800/30 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <UserCircleIcon className="w-8 h-8 text-primary-400" />
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-white">Mike Wilson</div>
                  <div className="text-sm text-gray-400">Supply Chain Manager</div>
                </div>
              </div>
              <p className="text-gray-300 italic">"The mobile access feature allows me to monitor operations even when I'm on the go. Excellent tool!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-t from-black to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white">
              Ready to Transform Your Storage Management?
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of satisfied customers who have improved their inventory management with our solution.
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="px-8 py-3 text-lg font-semibold shadow-xl hover:shadow-primary-500/50 transition-all flex items-center gap-2">
                Start Free Trial
                <ArrowRightIcon className="w-5 h-5" />
              </Button>
              <Button severity="secondary" outlined className="px-8 py-3 text-lg font-semibold flex items-center gap-2">
                Schedule Demo
                <PlayCircleIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

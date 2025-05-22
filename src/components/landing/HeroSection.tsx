
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import DashboardPreviewImage from './DashboardPreviewImage';
import AuthModal from '../auth/AuthModal';
import { useAuth } from '@/hooks/useAuth';

const HeroSection = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('register');
  const { isAuthenticated } = useAuth();

  const handleGetStarted = () => {
    if (isAuthenticated) {
      setIsLoading(true);
      setTimeout(() => {
        navigate('/dashboard');
        setIsLoading(false);
      }, 500);
    } else {
      setAuthMode('register');
      setShowAuthModal(true);
    }
  };

  const handleBookDemo = () => {
    navigate('/contact');
  };

  return (
    <>
      <section className="flex-1 flex flex-col md:flex-row items-center py-12 md:py-24 px-6 md:px-8 max-w-7xl mx-auto">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-primary">AI Voice</span> Calling Platform for Modern Businesses
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Automate outbound and inbound voice calls with real-time conversational AI, detailed analytics, and seamless CRM integration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" onClick={handleGetStarted} disabled={isLoading} className="px-8">
              {isLoading ? 'Loading...' : isAuthenticated ? 'Go to Dashboard' : 'Get Started'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="px-8" onClick={handleBookDemo}>
              Book a Demo
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="rounded-xl overflow-hidden border shadow-xl">
            <DashboardPreviewImage />
          </div>
        </div>
      </section>
      
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
        defaultMode={authMode}
      />
    </>
  );
};

export default HeroSection;

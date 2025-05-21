
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CtaSection = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleGetStarted = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/dashboard');
      setIsLoading(false);
    }, 500);
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-8 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Call Operations?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join leading businesses using Vachas AI to automate calls, improve customer experience, and boost conversions.
        </p>
        <Button
          size="lg"
          variant="secondary"
          className="px-8 text-primary"
          onClick={handleGetStarted}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'Get Started for Free'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default CtaSection;

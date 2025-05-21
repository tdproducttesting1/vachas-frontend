
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavBar = () => {
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
    <header className="w-full py-4 px-6 md:px-8 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">V</span>
          </div>
          <h1 className="text-xl font-heading font-bold">Vachas AI</h1>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
          <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
          <Link to="/blogs" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
          <Link to="/docs" className="text-sm font-medium hover:text-primary transition-colors">Documentation</Link>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" onClick={() => navigate('/contact')}>
            Book a Demo
          </Button>
          <Button onClick={handleGetStarted} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Get Started'}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

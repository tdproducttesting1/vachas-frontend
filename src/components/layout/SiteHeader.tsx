
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface SiteHeaderProps {
  showDashboardLink?: boolean;
}

const SiteHeader = ({ showDashboardLink = true }: SiteHeaderProps) => {
  const location = useLocation();
  
  return (
    <header className="w-full py-4 px-6 md:px-8 border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">V</span>
          </div>
          <h1 className="text-xl font-heading font-bold">Vachas AI</h1>
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link 
            to="/" 
            className={`text-sm font-medium ${location.pathname === '/' ? 'text-primary' : 'hover:text-primary'} transition-colors`}
          >
            Home
          </Link>
          <Link 
            to="/how-it-works" 
            className={`text-sm font-medium ${location.pathname === '/how-it-works' ? 'text-primary' : 'hover:text-primary'} transition-colors`}
          >
            How It Works
          </Link>
          <Link 
            to="/pricing" 
            className={`text-sm font-medium ${location.pathname === '/pricing' ? 'text-primary' : 'hover:text-primary'} transition-colors`}
          >
            Pricing
          </Link>
          <Link 
            to="/blogs" 
            className={`text-sm font-medium ${location.pathname === '/blogs' ? 'text-primary' : 'hover:text-primary'} transition-colors`}
          >
            Blog
          </Link>
          <Link 
            to="/docs" 
            className={`text-sm font-medium ${location.pathname === '/docs' ? 'text-primary' : 'hover:text-primary'} transition-colors`}
          >
            Documentation
          </Link>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">Book a Demo</Button>
          {showDashboardLink ? (
            <Link to="/dashboard">
              <Button>Dashboard</Button>
            </Link>
          ) : (
            <Link to="/">
              <Button>Get Started</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;

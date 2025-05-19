
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import DashboardPreviewImage from '@/components/landing/DashboardPreviewImage';
import { Separator } from '@/components/ui/separator';
import ComplianceBadges from '@/components/ComplianceBadges';

const Index = () => {
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
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="w-full py-4 px-6 md:px-8 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">T</span>
            </div>
            <h1 className="text-xl font-heading font-bold">Tarang AI</h1>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link to="/#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
            <Link to="/#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">How It Works</Link>
            <Link to="/pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
            <Link to="/blogs" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
            <Link to="/docs" className="text-sm font-medium hover:text-primary transition-colors">Documentation</Link>
          </div>
          <Button onClick={handleGetStarted} disabled={isLoading}>
            {isLoading ? 'Loading...' : 'Get Started'}
          </Button>
        </div>
      </header>

      {/* Hero Section */}
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
              {isLoading ? 'Loading...' : 'Get Started'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="px-8">
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

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-6 md:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful AI Calling Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to automate and optimize your voice communications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <span className="text-primary text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tarang AI simplifies the entire voice calling workflow
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 -translate-y-1/2 z-0"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 px-6 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Call Operations?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join leading businesses using Tarang AI to automate calls, improve customer experience, and boost conversions.
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

      {/* Footer */}
      <footer className="py-10 px-6 md:px-8 border-t bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
            {/* Company */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">T</span>
                </div>
                <h2 className="text-xl font-heading font-bold">Tarang AI</h2>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Automate voice communications and boost customer engagement with our AI-powered platform.
              </p>
              <div className="flex items-center gap-3">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook size={18} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter size={18} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram size={18} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin size={18} />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Products */}
            <div>
              <h3 className="font-medium text-base mb-3">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Voice AI
                  </Link>
                </li>
                <li>
                  <Link to="/campaigns" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Campaign Manager
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Analytics Dashboard
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    CRM Integration
                  </Link>
                </li>
                <li>
                  <Link to="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    API & Webhooks
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-medium text-base mb-3">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/docs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Support Center
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-medium text-base mb-3">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Compliance Badges */}
          <div className="mb-8">
            <ComplianceBadges />
          </div>
          
          <Separator className="mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Tarang AI. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a href="mailto:info@tarangai.com" className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} />
                <span>info@tarangai.com</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Sample data
const features = [
  {
    title: 'Campaign Management',
    description: 'Create, schedule, and manage call campaigns with detailed analytics and control.'
  },
  {
    title: 'Natural Conversations',
    description: 'Gemini-powered AI for realistic, context-aware conversations that feel natural to customers.'
  },
  {
    title: 'Post-Call Analysis',
    description: 'Instant transcription, summarization, intent identification, and sentiment analysis.'
  },
  {
    title: 'CRM Integration',
    description: 'Seamless connections with Salesforce, HubSpot, and other CRM platforms via APIs and webhooks.'
  },
  {
    title: 'Call Analytics',
    description: 'Comprehensive metrics and insights on call performance, trends, and opportunities.'
  },
  {
    title: 'Security & Compliance',
    description: 'Enterprise-grade security, DPDP compliance, and Do-Not-Call registry verification.'
  }
];

const steps = [
  {
    title: 'Upload Contacts',
    description: 'Import your contact list via CSV or sync directly from your CRM.'
  },
  {
    title: 'Configure AI Script',
    description: 'Create conversation flows with custom prompts and variables.'
  },
  {
    title: 'Launch Campaign',
    description: 'Schedule and activate your campaign with real-time monitoring.'
  },
  {
    title: 'Review Analytics',
    description: 'Analyze call outcomes, insights, and export reports.'
  }
];

export default Index;

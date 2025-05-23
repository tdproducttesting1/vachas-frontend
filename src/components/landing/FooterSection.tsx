
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import ComplianceBadges from '@/components/ComplianceBadges';

const FooterSection = () => {
  return (
    <footer className="relative py-10 px-6 md:px-8 border-t bg-muted/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-pulse absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="animate-pulse animate-delay-2000 absolute -bottom-10 -right-10 w-60 h-60 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-15"></div>
        <div className="animate-bounce absolute top-20 right-1/4 w-2 h-2 bg-blue-300 rounded-full opacity-30"></div>
        <div className="animate-bounce animate-delay-1000 absolute bottom-20 left-1/4 w-3 h-3 bg-purple-300 rounded-full opacity-25"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
          {/* Company */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">V</span>
              </div>
              <h2 className="text-xl font-heading font-bold">Vachas AI</h2>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Revolutionary AI voice agents with human-like conversations and comprehensive post-call analytics for superior customer engagement.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
                <Facebook size={18} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
                <Instagram size={18} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors hover-scale">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* AI Voice Features */}
          <div>
            <h3 className="font-medium text-base mb-3">AI Voice Features</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  Human-like Voice Agents
                </a>
              </li>
              <li>
                <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  Natural Conversations
                </a>
              </li>
              <li>
                <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  Post-Call Analytics
                </a>
              </li>
              <li>
                <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  Real-time Monitoring
                </a>
              </li>
              <li>
                <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  Custom Voice Training
                </a>
              </li>
            </ul>
          </div>

          {/* Platform & Integration */}
          <div>
            <h3 className="font-medium text-base mb-3">Platform & Integration</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  Campaign Manager
                </Link>
              </li>
              <li>
                <Link to="/campaigns" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  Voice Campaigns
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  Analytics Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dialogue-flows" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  Conversation Flows
                </Link>
              </li>
              <li>
                <a href="/#features" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  CRM Integration
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Resources */}
          <div>
            <h3 className="font-medium text-base mb-3">Support & Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  How It Works
                </a>
              </li>
              <li>
                <Link to="/pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/support" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
                  Contact Support
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
              © {new Date().getFullYear()} Vachas AI. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors story-link">
              Terms of Service
            </Link>
            <a href="mailto:info@vachasai.com" className="text-sm flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors hover-scale">
              <Mail size={14} />
              <span>info@vachasai.com</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;


import FeatureCard from './FeatureCard';
import { Activity, MessageSquare, Clock, BarChart, Code, Lock, Zap, Headphones } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">Powerful Features for Your Calling Campaigns</h2>
          <p className="text-lg text-gray-600 md:w-3/4 mx-auto">
            Our AI voice agents provide everything you need for effective and efficient outbound calling campaigns.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            index={0}
            title="Natural Voice Conversations"
            description="AI agents with human-like voices that respond naturally to any conversation path, creating authentic interactions with your customers."
          />
          
          <FeatureCard 
            index={1}
            title="Advanced Conversation Flows"
            description="Create complex, branching conversation paths that adapt in real-time based on customer responses and objections."
          />
          
          <FeatureCard 
            index={2}
            title="Time-Saving Automation"
            description="Automate routine outbound calls, follow-ups, and appointment reminders, freeing your team to focus on high-value activities."
          />
          
          <FeatureCard 
            index={3}
            title="Comprehensive Analytics"
            description="Detailed insights on call performance, conversion rates, and customer sentiment to continuously optimize your campaigns."
          />
          
          <FeatureCard 
            index={4}
            title="Custom Integration"
            description="Seamlessly integrate with your existing CRM, marketing automation, and business intelligence tools."
          />
          
          <FeatureCard 
            index={5}
            title="Enterprise-Grade Security"
            description="Bank-level encryption and compliance with major privacy regulations to keep your data and customer information secure."
          />
          
          <FeatureCard 
            index={6}
            title="Real-Time Campaign Updates"
            description="Monitor campaign performance as it happens and make adjustments on the fly for optimal results."
          />
          
          <FeatureCard 
            index={7}
            title="Lightning-Fast Setup"
            description="Deploy new campaigns in minutes, not days, with our intuitive interface and pre-built templates."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

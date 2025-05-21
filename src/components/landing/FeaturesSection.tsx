
import FeatureCard from './FeatureCard';

// Sample data
const features = [
  {
    title: 'Campaign Management',
    description: 'Create, schedule, and manage call campaigns with detailed analytics and control.'
  },
  {
    title: 'Natural Conversations',
    description: 'Advanced conversational AI for realistic, context-aware dialogues that feel natural to customers.'
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
    title: 'Dialogue Flows',
    description: 'Design multi-turn conversation flows with nodes and conditional branches using drag-and-drop UI or JSON.'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-16 md:py-24 px-6 md:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block after:absolute after:h-1 after:bg-primary after:w-1/2 after:-bottom-2 after:left-1/4">
            Powerful AI Calling Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Everything you need to automate and optimize your voice communications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;


import StepCard from './StepCard';

// Sample data
const steps = [
  {
    title: 'Upload Contacts',
    description: 'Import your contact list via CSV or sync directly from your CRM.',
    bulletPoints: ['Automatic validation', 'Duplicate detection', 'Segmentation options']
  },
  {
    title: 'Configure AI Script',
    description: 'Create conversation flows with custom prompts and variables.',
    bulletPoints: ['Visual flow builder', 'AI script suggestions', 'Multiple language support']
  },
  {
    title: 'Launch Campaign',
    description: 'Schedule and activate your campaign with real-time monitoring.',
    bulletPoints: ['Real-time analytics', 'Automatic pacing', 'Instant pause capability']
  },
  {
    title: 'Review Analytics',
    description: 'Analyze call outcomes, insights, and export reports.',
    bulletPoints: ['Conversion tracking', 'AI-generated summaries', 'Custom report builder']
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-16 md:py-24 px-6 md:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 relative inline-block after:absolute after:h-1 after:bg-primary after:w-1/2 after:-bottom-2 after:left-1/4">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Vachas AI simplifies the entire voice calling workflow
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              index={index}
              title={step.title}
              description={step.description}
              bulletPoints={step.bulletPoints}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

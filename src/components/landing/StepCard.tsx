
import { ReactNode } from 'react';

interface StepCardProps {
  index: number;
  title: string;
  description: string;
  bulletPoints?: string[];
}

const StepCard = ({ index, title, description, bulletPoints }: StepCardProps) => {
  const isEven = index % 2 === 0;
  
  return (
    <div 
      className="flex items-start gap-6 animate-fade-in relative"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Timeline dot and line */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-primary/10 group-hover:bg-primary text-primary flex items-center justify-center font-bold text-xl transition-all duration-300">
          {index + 1}
        </div>
        {index < 3 && (
          <div className="w-1 bg-primary/20 h-20 mt-2"></div>
        )}
      </div>
      
      {/* Content */}
      <div className="bg-white rounded-xl border hover:border-primary hover:shadow-lg transition-all duration-300 p-6 flex-1 transform hover:translate-y-[-8px] group">
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
        
        <div className="mt-4 space-y-2 opacity-80 group-hover:opacity-100 transition-all duration-300">
          {bulletPoints && bulletPoints.map((point, i) => (
            <p key={i} className="flex items-start gap-2">
              <span className="h-2 w-2 rounded-full bg-primary shrink-0 mt-1.5"></span>
              <span className="text-muted-foreground">{point}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepCard;

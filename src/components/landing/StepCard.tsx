
import { ReactNode } from 'react';

interface StepCardProps {
  index: number;
  title: string;
  description: string;
  bulletPoints?: string[];
}

const StepCard = ({ index, title, description, bulletPoints }: StepCardProps) => {
  return (
    <div 
      className="flex-1 group relative animate-fade-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="bg-white rounded-xl border hover:border-primary hover:shadow-lg transition-all duration-300 p-6 h-full transform group-hover:translate-y-[-8px]">
        <div className="w-14 h-14 rounded-full bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center mb-6 font-bold text-xl transition-all duration-300 mx-auto">
          {index + 1}
        </div>
        <h3 className="text-xl font-bold mb-3 text-center group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-center">{description}</p>
        
        <div className="mt-6 space-y-2 opacity-0 max-h-0 group-hover:max-h-32 group-hover:opacity-100 overflow-hidden transition-all duration-500">
          {bulletPoints && bulletPoints.map((point, i) => (
            <p key={i} className="text-sm flex items-start gap-2">
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

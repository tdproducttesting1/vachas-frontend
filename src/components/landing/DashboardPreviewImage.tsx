
import { useEffect, useState } from 'react';

const DashboardPreviewImage = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`aspect-[16/9] bg-background relative ${loaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
      <div className="absolute inset-0 p-4 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-primary"></div>
            <div className="h-3 w-24 bg-foreground/80 rounded"></div>
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded bg-muted"></div>
            <div className="h-8 w-8 rounded bg-muted"></div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex flex-1 gap-4">
          {/* Sidebar */}
          <div className="w-[80px] bg-sidebar rounded-md p-2 flex flex-col items-center gap-2">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="h-10 w-10 rounded bg-sidebar-primary/20 mb-2"></div>
            ))}
          </div>
          
          {/* Main area */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-24 bg-card rounded-md p-3 border">
                  <div className="h-3 w-16 bg-foreground/30 rounded mb-2"></div>
                  <div className="h-6 w-12 bg-foreground/80 rounded mb-4"></div>
                  <div className="h-2 w-full bg-accent/50 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{width: `${20 + i * 15}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Table */}
            <div className="bg-card rounded-md border flex-1 p-3">
              <div className="flex justify-between mb-4">
                <div className="h-4 w-32 bg-foreground/80 rounded"></div>
                <div className="h-8 w-24 bg-primary rounded"></div>
              </div>
              <div className="h-8 bg-muted/50 rounded mb-2 flex items-center px-3">
                <div className="grid grid-cols-6 gap-2 w-full">
                  <div className="h-3 w-12 bg-foreground/30 rounded"></div>
                  <div className="h-3 w-12 bg-foreground/30 rounded"></div>
                  <div className="h-3 w-12 bg-foreground/30 rounded"></div>
                  <div className="h-3 w-12 bg-foreground/30 rounded"></div>
                  <div className="h-3 w-12 bg-foreground/30 rounded"></div>
                  <div className="h-3 w-12 bg-foreground/30 rounded"></div>
                </div>
              </div>
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-12 border-b last:border-b-0 flex items-center px-3">
                  <div className="grid grid-cols-6 gap-2 w-full">
                    <div className="h-3 w-20 bg-foreground/40 rounded"></div>
                    <div className="h-3 w-16 bg-foreground/40 rounded"></div>
                    <div className="h-3 w-12 bg-foreground/40 rounded"></div>
                    <div className="h-3 w-16 bg-foreground/40 rounded"></div>
                    <div className="h-3 w-14 bg-foreground/40 rounded"></div>
                    <div className="h-6 w-16 bg-muted rounded"></div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Charts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 bg-card rounded-md border p-3">
                <div className="h-4 w-24 bg-foreground/80 rounded mb-4"></div>
                <div className="flex items-end h-28 gap-3 pt-4">
                  {[35, 65, 45, 80, 55, 75, 40].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-2">
                      <div className="w-full bg-primary/20 rounded-sm" style={{height: `${h}%`}}>
                        <div className="w-full bg-primary rounded-sm h-[30%]"></div>
                      </div>
                      <div className="h-2 w-4 bg-foreground/30 rounded"></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-48 bg-card rounded-md border p-3">
                <div className="h-4 w-28 bg-foreground/80 rounded mb-4"></div>
                <div className="h-32 flex items-center justify-center">
                  <div className="relative h-28 w-28 rounded-full bg-muted">
                    <div className="absolute inset-0 rounded-full border-8 border-primary" style={{clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)'}}></div>
                    <div className="absolute inset-0 rounded-full border-8 border-accent" style={{clipPath: 'polygon(0 70%, 100% 70%, 100% 100%, 0 100%)'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreviewImage;

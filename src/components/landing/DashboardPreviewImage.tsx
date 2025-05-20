
import { useEffect, useState } from 'react';
import { 
  Activity, 
  PhoneCall, 
  MessageSquare, 
  Package, 
  Wrench,
  CalendarDays,
  CreditCard,
  Phone,
  Mic,
  Book,
  Database,
  Flag,
  BarChart
} from 'lucide-react';

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
            <div className="h-6 w-6 rounded bg-primary flex items-center justify-center">
              <span className="text-white text-xs font-semibold">V</span>
            </div>
            <div className="h-3 w-24 bg-foreground/80 rounded text-[8px] text-white flex items-center justify-center">
              Vachas AI Dashboard
            </div>
          </div>
          <div className="flex gap-2">
            <div className="h-8 w-8 rounded bg-muted flex items-center justify-center">
              <PhoneCall className="h-4 w-4 text-foreground/70" />
            </div>
            <div className="h-8 w-8 rounded bg-muted flex items-center justify-center">
              <Mic className="h-4 w-4 text-foreground/70" />
            </div>
          </div>
        </div>
        
        {/* Main content */}
        <div className="flex flex-1 gap-4">
          {/* Sidebar with smaller icons and text labels */}
          <div className="w-[120px] bg-sidebar rounded-md p-2 flex flex-col gap-2">
            <div className="h-8 w-full rounded bg-sidebar-primary/20 mb-1 flex items-center px-2">
              <Activity className="h-4 w-4 text-primary/80 mr-2" />
              <span className="text-[9px] font-medium text-foreground/80">Analytics</span>
            </div>
            <div className="h-8 w-full rounded bg-sidebar-primary/20 mb-1 flex items-center px-2">
              <PhoneCall className="h-4 w-4 text-foreground/60 mr-2" />
              <span className="text-[9px] font-medium text-foreground/80">Calls</span>
            </div>
            <div className="h-8 w-full rounded bg-primary/20 mb-1 flex items-center px-2">
              <MessageSquare className="h-4 w-4 text-foreground/60 mr-2" />
              <span className="text-[9px] font-medium text-foreground/80">Dialogue</span>
            </div>
            <div className="h-8 w-full rounded bg-sidebar-primary/20 mb-1 flex items-center px-2">
              <Package className="h-4 w-4 text-foreground/60 mr-2" />
              <span className="text-[9px] font-medium text-foreground/80">Campaigns</span>
            </div>
            <div className="h-8 w-full rounded bg-sidebar-primary/20 mb-1 flex items-center px-2">
              <Wrench className="h-4 w-4 text-foreground/60 mr-2" />
              <span className="text-[9px] font-medium text-foreground/80">Settings</span>
            </div>
          </div>
          
          {/* Main area */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              <div className="h-24 bg-card rounded-md p-3 border">
                <div className="h-3 w-full flex items-center">
                  <BarChart className="h-3 w-3 mr-1.5 text-primary" />
                  <span className="text-[8px] font-medium text-foreground/80">Outbound Minutes</span>
                </div>
                <div className="h-6 flex items-center text-foreground/90 font-semibold mt-2">
                  <span className="text-sm">842</span>
                  <span className="text-[8px] ml-1 text-foreground/70">mins</span>
                </div>
                <div className="h-2 w-full bg-accent/50 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-primary rounded-full" style={{width: `65%`}}></div>
                </div>
                <div className="text-[8px] text-success mt-1">+12.4% from last week</div>
              </div>
              <div className="h-24 bg-card rounded-md p-3 border">
                <div className="h-3 w-full flex items-center">
                  <BarChart className="h-3 w-3 mr-1.5 text-accent" />
                  <span className="text-[8px] font-medium text-foreground/80">Inbound Minutes</span>
                </div>
                <div className="h-6 flex items-center text-foreground/90 font-semibold mt-2">
                  <span className="text-sm">516</span>
                  <span className="text-[8px] ml-1 text-foreground/70">mins</span>
                </div>
                <div className="h-2 w-full bg-accent/50 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-accent rounded-full" style={{width: `40%`}}></div>
                </div>
                <div className="text-[8px] text-success mt-1">+5.2% from last week</div>
              </div>
              <div className="h-24 bg-card rounded-md p-3 border">
                <div className="h-3 w-full flex items-center">
                  <Flag className="h-3 w-3 mr-1.5 text-success" />
                  <span className="text-[8px] font-medium text-foreground/80">Active Campaigns</span>
                </div>
                <div className="h-6 flex items-center text-foreground/90 font-semibold mt-2">
                  <span className="text-sm">8</span>
                  <span className="text-[8px] ml-1 text-foreground/70">/ 12 total</span>
                </div>
                <div className="h-2 w-full bg-accent/50 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-success rounded-full" style={{width: `75%`}}></div>
                </div>
                <div className="text-[8px] text-destructive mt-1">-1 from yesterday</div>
              </div>
              <div className="h-24 bg-card rounded-md p-3 border">
                <div className="h-3 w-full flex items-center">
                  <MessageSquare className="h-3 w-3 mr-1.5 text-warning" />
                  <span className="text-[8px] font-medium text-foreground/80">Dialogue Flows</span>
                </div>
                <div className="h-6 flex items-center text-foreground/90 font-semibold mt-2">
                  <span className="text-sm">24</span>
                  <span className="text-[8px] ml-1 text-foreground/70">flows</span>
                </div>
                <div className="h-2 w-full bg-accent/50 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-warning rounded-full" style={{width: `85%`}}></div>
                </div>
                <div className="text-[8px] text-success mt-1">+3 this month</div>
              </div>
            </div>
            
            {/* Table */}
            <div className="bg-card rounded-md border flex-1 p-3">
              <div className="flex justify-between mb-4">
                <div className="h-4 w-32 bg-foreground/80 rounded text-[8px] text-white flex items-center justify-center">
                  Active Campaign Performance
                </div>
                <div className="h-8 w-24 bg-primary rounded flex items-center justify-center">
                  <span className="text-[8px] text-white">New Campaign</span>
                </div>
              </div>
              <div className="h-8 bg-muted/50 rounded mb-2 flex items-center px-3">
                <div className="grid grid-cols-6 gap-2 w-full">
                  <div className="h-3 w-12 bg-foreground/30 rounded text-[6px] text-white flex items-center justify-center">Campaign</div>
                  <div className="h-3 w-12 bg-foreground/30 rounded text-[6px] text-white flex items-center justify-center">Type</div>
                  <div className="h-3 w-12 bg-foreground/30 rounded text-[6px] text-white flex items-center justify-center">Status</div>
                  <div className="h-3 w-12 bg-foreground/30 rounded text-[6px] text-white flex items-center justify-center">Progress</div>
                  <div className="h-3 w-12 bg-foreground/30 rounded text-[6px] text-white flex items-center justify-center">Calls</div>
                  <div className="h-3 w-12 bg-foreground/30 rounded text-[6px] text-white flex items-center justify-center">Actions</div>
                </div>
              </div>
              {[
                {name: 'Q2 Outreach', type: 'Outbound', status: 'Active', progress: 64, calls: 482},
                {name: 'Support Survey', type: 'Inbound', status: 'Active', progress: 38, calls: 215},
                {name: 'Renewal Calls', type: 'Outbound', status: 'Paused', progress: 92, calls: 1250},
                {name: 'Market Research', type: 'Outbound', status: 'Active', progress: 17, calls: 103}
              ].map((item, i) => (
                <div key={i} className="h-12 border-b last:border-b-0 flex items-center px-3">
                  <div className="grid grid-cols-6 gap-2 w-full">
                    <div className="h-3 text-[6px] text-foreground/80 flex items-center">{item.name}</div>
                    <div className="h-3 text-[6px] text-foreground/80 flex items-center">{item.type}</div>
                    <div className="h-3 text-[6px] flex items-center">
                      <span className={`px-1 py-0.5 rounded-full text-[6px] ${
                        item.status === 'Active' ? 'bg-success/20 text-success' : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="h-3 text-[6px] flex items-center">
                      <div className="w-full h-1.5 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            item.status === 'Active' ? 'bg-success' : 'bg-muted-foreground'
                          }`} 
                          style={{width: `${item.progress}%`}}
                        ></div>
                      </div>
                      <span className="ml-1">{item.progress}%</span>
                    </div>
                    <div className="h-3 text-[6px] text-foreground/80 flex items-center">{item.calls}</div>
                    <div className="h-6 w-16 bg-muted rounded flex items-center justify-center">
                      <span className="text-[6px]">View Details</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Charts */}
            <div className="grid grid-cols-2 gap-4">
              <div className="h-48 bg-card rounded-md border p-3">
                <div className="h-4 w-24 bg-foreground/80 rounded mb-4 text-[8px] text-white flex items-center justify-center">
                  Call Distribution
                </div>
                <div className="flex items-end h-28 gap-3 pt-4">
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
                    const heights = [35, 65, 45, 80, 55, 75, 40];
                    return (
                      <div key={i} className="flex-1 flex flex-col items-center gap-2">
                        <div className="w-full bg-primary/20 rounded-sm" style={{height: `${heights[i]}%`}}>
                          <div className="w-full bg-primary rounded-sm h-[30%]"></div>
                        </div>
                        <div className="h-2 w-4 text-[6px] text-muted-foreground">{day}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="h-48 bg-card rounded-md border p-3">
                <div className="h-4 w-28 bg-foreground/80 rounded mb-4 text-[8px] text-white flex items-center justify-center">
                  Call Sentiment Analysis
                </div>
                <div className="h-32 flex items-center justify-center">
                  <div className="relative h-28 w-28 rounded-full bg-muted flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-8 border-success" style={{clipPath: 'polygon(0 0, 100% 0, 100% 70%, 0 70%)'}}></div>
                    <div className="absolute inset-0 rounded-full border-8 border-warning" style={{clipPath: 'polygon(0 70%, 100% 70%, 100% 85%, 0 85%)'}}></div>
                    <div className="absolute inset-0 rounded-full border-8 border-destructive" style={{clipPath: 'polygon(0 85%, 100% 85%, 100% 100%, 0 100%)'}}></div>
                    <div className="z-10 flex flex-col items-center">
                      <span className="text-sm font-bold">76%</span>
                      <span className="text-[8px] text-success">Positive</span>
                    </div>
                  </div>
                  <div className="flex flex-col ml-4 text-[6px]">
                    <div className="flex items-center mb-1">
                      <div className="h-2 w-2 bg-success rounded-full mr-1"></div>
                      <span>Positive: 76%</span>
                    </div>
                    <div className="flex items-center mb-1">
                      <div className="h-2 w-2 bg-warning rounded-full mr-1"></div>
                      <span>Neutral: 15%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="h-2 w-2 bg-destructive rounded-full mr-1"></div>
                      <span>Negative: 9%</span>
                    </div>
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

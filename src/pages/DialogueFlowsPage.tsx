
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import { Plus, Search, FileJson, List, Settings } from 'lucide-react';

const DialogueFlowsPage = () => {
  const [activeTab, setActiveTab] = useState('visual');
  
  return (
    <DashboardLayout title="Dialogue Flows" subtitle="Create and manage conversation flows">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search flows..." className="pl-8" />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Filter by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Flows</SelectItem>
              <SelectItem value="active">Active</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Flow
        </Button>
      </div>
      
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Sample Conversation Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
            <div className="mb-6 flex justify-between items-center">
              <TabsList>
                <TabsTrigger value="visual" className="flex items-center gap-2">
                  <List className="h-4 w-4" />
                  Visual Editor
                </TabsTrigger>
                <TabsTrigger value="json" className="flex items-center gap-2">
                  <FileJson className="h-4 w-4" />
                  JSON Editor
                </TabsTrigger>
                <TabsTrigger value="settings" className="flex items-center gap-2">
                  <Settings className="h-4 w-4" />
                  Settings
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="visual" className="mt-0 outline-none border-none">
              <div className="h-[600px] border rounded-md bg-slate-50 relative overflow-hidden">
                {/* Flow chart visualization similar to the uploaded image */}
                <div className="absolute inset-0 bg-grid-pattern" style={{backgroundImage: 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UxZTFlMSIgb3BhY2l0eT0iMC4yIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNIDQwIDAgTCAwIDAgTCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlMWUxZTEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==)'}}></div>
                
                {/* Start node */}
                <div className="absolute left-1/2 top-10 transform -translate-x-1/2 w-64 p-4 bg-white rounded-lg border border-gray-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                      <span className="text-white text-xs">S</span>
                    </div>
                    <span className="font-medium">Start</span>
                  </div>
                  <p className="text-sm text-gray-600">Initial greeting message</p>
                  <div className="mt-2 p-2 bg-gray-50 rounded text-sm">
                    "Hey there, how are you doing today?"
                  </div>
                </div>
                
                {/* Vertical line connecting nodes */}
                <div className="absolute left-1/2 top-[104px] w-0.5 h-16 bg-gray-300 transform -translate-x-1/2"></div>
                
                {/* Condition node */}
                <div className="absolute left-1/2 top-[160px] transform -translate-x-1/2 w-64 p-4 bg-white rounded-lg border border-gray-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-white text-xs">C</span>
                    </div>
                    <span className="font-medium">Condition</span>
                  </div>
                  <p className="text-sm text-gray-600">Check customer response</p>
                </div>
                
                {/* Branch lines */}
                <div className="absolute left-[325px] top-[200px] w-20 h-0.5 bg-gray-300"></div>
                <div className="absolute left-[195px] top-[200px] w-20 h-0.5 bg-gray-300"></div>
                <div className="absolute left-[345px] top-[200px] w-0.5 h-40 bg-gray-300"></div>
                <div className="absolute left-[195px] top-[200px] w-0.5 h-40 bg-gray-300"></div>
                
                {/* Edge labels */}
                <div className="absolute left-[380px] top-[190px] transform -translate-x-1/2 bg-white px-2 text-xs border rounded">
                  New Edge
                </div>
                <div className="absolute left-[160px] top-[190px] transform -translate-x-1/2 bg-white px-2 text-xs border rounded">
                  greeted
                </div>
                
                {/* Response nodes */}
                <div className="absolute left-[400px] top-[240px] w-64 p-4 bg-white rounded-lg border border-gray-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center">
                      <span className="text-white text-xs">R</span>
                    </div>
                    <span className="font-medium">New Node</span>
                  </div>
                  <p className="text-sm text-gray-600">Select a node or edge and press backspace to remove it</p>
                </div>
                
                <div className="absolute left-[140px] top-[240px] w-64 p-4 bg-white rounded-lg border border-gray-300 shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center">
                      <span className="text-white text-xs">E</span>
                    </div>
                    <span className="font-medium">End call</span>
                  </div>
                  <p className="text-sm text-gray-600">Click 'Add New Node' on the right to add a new node</p>
                </div>
                
                {/* Toolbar */}
                <div className="absolute top-4 left-4 bg-white border rounded-md shadow-sm">
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                  <div className="h-4 border-r border-gray-200 mx-1"></div>
                  <Button variant="ghost" size="sm">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="json" className="mt-0">
              <div className="h-[600px] bg-gray-900 text-gray-100 rounded-md p-4 overflow-auto font-mono text-sm">
                <pre>{`{
  "id": "demo-flow",
  "name": "Sample Conversation Flow",
  "version": 1,
  "nodes": [
    {
      "id": "start",
      "type": "start",
      "position": { "x": 250, "y": 50 },
      "data": {
        "message": "Hey there, how are you doing today?"
      }
    },
    {
      "id": "condition-1",
      "type": "condition",
      "position": { "x": 250, "y": 200 },
      "data": {
        "condition": "checkResponse",
        "params": {
          "keywords": ["good", "fine", "great", "okay"]
        }
      }
    },
    {
      "id": "response-positive",
      "type": "response",
      "position": { "x": 400, "y": 350 },
      "data": {
        "message": "I'm glad to hear that! I wanted to tell you about our new product feature."
      }
    },
    {
      "id": "end-call",
      "type": "end",
      "position": { "x": 100, "y": 350 },
      "data": {
        "reason": "customer_not_interested"
      }
    }
  ],
  "edges": [
    {
      "id": "e1-2",
      "source": "start",
      "target": "condition-1"
    },
    {
      "id": "e2-3",
      "source": "condition-1",
      "target": "response-positive",
      "label": "New Edge"
    },
    {
      "id": "e2-4",
      "source": "condition-1",
      "target": "end-call",
      "label": "greeted"
    }
  ]
}`}</pre>
              </div>
            </TabsContent>
            
            <TabsContent value="settings" className="mt-0">
              <div className="space-y-6 p-4 border rounded-md">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Flow Name</label>
                    <Input defaultValue="Sample Conversation Flow" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Version</label>
                    <Input defaultValue="1.0" />
                  </div>
                  <div className="space-y-2 col-span-2">
                    <label className="text-sm font-medium">Description</label>
                    <Input defaultValue="A sample conversation flow for demonstration purposes" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Status</label>
                    <Select defaultValue="draft">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Draft</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="archived">Archived</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Associated Campaign</label>
                    <Select defaultValue="none">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">None</SelectItem>
                        <SelectItem value="campaign1">Product Launch</SelectItem>
                        <SelectItem value="campaign2">Customer Feedback</SelectItem>
                        <SelectItem value="campaign3">Renewal Reminder</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-end gap-3">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recently Modified Flows</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentFlows.map((flow) => (
              <div key={flow.id} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-2 h-8 rounded-full bg-${flow.status === 'active' ? 'green' : flow.status === 'draft' ? 'amber' : 'gray'}-400`}></div>
                  <div>
                    <div className="font-medium">{flow.name}</div>
                    <div className="text-xs text-muted-foreground">Modified: {flow.modified}</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Flow Templates</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {flowTemplates.map((template) => (
              <div key={template.id} className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{template.name}</div>
                  <div className="text-xs text-muted-foreground">{template.description}</div>
                </div>
                <Button variant="ghost" size="sm">Use</Button>
              </div>
            ))}
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Quick Stats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-3 rounded-md">
                <div className="text-sm text-muted-foreground">Total Flows</div>
                <div className="text-2xl font-bold">16</div>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <div className="text-sm text-muted-foreground">Active</div>
                <div className="text-2xl font-bold">8</div>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <div className="text-sm text-muted-foreground">Draft</div>
                <div className="text-2xl font-bold">5</div>
              </div>
              <div className="bg-muted p-3 rounded-md">
                <div className="text-sm text-muted-foreground">Archived</div>
                <div className="text-2xl font-bold">3</div>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-sm font-medium mb-2">Most Used Template</div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Customer Feedback</div>
                <div className="text-sm text-muted-foreground">32 uses</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

// Sample data
const recentFlows = [
  { id: 1, name: 'Product Demo Request', status: 'active', modified: '10 minutes ago' },
  { id: 2, name: 'Support Ticket Triage', status: 'draft', modified: '2 hours ago' },
  { id: 3, name: 'Customer Satisfaction', status: 'active', modified: '1 day ago' },
  { id: 4, name: 'Renewal Process', status: 'archived', modified: '3 days ago' },
];

const flowTemplates = [
  { id: 1, name: 'Customer Feedback', description: 'Collect feedback after service experience' },
  { id: 2, name: 'Product Introduction', description: 'Introduce new product features' },
  { id: 3, name: 'Appointment Scheduling', description: 'Schedule follow-up appointments' },
  { id: 4, name: 'Service Renewal', description: 'Guide through service renewal process' },
];

export default DialogueFlowsPage;

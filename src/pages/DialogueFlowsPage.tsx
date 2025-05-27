
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import SearchToolbar from "@/components/dialogue-flows/SearchToolbar";
import FlowsList from "@/components/dialogue-flows/FlowsList";
import FlowEditor from "@/components/dialogue-flows/FlowEditor";
import { ArrowLeft, Plus } from "lucide-react";

const DialogueFlowsPage = () => {
  const [showEditor, setShowEditor] = useState(false);
  const [selectedFlow, setSelectedFlow] = useState<any>(null);

  // Set page title
  useEffect(() => {
    document.title = "Dialogue Flows | Vachas AI";
  }, []);

  const handleNewFlow = () => {
    setSelectedFlow(null);
    setShowEditor(true);
  };

  const handleEditFlow = (flow: any) => {
    setSelectedFlow(flow);
    setShowEditor(true);
  };

  const handleBackToList = () => {
    setShowEditor(false);
    setSelectedFlow(null);
  };

  if (showEditor) {
    return (
      <DashboardLayout>
        <div className="flex flex-col p-6 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={handleBackToList} className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Flows
              </Button>
              <h1 className="text-3xl font-bold tracking-tight">
                {selectedFlow ? 'Edit Flow' : 'Create New Flow'}
              </h1>
            </div>
          </div>
          
          <FlowEditor />
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dialogue Flows</h1>
          <Button onClick={handleNewFlow} className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Flow
          </Button>
        </div>
        
        <p className="text-muted-foreground max-w-4xl">
          Create and manage conversation flows that your AI agents will follow. Define questions, responses, and branching logic to handle various customer scenarios.
        </p>
        
        <SearchToolbar />
        
        <FlowsList onEditFlow={handleEditFlow} />
      </div>
    </DashboardLayout>
  );
};

export default DialogueFlowsPage;

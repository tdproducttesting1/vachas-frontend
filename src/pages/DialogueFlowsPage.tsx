
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import DashboardLayout from '@/components/layouts/DashboardLayout';

import SearchToolbar from '@/components/dialogue-flows/SearchToolbar';
import FlowEditor from '@/components/dialogue-flows/FlowEditor';
import FlowStats from '@/components/dialogue-flows/FlowStats';

// Declaring flowEditor global for TypeScript
declare global {
  interface Window {
    flowEditor?: {
      init: () => void;
    };
  }
}

const DialogueFlowsPage = () => {
  // Initialize flow editor when component mounts
  useEffect(() => {
    // Safely access the window object
    if (typeof window !== 'undefined' && window.flowEditor) {
      window.flowEditor.init();
    }
  }, []);
  
  return (
    <DashboardLayout title="Dialogue Flows" subtitle="Create and manage conversation flows">
      <SearchToolbar />
      
      <Card className="mb-6">
        <CardHeader className="pb-3">
          <CardTitle>Sample Conversation Flow</CardTitle>
        </CardHeader>
        <CardContent>
          <FlowEditor />
        </CardContent>
      </Card>
      
      <FlowStats />
    </DashboardLayout>
  );
};

export default DialogueFlowsPage;

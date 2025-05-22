
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import useAuth from "./hooks/useAuth";
import Index from "./pages/Index";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import CampaignsPage from "./pages/CampaignsPage";
import NotFound from "./pages/NotFound";
import PricingPage from "./pages/PricingPage";
import BlogsPage from "./pages/BlogsPage";
import DocumentationPage from "./pages/DocumentationPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import AboutUsPage from "./pages/AboutUsPage";
import SupportCenterPage from "./pages/SupportCenterPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import ContactPage from "./pages/ContactPage";
import CallsPage from "./pages/CallsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ReportsPage from "./pages/ReportsPage";
import ScriptsPage from "./pages/ScriptsPage";
import TeamPage from "./pages/TeamPage";
import DialogueFlowsPage from "./pages/DialogueFlowsPage";
import CareersPage from "./pages/CareersPage";
import DNCListPage from "./pages/DNCListPage";
import DialogueMarketplacePage from "./pages/DialogueMarketplacePage";

const queryClient = new QueryClient();

// Temporarily bypass authentication
const BypassedProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Original Protected Route (currently not in use)
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }
  
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/docs" element={<DocumentationPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/support" element={<SupportCenterPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsOfServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            
            {/* Protected Routes (Bypassed for now) */}
            <Route path="/dashboard" element={
              <BypassedProtectedRoute>
                <Dashboard />
              </BypassedProtectedRoute>
            } />
            <Route path="/profile" element={
              <BypassedProtectedRoute>
                <ProfilePage />
              </BypassedProtectedRoute>
            } />
            <Route path="/campaigns" element={
              <BypassedProtectedRoute>
                <CampaignsPage />
              </BypassedProtectedRoute>
            } />
            <Route path="/calls" element={
              <BypassedProtectedRoute>
                <CallsPage />
              </BypassedProtectedRoute>
            } />
            <Route path="/analytics" element={
              <BypassedProtectedRoute>
                <AnalyticsPage />
              </BypassedProtectedRoute>
            } />
            <Route path="/reports" element={
              <BypassedProtectedRoute>
                <ReportsPage />
              </BypassedProtectedRoute>
            } />
            <Route path="/scripts" element={
              <BypassedProtectedRoute>
                <ScriptsPage />
              </BypassedProtectedRoute>
            } />
            <Route path="/team" element={
              <BypassedProtectedRoute>
                <TeamPage />
              </BypassedProtectedRoute>
            } />
            <Route path="/dialogue-flows" element={
              <BypassedProtectedRoute>
                <DialogueFlowsPage />
              </BypassedProtectedRoute>
            } />
            <Route path="/dialogue-marketplace" element={
              <BypassedProtectedRoute>
                <DialogueMarketplacePage />
              </BypassedProtectedRoute>
            } />
            <Route path="/dnc-list" element={
              <BypassedProtectedRoute>
                <DNCListPage />
              </BypassedProtectedRoute>
            } />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

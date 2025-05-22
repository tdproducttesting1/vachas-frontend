
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
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
            
            {/* Authenticated Pages */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/calls" element={<CallsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/scripts" element={<ScriptsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/dialogue-flows" element={<DialogueFlowsPage />} />
            <Route path="/dialogue-marketplace" element={<DialogueMarketplacePage />} />
            <Route path="/dnc-list" element={<DNCListPage />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

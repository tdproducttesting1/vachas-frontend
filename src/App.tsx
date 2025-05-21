
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/docs" element={<DocumentationPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/support" element={<SupportCenterPage />} />
          <Route path="/privacy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsOfServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

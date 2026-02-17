import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Coaches from "./pages/Coaches";
import Consultancy from "./pages/Consultancy";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import PractitionerApply from "./pages/PractitionerApply";
import SalesTraining from "./pages/SalesTraining";
import MarketingTraining from "./pages/MarketingTraining";
import AITraining from "./pages/AITraining";
import OperationsTraining from "./pages/OperationsTraining";
import ManagementTraining from "./pages/ManagementTraining";
import NotFound from "./pages/NotFound";
import { WhatsAppFloating } from "@/components/ui/WhatsAppFloating";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/apply-practitioner" element={<PractitionerApply />} />
          <Route path="/sales-training" element={<SalesTraining />} />
          <Route path="/training/marketing" element={<MarketingTraining />} />
          <Route path="/training/ai" element={<AITraining />} />
          <Route path="/training/operations" element={<OperationsTraining />} />
          <Route path="/training/management" element={<ManagementTraining />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppFloating />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

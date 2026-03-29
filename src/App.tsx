import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import BatteryReg from "./pages/BatteryReg.tsx";
import NotFound from "./pages/NotFound.tsx";
import DesignSystem from "./pages/DesignSystem.tsx";
import ExampleHeaders from "./pages/ExampleHeaders.tsx";
import BackgroundIdeation from "./pages/BackgroundIdeation.tsx";
import AnimationsDemo from "./pages/AnimationsDemo.tsx";
import ComponentPreview from "./pages/ComponentPreview.tsx";
import ComponentReview from "./pages/ComponentReview.tsx";
import FeatureScreenshotDemo from "./pages/FeatureScreenshotDemo.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/batteryreg" element={<BatteryReg />} />
          <Route path="/design-system" element={<DesignSystem />} />
          <Route path="/example-headers" element={<ExampleHeaders />} />
          <Route path="/backgrounds" element={<BackgroundIdeation />} />
          <Route path="/animations" element={<AnimationsDemo />} />
          <Route path="/preview" element={<ComponentPreview />} />
          <Route path="/component-review" element={<ComponentReview />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

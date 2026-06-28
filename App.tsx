import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Index from "./src/pages/Index";
import Marketplace from "./src/pages/Marketplace";
import ProductDetail from "./src/pages/ProductDetail";
import Cart from "./src/pages/Cart";
import Farmers from "./src/pages/Farmers";
import FarmerDashboard from "./src/pages/FarmerDashboard";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import NotFound from "./src/pages/NotFound";

const queryClient = new QueryClient();

/* PUBLIC LAYOUT */
const PublicLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <Routes>

            {/* AUTH */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* PUBLIC PAGES */}
            <Route
              path="/"
              element={
                <PublicLayout>
                  <Index />
                </PublicLayout>
              }
            />

            <Route
              path="/marketplace"
              element={
                <PublicLayout>
                  <Marketplace />
                </PublicLayout>
              }
            />

            <Route
              path="/product/:id"
              element={
                <PublicLayout>
                  <ProductDetail />
                </PublicLayout>
              }
            />

            <Route
              path="/cart"
              element={
                <PublicLayout>
                  <Cart />
                </PublicLayout>
              }
            />

            <Route
              path="/farmers"
              element={
                <PublicLayout>
                  <Farmers />
                </PublicLayout>
              }
            />

            {/* DASHBOARD (SELF-CONTAINED FILE) */}
            <Route path="/dashboard" element={<FarmerDashboard />} />

            {/* 404 */}
            <Route
              path="*"
              element={
                <PublicLayout>
                  <NotFound />
                </PublicLayout>
              }
            />

          </Routes>
        </BrowserRouter>

      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
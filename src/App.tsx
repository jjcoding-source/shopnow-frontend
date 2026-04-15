import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#F1F0FF]">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={
                <div className="p-12 text-center">
                  <h1 className="text-4xl font-semibold text-[#26215C] mb-4">Welcome to ShopNow</h1>
                  <p className="text-[#3C3489]">Frontend development</p>
                </div>
              } />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
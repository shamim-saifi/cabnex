import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import 'react-toastify/dist/ReactToastify.css';
import { SearchProvider } from './context/SearchContext';
import { Toaster } from 'sonner'; // Add this import

function App() {
  return (
    <SearchProvider>
      <Router>
        <main className="min-h-screen">
          <AppRoutes />
          {/* Add Toaster for notifications */}
          <Toaster 
            position="top-center" 
            richColors 
            closeButton 
            toastOptions={{
              classNames: {
                toast: "font-grotesk", // Match your font
                description: "font-grotesk",
              },
            }}
          />
        </main>
      </Router>
    </SearchProvider>
  );
}

export default App;
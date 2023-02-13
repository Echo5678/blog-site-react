import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar.component";
import Footer from "./components/Footer.component";
import PageRoutes from "./components/PageRoutes.component";

function App() {
  return (
    <main className="bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col dark:text-gray-50 font-mono">
      <Router>
        <Navbar />
        <div className="flex-grow mx-3 md:mx-4 lg:mx-5">
          <PageRoutes />
        </div>
        <Footer />
      </Router>
    </main>
  );
}

export default App;

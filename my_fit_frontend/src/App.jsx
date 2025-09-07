import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import UserLogin from "./pages/User";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";


function App() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/user" element={<UserLogin />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;

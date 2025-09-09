import Newsletter from "../src/components/Newsleeter";
import Analytics from "./components/Analytics";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import './index.css';

function App() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Analytics />
        <Newsletter />
    </div>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Collection from './components/Collection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black font-inter">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Collection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

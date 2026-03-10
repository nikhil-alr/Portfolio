
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="layout-container">
      <Header />
      <main className="main-content">
        <Hero />
        <div className="content-grid">
          {/* Left Column for Experience & Education */}
          <div className="main-column">
            <Experience />
            <Education />
          </div>

          {/* Right Column for Skills & Contact */}
          <aside className="sidebar-column">
            <Skills />
            <Contact />
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

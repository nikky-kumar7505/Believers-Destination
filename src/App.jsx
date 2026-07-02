import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import BootcampIntro from './components/BootcampIntro/BootcampIntro';
import Programs from './components/Programs/Programs';
import ImportantNotice from './components/ImportantNotice/ImportantNotice';
import ScheduleSection from './components/ScheduleSection/ScheduleSection';
import BootcampHighlights from './components/BootcampHighlights/BootcampHighlights';
import BootcampFeatures from './components/BootcampFeatures/BootcampFeatures';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <BootcampIntro />
        <Programs />
        <ImportantNotice />
        <ScheduleSection />
        <BootcampHighlights />
        <BootcampFeatures />
      </main>
      <Footer />
    </div>
  );
}

export default App;
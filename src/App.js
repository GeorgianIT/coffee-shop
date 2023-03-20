import './App.css';
import Blogs from './components/Blogs';
import Collection from './components/Collection';
import Features from './components/Features';
import HomePage from './components/HomePage';
import Design from './components/Design'
import Footer from './components/Footer';
import BackButton from './components/BackButton';

function App() {
  return (
    <div className="App w-[100vw] bg-neutral-100">
      <BackButton/>
      <HomePage />
      <Features />
      <Collection />
      <Design />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;

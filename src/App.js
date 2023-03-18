import './App.css';
import Blogs from './components/Blogs';
import Collection from './components/Collection';
import Features from './components/Features';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App w-[100vw] bg-neutral-100">
      <HomePage />
      <Features />
      <Collection />
      <Blogs />
    </div>
  );
}

export default App;

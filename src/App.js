import './App.css';
import Collection from './components/Collection';
import Features from './components/Features';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App w-[100vw] bg-neutral-100">
      <HomePage />
      <Features />
      <Collection/>
    </div>
  );
}

export default App;

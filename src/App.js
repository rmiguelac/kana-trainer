import Banner from './components/Banner';
import KanaForm from './components/KanaForm';
import KanaDisplay from './components/KanaDisplay';
import Footer from './components/Footer';
import KanaInputResult from './components/KanaInputResult';

// Isto é um component
function App() {
  return (
    <div className="App">
      <Banner />
      <KanaInputResult />
      <KanaDisplay />
      <KanaForm />
      <Footer />
    </div>
  );
}

export default App;

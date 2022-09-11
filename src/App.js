import Banner from './components/Banner';
import KanaDisplay from './components/KanaDisplay';
import KanaInput from './components/KanaInput'
import Score from './components/Score'

// Isto é um component
function App() {
  return (
    <div className="App">
      <Banner />
      <KanaDisplay />
      <KanaInput />
      <Score />
    </div>
  );
}

export default App;

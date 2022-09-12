import Banner from './components/Banner';
import KanaForm from './components/KanaForm';
import KanaDisplay from './components/KanaDisplay';
import Footer from './components/Footer';
import KanaInputResult from './components/KanaInputResult';
import { useState } from 'react';

// Isto é um component
function App() {

  const [answer, setAnswer] = useState('')

  const onNewAnswerGiven = (answer) => {
    console.log(answer)
    setAnswer(answer)
  }

  return (
    <div className="App">
      <Banner />
      <KanaInputResult />
      <KanaDisplay onAnswerGiven={answer => onNewAnswerGiven(answer)}/>
      <KanaForm />
      <Footer />
    </div>
  );
}

export default App;

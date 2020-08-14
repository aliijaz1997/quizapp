import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { fetchData } from './services/api';
import { requiredcomponents } from './types/types';
import Quizdisplay from './components/Renderquizcomponents';

function App() {

  // Now have to make the usestate hook to set the quiz or render the quiz

  let [renderquiz, setRenderquiz] = useState<requiredcomponents[]>([]);
  let [currentstep, setCurrentstep] = useState(0)

  // we have fetched data from services. Called it in this main app file.
  useEffect(() => {

    async function fetchData2() {
      const wholequiz: any = await fetchData(3, 'easy');
      console.log(wholequiz);
      setRenderquiz(wholequiz);
    }
    fetchData2();

  }, [])

  const handlesubmission = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if (currentstep !== renderquiz.length - 1)
      setCurrentstep(++currentstep);

    else {
      alert("Quiz Completed")
      setCurrentstep(0)
    }
  }

  if (!renderquiz.length)
    return <h1>Data is loading ...</h1>

  return (
    <div className="App">
      <Quizdisplay
        questions={renderquiz[currentstep].question}
        options={renderquiz[currentstep].alloptions}
        callhandle={handlesubmission}

      />
    </div>
  );
}

export default App;

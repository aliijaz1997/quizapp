import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { fetchData } from './services/api';
import { requiredcomponents } from './types/types';
import Quizdisplay from './components/Renderquizcomponents';

function App() {

  // Now have to make the usestate hook to set the quiz or render the quiz

  let [renderquiz, setRenderquiz] = useState<requiredcomponents[]>([]);
  let [currentstep, setCurrentstep] = useState(0);
  let [result, setResult] = useState(0);
  let [displayresult, setDisplayresult] = useState(false);
  // let [beginquiz, setBeginquiz] = useState(0)

  // console.log(beginquiz);
  // we have fetched data from services. Called it in this main app file.
  useEffect(() => {

    async function fetchData2() {
      const wholequiz: any = await fetchData(3, 'easy');
      console.log(wholequiz);
      setRenderquiz(wholequiz);
    }
    fetchData2();

  }, [])

  const handlesubmission = (e: React.FormEvent<EventTarget>, answer: string) => {
    e.preventDefault();
    // console.log(answer);
    const holdcurrentquestion: requiredcomponents = renderquiz[currentstep];
    // console.log ("the correct ans is  " + holdcurrentquestion.answer + " you have clicked  " + answer)
  
    
    if (answer === holdcurrentquestion.answer)
      setResult(++result);

    if (currentstep !== renderquiz.length - 1)
      setCurrentstep(++currentstep);

    else {
      setDisplayresult(true);
    }
  }
  if (displayresult) {
    return (
      <div>"Quiz Completed and your final score is " + {result} + " out of " + {renderquiz.length}</div>
    )
  }
  if (!renderquiz.length)
    return <h1>Data is loading ...</h1>

  return (
    <div className="App">
      <h1 className="heading">Quiz App</h1>
      <Quizdisplay
        questions={renderquiz[currentstep].question}
        options={renderquiz[currentstep].alloptions}
        callhandle={handlesubmission}

      />
    </div>
  );
}

export default App;

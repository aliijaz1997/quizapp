import {requiredcomponents ,quizcomponents} from './../types/types';

// to shuffle the options of mcqs we have to impliment the following function

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5)

export async function fetchData (numberofquestions : number , difficultylevel : string) : Promise<requiredcomponents> {
    const data = await fetch(`https://opentdb.com/api.php?amount=${numberofquestions}&difficulty=${difficultylevel}&type=multiple`)
    const {results} = await data.json();
    // console.log(results);

    const quizquestionrequired : requiredcomponents = results.map((soloobjects : quizcomponents ) => { 

        return {
            question : soloobjects.question ,
            answer : soloobjects.correct_answer ,
            alloptions : shuffleArray( soloobjects.incorrect_answers.concat(soloobjects.correct_answer))
        }
         
    })
    return quizquestionrequired;
    
}

// Now we have extrated the required components of the quiz which will be rendered on the
// the screen one by one.
// Here we are going to define the types of the fetched api.
// Now if we review console there are some components results array which has specific types
// we are going to define that types.

// import { type } from "os";

export type quizcomponents = {
 category: string
correct_answer: string
 difficulty: string                 //as we know that we dont need much of types so
incorrect_answers: string[]
question: string
type: string
}

export type requiredcomponents = {

    question : string;  // the question of multiple choice questions
    answer : string;  // this will be our correct answer
    alloptions : string[]; // this is the combination of correct and incorrect answer
}

export type finalquizdisplaytypes = {
    questions: string
    options : string[]
    callhandle : (e:React.FormEvent<EventTarget> , ans : string) => void
}
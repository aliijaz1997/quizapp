import React from 'react';
import { finalquizdisplaytypes } from '../types/types';
import { useState } from 'react';
import './../App.css';
const Quizdisplay: React.FC<finalquizdisplaytypes> = ({ questions, options, callhandle }) => {
    //    console.log(questions , options);
    // Have to make the ustate hook to update the user answer

    let [useranswer, setUseranswer] = useState("");

    //Now we have to make the function
    //which has to store the clicked answers
    const storeclickedanswers = (event: any) => {
        // console.log(event.target.value)
        setUseranswer(event.target.value);
    }
    return (
        <div className = "quiz">
            <div className = "question" >
                {questions}
            </div>
            <form onSubmit={(e : React.FormEvent<EventTarget>) => callhandle ( e, useranswer)} >
                {options.map((opt: string, index: number) => {
                    return (
                        <div key={index} className = "options">
                            <label>
                                <input type="radio" name="options"  required checked = {useranswer === opt} value={opt} onChange={storeclickedanswers} />
                                {opt}
                            </label>
                        </div>
                    )
                })}

                <input type="submit" className = "button" />
            </form>
        </div>
    )
}

export default Quizdisplay;
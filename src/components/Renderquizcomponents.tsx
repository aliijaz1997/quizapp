import React from 'react';
import { finalquizdisplaytypes } from '../types/types';
const Quizdisplay: React.FC<finalquizdisplaytypes> = ({ questions, options , callhandle }) => {
    //    console.log(questions , options);

    return (
        <div>
            <div >
                {questions}
            </div>

            <form onSubmit = {callhandle} >
                {options.map((opt: string, index: number) => {
                    return (
                        <div key={index}>
                            <label>
                                <input type="radio" name="options" value = {opt} />
                                {opt}
                            </label>
                        </div>
                    )
                })}

                <input type="submit" />
            </form>
        </div>
    )
}

export default Quizdisplay;
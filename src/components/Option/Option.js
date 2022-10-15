import React from 'react';
import './Option.css';

const Option = ({ option, index, answerMatcher, idx }) => {
    console.log(option);
    const forRadio = option.slice(0, 5);
    // console.log(index + forRadio);
    return (
        <div className='text-xl py-2 px-4'>
            {/* {index + 1}.  */}


            <input onClick={() => answerMatcher(option)} type="radio" id={index + forRadio} name={idx} /> &nbsp;
            <label htmlFor={index + forRadio}>{option}</label><br></br>
        </div>

    );
};

export default Option;
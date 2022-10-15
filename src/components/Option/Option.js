import React from 'react';
import './Option.css'

const Option = ({ option, index }) => {
    console.log(index);
    return (
        <div className='text-xl py-2 px-4'>
            {/* {index + 1}.  */}
            <input type="radio" id={index} name="fav_language" value="HTML" /> &nbsp;
            <label htmlFor={index}>{option}</label><br></br>
        </div>

    );
};

export default Option;
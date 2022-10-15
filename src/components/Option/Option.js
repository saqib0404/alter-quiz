import React from 'react';
import './Option.css';
import { ToastContainer } from 'react-toastify';

const Option = ({ option, index, answerMatcher }) => {
    // console.log(index);
    const forRadio = option.slice(0, 5);
    // console.log(index + forRadio);
    return (
        <div onClick={() => answerMatcher(option)} className='text-xl py-2 px-4'>
            {/* {index + 1}.  */}
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <input type="radio" id={index + forRadio} name="fav_language" value="HTML" /> &nbsp;
            <label htmlFor={index + forRadio}>{option}</label><br></br>
        </div>

    );
};

export default Option;
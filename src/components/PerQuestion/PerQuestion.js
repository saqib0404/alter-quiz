import React, { useState } from 'react';
import Option from '../Option/Option';
import './PerQuestion.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'

const PerQuestion = ({ perQuestion, index }) => {
    // console.log(perQuestion);
    const [shown, setShown] = useState(false)
    const { question, options, correctAnswer, id } = perQuestion;
    const correct = () => toast.success('Correct Answer', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const wrong = () => toast.warn('Wrong!!!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
    });
    const answerMatcher = (option) => {
        console.log(option);
        if (option === correctAnswer) {
            correct();
        } else {
            wrong()
        }
    }

    return (

        <div className='question w-3/4 bg-indigo-100 relative '>
            <ToastContainer />
            <h3 className='text-3xl text-indigo-800'>Q{index + 1}. {question}</h3>
            <div onClick={() => setShown(!shown)} className="h-6 w-6 text-indigo-700 absolute bottom-2 right-2">
                {
                    shown ? <EyeSlashIcon /> : <EyeIcon />
                }
            </div>
            <div className="options grid md:grid-cols-2">

                {
                    options.map((option, idx) => <Option
                        key={idx}
                        idx={index}
                        index={idx}
                        option={option}
                        answerMatcher={answerMatcher}
                    ></Option>)
                }
            </div>
            {shown ? "Correct Answer: " + correctAnswer : undefined}

        </div>
    );
};

export default PerQuestion;
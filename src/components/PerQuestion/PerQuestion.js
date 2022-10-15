import React from 'react';
import Option from '../Option/Option';
import './PerQuestion.css';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
// import { Toast } from 'react-toastify/dist/components';

const PerQuestion = ({ perQuestion, index }) => {
    console.log(perQuestion);
    const { question, options, correctAnswer, id } = perQuestion;
    const correct = () => toast.success('Correct Answer', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const wrong = () => toast.warn('Wrong!!!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
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

        <div className='question w-3/4 bg-indigo-100'>
            <h3 className='text-3xl text-indigo-800'>Q{index + 1}. {question}</h3>
            <div className="options grid md:grid-cols-2">

                {
                    options.map((option, idx) => <Option
                        key={idx}
                        index={idx}
                        option={option}
                        answerMatcher={answerMatcher}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default PerQuestion;
import React from 'react';
import Option from '../Option/Option';
import './PerQuestion.css'

const PerQuestion = ({ perQuestion, index }) => {
    console.log(perQuestion);
    const { question, options, correctAnswer, id } = perQuestion;
    return (
        <div className='question w-3/4 bg-indigo-100'>
            <h3 className='text-3xl text-indigo-800'>Q{index + 1}. {question}</h3>
            <div className="options grid md:grid-cols-2">
                {
                    options.map((option, idx) => <Option
                        key={idx}
                        index={idx}
                        option={option}
                    ></Option>)
                }
            </div>
        </div>
    );
};

export default PerQuestion;
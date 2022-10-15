import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import './Quiz.css';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { name, id, logo, total } = quiz
    return (
        <div className='quiz'>
            <div className='quiz-img'>
                <img src={logo} alt="" />
            </div>
            <div className='quiz-details py-2 px-4'>
                <h3 className='text-3xl text-semibold'>Quiz for: <span className='text-indigo-700'>{name}</span></h3>
                <p>Total quizes: {total}</p>
                <Link to={`/quiz/${id}`}>
                    <button className='flex bg-indigo-500 py-2 px-6 rounded-md text-white mt-3 hover:bg-indigo-900 border-indigo-900'>Start &nbsp;
                        <ArrowRightIcon className="h-6 w-6 tect-white" />
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Quiz;
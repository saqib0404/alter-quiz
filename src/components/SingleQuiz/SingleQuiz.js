import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PerQuestion from '../PerQuestion/PerQuestion';
import './SingleQuiz.css';

const SingleQuiz = () => {
    const singleQuiz = useLoaderData();
    // console.log(singleQuiz.data);
    const { name, questions } = singleQuiz.data;
    return (
        <div>
            <h2 className='blog-header text-5xl text-center my-10 text-indigo-900'>Quiz for: {name}</h2>
            <div className='questions'>
                {
                    questions.map((perQuestion,idx) => <PerQuestion
                    key={perQuestion.id}
                    perQuestion={perQuestion}
                    index={idx}
                    ></PerQuestion>)
                }
            </div>
        </div>
    );
};

export default SingleQuiz;
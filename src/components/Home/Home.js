import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css';

const Home = () => {
    const quizes = useLoaderData();
    // console.log(quizes.data);
    return (
        <div>
            <header>
                <h2 className='text-4xl'>Enlarge your programming knowledge by solving <span className='text-indigo-500'>Alter Quiz</span></h2>
            </header>
            <div className='my-20' >
                <h2 className="quizes-section text-center text-5xl font-semibold my-20">Our Quizes</h2>
                <div className='quizes px-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
                    {
                        quizes.data.map(quiz => <Quiz
                            key={quiz.id}
                            quiz={quiz}
                        ></Quiz>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
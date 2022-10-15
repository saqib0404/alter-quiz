import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import './Statistics.css';

const Statistics = () => {
    const quizes = useLoaderData()
    console.log(quizes.data);
    return (
        <div>
            <h1 className='statistics-header text-5xl text-center my-10 text-indigo-700'>Statistics</h1>
            <div style={{width:"100%", height:"400px", padding:"20px"}}>
                <ResponsiveContainer className='bg-indigo-100' width="100%" height="100%">
                    {
                        quizes && <LineChart
                            width={500}
                            height={300}
                            data={quizes.data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis dataKey='total' />
                            <Tooltip />
                            <Legend />
                            {/* <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} /> */}
                            <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                        </LineChart>
                    }
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;
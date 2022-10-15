import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <section className='my-10'>
            <h1 className='blog-header text-5xl text-center my-10'>Blogs</h1>
            <div className="blogs">
                <div className="blog bg-indigo-50">
                    <h3 className='py-2 px-4 text-3xl font-semibold'>Q1. What is the purpose of react router?</h3>
                    <p className='py-1 px-7 text-xl'>
                        React Router is mainly used for developing Single Page Web Applications (SPA).React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. In this case the whole page is not reloaded which makes the user experience better.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Blog;
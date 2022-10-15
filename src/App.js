import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Main from './layout/Main';
import Home from './components/Home/Home';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import SingleQuiz from './components/SingleQuiz/SingleQuiz';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: < Home ></Home >
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`),
          element: <SingleQuiz></SingleQuiz>
        },
        {
          path: '/statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '*',
          element: <h1 className='page-error-msg text-indigo-900'>404&nbsp;<span className='text-indigo-500'>|</span>&nbsp;Page Not Found.</h1>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

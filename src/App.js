import React from 'react';
import { Link } from "react-router-dom";


function App() {
  const data = [
    {
      bg:1,
      title:"Student's ID"
    },
    {
      bg:2,
      title:"Teacher's ID"
    }
  ]

  return (
    <>
      <div className='p-5 bg-slate-100 h-full'>
        <h1 className='text-3xl text-center font-bold'>Generate dynamic ID card</h1>
        <div className='flex flex-row gap-4 p-5 justify-center'>
          {
            data.map((item, index) => (
                <Link key={index} to={`/dashboard/${item.bg}`} className='w-2/12 shadow-md rounded-lg p-4 bg-slate-300'>
                  <div>
                    <img alt='Theme Background' src={`../Assets/images/bg${item.bg}.png`} />
                    <h1 className='text-xl text-center mt-4'>{item.title}</h1>
                  </div>
                </Link>
            ))
          }
        </div>
      </div>

    </>
  );
}

export default App;

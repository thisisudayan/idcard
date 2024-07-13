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
      <div className='p-5'>
        <h1 className='text-3xl'>Generate dynamic ID card</h1>
        <div className='flex flex-row gap-4 p-5'>
          {
            data.map((item, index) => (
              <div key={index} className='w-2/12'>
                <Link key={index} to={`/dashboard/${item.bg}`}>
                  <img alt='Theme Background' src={`../Assets/images/bg${item.bg}.png`} />
                </Link>
                <h1 className='text-2xl text-center mt-4'>{item.title}</h1>
              </div>
            ))
          }
        </div>
      </div>

    </>
  );
}

export default App;

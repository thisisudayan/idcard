import React from 'react';
import { Link } from "react-router-dom";


function App() {

  return (
    <>
      <div className='p-5'>
        <h1 className='text-3xl'>Generate dynamic ID card</h1>
        <div className='flex flex-row gap-4 p-5'>
          {
            [1, 2].map((item, index) => (
              <div className='w-2/12'>
                <Link key={index} to={`/dashboard/${item}`}>
                  <img alt='Theme Background' src={`../Assets/images/bg${item}.png`} />
                </Link>
              </div>
            ))
          }
        </div>
      </div>

    </>
  );
}

export default App;

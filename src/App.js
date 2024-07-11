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
              <Link key={index} to={"/dashboard/" + item}>
                <div className='w-4/12 object-contain'>
                  <img className='object-contain' src={`../Assets/images/bg${item}.png`} />
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

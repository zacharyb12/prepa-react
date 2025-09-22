import { useState } from 'react';

function CountComponent(){

  const [count, setCount] = useState(0);

    return (
    <>
        <p>Count is {count}</p>
        <button className='btn btn-primary' onClick={() => setCount(count + 1)}>+</button>
        <button className='btn btn-danger' onClick={() => setCount(count - 1)}>-</button>
      </>
    );
}

export default CountComponent;
import React, {useState} from 'react';
import CountValue from './CountValue';
import IsFive from './IsFive';

const Counters = () => {

    console.log('Rendering Counters');

    const [Count1, setCount1] = useState(0);
    const [Count2, setCount2] = useState(0);


    return (
      <div>
        <div>
          <button onClick={() => setCount1(Count1 + 1)}>+</button>
          <span>
            <CountValue value={Count1} id='count1'/>
          </span>
          <button onClick={() => setCount1(Count1 - 1)}>-</button>
        </div>
        <div>
          <button onClick={() => setCount2(Count2 + 1)}>+</button>
          <span>
            <CountValue value={Count2} id='count2'/>
          </span>
          <button onClick={() => setCount2(Count2 - 1)}>-</button>
          <IsFive value={Count2} />
        </div>
      </div>
    );
}

export default Counters;

import React from 'react';
import {useSelector, useDispatch} from 'react-redux'; 
import { decrease, increment } from './CountSlider';
//useSelector() cho phép truy cập vào rudex store.js states (gọi states)
//rafce
//useDispatch bắn ra 1 hành động nào đó (gọi hàm)
const Count = () => {
    const count = useSelector(data => data.count.value);
    const dispatch = useDispatch();
    console.log(count);
  return (
    <div>Count {count }
    
    <button onClick={() => dispatch(increment()) }>Incre</button>
    <button onClick={() => dispatch(decrease()) }>Incre</button>
    
    </div>

  )
}

export default Count
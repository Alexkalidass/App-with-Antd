import { useEffect, useState } from "react";

import axios from 'axios'


// Use State



// function Sample ()
// {
//     const [count, setCount] =useState (1)
   
//       const handlecheck=()=>{
//          setCount((add)=>{
//               return add +1
//          })
//       }

//     return (
//         <>
//             <h3>count : {count}</h3>
         
//             <button onClick={handlecheck}>click</button>
//         </>
//     )
// }
// export default Sample;




// <!--------Use Effect with dependenicies method--------->

function Sample ()
{
    const [count, setCount] =useState (0)
    const [time, setTime] = useState(0)


    useEffect(()=>
    {
        console.log("have a good day")
    },[count])

    

    return (
        <>
            <h3>count : {count}</h3>
            <h3>Time : {time}</h3>
            <button onClick={()=>setCount((value)=>value-1) }>-</button>
            <button onClick={()=>setCount((value)=>value+1)}>+</button>
            <button onClick={()=>setTime((value)=>value+1)}>Time</button>
        </>
    )
}
export default Sample;



// <!---UseEffect with cleanout method------>

// function Sample() {
//   const [count, setCount] = useState(0);
//   const [time, setTime] = useState(0);

 
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log("Timer is running...");
//     }, 2000);

   
//     return () => {
//       clearInterval(timer);
//       console.log("Timer stopped.");
//     };
//   },[time]);

//   return (
//     <>
//       <h3>Count: {count}</h3>
//       <h3>Time: {time}</h3>
//       <button onClick={() => setCount(count - 1)}>-</button>
//       <button onClick={() => setCount(count + 1)}>+</button>
//       <button onClick={() => setTime(time + 1)}>Time</button>
//     </>
//   );
// }

// export default Sample;






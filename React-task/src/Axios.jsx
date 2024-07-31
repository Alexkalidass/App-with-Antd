import { useEffect, useState } from "react";

import axios from 'axios'




// <!-----Axios------>



// function AxiosSample() {
//   const [data, setData] = useState([]);

//   const [error, setError] = useState('');

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/todos')
//       .then(response => {
//         setData(response.data);
        
//       })
//       .catch(error => {
//         setError(error);
        
//       });
//   }, []);



//   return (
//     <div>
//       <h1>Posts</h1>
//       <div>
//         {data.map(todos => (
//           <p key={todos.id}>{todos.title}</p>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AxiosSample;





const AxiosSample = () => {
  const [data, setData] = useState([]);


  // The axios.get call is asynchronous, so we should use async/await 

  const Apicall = async () => {
    try 
    {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(response.data);
      setData(response.data);
    } 
    catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(()=>{
      Apicall();
  },[])


  return (
    <div>
      <h1>Axios API</h1>
      <button onClick={Apicall}>Changes</button>
    </div>
  );
}

export default AxiosSample;
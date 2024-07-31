import React from 'react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';



const Test1 = () => {
  
  const call = async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
    return response.data;
  };

  const { isLoading, data, error } = useQuery({queryKey: ["filedata"], queryFn: call});

  
  if (isLoading) 
    {
        return <h1>Loading....</h1>
    }

  
  if (error) 
    {
        return <h1>An error occurred: {error.message}</h1>;
    }

    // else
    // {
    //     console.log(data)
    // }
  
  

  return (
    <div>
        <h1>Welcome buddy</h1>     
         {data.map(post => 
         (
           <p>{post.id} : {post.title}</p>
         ))}   

         
    </div>
  
  )
    
};

export default Test1;








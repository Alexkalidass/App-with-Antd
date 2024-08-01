import React, { useState } from 'react';
import axios from 'axios';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';




// const Test1 = () => {
  
//   const call = async () => {
//     const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    
//     return response.data;
//   };

//   const { isLoading, data, error } = useQuery({queryKey: ["filedata"], queryFn: call});

  
//   if (isLoading) 
//     {
//         return <h1>Loading....</h1>
//     }

  
//   if (error) 
//     {
//         return <h1>An error occurred: {error.message}</h1>;
//     }
//   return (
//     <div>
//         <h1>Welcome buddy</h1>     
//          {data.map(post => 
//          (
//            <p>{post.id} : {post.title}</p>
//          ))}          
//     </div>
//   )
// };
// export default Test1;







const fetchPosts = async () => 
  {

    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return response.data
  }

const postData = async (newPost) => 
  {
    const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost);
    return response.data;
  }

  const Test1 = () => 
  {
      const queryClient = useQueryClient()

      const { isLoading, data, error } = useQuery({queryKey: ["filedata"],queryFn: fetchPosts})

      const mutation = useMutation({mutationFn: postData,
      onSuccess: (newPost) => {queryClient.setQueryData(["filedata"], (oldData) => [...oldData, newPost])}})

      const [title, setTitle] = useState("")
      const [body, setBody] = useState("")

      const handleSubmit = (e) => {
      e.preventDefault()
      mutation.mutate({ title, body })
      setTitle("")
      setBody("")
  }

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  if (error) {
    return <h1>An error occurred: {error.message}</h1>;
  }

  return (
    <div>
      <h1>Welcome buddy</h1>
      {data.map(post => (
        <p key={post.id}>{post.id} : {post.title}</p>
      ))}

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Title:
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required
            />
          </label>
        </div>
        <div>
          <label>
            Body:
            <textarea 
              value={body} 
              onChange={(e) => setBody(e.target.value)} 
              required
            />
          </label>
        </div>
        <button type="submit" disabled={mutation.isLoading}>
          {mutation.isLoading ? 'Posting...' : 'Post Data'}
        </button>
        {mutation.error && <p>An error occurred while posting: {mutation.error.message}</p>}
      </form>
    </div>
  );
};

export default Test1;

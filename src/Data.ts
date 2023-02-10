// import axios from 'axios';
// import { useState } from 'react';
// import { FetchState, UserResponse } from './types';

// const data = () => {
//   const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
//   const [posts, setPosts] = useState<Array<UserResponse>>([]);
//   console.log("data ...")
  
//   const getPosts = async () => {
//     console.log("fetching ...")
//     try {
//       setFetchState(FetchState.LOADING);
      
//       const res = await axios.get('https://jsonplaceholder.typicode.com/users');
//       const resData = res.data as Array<UserResponse>;

//       setPosts(resData);
//       setFetchState(FetchState.SUCCESS);
//     } catch (err) {
//       setFetchState(FetchState.ERROR);
//     }
//   };

//   return [posts, fetchState, getPosts] as const;
// }

// export default data;
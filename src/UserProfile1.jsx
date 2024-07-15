import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import axios from "axios";

export default function UserProfile({ userId }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  userId = Math.floor(Math.random() * 10 + 1);

  //   const [test, setTest] = useState([]);
  //   console.log(test);
  useEffect(() => {
    const fetchUserPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserPosts();
  }, [userId]);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {/* {test.map((data, i) => { */}
      {/* <div key={i}> */}
      {/* <h1>Title: {data.title}</h1>
      <p>Body: {data.body}</p> */}
      {/* </div>; */}
      {/* })} */}

      <div>
        <h1>User Posts</h1>
        {data.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>

      <button onClick={location.reload()}>Refresh</button>
    </div>
  );
}

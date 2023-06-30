import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

// card items on the left
const CardLeft = styled.div({
  marginBottom: "1rem",
  backgroundColor: 'rgba(240, 240, 240, 0.6)',
  padding: '2rem 1rem',
  color: "#001",
  border: '1px groove #ccd',
});

const CardCompLeft = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [post, setPost] = useState([]);

  // fetch url
  const fetchPost = () => {
    return axios.get(url).then((res) => setPost(res.data));
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <>
      {post.map((posts) => {
        return (
          <div key={posts.id}>
            <CardLeft>
                <h4>{posts.title}</h4>
                <p>{posts.body}</p>
            </CardLeft>
          </div>
        );
      })}
    </>
  );
};

export default CardCompLeft;

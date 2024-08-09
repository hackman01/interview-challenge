import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import Post from './Post';
import Container from '../common/Container';
// import useWindowWidth from '../hooks/useWindowWidth';
import { WindowWidthContext } from '../../context/contextProvider';

const PostListContainer = styled.div(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

const LoadMoreButton = styled.button(() => ({
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: 5,
  cursor: 'pointer',
  fontSize: 16,
  marginTop: 20,
  transition: 'background-color 0.3s ease',
  fontWeight: 600,

  '&:hover': {
    backgroundColor: '#0056b3',
  },
  '&:disabled': {
    backgroundColor: '#808080',
    cursor: 'default',
  },
}));

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [start,setStart] = useState(0);
  const [more,setMore] = useState(true);
  const { isSmallerDevice } = useContext(WindowWidthContext);

  const fetchPost = async () => {
    const { data } = await axios.get('/api/v1/posts', {
      params: { start: start, limit: isSmallerDevice ? 5 : 10 },
    });
    const newPosts = data.data;
    const meta = data.metaData;

    if(meta.page === meta.totalPages){
      setMore(false);
    }
    let temp = isSmallerDevice ? start+5 : start+10; 
     setStart(temp);
    setPosts([...posts,...newPosts]);
    setIsLoading(false);
  };
  useEffect(() => {
    fetchPost();
  }, [isSmallerDevice]);

  const handleClick = () => {
    setIsLoading(true);
    fetchPost();
     
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <Container>
      <PostListContainer>
        {posts?.map(post => (
          <Post post={post} />
        ))}
      </PostListContainer>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {more ? <LoadMoreButton onClick={handleClick} disabled={isLoading}>
          {!isLoading ? 'Load More' : 'Loading...'}
        </LoadMoreButton> : null}
      </div>
    </Container>
  );
}

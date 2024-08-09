const express = require('express');
const { fetchPosts,fetchPostImages } = require('./posts.service');
const { fetchUserById } = require('../users/users.service');

const router = express.Router();

router.get('/', async (req, res) => {
  const start = req.query.start;
  const limit = req.query.limit;
  const params = {start, limit}
  const posts = await fetchPosts(params);
  
  const postsWithImages = await posts.reduce(async (acc, post) => {
 // TODO use this route to fetch photos for each post
    
    const postImages = await fetchPostImages(post)
    const newacc = await acc;
    return [
      ...newacc,
      {
        ...post,
        images: postImages,
      },
    ];
  }, []);

  res.json({data : postsWithImages,metaData : {page : ((Number(start)+Number(limit))/Number(limit)), totalPages : limit===5 ? 20 : 10}});
});

module.exports = router;

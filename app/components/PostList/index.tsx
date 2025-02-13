"use client";

import { useDispatch, useSelector } from "react-redux";
import { StyledPosts } from "./style";
import { useEffect } from "react";
import { fetchPosts } from "@/app/redux/postsSlice";

export const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state: any) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <section>
      <StyledPosts>
        {console.log(posts)}
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
            </div>
          );
        })}
      </StyledPosts>
    </section>
  );
};

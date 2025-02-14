"use client";

import { useDispatch, useSelector } from "react-redux";
import { StyledPosts } from "./style";
import { useEffect } from "react";
import { fetchPosts } from "@/app/redux/postsSlice";
import Comment from "@/app/assets/icons/comment.svg";
import Link from "next/link";
import { fetchCommentCount } from "@/app/redux/commentsSlice";

export const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state: any) => state.posts);

  const commentCounts = useSelector(
    (state: any) => state.comments.commentCounts,
  );

  const isHtml = (content: string) => {
    return /<[a-z][\s\S]*>/i.test(content);
  };

  const stripHtml = (html: string) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  }

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    posts.forEach((post) => {
      dispatch(fetchCommentCount(post.id));
    });
  }, [posts, dispatch]);

  return (
    <section>
      <StyledPosts>
        {posts.map((post) => {
          return (
            <div key={post.id}>
              <Link href={`/post/${post.id}`} passHref>
                <h3>{post.title}</h3>
              </Link>
              <span>
                {commentCounts[post.id] || 0}
                <Comment />
              </span>
              <p>{isHtml(post.content) ? stripHT }</p>
            </div>
          );
        })}
      </StyledPosts>
    </section>
  );
};

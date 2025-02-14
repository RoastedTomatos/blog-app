"use client";

import { Header } from "@/app/components/Header";
import { useEffect, useState } from "react";
import { PostSection, StyledComment, StyledDiv } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { fetchCommentsByPostId } from "@/app/redux/commentsSlice";
import Avatar from "@/app/assets/icons/avatar.svg";

interface PostProps {
  title: string;
  content: string;
}

const PostPage = ({ params }: { params: { id: string } }) => {
  const [post, setPost] = useState<PostProps | null>(null);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useDispatch();
  const comments = useSelector(
    (state: any) => state.comments.comments[params.id] || [],
  );

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_POSTS_API_URL}/posts/${params.id}`,
        );
        if (!response.ok) {
          throw new Error("Network Error");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error:", error);
        setError("Cannot load data");
      }
    };

    fetchPost();
    dispatch(fetchCommentsByPostId(Number(params.id)));
  }, [params.id, dispatch]);

  return (
    <PostSection>
      <Header />
      <section>
        {error ? (
          <p>{error}</p>
        ) : post ? (
          <>
            <StyledDiv>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </StyledDiv>
            <div>
              <h3>Comments</h3>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <StyledComment key={comment.id}>
                    <div>
                      <span>
                        <Avatar />
                        <p>SomeAuthor</p>
                      </span>
                      <p>
                        Was created: {""}
                        {new Date(comment.id).toLocaleString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <div>
                      <p style={{ fontSize: "16px" }}>{comment.content}</p>
                    </div>
                  </StyledComment>
                ))
              ) : (
                <p>No comments yet</p>
              )}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </PostSection>
  );
};

export default PostPage;

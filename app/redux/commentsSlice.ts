import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Comment {
  id: number;
  postId: number;
  content: string;
}

interface CommentsState {
  comments: Record<number, Comment[]>;
  commentCounts: Record<number, number>;
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  comments: {},
  commentCounts: {},
  loading: false,
  error: null,
};

export const fetchCommentsByPostId = createAsyncThunk(
  "comments/fetchCommentsByPostId",
  async (postId: number) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_POSTS_API_URL}/posts/${postId}/comments`,
    );
    if (!response.ok) throw new Error("Failed to fetch comments");
    return { postId, comments: await response.json() };
  },
);

export const fetchCommentCount = createAsyncThunk(
  "comments/fetchCommentCount",
  async (postId: number) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_POSTS_API_URL}/posts/${postId}/comments`,
    );
    if (!response.ok) throw new Error("Failed to fetch comment count");
    const comments = await response.json();
    console.log(comments);
    return { postId, count: comments.length };
  },
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByPostId.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCommentsByPostId.fulfilled, (state, action) => {
        state.loading = false;
        state.comments[action.payload.postId] = action.payload.comments;
      })
      .addCase(fetchCommentsByPostId.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch comments";
      })
      .addCase(fetchCommentCount.fulfilled, (state, action) => {
        state.commentCounts[action.payload.postId] = action.payload.count;
      });
  },
});

export default commentsSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostsState {
  posts: Post[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_POSTS_API_URL}/posts`,
  );

  if (!response.ok) {
    throw new Error("Network response error");
  }

  return await response.json();
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: { payload: Post }) => {
      state.posts.push(action.payload);
    },
    setError: (state, action: { payload: string }) => {
      state.error = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed!";
      });
  },
});

export const { addPost, setError } = postsSlice.actions;

export default postsSlice.reducer;

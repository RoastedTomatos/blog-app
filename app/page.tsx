"use client";

import { Header } from "./components/Header";
import { PostList } from "./components/PostList";
import { SearchBar } from "./components/SearchBar";

export default function BlogPage() {
  return (
    <main>
      <div>
        <Header />
        <SearchBar />
      </div>
      <PostList />
    </main>
  );
}

import { useState } from "react";
import { CreatePostModal } from "../Modal";
import { StyledBar } from "./style";

export const SearchBar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <StyledBar>
      <form>
        <button type="button" onClick={() => setVisible(true)}>
          Add Post
        </button>
        <CreatePostModal visible={visible} onHide={() => setVisible(false)} />
        <div>
          <input placeholder="Search for something"></input>
        </div>
        <button>Filter by</button>
      </form>
    </StyledBar>
  );
};

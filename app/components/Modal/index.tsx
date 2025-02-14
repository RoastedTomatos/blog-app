import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "@/app/redux/postsSlice";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { Editor } from "primereact/editor";
import { Button } from "primereact/button";
import styled from "styled-components";
import { RootState } from "@/app/redux/store";

const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

interface CreatePostModalProps {
  visible: boolean;
  onHide: () => void;
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({
  visible,
  onHide,
}) => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.posts.loading);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;
    dispatch(createPost({ title, content }) as any);
    setTitle("");
    setContent("");
    onHide();
  };

  return (
    <Dialog
      header="Create Post"
      visible={visible}
      style={{ width: "50vw", backgroundColor: "white", padding: "20px" }}
      onHide={onHide}
    >
      <StyledForm>
        <InputText
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <Editor
          value={content}
          onTextChange={(e) => setContent(e.htmlValue)}
          style={{ height: "200px" }}
        />
        <Button
          label={loading ? "Creating..." : "Create"}
          onClick={handleSubmit}
          disabled={loading}
        />
      </StyledForm>
    </Dialog>
  );
};

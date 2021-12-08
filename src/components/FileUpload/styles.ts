import styled from "styled-components";

export const DropContainer = styled.div.attrs({ className: "dropzone" })`
  border: 1px dashed #ddd;
  border-radius: 4px;
  cursor: pointer;

  transition: height 0.3s;
`;

const messageColors = {
  default: "#999",
  error: "#e57878",
  success: "#78e5d5",
};

interface IUploadProps {
  type?: "error" | "success" | "default";
}

export const UploadMessage = styled.div<IUploadProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => messageColors[props.type || "default"]};
  padding: 15px 0;
`;

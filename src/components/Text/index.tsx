import { Text as TextStyle } from "./styles";

export type Props = {
  children: string;
  type?: "main" | "secondary";
  fontSize?: number;
};

const Text = ({ children, type = "main", fontSize }: Props) => (
  <TextStyle type={type} fontSize={fontSize}>
    {children}
  </TextStyle>
);

export default Text;

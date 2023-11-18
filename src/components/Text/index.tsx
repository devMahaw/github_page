import { Text as TextStyle } from "./styles";

export type Props = {
  children: string;
  type?: "main" | "secondary";
};

const Text = ({ children, type = "main" }: Props) => (
  <TextStyle type={type}>{children}</TextStyle>
);

export default Text;

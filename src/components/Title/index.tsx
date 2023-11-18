import { Title as TitleStyle } from "./styles";

export type Props = {
  children: string;
  fontSize?: number;
  headingType?: "h1" | "h3";
};

const Title = (props: Props) => {
  const Tag = props.headingType || "h3";
  return (
    <TitleStyle as={Tag} fontSize={props.fontSize}>
      {props.children}
    </TitleStyle>
  );
};

export default Title;

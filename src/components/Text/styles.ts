import styled from "styled-components";
import { Props } from "./index";

export const Text = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  color: ${(props) => (props.type === "main" ? "#909090" : "#DADADA")};
  line-height: 22px;
`;

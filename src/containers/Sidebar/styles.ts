import styled from "styled-components";
import { Text } from "../../components/Text/styles";

export const Description = styled(Text)`
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const ThemeButton = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.backgroundColor};
  font-weight: bold;
  font-size: 14px;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
  border: none;
  margin-bottom: 40px;
`;

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

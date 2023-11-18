import Avatar from "../../components/Avatar";
import Title from "../../components/Title";
import Text from "../../components/Text";
import { Description, ThemeButton, SidebarContainer } from "./styles";

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={24} headingType="h1">
        Mahaw
      </Title>
      <Text type="secondary" fontSize={18}>
        devMahaw
      </Text>
      <Description type="main" fontSize={14}>
        Desenvolvedor Fullstack
      </Description>
      <ThemeButton>Trocar tema</ThemeButton>
    </SidebarContainer>
  </aside>
);

export default Sidebar;

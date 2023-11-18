import Title from "../../components/Title";
import Text from "../../components/Text";
import { GithubSecao } from "./styles";

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Text type="main">
      Trabalho principalmente com HTML, CSS, Javascript, Java e SQL incluindo as
      frameworks, bibliotecas e pré-processadores como: Spring, Hibernate,
      React, jQuery, Gulp, SASS, etc... Adicionalmente trabalho com
      versionamento de códigos com git e GitHub. Sigo em constante aprendizado,
      dou 110% de mim e sigo sempre buscando o melhor de mim mesmo diariamente.
    </Text>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=devMahaw&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=devMahaw&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
);

export default About;

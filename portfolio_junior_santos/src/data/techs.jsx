import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiSass,
  DiNodejsSmall,
  DiPostgresql,
} from "react-icons/di";
import { SiTypescript, SiReact, SiPython, SiDjango } from "react-icons/si";

export const techs = [
  {
    id: "html",
    name: "HTML5",
    description:
      "Estruturo e desenvolvo páginas web semânticas e acessíveis utilizando as tags e recursos mais recentes do HTML5.",
    icon: <DiHtml5 />,
  },
  {
    id: "css",
    name: "CSS3",
    description:
      "Crio estilos visuais atraentes e responsivos para páginas web usando CSS3, incluindo animações e transições.",
    icon: <DiCss3 />,
  },
  {
    id: "js",
    name: "JavaScript",
    description:
      "Desenvolvo scripts para tornar páginas web interativas e dinâmicas, utilizando bibliotecas e frameworks populares.",
    icon: <DiJavascript />,
  },
  {
    id: "react",
    name: "React",
    description:
      "Desenvolvo aplicativos web escaláveis e reutilizáveis com React, utilizando ferramentas modernas de desenvolvimento.",
    icon: <SiReact />,
  },
  {
    id: "ts",
    name: "TypeScript",
    description:
      "Desenvolvo aplicativos web seguros e confiáveis com TypeScript, utilizando tipagem estática para prevenir erros em tempo de execução.",
    icon: <SiTypescript />,
  },
  {
    id: "sass",
    name: "Sass",
    description:
      "Crio estilos visuais mais eficientes e organizados utilizando o Sass.",
    icon: <DiSass />,
  },
  {
    id: "node",
    name: "Node.js",
    description:
      "Desenvolvo aplicativos web do lado do servidor com Node.js, utilizando bibliotecas populares como o Express e o Sequelize.",
    icon: <DiNodejsSmall />,
  },
  {
    id: "postgresql",
    name: "PostgreSql",
    description:
      "Crio e gerencio bancos de dados relacionais robustos e seguros utilizando o PostgreSql.",
    icon: <DiPostgresql />,
  },
  {
    id: "python",
    name: "Python",
    description:
      "Tenho experiência no desenvolvimento de APIs robustas e escaláveis usando Python em conjunto com o framework Django Rest.",
    icon: <SiPython />,
  },
  {
    id: "django",
    name: "Django",
    description:
      "Com conhecimento em Python e Django Rest, consigo desenvolver APIs customizadas e integradas com outros sistemas de forma eficiente.",
    icon: <SiDjango />,
  },
];

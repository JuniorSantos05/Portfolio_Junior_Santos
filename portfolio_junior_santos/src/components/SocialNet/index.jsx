import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import "./socialnet.sass";

const socialNetworks = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/durvalsantos/",
    icon: <FaLinkedinIn />,
  },
  {
    name: "github",
    url: "https://github.com/JuniorSantos05",
    icon: <FaGithub />,
  },
  {
    name: "instagram",
    url: "https://www.instagram.com/junior_santoos05",
    icon: <FaInstagram />,
  },
];

const SocialNet = () => {
  return (
    <section id="social_networks">
      {socialNetworks.map((network) => (
        <a
          href={network.url}
          className="social_btn"
          id={network.name}
          key={network.name}
          target="_blank"
          rel="noopener noreferrer"
        >
          {network.icon}
        </a>
      ))}
    </section>
  );
};

export default SocialNet;

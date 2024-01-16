import Foto_perfil from "../../assets/my_photo.jpg";
import Information from "../Information";
import SocialNet from "../SocialNet";
import "./sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Foto_perfil} alt="Junior Santos" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNet />
      <Information />
      <a
        className="btn"
        href="https://drive.google.com/file/d/1_XvA4Jb-IfR9gWfAQ3_sfGgJaOkE7Y51/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Baixar Currículo
      </a>
    </aside>
  );
};

export default Sidebar;

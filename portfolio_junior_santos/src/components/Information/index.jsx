import { AiFillPhone, AiOutlineMail, AiFillEnvironment } from "react-icons/ai";
import "./information.sass";

const Information = () => {
  return (
    <section id="information">
      <div className="info_card">
        <AiFillPhone id="phone_icon" />
        <div>
          <h3>Telefone</h3>
          <p>(81) 99607-2512</p>
        </div>
      </div>

      <div className="info_card">
        <AiOutlineMail id="email_icon" />
        <div>
          <h3>Email</h3>
          <p>nuno.ribeiro05@hotmail.com</p>
        </div>
      </div>

      <div className="info_card">
        <AiFillEnvironment id="pin_icon" />
        <div>
          <h3>Localização</h3>
          <p>Abreu e Lima/PE</p>
        </div>
      </div>
    </section>
  );
};

export default Information;

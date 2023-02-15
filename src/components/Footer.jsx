import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer py-5 mt-5">
      <div className="container text-center">
        <div className="d-flex gap-4 align-items-center flex-column">
          <div className="footer-logo d-flex gap-3 align-items-center">
            <img src={Logo} className="img-fluid d-block" alt="logo" />
            <h2 className="text-white fw-bolder">T-Movies</h2>
          </div>
          <div className="footer-content text-white">
            &copy; All Rights Reserved. Coded By Ahmed Elbahy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

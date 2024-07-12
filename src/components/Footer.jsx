import { Link } from "react-router-dom";
const Footer = () => {
    return (
      <div className="bg-dark text-light">
        <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <ul className="navbar-nav mx-auto">
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                    Home | @2023
                    </Link>
                    </ul>
           
            {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3"></li>
                <li className="ms-3"></li>
                <li className="ms-3"></li>
            </ul> */}
        </div>
        </div>
      </div>
    )
  }
  
  export default Footer;
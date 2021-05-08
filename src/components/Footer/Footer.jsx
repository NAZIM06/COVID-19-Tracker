import React from "react";
import "./Footer.style.scss";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
                {" "}
                ©{new Date().getFullYear()} | Designed and Developed By Nazim Uddin. | All rights reserved.{" "}
             
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

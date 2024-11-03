import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5 p-5">
        <div className="row mt-5">
          <div className="col">
            <a href="/" class="logo-container">
              <img
                src="media/images/logob.png"
                alt="Logo"
                class="navlogo p-2"
              />
              <h3 class="logo-text">SoulMitra</h3>
            </a>
            <p>
              &copy; 2024 MindClustor Pvt Ltd.
              <br />
              All rights reserved.{" "}
            </p>
          </div>
          <div className="col">
            <p className="para-footer">Company</p>
            <a href="" className="footer-links">
              About
            </a>
            <br />
            <a href="" className="footer-links">
              Products
            </a>
            <br />
            <a href="" className="footer-links">
              Pricing
            </a>
            <br />
            <a href="" className="footer-links">
              Referral programme
            </a>
          </div>
          <div className="col">
            <p className="para-footer">Support</p>
            <a href="" className="footer-links">
              Contact us
            </a>
            <br />
            <a href="" className="footer-links">
              Support portal
            </a>
            <br />
            <a href="" className="footer-links">
              How to file a complaint?
            </a>
            <br />
            <a href="" className="footer-links">
              Status of your complaints
            </a>
            <br />
          </div>
          <div className="col">
            <p className="para-footer">Account</p>
            <a href="" className="footer-links">
              Personal Account
            </a>
            <br />
            <a href="" className="footer-links">
              Private Account
            </a>
            <br />
            <a href="" className="footer-links">
              Private Account
            </a>
            <br />
            <a href="" className="footer-links">
              Private Account
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

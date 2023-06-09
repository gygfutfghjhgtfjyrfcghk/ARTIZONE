import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="top">
          <div className="item">
            <h2>Categories</h2>
            <span>electrician </span>
            <span> plumber </span>
            <span> painter </span>
            <span> macon </span>
            <span> carpenter</span>
            
          </div>
          <div className="item">
            <h2>About</h2>
            <span>Press & News</span>

            <span>Partnerships</span>

            <span>Privacy Policy</span>

            <span>Terms of Service</span>

            
          </div>
          <div className="item">
            <h2>Support</h2>
            <span>Help & Support</span>
            <span>Trust & Safety</span>
            <span>Selling on ARTIZONE</span>
            <span>Buying on ARTIZONE</span>
          </div>
          <div className="item">
            <h2>Community</h2>
            <span>Customer Success Stories</span>
  
            <span>Events</span>
            
            <span>Affiliates</span>
            
            <span>Invite a Friend</span>
            
            
          </div>
          
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <h2>ARTIZONE</h2>
            <span>© ARTIZONE International Ltd. 2023</span>
          </div>
          <div className="right">
            <div className="social">
              <img src="/img/twitter.png" alt="" />
              <img src="/img/facebook.png" alt="" />
              <img src="/img/linkedin.png" alt="" />
              <img src="/img/pinterest.png" alt="" />
              <img src="/img/instagram.png" alt="" />
            </div>
            
            <div className="link">
              <img src="/img/coin.png" alt="" />
              <span>USD</span>
            </div>
            <img src="/img/accessibility.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

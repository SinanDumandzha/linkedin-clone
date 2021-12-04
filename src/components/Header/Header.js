import React from "react";
import "./Header.css";
import Avatar from "../Avatar/Avatar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faHome, faUserFriends, faBriefcase, faCommentDots, faBell, faCaretDown, faGripHorizontal } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <a href="linkedin.com/feed/">
          <FontAwesomeIcon icon={faLinkedin} color="#0077b5" size="3x" />
        </a>
        <div className="header__search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search" style={{ marginLeft: "2px", size: "100" }} />
        </div>
      </div>

      <div className="header__right">
        <div className="header__navItem">
          <FontAwesomeIcon icon={faHome} size="lg" />
          <h4 className="header__navTitle">Home</h4>
        </div>
        <div className="header__navItem">
          <FontAwesomeIcon icon={faUserFriends} size="lg" />
          <h4 className="header__navTitle">My Network</h4>
        </div>
        <div className="header__navItem">
          <FontAwesomeIcon icon={faBriefcase} size="lg" />
          <h4 className="header__navTitle">Jobs</h4>
        </div>
        <div className="header__navItem">
          <FontAwesomeIcon icon={faCommentDots} size="lg" />
          <h4 className="header__navTitle">Messaging</h4>
        </div>
        <div className="header__navItem">
          <FontAwesomeIcon icon={faBell} size="lg" />
          <h4 className="header__navTitle">Notifications</h4>
        </div>
        <div className="header__navItem" style={{ paddingRight: "30px", borderRight: "0.1px solid rgb(211, 211, 211)" }}>
          <Avatar
            img="https://media-exp1.licdn.com/dms/image/C4D03AQGOb8opJ8UOSw/profile-displayphoto-shrink_100_100/0/1554989073975?e=1643846400&v=beta&t=qeey6KJPaRuiApmcQ2WWgCLkkozCeuuLe0U8maiKwt0"
            alt="profile"
            height="25"
          />
          <div className="header__nameArrow">
            <h4 className="header__navTitle" style={{ margin: "0px auto" }}>
              Me
            </h4>
            <FontAwesomeIcon icon={faCaretDown} size="lg" style={{ marginLeft: "2px", marginTop: "auto" }} />
          </div>
        </div>
        <div className="header__navItem" style={{ marginLeft: "30px" }}>
          <FontAwesomeIcon icon={faGripHorizontal} size="lg" />
          <div className="header__nameArrow">
            <h4 className="header__navTitle">Work</h4>
            <FontAwesomeIcon icon={faCaretDown} size="lg" style={{ marginLeft: "2px", marginTop: "2px" }} />
          </div>
        </div>
        <div className="header__navItem" style={{ marginLeft: "30px", maxWidth: "125px" }}>
          <a
            className="header__link"
            href="https://www.linkedin.com/premium/products/?upsellOrderOrigin=premium_nav_upsell_text&destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F%3FshowPremiumWelcomeBanner%3Dtrue"
          >
            <h4 className="header__navTitle" style={{ color: "#915907", fontSize: "0.9rem", fontWeight: "400", textAlign: "center" }}>
              Try Premium for free
            </h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

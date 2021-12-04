import React from "react";
import Avatar from "../Avatar/Avatar";
import "./Sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faSquare, faUsers, faHashtag, faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__profile">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D16AQGCqqdjylH34w/profile-displaybackgroundimage-shrink_350_1400/0/1611300607311?e=1643846400&v=beta&t=VXQCjT36ZPmxJrAhyvOBdIM5ztAoDdB125c4VWhpLc8"
            alt=""
          />
          <Avatar
            img="https://media-exp1.licdn.com/dms/image/C4D03AQGOb8opJ8UOSw/profile-displayphoto-shrink_100_100/0/1554989073975?e=1643846400&v=beta&t=qeey6KJPaRuiApmcQ2WWgCLkkozCeuuLe0U8maiKwt0"
            alt="profile"
            height="80"
            width="80"
          />
          <div className="sidebar__title">
            <a href="linkedin.com/sinan-dumandzha/">
              <h3 style={{ fontWeight: "500", marginBottom: "5px" }}>Sinan Dumandzha</h3>
            </a>
            <p style={{ color: "rgb(128, 128, 128)", marginTop: "0px" }}>React Developer</p>
          </div>
        </div>
        <div className="sidebar__viewStats">
          <div className="sidebar__viewStat">
            <p>Who viewed your profile</p>
            <p className="sidebar__viewStatNum">123</p>
          </div>
          <div className="sidebar__viewStat">
            <p>Views of your post</p>
            <p className="sidebar__viewStatNum">654</p>
          </div>
        </div>
        <div className="sidebar__premium">
          <p>Access exclusive tools & insights</p>
          <div className="sidebar__insights">
            <a href="https://www.linkedin.com/premium/products/?upsellOrderOrigin=premium_homepage_identity_upsell&destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F%3FshowPremiumWelcomeBanner%3Dtrue&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B0hFIxY58QbCrjbaLLrq7yQ%3D%3D">
              <FontAwesomeIcon icon={faSquare} color="orange" size="md" />
              <h5>Try Premium for free</h5>
            </a>
          </div>
        </div>
        <div className="sidebar__myItems">
          <a href="linkedin.com/my-items/">
            <FontAwesomeIcon icon={faBookmark} color="rgb(128, 128, 128)" size="md" />
            <h5>My items</h5>
          </a>
        </div>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__recent">
          <div className="sidebarItem">
            <FontAwesomeIcon icon={faUsers} color="rgb(128, 128, 128)" size="md" />
            <p>JavaScript</p>
          </div>
          <div className="sidebarItem">
            <FontAwesomeIcon icon={faUsers} color="rgb(128, 128, 128)" size="md" />
            <p>HTML5 / CSS3 / Javas...</p>
          </div>
          <div className="sidebarItem">
            <FontAwesomeIcon icon={faHashtag} color="rgb(128, 128, 128)" size="md" />
            <p>frontenddeveloper</p>
          </div>
          <div className="sidebarItem">
            <FontAwesomeIcon icon={faHashtag} color="rgb(128, 128, 128)" size="md" />
            <p>React Developers - R...</p>
          </div>
          <div className="sidebarItem">
            <FontAwesomeIcon icon={faHashtag} color="rgb(128, 128, 128)" size="md" />
            <p>Wordpress</p>
          </div>
        </div>
        <div className="sidebar__groups">
          <a href="linkedin.com/groups">
            <h5>Groups</h5>
          </a>
          <div className="sidebarItem">
            <FontAwesomeIcon icon={faUsers} color="rgb(128, 128, 128)" size="md" />
            <p>JavaScript</p>
          </div>
          <div className="sidebarItem">
            <FontAwesomeIcon icon={faUsers} color="rgb(128, 128, 128)" size="md" />
            <p>HTML5 / CSS3 / Javas...</p>
          </div>
          <div className="sidebarItem">
            <FontAwesomeIcon icon={faHashtag} color="rgb(128, 128, 128)" size="md" />
            <p>frontenddeveloper</p>
          </div>
          <div className="showMore">
            <p>Show More</p>
            <FontAwesomeIcon icon={faChevronDown} color="rgb(128, 128, 128)" size="md" />
          </div>
        </div>
        <div className="sidebar__events">
          <h5>Events</h5>
          <FontAwesomeIcon icon={faPlus} color="rgb(128, 128, 128)" size="md" />
        </div>
        <div className="sidebar__hashtags">
          <a href="https://www.linkedin.com/feed/following?filterType=channel&focused=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B0hFIxY58QbCrjbaLLrq7yQ%3D%3D">
            <h5>Followed Hashtags</h5>
          </a>
          <div className="sidebarItem">
            <FontAwesomeIcon icon={faHashtag} color="rgb(128, 128, 128)" size="md" />
            <p>frontenddeveloper</p>
          </div>
          <div className="sidebarItem">
            <FontAwesomeIcon icon={faHashtag} color="rgb(128, 128, 128)" size="md" />
            <p>react</p>
          </div>
          <div className="sidebarItem">
            <FontAwesomeIcon icon={faHashtag} color="rgb(128, 128, 128)" size="md" />
            <p>javascript</p>
          </div>
        </div>
        <div className="discover">
          <a href="https://www.linkedin.com/mynetwork/discover-hub/">
            <p>Discover more</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

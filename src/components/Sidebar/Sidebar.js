import React from "react";
import Avatar from "../Avatar/Avatar";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faSquare, faUsers, faHashtag, faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser);

  const sidebarItem = (icon, title) => (
    <div className="sidebarItem">
      <FontAwesomeIcon icon={icon} color="rgb(128, 128, 128)" size="1x" />
      <p>{title}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <div className="sidebar__profile">
          <img
            src="https://media-exp1.licdn.com/dms/image/C4D16AQGCqqdjylH34w/profile-displaybackgroundimage-shrink_350_1400/0/1611300607311?e=1643846400&v=beta&t=VXQCjT36ZPmxJrAhyvOBdIM5ztAoDdB125c4VWhpLc8"
            alt=""
          />
          <Avatar img={user.photoURL} alt="profile" height="80" width="80" />
          <div className="sidebar__title">
            <a href="linkedin.com/sinan-dumandzha/">
              <h3 style={{ fontWeight: "500", marginBottom: "5px" }}>{user.displayName}</h3>
            </a>
            <p style={{ color: "rgb(128, 128, 128)", marginTop: "0px", fontSize: "0.9rem" }}>{user.email}</p>
          </div>
        </div>
        <div className="sidebar__viewStats">
          <div className="sidebar__viewStat">
            <a href="https://www.linkedin.com/me/profile-views/">
              <p>Who viewed your profile</p>
              <p className="sidebar__viewStatNum">123</p>
            </a>
          </div>
          <div className="sidebar__viewStat">
            <a href="https://www.linkedin.com/">
              <p>Views of your post</p>
              <p className="sidebar__viewStatNum">654</p>
            </a>
          </div>
        </div>
        <div className="sidebar__premium">
          <div className="sidebar__insights">
            <a href="https://www.linkedin.com/premium/products/?upsellOrderOrigin=premium_homepage_identity_upsell&destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F%3FshowPremiumWelcomeBanner%3Dtrue&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B0hFIxY58QbCrjbaLLrq7yQ%3D%3D">
              <p>Access exclusive tools & insights</p>
              <span style={{ display: "flex", alignItems: "center", marginLeft: "10px" }}>
                <FontAwesomeIcon icon={faSquare} color="orange" size="1x" />
                <span style={{ marginLeft: "5px", fontSize: "small", fontWeight: "500" }}>Try Premium for free</span>
              </span>
            </a>
          </div>
        </div>
        <div className="sidebar__myItems">
          <a href="linkedin.com/my-items/">
            <FontAwesomeIcon icon={faBookmark} color="rgb(128, 128, 128)" size="1x" />
            <p>My items</p>
          </a>
        </div>
      </div>
      <div className="sidebar__bottom">
        <div className="sidebar__recent">
          <p>Recent</p>
          <a href="linkedin.com/groups/">{sidebarItem(faUsers, "JavaScript")}</a>
          <a href="linkedin.com/groups/">{sidebarItem(faUsers, "HTML5 / CSS3 / JavaScript")}</a>
          <a href="linkedin.com/hashtag/">{sidebarItem(faHashtag, "frontenddeveloper")}</a>
          <a href="linkedin.com/groups/">{sidebarItem(faUsers, "React Developers")}</a>
          <a href="linkedin.com/groups/">{sidebarItem(faUsers, "WordPress")}</a>
        </div>
        <div className="sidebar__groups">
          <a href="linkedin.com/groups">
            <p>Groups</p>
          </a>
          <a href="linkedin.com/groups">{sidebarItem(faUsers, "JavaScript")}</a>
          <a href="linkedin.com/groups">{sidebarItem(faUsers, "HTML5 / CSS3 / JavaScript")}</a>
          <a href="linkedin.com/hashtag">{sidebarItem(faHashtag, "frontenddeveloper")}</a>
          <div className="showMore">
            <a href="linkedin.com">
              <p>Show More</p>
              <FontAwesomeIcon icon={faChevronDown} color="rgb(128, 128, 128)" size="1x" />
            </a>
          </div>
        </div>
        <div className="sidebar__events">
          <a href="https://www.linkedin.com/mynetwork/network-manager/events">
            <p>Events</p>
          </a>
          <a href="linkedin.com/">
            <FontAwesomeIcon icon={faPlus} color="rgb(128, 128, 128)" size="1x" />
          </a>
        </div>
        <div className="sidebar__hashtags">
          <a href="https://www.linkedin.com/feed/following?filterType=channel&focused=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B0hFIxY58QbCrjbaLLrq7yQ%3D%3D">
            <p>Followed Hashtags</p>
          </a>
          <a href="linkedin.com/hashtag">{sidebarItem(faHashtag, "javascript")}</a>
          <a href="linkedin.com/hashtag">{sidebarItem(faHashtag, "react")}</a>
          <a href="linkedin.com/hashtag">{sidebarItem(faHashtag, "frontenddeveloper")}</a>
          <div className="showMore">
            <a href="linkedin.com/">
              <p>Show More</p>
              <FontAwesomeIcon icon={faChevronDown} color="rgb(128, 128, 128)" size="1x" />
            </a>
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

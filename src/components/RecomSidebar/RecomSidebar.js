import React from "react";
import "./RecomSidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Recom from "../Recom/Recom";

const RecomSidebar = () => {
  return (
    <div className="recomSidebar">
      <div className="recomSidebar__top">
        <div className="recomSidebar__header">
          <h2>Add to your feed</h2>
          <FontAwesomeIcon icon={faInfoCircle} size="lg" />
        </div>
        <div className="recomSidebar__recom">
          <Recom
            img="https://media-exp1.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=1646870400&v=beta&t=y67MNw_aEuS8zL_R0AFyrS7ZZeg17t3C_lrZgjL2b7Y"
            alt="square"
            height="40"
            width="40"
            title="Square"
            desc="Company • Information Technology and Services"
            href="https://www.linkedin.com/company/joinsquare/"
          />
          <Recom
            img="https://media-exp1.licdn.com/dms/image/C560BAQGXZv4H6QwUeA/company-logo_200_200/0/1625095446434?e=1646870400&v=beta&t=KNa6UO_D8XyM4gW4rMA6kwGAdZ0q5FFs5_S-hCf0KnM"
            alt="the walt disney company"
            height="40"
            width="40"
            title="The Walt Disney Company"
            desc="Company • Entertainment"
            href="https://www.linkedin.com/company/the-walt-disney-company/"
          />
          <Recom
            img="https://media-exp1.licdn.com/dms/image/C4E0BAQFzFWZj98mWYQ/company-logo_200_200/0/1617880149910?e=1646870400&v=beta&t=Oq-Ir6orAlKq-P_BMFxqGn5uGtF7YcfKf3kZHysBC68"
            alt="forbes bulgaria"
            height="40"
            width="40"
            title="Forbes Bulgaria"
            desc="Company • Publishing"
            href="https://www.linkedin.com/company/forbesbulgaria/"
          />
        </div>
        <div className="recomSidebar__recomLink">
          <a href="https://www.linkedin.com/mynetwork/discover-hub/">View all recommendations &#10132;</a>
        </div>
      </div>
      <div className="recomSidebar__bottom">
        <a href="linkedin.com/jobs/">
          <img src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="linkedin" />
        </a>
      </div>
      <div className="recomSidebar__links">
        <ul className="recomsSideBar__linkList">
          <li>
            <a href="https://about.linkedin.com/">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/accessibility">
              <span>Accessibility</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com//help/linkedin?trk=footer_d_flagship3_feed&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Btv5r7gwcRqSIuhiU3hBC7A%3D%3D">
              <span>Help Center</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/static?key=privacy_policy&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Btv5r7gwcRqSIuhiU3hBC7A%3D%3D">
              <span>Privacy & Terms</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/help/linkedin/answer/62931?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Btv5r7gwcRqSIuhiU3hBC7A%3D%3D">
              <span>Ad Choices</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/ad/start?trk=n_nav_ads_rr&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Btv5r7gwcRqSIuhiU3hBC7A%3D%3D">
              <span>Advertesing</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/ad/start?trk=n_nav_ads_rr_b&src=li-nav&lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Btv5r7gwcRqSIuhiU3hBC7A%3D%3D&licu=urn%3Ali%3Acontrol%3Ad_flagship3_feed-footer_business_advertise">
              <span>Business Services</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <span>Get the LinkedIn app</span>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/">
              <span>More</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="recomSidebar__companyInfo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 14" data-supported-dps="56x14" fill="#0077b5" width="56" height="14" focusable="false">
          <g>
            <path d="M22.1 8.2l3.09 3.8h-2.44L20 8.51V12h-2V2h2v5.88L22.54 5h2.55zm-8-3.4A2.71 2.71 0 0011.89 6V5H10v7h2V8.73a1.74 1.74 0 011.66-1.93C14.82 6.8 15 7.94 15 8.73V12h2V8.29c0-2.2-.73-3.49-2.86-3.49zM32 8.66a4.22 4.22 0 010 .44h-5.25v.07a1.79 1.79 0 001.83 1.43 2.51 2.51 0 001.84-.69l1.33 1a4.31 4.31 0 01-3.25 1.29 3.49 3.49 0 01-3.7-3.75 3.58 3.58 0 013.76-3.65C30.44 4.8 32 6.13 32 8.66zm-1.86-.86a1.46 1.46 0 00-1.59-1.4 1.64 1.64 0 00-1.8 1.4zM2 2H0v10h6v-2H2zm36 0h2v10h-1.89v-.7a2.44 2.44 0 01-2 .9 3.41 3.41 0 01-3.31-3.7 3.36 3.36 0 013.3-3.7 2.62 2.62 0 011.9.7zm.15 6.5a1.63 1.63 0 00-1.62-1.85A1.76 1.76 0 0034.9 8.5a1.76 1.76 0 001.63 1.85 1.63 1.63 0 001.62-1.85zM8 1.8A1.27 1.27 0 006.75 3a1.25 1.25 0 002.5 0A1.27 1.27 0 008 1.8zM7 12h2V5H7zM56 1v12a1 1 0 01-1 1H43a1 1 0 01-1-1V1a1 1 0 011-1h12a1 1 0 011 1zM46 5h-2v7h2zm.25-2a1.25 1.25 0 00-2.5 0 1.25 1.25 0 002.5 0zM54 8.29c0-2.2-.73-3.49-2.86-3.49A2.71 2.71 0 0048.89 6V5H47v7h2V8.73a1.74 1.74 0 011.66-1.93C51.82 6.8 52 7.94 52 8.73V12h2z"></path>
          </g>
        </svg>
        <h4>LinkedIn Corporation © 2021</h4>
      </div>
    </div>
  );
};

export default RecomSidebar;

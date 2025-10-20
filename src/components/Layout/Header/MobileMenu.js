"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileLogo from "../../../assets/images/plat2.png";

const MobileMenu = ({ isSidebar, handleMobileMenu, handleSidebar }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const [parentMenu, setParentMenu] = useState("");
  const [activeMenu, setActiveMenu] = useState("");

  // Toggle dropdown
  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({ status: false, key: "", subMenuKey: "" });
    } else {
      setIsActive({ status: true, key, subMenuKey });
    }
  };

  // ✅ Close menu when any link is clicked
  const handleMenuClose = (path = "") => {
    setActiveMenu(path);
    handleMobileMenu(); // closes mobile menu
  };

  return (
    <>
      <div className="mobile-nav__wrapper">
        <div
          className="mobile-nav__overlay mobile-nav__toggler"
          onClick={handleMobileMenu}
        />
        <div className="mobile-nav__content">
          <span
            className="mobile-nav__close mobile-nav__toggler"
            onClick={handleMobileMenu}
          >
            <i className="fa fa-times" />
          </span>

          {/* Logo */}
          <div className="logo-box">
            <Link to="/" aria-label="logo image" onClick={() => handleMenuClose("/")}>
              <img src={MobileLogo} alt="Logo" />
            </Link>
          </div>

          {/* Navigation */}
          <div className="mobile-nav__container">
            <ul className="main-menu__list">
              <li>
                <Link
                  to="/"
                  className={activeMenu === "/" ? "active-menu" : ""}
                  onClick={() => handleMenuClose("/")}
                >
                  Home
                </Link>
              </li>

              {/* Events Dropdown */}
              <li
                className={
                  parentMenu === "Events"
                    ? "dropdown current-menu-item"
                    : "dropdown"
                }
              >
                <Link
                  to="/event"
                  onClick={() => {
                    setParentMenu("Events");
                    handleMenuClose("/event");
                  }}
                >
                  Events
                </Link>

                <ul className="sub-menu">
                  <li
                    className={
                      parentMenu === "Championships"
                        ? "dropdown current-menu-item"
                        : "dropdown"
                    }
                  >
                    <Link
                      to="/event"
                      className={`flex items-center justify-between ${
                        activeMenu === "/event" ? "active-menu" : ""
                      }`}
                      onClick={() => handleMenuClose("/event")}
                    >
                      Championships <span className="ml-2">+</span>
                    </Link>

                    <ul className="sub-menu">
                      {[
                        { path: "/event-details/year-1", name: "State Championship" },
                        { path: "/event-details/year-3", name: "Gym Point Championship" },
                        { path: "/event-details/year-4", name: "Origin Championship" },
                        { path: "/event-details/year-5", name: "Ozzie Championship" },
                        { path: "/event-details/year-6", name: "Potens Championship" },
                        { path: "/event-details/year-7", name: "Second State Championship" },
                        { path: "/event-details/year-8", name: "Telangana First State Championship" },
                        { path: "/event-details/year-9", name: "FSG Independence Day" },
                        { path: "/event-details/year-10", name: "AF Championship3" },
                      ].map((item) => (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            className={activeMenu === item.path ? "active-menu" : ""}
                            onClick={() => handleMenuClose(item.path)}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </li>

              {/* Championships Dropdown */}
              <li
                className={isActive.key === 3 ? "dropdown current" : "dropdown"}
              >
                <Link to="#" onClick={() => handleToggle(3)}>
                  Championships
                </Link>
                <ul
                  style={{ display: `${isActive.key === 3 ? "block" : "none"}` }}
                >
                  {[
                    { path: "/services", name: "District Championships" },
                    { path: "/event-prodigy", name: "State Championships" },
                    { path: "/stellar-events-co", name: "Open Meets" },
                    { path: "/elite-event-management", name: "Benchpress Events" },
                    { path: "/infinite-occasions", name: "Deadlift Events" },
                    { path: "/dream-event-planners", name: "Powerlifting Events" },
                  ].map((item) => (
                    <li key={item.path}>
                      <Link
                        to={item.path}
                        onClick={() => handleMenuClose(item.path)}
                        className={activeMenu === item.path ? "active-menu" : ""}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div
                  className={
                    isActive.key === 3 ? "dropdown-btn open" : "dropdown-btn"
                  }
                  onClick={() => handleToggle(3)}
                >
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Other Menu Items */}
              {[
                { path: "/collaboration", name: "Collaboration" },
                { path: "/inspire", name: "Inspire" },
                { path: "/gallery", name: "Gallery" },
                { path: "/results", name: "Results" },
                { path: "/referees", name: "Referees" },
                { path: "/contact", name: "Contact" },
              ].map((item) => (
                <li
                  key={item.path}
                  className={
                    activeMenu === item.path ? "current-menu-item" : ""
                  }
                >
                  <Link
                    to={item.path}
                    className={activeMenu === item.path ? "active-menu" : ""}
                    onClick={() => handleMenuClose(item.path)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <ul className="mobile-nav__contact list-unstyled">
            <li>
              <i className="fa fa-envelope" />
              <a href="mailto:info@wpctelangana.in">info@wpctelangana.in</a>
            </li>
            <li>
              <i className="fa fa-phone-alt" />
              <a href="tel:+91XXXXXXXXXXX">+91 7330778111</a>
            </li>
          </ul>

          {/* Social Links */}
          <div className="mobile-nav__top">
            <div className="mobile-nav__social">
              <Link to="#" className="fab fa-twitter" />
              <Link to="#" className="fab fa-facebook-square" />
              <Link to="#" className="fab fa-pinterest-p" />
              <Link to="#" className="fab fa-instagram" />
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar Overlay */}
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
};

export default MobileMenu;


import React, { useEffect, useState, Fragment } from "react";
import { MENUITEMS } from "../../constant/menu";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const SideBar = () => {
  const { t } = useTranslation();
  const closeNav = () => {
    var closemyslide = document.getElementById("mySidenav");
    if (closemyslide) closemyslide.classList.remove("open-side");
  };

  const handleSubmenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) {
      return;
    }

    if (event.target.nextElementSibling.classList.contains("opensub1"))
      event.target.nextElementSibling.classList.remove("opensub1");
    else {
      document.querySelectorAll(".opensub1").forEach(function (value) {
        value.classList.remove("opensub1");
      });
      event.target.nextElementSibling.classList.add("opensub1");
    }
  };

  const handleSubTwoMenu = (event) => {
    if (event.target.classList.contains("sub-arrow")) return;

    if (event.target.nextElementSibling.classList.contains("opensub2"))
      event.target.nextElementSibling.classList.remove("opensub2");
    else {
      document.querySelectorAll(".opensub2").forEach(function (value) {
        value.classList.remove("opensub2");
      });
      event.target.nextElementSibling.classList.add("opensub2");
    }
  };

  return (
    <Fragment>
      <div id="mySidenav" className="sidenav">
        <a href={null} className="sidebar-overlay" onClick={closeNav}></a>
        <nav>
          <a href={null} onClick={closeNav}>
            <div className="sidebar-back text-left">
              <i className="fa fa-angle-left pr-2" aria-hidden="true"></i> Back
            </div>
          </a>

          {MENUITEMS && MENUITEMS.map((menuItem, i) => {
            return (
              <ul id="sub-menu" className="sidebar-menu">
                <li key={i}>
                  {menuItem.type === "link" ? (
                    <Link href={`${menuItem.path}`}>
                      <a className="nav-link" >
                        {" "}
                        {t(menuItem.title)}
                        {menuItem.arrow == false ? '' : <span className="sub-arrow"></span>}
                      </a>
                    </Link>
                  ) : (
                    <a href="#" onClick={(e) => handleSubmenu(e)}>
                      {t(menuItem.title)}
                      <span className="sub-arrow"></span>
                    </a>
                  )}

                  {(menuItem.children && !menuItem.megaMenu) && (
                    <ul>
                      {menuItem.children && menuItem.children.map((childrenItem, index) => {
                        return (
                          <li key={index}>
                            {childrenItem.type === "sub" ? (
                              <a href="#" onClick={(e) => handleSubTwoMenu(e)}>
                                {t(childrenItem.title)}
                                <span className="sub-arrow"></span>
                              </a>
                            ) : (
                              ""
                            )}

                            {childrenItem.type === "link" ? (
                              <Link href={`${childrenItem.path}`}>
                                <a>
                                  {t(childrenItem.title)}
                                </a>
                              </Link>
                            ) : (
                              ""
                            )}
                            {childrenItem.children ? (
                              <ul>
                                {childrenItem.children.map((childrenSubItem, key) => (
                                  <li key={key}>
                                    {childrenSubItem.type === "link" ? (
                                      <Link href={childrenSubItem.path}>
                                        {t(childrenSubItem.title)}
                                      </Link>
                                    ) : (
                                      ""
                                    )}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              ""
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              </ul>
            );
          })}
        </nav>
      </div>
    </Fragment>
  );
};

export default SideBar;

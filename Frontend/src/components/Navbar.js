import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as HiIcons from 'react-icons/hi';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
import Search from './Search';
// import DonateBtn from './DonateBnt';
import Settings from './Settings';

import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{ color: '#ffffff' }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <HiIcons.HiOutlineMenuAlt1 onClick={showSidebar} />
          </Link>
          <Search />
          {/* <DonateBtn /> */}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <HiIcons.HiOutlineX />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon} <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <Settings />
          <div className="footer">
            <div className="header__social-media">
              {/* <div>
                <a
                  href="https://www.facebook.com/phattaraphon.oat/"
                  target="_blank"
                >
                  <FiIcons.FiFacebook size="1.2em" />
                </a>
              </div>
              <div>
                <a href="https://www.instagram.com/khawoat6/" target="_blank">
                  <FaIcons.FaInstagram size="1.3em" />
                </a>
              </div> */}
              <div>
                <a
                  href="https://github.com/covid19-deepverse/covid19-deepverse.io"
                  target="_blank"
                >
                  <AiIcons.AiFillGithub size="1.3em" />
                  <strong>Open Source</strong>
                </a>
              </div>
            </div>
            <h1 className="footer__organization">
              @2020 deepverse.io, All Right Reserved. Terms | Privacy | Cookie
              Policy
            </h1>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;

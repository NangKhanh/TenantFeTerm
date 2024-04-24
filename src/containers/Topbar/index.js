import React, { useEffect, useState } from "react";
import { Avatar, Button, Layout, Popover } from "antd";
import { Link } from "react-router-dom";
import { GlobalOutlined } from '@ant-design/icons'
// import CustomScrollbars from "util/CustomScrollbars";
// import languageData from "./languageData";
import { toggleCollapsedSideNav } from "../../appRedux/actions";
import SearchBox from "../../components/SearchBox";
import UserInfo from "../../components/UserInfo";
import AppNotification from "../../components/AppNotification";
import Auxiliary from "util/Auxiliary";

import { NAV_STYLE_DRAWER, NAV_STYLE_FIXED, NAV_STYLE_MINI_SIDEBAR, TAB_SIZE } from "../../constants/ThemeSetting";
import { useDispatch, useSelector } from "react-redux";
import './Style/index.css'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
const { Header } = Layout;

const Topbar = () => {

  const history = useHistory();
  const { navStyle } = useSelector(({ settings }) => settings);
  const navCollapsed = useSelector(({ common }) => common.navCollapsed);
  const width = useSelector(({ common }) => common.width);
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const delay = 1000
  const updateSearchChatUser = (evt) => {
    setSearchText(evt.target.value);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      if (!searchText) {
        history.push('?');
      }
      else {
        history.push(`?search=${searchText}`)
      }
    }, delay)
    return () => {
      clearTimeout(id)
    }
  }, [searchText, delay , history])

  return (
    <Header >
      <div className="gx-flex-row">
        {navStyle === NAV_STYLE_DRAWER || ((navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width < TAB_SIZE) ?
          <div className="gx-linebar gx-mr-3 gx-flex-row">
            <i className="gx-icon-btn icon icon-menu"
              onClick={() => {
                dispatch(toggleCollapsedSideNav(!navCollapsed));
              }}
            />
            <Link to="/" className=" gx-pointer">
              <img className="logo" alt="" src={("/assets/images/mainLogo.png")} />
            </Link>
          </div> : null}
        {(navStyle === NAV_STYLE_FIXED || navStyle === NAV_STYLE_MINI_SIDEBAR) && width > TAB_SIZE ?
          <Link to="/main/dashboard/crypto" className=" gx-pointer brand gx-flex-row gx-align-items-center">
            <img className="logo" alt="" src={("/assets/images/mainLogo.png")} /><span className="logoname">LOGO</span>
          </Link> : null
        }
        <SearchBox styleName="search_box gx-d-none gx-d-lg-block gx-lt-icon-search-bar-lg "
          placeholder="Search..."
          onChange={updateSearchChatUser}
          value={searchText}
        />
      </div>


      <div>
        <ul className="gx-header-notifications gx-ml-auto">
          <li className="gx-notify gx-notify-search gx-d-inline-block gx-d-lg-none">
            <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={
              <SearchBox styleName=" gx-popover-search-bar"
                placeholder="Search..."
                onChange={updateSearchChatUser}
                value={searchText} />
            } trigger="click">
              <span className="gx-pointer gx-d-block"><i className="icon icon-search-new" /></span>
            </Popover>
          </li>
          {width < TAB_SIZE ? null :
            <Auxiliary>
              <Auxiliary>
                <li className="gx-user-nav userInfor"><UserInfo /></li>
              </Auxiliary>
              <li className="mr-none gx-d-flex">
                <span className="gx-pointer gx-flex-row gx-align-items-center gx-mr-2">
                  <GlobalOutlined />
                </span>
                <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={<AppNotification />}
                  trigger="click">
                  <span className="gx-pointer gx-d-block"><i className="icon icon-notification" /></span>
                </Popover>
              </li>
              <li className="gx-mr-2">
                <Link to="/signin">
                  <Button className="gx-mb-0 gx-mr-1 btn_sign_in">Sign In</Button>

                </Link>
                <Link to="/signup">
                  <Button className="gx-mb-0 btn_sign_up btn_sign_up">Sign Up</Button>
                </Link>
              </li>
            </Auxiliary>
          }
          {width >= TAB_SIZE ? null :
            <Auxiliary>
              <li className="gx-msg">
                <span className="gx-pointer gx-flex-row gx-align-items-center">
                  <GlobalOutlined />
                </span>
              </li>
              <li className="gx-notify">
                <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={<AppNotification />}
                  trigger="click">
                  <span className="gx-pointer gx-d-block"><i className="icon icon-notification" /></span>
                </Popover>
              </li>
            </Auxiliary>
          }

          {/* <li className="gx-language">
          <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={languageMenu()}
            trigger="click">
            <span className="gx-pointer gx-flex-row gx-align-items-center">
              <i className={`flag flag-24 flag-${locale.icon}`} />
              <span className="gx-pl-2 gx-language-name">{locale.name}</span>
              <i className="icon icon-chevron-down gx-pl-2" />
            </span>
          </Popover>
        </li> */}
          <Auxiliary>
            <li className="gx-user-nav"><Avatar src={("/assets/images/userPlaceholder.png")}
              className="gx-avatar gx-pointer" alt="" /></li>
          </Auxiliary>
        </ul>
      </div>

    </Header>
  );
};

export default Topbar;

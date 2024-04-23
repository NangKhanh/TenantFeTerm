import React from "react";
import { useDispatch } from "react-redux";
import { Popover } from "antd";
import { userSignOut } from "appRedux/actions/Auth";

const UserInfo = () => {

  const dispatch = useDispatch();

  const userMenuOptions = (
    <ul className="gx-user-popover">
      <li>My Account</li>
      <li>Connections</li>
      <li onClick={() => dispatch(userSignOut())}>Logout
      </li>
    </ul>
  );

  return (
    <Popover overlayClassName="gx-popover-horizantal" placement="bottomRight" content={userMenuOptions}
      trigger="click">
      <span className="gx-pointer gx-flex-row gx-align-items-center">
        <span className="gx-pl-2 gx-language-name">Tenant Name</span>
        <i className="icon icon-chevron-down gx-pl-2" />
      </span>

    </Popover>
  )

}

export default UserInfo;

import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { AppstoreOutlined, BarChartOutlined, FileOutlined, GoldFilled, MessageOutlined, QuestionOutlined } from '@ant-design/icons'
import './sideBar.css'
import CustomScrollbars from "util/CustomScrollbars";
import IntlMessages from "../../util/IntlMessages";
import { useSelector } from "react-redux";

const SidebarContent = ({ sidebarCollapsed, setSidebarCollapsed }) => {
  const { themeType } = useSelector(({ settings }) => settings);
  const pathname = useSelector(({ common }) => common.pathname);

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  return (
    <>
      <div className="gx-sidebar-content ">

        <CustomScrollbars className="gx-layout-sider-scrollbar " theme={themeType === "lite"}>
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme={themeType === "lite"}
            mode="inline">
            <Menu.Item key="main/dashboard" className="gx-mt-3">
              <Link to="/main/dashboard"><i className="icon icon-widgets"/>
                <span> <IntlMessages id="sidebar.dashboard" /></span></Link>
            </Menu.Item>
            <Menu.Item key="main/organization">
              <Link to="/main/organization"><i className="icon icon-folder-o"/>
                <span> <IntlMessages id="Organization" /></span></Link>
            </Menu.Item>
            <Menu.Item key="main/inventory">
              <Link to="/main/inventory"><i className="icon icon-crm"/>
                <span> <IntlMessages id="Inventory" /></span></Link>
            </Menu.Item>
            <Menu.Item key="main/calculation">
              <Link to="/main/calculation"><i className="icon icon-popconfirm"/>
                <span> <IntlMessages id="Calculation" /></span></Link>
            </Menu.Item>
            <Menu.Item key="main/report">
              <Link to="/main/report"><i className="icon icon-timeline"/>
                <span> <IntlMessages id="Report " /></span></Link>
            </Menu.Item>

            <Menu.Item key="main/faq">
              <Link to="/main/faq"><i className="icon icon-rendaring-calendar"/>
                <span> <IntlMessages id="FAQ" /></span></Link>
            </Menu.Item>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

export default React.memo(SidebarContent);


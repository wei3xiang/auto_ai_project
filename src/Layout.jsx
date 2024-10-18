import { Routes, Route, Link, useLocation } from "react-router-dom";

import ProLayout from "@ant-design/pro-layout";
import logo from "./assets/logo.png";

import Home from "./home";
import User from "./user";
import BFoo from "./bFoo";

const Layout = (props) => {
  const location = useLocation(); // 获取 location 对象
  return (
    <ProLayout
      title="AI YiShow"
      navTheme="dark"
      location={location}
      menuItemRender={(menuItemProps, defaultDom) => (
        <Link to={menuItemProps.path} target={menuItemProps.target}>
          {defaultDom}
        </Link>
      )}
      menuDataRender={() => [
        { path: "/", name: "首页" },
        { path: "/user", name: "user" },
        { path: "/bFoo", name: "bFoo" },
      ]}
      logo={logo}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/bFoo" element={<BFoo />} />
      </Routes>
    </ProLayout>
  );
};
export default Layout;

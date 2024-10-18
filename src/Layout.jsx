import { Routes, Route, Link, useLocation } from "react-router-dom";

import ProLayout from "@ant-design/pro-layout";
import logo from "./assets/logo.png";

import Home from "./home";
import BFoo from './bFoo';

const Layout = (props) => {
const location = useLocation(); // 获取 location 对象
return (
<ProLayout
        title="AI Bank"
        navTheme="dark"
        location={location}
        menuItemRender={(menuItemProps, defaultDom) => (
    <Link to={menuItemProps.path} target={menuItemProps.target}>
    {defaultDom}
    </Link>
    )}
    menuDataRender={() => [
    { path: "/", name: "首页" },
        { path: "/bFoo", name: "B_FOO" },
    ]}
    logo={logo}
    >
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bFoo" element={<BFoo />} />
    </Routes>
</ProLayout>
);
};
export default Layout;

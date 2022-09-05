import { Breadcrumb, Button, Layout, Menu } from "antd";
import React, { ReactNode, useContext, useEffect } from "react";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { getSecondBreadCrumb, handleExitClick } from "./helpers";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

interface Props {
  children: ReactNode;
}

const { Header, Content, Footer } = Layout;

const MainLayout: React.FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector<string>(
    (state) => state.accessToken.accessToken
  );
  const username = useAppSelector<string>((state) => state.username.username);

  const route = useRouter();

  return (
    <Layout className={styles["layout"]}>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <span className={styles["layout__logo"]}>Link Creator App</span>
        <span className={styles["layout__user-name"]}>
          <span>{username}</span>
          <span>
            {accessToken && (
              <Button
                type="link"
                onClick={() => handleExitClick(route, dispatch)}
              >
                Exit
              </Button>
            )}
          </span>
        </span>
      </Header>
      <Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>{getSecondBreadCrumb(route)}</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 380 }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Link Creator App ©2022 Created by Takhir Kudusov
      </Footer>
    </Layout>
  );
};

export default MainLayout;

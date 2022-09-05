import { useEffect } from "react";
import Login from "../../components/login/Login";
import styles from "./index.module.scss";
import { Component } from "../../common/types/types";
import MainLayout from "../../components/layout/MainLayout";
import { useAppSelector } from "../../redux/hooks";
import { useRouter } from "next/router";
import { Page, paths } from "../../routes/constants";

const LoginPage: Component = () => {
  const route = useRouter();

  useEffect(() => {
    document.title = "Link App | Login page";
  }, []);

  return (
    <div className={styles["login-container"]}>
      <Login />
    </div>
  );
};

LoginPage.PageLayout = MainLayout;

export default LoginPage;

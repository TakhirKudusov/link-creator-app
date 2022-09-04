import { useEffect } from "react";
import { Button } from "antd";
import styles from "./index.module.scss";
import { useRouter } from "next/router";
import { Page, paths } from "../routes/constants";
import { Component } from "../common/types/types";
import MainLayout from "../components/layout/MainLayout";

const NotFound: Component = () => {
  const route = useRouter();

  useEffect(() => {
    document.title = "Link App | Page not found";
  }, []);

  return (
    <div className={styles["not-found-container"]}>
      <span className={styles["not-found-container__title"]}>
        Error 404 | Page not found
      </span>
      <div>
        <Button
          type="primary"
          className={styles["not-found-container__button"]}
          onClick={() => route.push(paths[Page.HOME])}
        >
          Go to main
        </Button>
      </div>
    </div>
  );
};

NotFound.PageLayout = MainLayout;
export default NotFound;

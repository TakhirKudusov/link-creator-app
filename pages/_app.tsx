import "../styles/globals.css";
import "antd/dist/antd.css";
import { wrapper } from "../redux";
import { ComponentWithPageLayout } from "../common/types/types";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setAccessToken } from "../redux/slicers/accessTokenSlicer";
import { setUsername } from "../redux/slicers/usernameSlicer";
import { useRouter } from "next/router";
import { Page, paths } from "../routes/constants";

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      const username = localStorage.getItem("username");
      dispatch(setAccessToken(accessToken));
      dispatch(setUsername(username));
      if (!accessToken) {
        router.push(paths[Page.LOGIN]);
      }
      if (accessToken && router.pathname.includes("/login")) {
        router.push(paths[Page.HOME]);
      }
    }
  }, []);

  return (
    <>
      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}

export default wrapper.withRedux(MyApp);

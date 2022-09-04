import "../styles/globals.css";
import "antd/dist/antd.css";
import { wrapper } from "../redux";
import { ComponentWithPageLayout } from "../common/types/types";
import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { setAccessToken } from "../redux/slicers/accessTokenSlicer";
import { setUsername } from "../redux/slicers/usernameSlicer";

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      const username = localStorage.getItem("username");
      dispatch(setAccessToken(accessToken));
      dispatch(setUsername(username));
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

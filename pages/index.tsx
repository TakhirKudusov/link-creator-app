import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { AppContext } from "../common/context/AppContext";
import { Page, paths } from "../routes/constants";

const Home: NextPage = () => {
  const { accessToken, ...rest } = useContext(AppContext);

  const router = useRouter();

  useEffect(() => {
    document.title = "Link App | Main";
    if (!accessToken) {
      router.push(paths[Page.LOGIN]);
    }
  }, []);

  return <div></div>;
};

export default Home;

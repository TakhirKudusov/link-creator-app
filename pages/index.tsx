import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Page, paths } from "../routes/constants";
import MainLayout from "../components/layout/MainLayout";
import { Component } from "../common/types/types";
import { useAppSelector } from "../redux/hooks";

const Home: Component = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = "Link App | Main";
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      router.push(paths[Page.LOGIN]);
    }
  }, []);

  return <div></div>;
};

Home.PageLayout = MainLayout;

export default Home;

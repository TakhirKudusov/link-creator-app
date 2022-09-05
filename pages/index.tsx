import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { Page, paths } from "../routes/constants";
import MainLayout from "../components/layout/MainLayout";
import { Component } from "../common/types/types";
import Home from "../components/home/Home";

const HomePage: Component = () => {
  const router = useRouter();

  useEffect(() => {
    document.title = "Link App | Main";
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
};

HomePage.PageLayout = MainLayout;

export default HomePage;
